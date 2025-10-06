import React, { useState, useEffect } from 'react';
import './App.css';

// Exoplanet habitability criteria data
const habitabilityCriteria = [
  {
    id: 'habitable_zone',
    name: 'Habitable Zone',
    description: 'Planet orbits within the star\'s habitable zone where liquid water can exist',
    weight: 25,
    category: 'Essential'
  },
  {
    id: 'rocky_composition',
    name: 'Rocky Composition',
    description: 'Planet has a solid, rocky surface suitable for life',
    weight: 20,
    category: 'Essential'
  },
  {
    id: 'atmosphere',
    name: 'Stable Atmosphere',
    description: 'Planet has a substantial atmosphere that can support life',
    weight: 18,
    category: 'Essential'
  },
  {
    id: 'magnetic_field',
    name: 'Magnetic Field',
    description: 'Planet has a protective magnetic field against solar radiation',
    weight: 15,
    category: 'Important'
  },
  {
    id: 'moderate_temperature',
    name: 'Moderate Temperature',
    description: 'Surface temperature allows for liquid water',
    weight: 12,
    category: 'Important'
  },
  {
    id: 'low_eccentricity',
    name: 'Stable Orbit',
    description: 'Planet has a low orbital eccentricity for climate stability',
    weight: 10,
    category: 'Important'
  },
  {
    id: 'water_presence',
    name: 'Water Presence',
    description: 'Evidence of water or water-forming compounds',
    weight: 8,
    category: 'Beneficial'
  },
  {
    id: 'tidal_locking',
    name: 'Avoid Tidal Locking',
    description: 'Planet is not tidally locked to its star',
    weight: 6,
    category: 'Beneficial'
  },
  {
    id: 'low_stellar_activity',
    name: 'Low Stellar Activity',
    description: 'Host star has low levels of harmful radiation',
    weight: 5,
    category: 'Beneficial'
  },
  {
    id: 'multiple_moons',
    name: 'Stabilizing Moons',
    description: 'Planet has moons that help stabilize its rotation',
    weight: 3,
    category: 'Bonus'
  },
  {
    id: 'close_distance',
    name: 'Close Distance to Earth',
    description: 'Planet is relatively close to Earth for easier exploration and communication',
    weight: 7,
    category: 'Beneficial'
  }
];

// Sample exoplanet database
const exoplanets = [
  {
    id: 'proxima_centauri_b',
    name: 'Proxima Centauri b',
    distance: '4.24 light years',
    mass: '1.27 Earth masses',
    radius: '1.08 Earth radii',
    temperature: '234 K (-39°C)',
    orbital_period: '11.2 days',
    star_type: 'Red Dwarf',
    image: {
      primaryColor: '#8B4513',
      secondaryColor: '#A0522D',
      surfaceType: 'Rocky Desert',
      atmosphere: 'Thin',
      features: ['Craters', 'Rocky Terrain', 'Red Dust'],
      description: 'A cold, rocky world with a thin atmosphere, showing signs of geological activity and potential water ice at the poles.'
    },
    criteria: {
      habitable_zone: true,
      rocky_composition: true,
      atmosphere: false,
      magnetic_field: false,
      moderate_temperature: false,
      low_eccentricity: true,
      water_presence: false,
      tidal_locking: false,
      low_stellar_activity: false,
      multiple_moons: false,
      close_distance: true
    }
  },
  {
    id: 'trappist_1e',
    name: 'TRAPPIST-1e',
    distance: '39.5 light years',
    mass: '0.69 Earth masses',
    radius: '0.92 Earth radii',
    temperature: '251 K (-22°C)',
    orbital_period: '6.1 days',
    star_type: 'Ultra-cool Dwarf',
    image: {
      primaryColor: '#4169E1',
      secondaryColor: '#87CEEB',
      surfaceType: 'Ocean World',
      atmosphere: 'Dense',
      features: ['Oceans', 'Ice Caps', 'Clouds'],
      description: 'A potentially ocean-covered world with a dense atmosphere, possibly featuring vast liquid water oceans and ice caps.'
    },
    criteria: {
      habitable_zone: true,
      rocky_composition: true,
      atmosphere: true,
      magnetic_field: true,
      moderate_temperature: true,
      low_eccentricity: true,
      water_presence: true,
      tidal_locking: true,
      low_stellar_activity: false,
      multiple_moons: false,
      close_distance: true
    }
  },
  {
    id: 'kepler_442b',
    name: 'Kepler-442b',
    distance: '1,120 light years',
    mass: '2.3 Earth masses',
    radius: '1.34 Earth radii',
    temperature: '233 K (-40°C)',
    orbital_period: '112.3 days',
    star_type: 'K-type Star',
    image: {
      primaryColor: '#228B22',
      secondaryColor: '#32CD32',
      surfaceType: 'Super Earth',
      atmosphere: 'Moderate',
      features: ['Continents', 'Oceans', 'Mountains', 'Forests'],
      description: 'A super-Earth with a diverse landscape featuring continents, oceans, and potentially lush vegetation under a stable atmosphere.'
    },
    criteria: {
      habitable_zone: true,
      rocky_composition: true,
      atmosphere: true,
      magnetic_field: true,
      moderate_temperature: false,
      low_eccentricity: true,
      water_presence: true,
      tidal_locking: false,
      low_stellar_activity: true,
      multiple_moons: true,
      close_distance: false
    }
  },
  {
    id: 'kepler_186f',
    name: 'Kepler-186f',
    distance: '492 light years',
    mass: '1.4 Earth masses',
    radius: '1.11 Earth radii',
    temperature: '188 K (-85°C)',
    orbital_period: '129.9 days',
    star_type: 'M-type Star',
    image: {
      primaryColor: '#2F4F4F',
      secondaryColor: '#708090',
      surfaceType: 'Frozen World',
      atmosphere: 'Thin',
      features: ['Ice Sheets', 'Frozen Oceans', 'Rocky Outcrops'],
      description: 'A cold, frozen world with extensive ice sheets and frozen oceans, featuring rocky outcrops emerging from the ice.'
    },
    criteria: {
      habitable_zone: true,
      rocky_composition: true,
      atmosphere: true,
      magnetic_field: false,
      moderate_temperature: false,
      low_eccentricity: true,
      water_presence: false,
      tidal_locking: false,
      low_stellar_activity: false,
      multiple_moons: false,
      close_distance: false
    }
  },
  {
    id: 'gliese_667cc',
    name: 'Gliese 667Cc',
    distance: '23.6 light years',
    mass: '3.8 Earth masses',
    radius: '1.54 Earth radii',
    temperature: '277 K (4°C)',
    orbital_period: '28.1 days',
    star_type: 'M-type Star',
    image: {
      primaryColor: '#8B4513',
      secondaryColor: '#DEB887',
      surfaceType: 'Rocky Super Earth',
      atmosphere: 'Dense',
      features: ['Deserts', 'Mountains', 'Valleys', 'Atmospheric Clouds'],
      description: 'A massive rocky super-Earth with a dense atmosphere, featuring vast deserts, towering mountains, and atmospheric cloud systems.'
    },
    criteria: {
      habitable_zone: true,
      rocky_composition: true,
      atmosphere: true,
      magnetic_field: true,
      moderate_temperature: true,
      low_eccentricity: true,
      water_presence: true,
      tidal_locking: false,
      low_stellar_activity: false,
      multiple_moons: true,
      close_distance: true
    }
  }
];

