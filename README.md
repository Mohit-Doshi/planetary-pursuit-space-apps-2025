# Exoplanet Habitability Analyzer 🌍

An interactive web application for analyzing exoplanet habitability based on scientific criteria. Select habitability factors to find the best exoplanet candidates for potential life in our galaxy.

![Exoplanet Analyzer](https://img.shields.io/badge/NASA-Space%20Apps%20Challenge%202025-blue?style=for-the-badge&logo=nasa)
![React](https://img.shields.io/badge/React-19.2.0-blue?style=for-the-badge&logo=react)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

## 🌟 Features

- **Interactive Criteria Selection**: Choose from 10 scientifically-based habitability criteria
- **Weighted Scoring System**: Each criterion has different importance weights (3-25 points)
- **Real-time Analysis**: Instant calculation and ranking of exoplanet candidates
- **Comprehensive Database**: 5 real exoplanets with detailed characteristics
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful space-themed interface with smooth animations

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

The analyzer includes 5 real exoplanets:

1. **Proxima Centauri b** - Closest exoplanet to Earth (4.24 light years)
2. **TRAPPIST-1e** - Ultra-cool dwarf system planet (39.5 light years)
3. **Kepler-442b** - K-type star planet (1,120 light years)
4. **Kepler-186f** - M-type star planet (492 light years)
5. **Gliese 667Cc** - Triple star system planet (23.6 light years)

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

## 🎨 Design Features

- **Space Theme**: Dark background with cosmic gradients
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Hover effects and smooth transitions
- **Scientific Accuracy**: Based on real exoplanet data and research
- **Accessibility**: WCAG compliant design patterns

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

## 🤝 Contributing

This project was created for the NASA Space Apps Challenge 2025. Contributions are welcome! Please feel free to submit issues and enhancement requests.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **NASA** for exoplanet data and research
- **NASA Space Apps Challenge** for providing the platform
- **Exoplanet Research Community** for scientific insights
- **React Community** for excellent documentation and tools

## 📞 Contact

For questions or feedback about the Exoplanet Habitability Analyzer, please reach out through the NASA Space Apps Challenge platform or create an issue in this repository.

---

**Built with ❤️ for NASA Space Apps Challenge 2025**

*Discover the most habitable worlds beyond our solar system!* 🌌