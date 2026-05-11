import React from 'react';

const InfoPanel = ({ selectedData }) => {
  if (!selectedData || selectedData.length === 0) {
    return (
      <div className="info-panel empty">
        <p>Select an area or search to view details.</p>
      </div>
    );
  }

  // If multiple results, show the first one but indicate there are more
  const data = selectedData[0];

  return (
    <div className="info-panel">
      <h3>Area Details</h3>
      <div className="detail-item">
        <span className="label">Pincode:</span>
        <span className="value font-bold">{data.pincode}</span>
      </div>
      <div className="detail-item">
        <span className="label">Area Name:</span>
        <span className="value">{data.area}</span>
      </div>
      <div className="detail-item">
        <span className="label">Corporation:</span>
        <span className="value tag">{data.corporation}</span>
      </div>
      {selectedData.length > 1 && (
        <div className="multiple-results-note">
          <small>Showing 1 of {selectedData.length} matching areas.</small>
        </div>
      )}
    </div>
  );
};

export default InfoPanel;