function App() {
  const [selectedCriteria, setSelectedCriteria] = useState({});
  const [bestCandidate, setBestCandidate] = useState(null);
  const [allCandidates, setAllCandidates] = useState([]);

  // Calculate habitability score for a planet based on selected criteria
  const calculateScore = (planet) => {
    let totalScore = 0;
    let totalWeight = 0;

    Object.keys(selectedCriteria).forEach(criterionId => {
      if (selectedCriteria[criterionId]) {
        const criterion = habitabilityCriteria.find(c => c.id === criterionId);
        if (criterion && planet.criteria[criterionId]) {
          totalScore += criterion.weight;
        }
        totalWeight += criterion.weight;
      }
    });

    return totalWeight > 0 ? Math.round((totalScore / totalWeight) * 100) : 0;
  };

  // Update best candidate when criteria change
  useEffect(() => {
    const candidates = exoplanets.map(planet => ({
      ...planet,
      score: calculateScore(planet)
    })).sort((a, b) => b.score - a.score);

    setAllCandidates(candidates);
    setBestCandidate(candidates[0]);
  }, [selectedCriteria]);

  const handleCriterionChange = (criterionId) => {
    setSelectedCriteria(prev => ({
      ...prev,
      [criterionId]: !prev[criterionId]
    }));
  };

  const selectAllCriteria = () => {
    const allSelected = {};
    habitabilityCriteria.forEach(criterion => {
      allSelected[criterion.id] = true;
    });
    setSelectedCriteria(allSelected);
  };

  const clearAllCriteria = () => {
    setSelectedCriteria({});
  };

  return (
    <div className="App">
      <div className="container">
        {/* Header */}
        <header style={{ textAlign: 'center', padding: '40px 0' }}>
          <h1 style={{ 
            fontFamily: 'Orbitron, monospace', 
            fontSize: window.innerWidth <= 768 ? '2em' : '3em', 
            fontWeight: '900',
            background: 'linear-gradient(135deg, #10b981, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '16px'
          }}>
            Exoplanet Habitability Analyzer
          </h1>
          <p style={{ fontSize: '1.2em', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
            Select habitability criteria to find the best exoplanet candidate for potential life
          </p>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : '1fr 1fr', 
          gap: '32px', 
          marginTop: '40px' 
        }}>
          {/* Criteria Selection */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '1.5em', fontWeight: '700' }}>Habitability Criteria</h2>
              <div style={{ 
                display: 'flex', 
                gap: '8px',
                flexDirection: window.innerWidth <= 480 ? 'column' : 'row'
              }}>
                <button className="btn-primary" onClick={selectAllCriteria} style={{ 
                  fontSize: window.innerWidth <= 480 ? '0.8em' : '0.9em', 
                  padding: window.innerWidth <= 480 ? '6px 12px' : '8px 16px' 
                }}>
                  Select All
                </button>
                <button className="btn-primary" onClick={clearAllCriteria} style={{ 
                  fontSize: window.innerWidth <= 480 ? '0.8em' : '0.9em', 
                  padding: window.innerWidth <= 480 ? '6px 12px' : '8px 16px' 
                }}>
                  Clear All
                </button>
              </div>
            </div>

            {habitabilityCriteria.map((criterion) => (
              <div key={criterion.id} className="checkbox-container">
                <input
                  type="checkbox"
                  id={criterion.id}
                  checked={selectedCriteria[criterion.id] || false}
                  onChange={() => handleCriterionChange(criterion.id)}
                />
                <label htmlFor={criterion.id} className="checkbox-label">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {criterion.name}
                    <span className="score-badge">{criterion.weight}pts</span>
                  </div>
                  <div className="checkbox-description">{criterion.description}</div>
                </label>
              </div>
            ))}
          </div>

          {/* Results Display */}
          <div className="card">
            <h2 style={{ fontSize: '1.5em', fontWeight: '700', marginBottom: '24px' }}>
              Best Candidate
            </h2>
            
            {bestCandidate && (
              <div className="planet-card">
                <div className="planet-name">{bestCandidate.name}</div>
                <div className="planet-score">{bestCandidate.score}%</div>
                
                <div className="planet-details">
                  <div className="detail-item">
                    <div className="detail-label">Distance</div>
                    <div className="detail-value">{bestCandidate.distance}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Mass</div>
                    <div className="detail-value">{bestCandidate.mass}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Radius</div>
                    <div className="detail-value">{bestCandidate.radius}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Temperature</div>
                    <div className="detail-value">{bestCandidate.temperature}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Orbital Period</div>
                    <div className="detail-value">{bestCandidate.orbital_period}</div>
                  </div>
                  <div className="detail-item">
                    <div className="detail-label">Star Type</div>
                    <div className="detail-value">{bestCandidate.star_type}</div>
                  </div>
                </div>

                {/* Planet Image Panel */}
                <div className="planet-image-panel">
                  <div 
                    className="planet-visualization"
                    style={{
                      '--primary-color': bestCandidate.image.primaryColor,
                      '--secondary-color': bestCandidate.image.secondaryColor
                    }}
                  >
                    <div className="planet-surface">
                      <div className={`planet-features ${bestCandidate.id.replace('_', '')}-features`}></div>
                      <div className="planet-terminator"></div>
                      <div className="planet-highlights"></div>
                    </div>
                    <div className="planet-atmosphere"></div>
                    {bestCandidate.image.atmosphere === 'Dense' && <div className="planet-clouds"></div>}
                  </div>
                  
                  <div className="planet-description">
                    <h3>{bestCandidate.image.surfaceType}</h3>
                    <p>{bestCandidate.image.description}</p>
                    <div className="planet-features-list">
                      {bestCandidate.image.features.map((feature, index) => (
                        <span key={index} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '20px' }}>
                  <h3 style={{ fontSize: '1.1em', marginBottom: '12px', color: '#10b981' }}>
                    Met Criteria ({Object.values(selectedCriteria).filter(Boolean).length} selected)
                  </h3>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {Object.keys(selectedCriteria).map(criterionId => {
                      if (selectedCriteria[criterionId] && bestCandidate.criteria[criterionId]) {
                        const criterion = habitabilityCriteria.find(c => c.id === criterionId);
                        return (
                          <span key={criterionId} style={{
                            background: 'rgba(16, 185, 129, 0.2)',
                            color: '#10b981',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            fontSize: '0.8em',
                            fontWeight: '500'
                          }}>
                            ✓ {criterion.name}
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* All Candidates Ranking */}
            <div style={{ marginTop: '32px' }}>
              <h3 style={{ fontSize: '1.2em', marginBottom: '16px' }}>All Candidates Ranking</h3>
              <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                {allCandidates.map((planet, index) => (
                  <div key={planet.id} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px',
                    margin: '8px 0',
                    background: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '8px',
                    border: index === 0 ? '2px solid rgba(34, 197, 94, 0.5)' : '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div>
                      <div style={{ fontWeight: '600' }}>{planet.name}</div>
                      <div style={{ fontSize: '0.9em', color: '#94a3b8' }}>{planet.distance}</div>
                    </div>
                    <div style={{
                      fontSize: '1.2em',
                      fontWeight: '700',
                      color: index === 0 ? '#10b981' : '#fbbf24'
                    }}>
                      {planet.score}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
