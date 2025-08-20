import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Card from './Card';
import Typography from './Typography';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Create grouped pin icon
const createGroupedPinIcon = (count, isActive = false) => {
  const bgColor = isActive ? '#dc2626' : '#ffffff';
  const textColor = isActive ? '#ffffff' : '#374151';
  const borderColor = isActive ? '#dc2626' : '#d1d5db';
  
  return L.divIcon({
    html: `
      <div style="
        background: ${bgColor};
        color: ${textColor};
        border: 2px solid ${borderColor};
        border-radius: 50%;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
      ">
        ${count}
      </div>
    `,
    className: 'custom-grouped-pin',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

// Create price pin icon
const createPricePinIcon = (price, isActive = false) => {
  const bgColor = isActive ? '#dc2626' : '#ffffff';
  const textColor = isActive ? '#ffffff' : '#374151';
  const borderColor = isActive ? '#dc2626' : '#d1d5db';
  
  return L.divIcon({
    html: `
      <div style="
        background: ${bgColor};
        color: ${textColor};
        border: 2px solid ${borderColor};
        border-radius: 8px;
        padding: 6px 10px;
        font-size: 12px;
        font-weight: 600;
        box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        white-space: nowrap;
        transform: translate(-50%, -50%);
        transition: all 0.2s ease;
      ">
        ${price.replace('SEK ', '')}
      </div>
    `,
    className: 'custom-price-pin',
    iconSize: [60, 30],
    iconAnchor: [30, 15],
  });
};

const Map = ({
  properties = [],
  center = [59.3293, 18.0686], // Stockholm center
  zoom = 11,
  onPropertyClick,
  selectedProperty = null,
  showGroupedPins = true,
  className = "w-full h-full",
  ...props
}) => {
  const [map, setMap] = useState(null);
  const [currentZoom, setCurrentZoom] = useState(zoom);
  const [groupedProperties, setGroupedProperties] = useState({});
  const [hoveredProperty, setHoveredProperty] = useState(null);

  // Group properties by proximity when zoomed out
  useEffect(() => {
    if (!map || !showGroupedPins) return;

    const groupProperties = () => {
      const groups = {};
      const proximityThreshold = currentZoom < 12 ? 0.02 : 0.005; // Adjust based on zoom level

      properties.forEach(property => {
        const key = `${Math.round(property.lat / proximityThreshold)},${Math.round(property.lng / proximityThreshold)}`;
        if (!groups[key]) {
          groups[key] = {
            lat: property.lat,
            lng: property.lng,
            properties: [],
            count: 0
          };
        }
        groups[key].properties.push(property);
        groups[key].count++;
      });

      setGroupedProperties(groups);
    };

    groupProperties();
  }, [properties, currentZoom, map, showGroupedPins]);

  // Handle zoom changes
  useEffect(() => {
    if (!map) return;

    const handleZoomEnd = () => {
      setCurrentZoom(map.getZoom());
    };

    map.on('zoomend', handleZoomEnd);
    return () => {
      map.off('zoomend', handleZoomEnd);
    };
  }, [map]);

  const handleMarkerClick = (property) => {
    if (onPropertyClick) {
      onPropertyClick(property);
    }
  };

  const handleGroupClick = (group) => {
    if (group.properties.length === 1) {
      handleMarkerClick(group.properties[0]);
    } else {
      // Zoom in to show individual properties
      map.setView([group.lat, group.lng], Math.min(currentZoom + 2, 16));
    }
  };

  const renderMarkers = () => {
    if (showGroupedPins && currentZoom < 14) {
      // Show grouped pins
      return Object.values(groupedProperties).map((group, index) => (
        <Marker
          key={`group-${index}`}
          position={[group.lat, group.lng]}
          icon={createGroupedPinIcon(group.count, false)}
          eventHandlers={{
            click: () => handleGroupClick(group),
            mouseover: () => setHoveredProperty(group.properties[0]),
            mouseout: () => setHoveredProperty(null),
          }}
        >
          {group.properties.length === 1 && (
            <Popup>
              <div className="p-2 min-w-[200px]">
                <Typography variant="body-sm" className="font-semibold">
                  {group.properties[0].location}
                </Typography>
                <Typography variant="body-xs" className="text-gray-600">
                  {group.properties[0].type} • {group.properties[0].details}
                </Typography>
                <Typography variant="body-sm" className="font-medium mt-1">
                  {group.properties[0].price}
                </Typography>
              </div>
            </Popup>
          )}
        </Marker>
      ));
    } else {
      // Show individual price pins
      return properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.lat, property.lng]}
          icon={createPricePinIcon(property.price, selectedProperty?.id === property.id)}
          eventHandlers={{
            click: () => handleMarkerClick(property),
            mouseover: () => setHoveredProperty(property),
            mouseout: () => setHoveredProperty(null),
          }}
        >
          <Popup>
            <div className="p-2 min-w-[200px]">
              <Typography variant="body-sm" className="font-semibold">
                {property.location}
              </Typography>
              <Typography variant="body-xs" className="text-gray-600">
                {property.type} • {property.details}
              </Typography>
              <Typography variant="body-sm" className="font-medium mt-1">
                {property.price}
              </Typography>
            </div>
          </Popup>
        </Marker>
      ));
    }
  };

  return (
    <div className={`relative ${className}`}>
      <MapContainer
        center={center}
        zoom={zoom}
        className="w-full h-full rounded-lg"
        zoomControl={true}
        whenCreated={setMap}
        {...props}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {renderMarkers()}
      </MapContainer>

      {/* Floating Home Card on Hover */}
      {hoveredProperty && (
        <div className="absolute top-4 left-4 z-[1000] max-w-sm">
          <Card.PropertyCard
            property={hoveredProperty}
            onCardClick={() => handleMarkerClick(hoveredProperty)}
            className="shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Map;
