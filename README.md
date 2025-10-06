# Exoplanet Habitability Analyzer 🌍

An interactive web application for analyzing exoplanet habitability based on scientific criteria. Select habitability factors to find the best exoplanet candidates for potential life.

<img width="1920" height="960" alt="Screenshot 2025-10-06 at 12 34 39 AM" src="https://github.com/user-attachments/assets/cec75c60-6b7d-43cb-a05c-624c42413d38" />

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/exoplanet-habitability-analyzer.git
cd exoplanet-habitability-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Select Criteria**: Choose habitability factors that are important for life
2. **View Results**: See the best exoplanet candidate based on your selections
3. **Compare Planets**: Review the ranking of all exoplanet candidates
4. **Analyze Details**: Examine specific characteristics of each planet

## 🔬 Habitability Criteria

The analyzer includes 10 scientifically-based criteria:

### Essential Criteria (High Weight)
- **Habitable Zone** (25 pts): Planet orbits within the star's habitable zone
- **Rocky Composition** (20 pts): Planet has a solid, rocky surface
- **Stable Atmosphere** (18 pts): Planet has a substantial atmosphere

### Important Criteria (Medium Weight)
- **Magnetic Field** (15 pts): Protective field against solar radiation
- **Moderate Temperature** (12 pts): Surface temperature allows liquid water
- **Stable Orbit** (10 pts): Low orbital eccentricity for climate stability

### Beneficial Criteria (Lower Weight)
- **Water Presence** (8 pts): Evidence of water or water-forming compounds
- **Avoid Tidal Locking** (6 pts): Planet is not tidally locked to its star
- **Low Stellar Activity** (5 pts): Host star has low harmful radiation
- **Stabilizing Moons** (3 pts): Moons that help stabilize rotation

## 🌍 Exoplanet Database

- https://exoplanetarchive.ipac.caltech.edu/
- https://exoplanet.eu/



## 🛠️ Technology Stack

- **Frontend**: React 19.2.0
- **Styling**: Custom CSS with space-themed design
- **State Management**: React Hooks (useState, useEffect)
- **Build Tool**: Create React App
- **Fonts**: Orbitron (space theme) + Inter (readability)

## 📁 Project Structure

```
exoplanet-habitability-analyzer/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js              # Main application component
│   ├── App.css            # Component-specific styles
│   ├── index.js           # Application entry point
│   └── index.css          # Global styles and theme
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```


## 🧪 Available Scripts

- `npm start` - Start development server
- `npm test` - Run test suite
- `npm run build` - Build for production
- `npm run eject` - Eject from Create React App (one-way operation)

## 🔬 Scientific Background

This tool is based on current exoplanet research and habitability studies:

- **Habitable Zone**: Based on stellar luminosity and planetary distance
- **Planetary Characteristics**: Real data from NASA's Exoplanet Archive
- **Scoring Algorithm**: Weighted system based on astrobiological importance
- **Criteria Selection**: Based on factors known to influence planetary habitability


## 📄 License

This project is open source and available under the [MIT License](LICENSE).
