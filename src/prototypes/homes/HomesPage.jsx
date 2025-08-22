import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/ui/Search';
import FilterButton from '../../components/ui/FilterButton';
import FilterModal from '../../components/ui/FilterModal';
import Card from '../../components/ui/Card';
import Typography from '../../components/ui/Typography';

import Button from '../../components/ui/Button';
import Icon from '../../components/ui/Icon';
import Dropdown from '../../components/ui/Dropdown';
import DevExperimentsButton from '../../components/DevExperimentsButton';
import HeaderLoggedIn from '../../components/Header/HeaderLoggedIn';
import Map from '../../components/ui/Map';



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
  { value: 'square_meters_descending', label: 'Storlek – Störst' },
  { value: 'square_meters_ascending', label: 'Storlek – Minst' },
  { value: 'move_in_ascending', label: 'Inflytt – Tidigast' },
  { value: 'move_in_descending', label: 'Inflytt – Senast' },
  { value: 'move_out_ascending', label: 'Utflytt – Tidigast' },
  { value: 'move_out_descending', label: 'Utflytt – Senast' },
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

  const handleApplyFilters = (filters) => {
    console.log('Applied filters:', filters);
    setIsFilterOpen(false);
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      <HeaderLoggedIn isFluid={true} />
      <DevExperimentsButton />

      {/* Main Content - Full height with header and search */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Search Header - Fixed */}
        <div className="flex-shrink-0 px-4 sm:px-6 lg:px-8 py-6 border-b border-gray-200">
          <Typography variant="display-md" className="mb-6">
            Hitta bostad att hyra
          </Typography>

          {/* Search and Filter */}
          <div className="flex gap-3 mb-6">
            <div className="flex-1">
              <Search
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Sök på stad eller område"
                size="md"
                variant="filled"
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
            <Dropdown
              trigger={
                <Button 
                  variant="ghost" 
                  icon={<Icon name="ChevronDown" size="sm" />}
                  iconPosition="right"
                >
                  {sortOptions.find(opt => opt.value === sortBy)?.label || 'Nyast'}
                </Button>
              }
              items={sortOptions.map((option) => ({
                label: option.label,
                onClick: () => setSortBy(option.value),
                active: sortBy === option.value
              }))}
            />
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
                    border={false}
                    imageShape="rounded"
                    showFavorite={false}
                    className={selectedProperty?.id === property.id ? 'ring-2 ring-blue-500' : ''}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Map - Fixed */}
          <div className="w-1/2 border-l border-gray-200">
            <Map
              properties={properties}
              center={[59.3293, 18.0686]}
              zoom={11}
              selectedProperty={selectedProperty}
              onPropertyClick={handlePropertyClick}
              showGroupedPins={true}
            />
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
                  border={false}
                  imageShape="rounded"
                  showFavorite={false}
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