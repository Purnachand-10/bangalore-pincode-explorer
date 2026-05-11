import React from 'react';
import { corporationColors } from '../utils/corporationColors';

const Legend = () => {
  return (
    <div className="legend-container">
      <h4 className="legend-title">Zones</h4>
      <ul className="legend-list">
        {Object.entries(corporationColors).map(([corp, color]) => (
          <li key={corp} className="legend-item">
            <span 
              className="legend-color-box" 
              style={{ backgroundColor: color }}
            ></span>
            <span className="legend-label">{corp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Legend;
