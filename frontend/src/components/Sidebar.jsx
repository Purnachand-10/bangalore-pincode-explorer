import React from 'react';
import SearchBar from './SearchBar';
import InfoPanel from './InfoPanel';
import Legend from './Legend';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

const Sidebar = ({ onSearch, selectedData, loading, error }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Pincode Explorer</h2>
        <p>Discover Bangalore's regions</p>
      </div>
      
      <div className="sidebar-content">
        <SearchBar onSearch={onSearch} />
        
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        
        {!loading && !error && <InfoPanel selectedData={selectedData} />}
      </div>
      
      <div className="sidebar-footer">
        <Legend />
      </div>
    </div>
  );
};

export default Sidebar;
