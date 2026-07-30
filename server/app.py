from flask import Flask, request, jsonify, render_template
import joblib
import json
import numpy as np
import pandas as pd
import os

app = Flask(__name__)

# ==========================================
# ENABLE CORS (for direct calls, not via Next.js proxy)
# ==========================================

from flask_cors import CORS
CORS(app)

# ==========================================
# LOAD MODEL + METADATA
# ==========================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, ".."))

MODEL_PATH = os.path.join(ROOT_DIR, "ml", "models", "best_property_model.pkl")
META_PATH  = os.path.join(ROOT_DIR, "ml", "data", "processed", "model_metadata.json")

if not os.path.exists(MODEL_PATH):
    MODEL_PATH = os.path.join(BASE_DIR, "best_property_model.pkl")
if not os.path.exists(META_PATH):
    META_PATH = os.path.join(BASE_DIR, "model_metadata.json")

model    = None
metadata = None

def load_assets():
    global model, metadata
    if os.path.exists(MODEL_PATH) and os.path.exists(META_PATH):
        model = joblib.load(MODEL_PATH)
        with open(META_PATH) as f:
            metadata = json.load(f)
        print(f"[OK] Model loaded  : {metadata['best_model']}")
        print(f"[OK] R2 Score      : {metadata['best_r2']}")
        print(f"[OK] Features      : {len(metadata['feature_names'])}")
    else:
        print(f"[WARN] Model not found at {MODEL_PATH} or {META_PATH}. Run: python ml/training/train_model.py")

load_assets()


DATASET_PATH = os.path.join(ROOT_DIR, "ml", "data", "raw", "Bengaluru_House_Data.csv")
if not os.path.exists(DATASET_PATH):
    DATASET_PATH = os.path.join(BASE_DIR, "Bengaluru_House_Data.csv")


# ==========================================
# ROUTES
# ==========================================

@app.route("/")
def index():
    return jsonify({"status": "EstateIQ API running", "model": metadata["best_model"] if metadata else "not trained"})


@app.route("/api/model-info")
def model_info():
    if metadata is None:
        return jsonify({"error": "Model not trained yet. Run train_model.py first."}), 503
    return jsonify({
        "best_model":    metadata["best_model"],
        "best_r2":       metadata["best_r2"],
        "all_results":   metadata.get("all_results", {}),
        "locations":     sorted([c.replace("location_", "")     for c in metadata.get("location_columns", [])]),
        "area_types":    [c.replace("area_type_", "")    for c in metadata.get("area_type_columns", [])],
        "availabilities":[c.replace("availability_", "") for c in metadata.get("availability_columns", [])],
    })


@app.route("/api/sample-properties")
def sample_properties():
    if not os.path.exists(DATASET_PATH):
        return jsonify({"error": "Dataset file not found."}), 404
    
    try:
        df = pd.read_csv(DATASET_PATH)
        df_clean = df.dropna(subset=['location', 'total_sqft', 'price']).copy()
        
        sample_rows = df_clean.head(25).to_dict(orient='records')
        properties = []
        for r in sample_rows:
            try:
                price = float(r.get('price', 0))
                sqft_val = r.get('total_sqft')
                try:
                    sqft = float(sqft_val)
                except Exception:
                    parts = str(sqft_val).split('-')
                    sqft = (float(parts[0]) + float(parts[1])) / 2 if len(parts) == 2 else 1000.0
                
                price_per_sqft = (price * 100_000) / sqft if sqft > 0 else 0
                
                properties.append({
                    "location": str(r.get('location', '')).strip(),
                    "area_type": str(r.get('area_type', '')).strip(),
                    "availability": str(r.get('availability', '')).strip(),
                    "total_sqft": round(sqft, 0),
                    "society": str(r.get('society', '')).strip() if pd.notna(r.get('society')) and str(r.get('society')).strip() else "Independent",
                    "bhk": str(r.get('size', '')).strip(),
                    "bath": int(r.get('bath')) if pd.notna(r.get('bath')) else None,
                    "balcony": int(r.get('balcony')) if pd.notna(r.get('balcony')) else None,
                    "price_lakhs": round(price, 2),
                    "price_per_sqft": round(price_per_sqft, 0)
                })
            except Exception:
                continue

        return jsonify({
            "properties": properties,
            "total_dataset_records": len(df)
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/predict", methods=["POST"])
def predict():
    if model is None or metadata is None:
        return jsonify({"error": "Model not trained yet. Run train_model.py first."}), 503

    data = request.json
    if not data:
        return jsonify({"error": "No JSON body received."}), 400

    feature_names = metadata["feature_names"]

    # Start with zeros for all features
    row = {f: 0.0 for f in feature_names}

    # ── Numeric fields ──────────────────────────────────────────────
    numeric_map = {
        "total_sqft": ["total_sqft", "totalSqft"],
        "bath":       ["bath"],
        "balcony":    ["balcony"],
        "bhk":        ["bhk"],
    }
    for col, aliases in numeric_map.items():
        for alias in aliases:
            if alias in data and col in row:
                try:
                    row[col] = float(data[alias])
                except (ValueError, TypeError):
                    pass
                break

    # ── One-hot: location ───────────────────────────────────────────
    loc_val = str(data.get("location", "")).strip()
    loc_key = f"location_{loc_val}"
    if loc_key in row:
        row[loc_key] = 1.0

    # ── One-hot: area_type ──────────────────────────────────────────
    at_val = str(data.get("area_type", "")).strip()
    at_key = f"area_type_{at_val}"
    if at_key in row:
        row[at_key] = 1.0

    # ── One-hot: availability ───────────────────────────────────────
    av_val = str(data.get("availability", "")).strip()
    av_key = f"availability_{av_val}"
    if av_key in row:
        row[av_key] = 1.0

    # ── One-hot: society ────────────────────────────────────────────
    soc_val = str(data.get("society", "")).strip()
    soc_key = f"society_{soc_val}"
    if soc_key in row:
        row[soc_key] = 1.0

    # Build DataFrame in exact feature order
    df_input   = pd.DataFrame([row])[feature_names]
    prediction = float(model.predict(df_input)[0])

    sqft = float(data.get("total_sqft") or data.get("totalSqft") or 1)
    if sqft == 0:
        sqft = 1

    # price is in Lakhs; price_per_sqft in ₹
    price_per_sqft = (prediction * 100_000) / sqft

    return jsonify({
        "predicted_price_lakhs": round(prediction, 2),
        "price_per_sqft":        round(price_per_sqft, 0),
        "confidence":            round(min(metadata["best_r2"] * 100, 99), 1),
        "model_used":            metadata["best_model"],
    })


@app.route("/api/reload", methods=["POST"])
def reload_model():
    load_assets()
    if model is None:
        return jsonify({"status": "error", "message": "Model files not found."}), 404
    return jsonify({"status": "ok", "message": f"Model '{metadata['best_model']}' reloaded."})


if __name__ == "__main__":
    print("\n" + "=" * 45)
    print("  EstateIQ — Flask Backend")
    print("  http://localhost:5000")
    print("=" * 45 + "\n")
    app.run(debug=True, port=5000)
