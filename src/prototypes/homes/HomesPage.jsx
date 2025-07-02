import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Search from '../../components/ui/Search';
import FilterButton from '../../components/ui/FilterButton';
import FilterModal from '../../components/ui/FilterModal';
import Card from '../../components/ui/Card';
import Typography from '../../components/ui/Typography';
import Select from '../../components/ui/Select';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import HeaderLoggedIn from '../../components/Header/HeaderLoggedIn';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom price marker icon
const createPriceIcon = (price, isSelected = false) => {
  const color = isSelected ? '#dc2626' : '#ffffff';
  const textColor = isSelected ? '#ffffff' : '#374151';
  
  return L.divIcon({
    html: `
      <div style="
        background: ${color};
        color: ${textColor};
        border: 2px solid #ffffff;
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 12px;
        font-weight: 600;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        white-space: nowrap;
        transform: translate(-50%, -100%);
      ">
        ${price.replace('SEK ', '')}
      </div>
    `,
    className: 'custom-price-marker',
    iconSize: [40, 25],
    iconAnchor: [20, 25],
  });
};

// Mock property data
const mockProperties = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ],
    location: 'Södergatan, Jönköping',
    type: 'Lägenhet',
    details: '1 rum / 45 m²',
    price: 'SEK 6,194',
    dateRange: '2025-08-01 → Tillsvidare',
    lat: 57.7826,
    lng: 14.1618,
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
    ],
    location: 'Östermalm, Stockholm',
    type: 'Lägenhet',
    details: '2 rum / 65 m²',
    price: 'SEK 18,500',
    dateRange: '2025-07-15 → Tillsvidare',
    lat: 59.3358,
    lng: 18.0871,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    location: 'Södermalm, Stockholm',
    type: 'Lägenhet',
    details: '3 rum / 85 m²',
    price: 'SEK 25,000',
    dateRange: '2025-06-01 → Tillsvidare',
    lat: 59.3140,
    lng: 18.0700,
  },
  {
    id: 4,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    ],
    location: 'Vasastan, Stockholm',
    type: 'Lägenhet',
    details: '2 rum / 55 m²',
    price: 'SEK 16,500',
    dateRange: '2025-09-01 → Tillsvidare',
    lat: 59.3434,
    lng: 18.0527,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    location: 'Norrmalm, Stockholm',
    type: 'Studio',
    details: '1 rum / 35 m²',
    price: 'SEK 14,000',
    dateRange: '2025-08-15 → Tillsvidare',
    lat: 59.3326,
    lng: 18.0649,
  },
  {
    id: 6,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    ],
    location: 'Gamla Stan, Stockholm',
    type: 'Lägenhet',
    details: '1 rum / 42 m²',
    price: 'SEK 15,800',
    dateRange: '2025-07-01 → Tillsvidare',
    lat: 59.3258,
    lng: 18.0717,
  },
];

const sortOptions = [
  { value: 'published_descending', label: 'Nyast' },
  { value: 'published_ascending', label: 'Äldst' },
  { value: 'monthly_cost_ascending', label: 'Pris – Lägst' },
  { value: 'monthly_cost_descending', label: 'Pris – Högst' },
];

const HomesPage = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [likedProperties, setLikedProperties] = useState({});
  const [sortBy, setSortBy] = useState('published_descending');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [properties] = useState(mockProperties);

  const handleLikeToggle = (propertyId) => {
    setLikedProperties(prev => ({
      ...prev,
      [propertyId]: !prev[propertyId]
    }));
  };

  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
    // Navigate to tenant apply home page
    navigate('/tenants/apply-home');
  };

  const handleMarkerClick = (property) => {
    setSelectedProperty(property);
    // Scroll to property in list (for mobile)
    if (window.innerWidth < 768) {
      const propertyElement = document.getElementById(`property-${property.id}`);
      if (propertyElement) {
        propertyElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
    setIsFilterOpen(false);
  };

  // Interactive Leaflet map component
  const MapComponent = () => (
    <MapContainer
      center={[59.3293, 18.0686]} // Stockholm center
      zoom={11}
      className="w-full h-full rounded-lg"
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Property markers */}
      {properties.map((property) => (
        <Marker
          key={property.id}
          position={[property.lat, property.lng]}
          icon={createPriceIcon(property.price, selectedProperty?.id === property.id)}
          eventHandlers={{
            click: () => handleMarkerClick(property),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-semibold text-sm">{property.location}</h3>
              <p className="text-xs text-gray-600">{property.type} • {property.details}</p>
              <p className="text-sm font-medium mt-1">{property.price}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );

  return (
    <div className="h-screen flex flex-col bg-white">
      <HeaderLoggedIn isFluid={true} />
      <DevExperimentsButton />

      {/* Main Content - Full height with header and search */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Search Header - Fixed */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <Typography variant="h1" className="mb-6">
            Hitta bostad att hyra
          </Typography>

          {/* Search and Filter */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1">
              <Search
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Sök på stad eller område"
                size="lg"
              />
            </div>
            <FilterButton
              size="lg"
              onClick={() => setIsFilterOpen(true)}
            />
          </div>

          {/* Results count and sort */}
          <div className="flex items-center justify-between">
            <Typography variant="body-md" className="text-gray-600">
              {properties.length} bostäder
            </Typography>
            <div className="relative">
              <button
                type="button"
                className="bg-transparent text-gray-900 font-medium text-sm hover:text-gray-700 transition-colors flex items-center gap-1 w-fit"
                onClick={() => {/* Add dropdown functionality here if needed */}}
              >
                <span>{sortOptions.find(opt => opt.value === sortBy)?.label || 'Nyast'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Content Area - Listings and Map (Desktop) */}
        <div className="hidden lg:flex flex-1 overflow-hidden">
          {/* Property Listings - Scrollable */}
          <div className="w-1/2 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-4">
              {properties.map((property) => (
                <div key={property.id} id={`property-${property.id}`}>
                  <Card.PropertyCard
                    property={property}
                    liked={likedProperties[property.id]}
                    onLikeToggle={() => handleLikeToggle(property.id)}
                    onCardClick={() => handlePropertyClick(property)}
                    className={selectedProperty?.id === property.id ? 'ring-2 ring-blue-500' : ''}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Map - Fixed */}
          <div className="w-1/2 border-l border-gray-200">
            <MapComponent />
          </div>
        </div>

        {/* Mobile Layout - Listings only on small screens */}
        <div className="lg:hidden flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {properties.map((property) => (
              <div key={property.id} id={`property-${property.id}`}>
                <Card.PropertyCard
                  property={property}
                  liked={likedProperties[property.id]}
                  onLikeToggle={() => handleLikeToggle(property.id)}
                  onCardClick={() => handlePropertyClick(property)}
                  className={selectedProperty?.id === property.id ? 'ring-2 ring-blue-500' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      <FilterModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
};

export default HomesPage; 