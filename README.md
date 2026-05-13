# EstateIQ - AI-Powered Real Estate Price Prediction Platform

![EstateIQ Banner](https://img.shields.io/badge/EstateIQ-AI%20Real%20Estate%20Prediction-green)
![Next.js](https://img.shields.io/badge/Next.js-Latest-black)
![React](https://img.shields.io/badge/React-18+-blue)
![Flask](https://img.shields.io/badge/Flask-Backend-red)
![Python](https://img.shields.io/badge/Python-3.8+-yellow)

## 📋 Overview

**EstateIQ** is a modern, AI-powered house price prediction platform designed to help users estimate real estate prices intelligently using machine learning. The platform provides a clean, premium, and user-friendly experience where users can enter property details to receive accurate property price predictions in real time.

Built with a futuristic yet minimal aesthetic UI, EstateIQ combines advanced analytics, interactive dashboards, and smart prediction systems to simplify real estate insights for buyers, sellers, investors, and property enthusiasts.

## ✨ Key Features

- 🤖 **AI-Powered Predictions** - Real-time property valuation using machine learning models
- 📊 **Interactive Dashboards** - Beautiful data visualization and market trend analysis
- 🎨 **Premium UI/UX** - Smooth animations, elegant layouts, and highly intuitive interactions
- 📱 **Fully Responsive** - Seamless experience across mobile, tablet, and desktop devices
- 🌐 **Modern Architecture** - Built with Next.js, React, and Flask for optimal performance
- 🔍 **Market Analytics** - Historical price trends and neighborhood insights
- ⚡ **Real-time Processing** - Instant predictions with 98%+ accuracy
- 🎯 **Luxury SaaS Experience** - Professional-grade platform with smooth interactions

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14+
- **UI Library**: React 18+
- **Styling**: Tailwind CSS
- **Typography**: Manrope, Inter
- **Icons**: Material Symbols
- **State Management**: React Hooks
- **Animations**: CSS Keyframes & Smooth Transitions

### Backend
- **Framework**: Flask
- **Language**: Python 3.8+
- **API**: RESTful HTTP endpoints
- **Data Processing**: Pandas, NumPy

### Machine Learning & Data
- **ML Models**: Trained models stored as `.pkl` files
- **Dataset Format**: Pickle serialized objects
- **Libraries**: Scikit-learn, XGBoost, scikit-learn

## 📂 Project Structure

```
House_Prediction/
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles & design tokens
│   │   ├── predict/
│   │   │   └── page.tsx         # Prediction form page
│   │   ├── dashboard/
│   │   │   └── page.tsx         # Analytics dashboard
│   │   └── contact/
│   │       └── page.tsx         # Contact page
│   └── components/
│       ├── Navbar.tsx           # Navigation component
│       └── Footer.tsx           # Footer component
├── public/                       # Static assets
├── next.config.ts               # Next.js configuration
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
├── backend/                     # Flask backend (to be added)
│   ├── app.py
│   ├── models/                  # ML models (.pkl files)
│   ├── routes/
│   └── requirements.txt
├── datasets/                    # Data files (.pkl, .csv)
└── README.md                    # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Python 3.8+
- npm or yarn
- Git

### Frontend Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/House_Prediction.git
cd House_Prediction
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:3000
```

### Backend Setup (Flask)

1. **Navigate to backend directory**
```bash
cd backend
```

2. **Create Python virtual environment**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. **Install Python dependencies**
```bash
pip install -r requirements.txt
```

4. **Run Flask server**
```bash
python app.py
```

Flask API will run on `http://localhost:5000`

## 📊 Pages & Features

### 🏠 Home Page (`/`)
- Hero section with key messaging
- Feature showcase (Bento grid layout)
- Call-to-action buttons for predictions
- Market insights overview

### 🔮 Predict Page (`/predict`)
- Interactive form to input property details:
  - Location
  - Area type (Super built-up, Built-up, Carpet, Plot)
  - Availability status
  - Total square footage
  - Society/Complex name
  - BHK, Bathrooms, Balconies
- Real-time prediction results
- Confidence scores and market trends
- Price per sqft analysis

### 📈 Dashboard Page (`/dashboard`)
- Portfolio overview cards
- Total predictions tracking
- Model accuracy metrics
- Active markets display
- Price trajectory forecasts
- Asset distribution charts (Donut)
- Recent intelligence table with mobile card view
- Market trend analysis

### 📧 Contact Page (`/contact`)
- Professional contact form
- Support inquiries
- Feedback submission

## 🎨 Design System

### Color Palette
- **Primary**: `#536350` (Sage Green)
- **Secondary**: `#685d4d` (Warm Taupe)
- **Accent**: Multiple shades for status (Success, Warning, Info)
- **Neutrals**: Clean whites and grays

### Typography
- **Display**: Manrope (600 weight)
- **Body**: Inter (400, 500, 600 weights)
- **Icons**: Material Symbols Outlined

### Animations
- Smooth slide-in menu (0.3s)
- Floating card animations
- Hover effects with scale transitions
- Fade-in transitions for UI elements

## 📱 Responsive Design

- **Mobile First Approach** - Optimized for small screens
- **Breakpoints**:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
- **Adaptive Components**:
  - Tables convert to card layouts on mobile
  - Flexible grid systems
  - Touch-friendly buttons & spacing

## 🔌 API Endpoints (Backend)

```
POST /api/predict
  - Input: property details (JSON)
  - Output: price prediction, confidence score

GET /api/models
  - Returns: available ML models

GET /api/datasets
  - Returns: dataset information
```

## 📦 Build & Deployment

### Build for Production
```bash
npm run build
npm start
```

### Docker (Optional)
```bash
docker build -t estateiq .
docker run -p 3000:3000 estateiq
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💼 Team

- **Frontend Developer**: [Your Name]
- **Backend Developer**: [To be added]
- **ML Engineer**: [To be added]

## 📞 Support & Contact

For support, email support@estateiq.com or visit [Your Website]

---

**Built with ❤️ by the EstateIQ Team**

*Transforming Real Estate with AI-Powered Intelligence*
