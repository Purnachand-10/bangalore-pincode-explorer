import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MapView from './components/MapView';
import { searchByPincode, searchByArea } from './services/api';
import './index.css';

function App() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      // Check if query is entirely numeric (pincode)
      const isNumeric = /^\d+$/.test(query);
      
      let data = [];
      if (isNumeric) {
        data = await searchByPincode(query);
      } else {
        data = await searchByArea(query);
      }
      
      setResults(data);
      if (data.length === 0) {
        setError('No results found. Please try another search.');
      }
    } catch (err) {
      setError('An error occurred while fetching data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Sidebar 
        onSearch={handleSearch} 
        selectedData={results} 
        loading={loading}
        error={error}
      />
      <div className="main-content">
        <MapView results={results} />
      </div>
    </div>
  );
}

export default App;
