import pandas as pd
import numpy as np
import joblib
import json
import os

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.metrics import mean_absolute_error, r2_score

print("=" * 50)
print("   EstateIQ -- ML Training Pipeline")
print("=" * 50)

# ==========================================
# STEP 1 : LOAD DATASET
# ==========================================

csv_path = "Bengaluru_House_Data.csv"

if not os.path.exists(csv_path):
    print(f"\n[ERROR] '{csv_path}' not found.")
    print("Place the CSV in:", os.path.abspath("."))
    exit(1)

df = pd.read_csv(csv_path)
print(f"\n[OK] Dataset loaded: {df.shape[0]} rows x {df.shape[1]} cols")
print("Columns:", list(df.columns))

# ==========================================
# STEP 2 : REMOVE NULL VALUES
# ==========================================

before = len(df)
df = df.dropna()
print(f"[OK] Removed nulls: {before - len(df)} rows dropped -> {len(df)} remaining")

# ==========================================
# STEP 3 : CLEAN size COLUMN (e.g. "2 BHK" -> 2)
# ==========================================

if 'size' in df.columns:
    df['bhk'] = df['size'].str.extract(r'(\d+)').astype(float)
    df = df.drop('size', axis=1)
    df = df.dropna(subset=['bhk'])
    print(f"[OK] Parsed 'size' -> 'bhk'")

# ==========================================
# STEP 4 : CLEAN total_sqft (handle ranges like "1200-1500")
# ==========================================

def parse_sqft(val):
    try:
        return float(val)
    except Exception:
        try:
            parts = str(val).split('-')
            if len(parts) == 2:
                return (float(parts[0]) + float(parts[1])) / 2
        except Exception:
            pass
        return None

if 'total_sqft' in df.columns:
    df['total_sqft'] = df['total_sqft'].apply(parse_sqft)
    df = df.dropna(subset=['total_sqft'])
    print(f"[OK] Cleaned 'total_sqft' -> {len(df)} rows remaining")

# ==========================================
# STEP 5 : ENCODE CATEGORICAL DATA
# ==========================================

df = pd.get_dummies(df)
print(f"[OK] One-hot encoded -> {df.shape[1]} features")

# ==========================================
# STEP 6 : SELECT FEATURES AND TARGET
# ==========================================

if 'price' not in df.columns:
    print("[ERROR] 'price' column not found after encoding!")
    exit(1)

y = df['price']
X = df.drop('price', axis=1)
feature_names = list(X.columns)

print(f"[OK] Features : {len(feature_names)}")
print(f"[OK] Target   : price")

# ==========================================
# STEP 7 : SPLIT DATA
# ==========================================

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"[OK] Train: {len(X_train)} | Test: {len(X_test)}")

# ==========================================
# STEP 8 : TRAIN AND EVALUATE ALL MODELS
# ==========================================

models = {
    "Linear Regression": LinearRegression(),
    "Random Forest":     RandomForestRegressor(n_estimators=100, random_state=42),
    "XGBoost":           XGBRegressor(n_estimators=100, learning_rate=0.1, max_depth=6, random_state=42, verbosity=0),
}

results      = {}
best_model   = None
best_score   = -999
best_model_name = ""

print("\n" + "=" * 50)
for name, model in models.items():
    print(f"\n  Training: {name} ...")
    model.fit(X_train, y_train)
    predictions = model.predict(X_test)
    mae = mean_absolute_error(y_test, predictions)
    r2  = r2_score(y_test, predictions)
    results[name] = {"mae": round(float(mae), 4), "r2": round(float(r2), 4)}
    print(f"    MAE : {mae:.2f}")
    print(f"    R2  : {r2:.4f}")
    if r2 > best_score:
        best_score      = r2
        best_model      = model
        best_model_name = name

# ==========================================
# STEP 9 : SAVE BEST MODEL + METADATA
# ==========================================

joblib.dump(best_model, "best_property_model.pkl")

# Collect category column prefixes for inference
stats = {
    "best_model":          best_model_name,
    "best_r2":             round(best_score, 4),
    "feature_names":       feature_names,
    "all_results":         results,
    "price_min":           float(y.min()),
    "price_max":           float(y.max()),
    "price_mean":          float(y.mean()),
    "location_columns":    [c for c in feature_names if c.startswith("location_")],
    "area_type_columns":   [c for c in feature_names if c.startswith("area_type_")],
    "availability_columns":[c for c in feature_names if c.startswith("availability_")],
    "society_columns":     [c for c in feature_names if c.startswith("society_")],
}

with open("model_metadata.json", "w") as f:
    json.dump(stats, f, indent=2)

print("\n" + "=" * 50)
print(f"  BEST MODEL  : {best_model_name}")
print(f"  BEST R2     : {best_score:.4f}")
print(f"  Saved       : best_property_model.pkl")
print(f"  Metadata    : model_metadata.json")
print("=" * 50)

# ==========================================
# STEP 10 : SAMPLE PREDICTION
# ==========================================

sample = X.iloc[:1]
pred   = best_model.predict(sample)
print(f"\n  Sample Prediction: Rs {pred[0]:.2f} Lakhs")
print("\n  Training complete! Now run: python app.py\n")
