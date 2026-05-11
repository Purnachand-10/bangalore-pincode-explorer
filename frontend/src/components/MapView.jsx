import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { corporationColors } from '../utils/corporationColors';
import '../styles/map.css';

// Fix for default leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Component to handle map view updates
const MapUpdater = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.flyTo(center, zoom, {
        duration: 1.5
      });
    }
  }, [center, zoom, map]);
  return null;
};

const createCustomIcon = (color) => {
  const markerHtmlStyles = `
    background-color: ${color};
    width: 24px;
    height: 24px;
    display: block;
    left: -12px;
    top: -12px;
    position: relative;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    border: 2px solid #FFFFFF;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2);
  `;

  return L.divIcon({
    className: "custom-pin",
    iconAnchor: [0, 24],
    labelAnchor: [-6, 0],
    popupAnchor: [0, -36],
    html: `<span style="${markerHtmlStyles}" />`
  });
};

const MapView = ({ results }) => {
  const defaultCenter = [12.9716, 77.5946]; // Bangalore center
  const defaultZoom = 11;
  
  // Calculate center based on results
  let center = defaultCenter;
  let zoom = defaultZoom;

  if (results && results.length > 0) {
    center = [results[0].lat, results[0].lng];
    zoom = 14;
  }

  return (
    <div className="map-wrapper">
      <MapContainer 
        center={defaultCenter} 
        zoom={defaultZoom} 
        className="leaflet-container"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <MapUpdater center={center} zoom={zoom} />
        
        {results && results.map((item, index) => (
          <Marker 
            key={`${item.pincode}-${index}`} 
            position={[item.lat, item.lng]}
            icon={createCustomIcon(corporationColors[item.corporation] || '#3b82f6')}
          >
            <Popup className="custom-popup">
              <div className="popup-content">
                <strong>{item.area}</strong>
                <p>Pincode: {item.pincode}</p>
                <p className="corp-tag" style={{backgroundColor: corporationColors[item.corporation] || '#3b82f6'}}>
                  {item.corporation}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapView;
