import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Search from '../../../../components/ui/Search';
import { ArrowLeft, X } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CreateTenantListingStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [searchValue, setSearchValue] = useState('');
  const [selectedLocations, setSelectedLocations] = useState(formData.searchLocations || []);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  // Mock location suggestions
  const mockSuggestions = [
    'Luleå',
    'Ludvika', 
    'Lunds kommun',
    'Luleå kommun',
    'Ludvika kommun',
    'Lugnet, Malmö',
    'Lunde, Gudmundrå distrikt'
  ];

  const filteredSuggestions = searchValue.length > 0 
    ? mockSuggestions.filter(location => 
        location.toLowerCase().includes(searchValue.toLowerCase()) &&
        !selectedLocations.includes(location)
      )
    : [];

  useEffect(() => {
    setShowSuggestions(searchValue.length > 0 && filteredSuggestions.length > 0);
  }, [searchValue, filteredSuggestions.length]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleLocationSelect = (location) => {
    const newLocations = [...selectedLocations, location];
    setSelectedLocations(newLocations);
    updateFormData({ searchLocations: newLocations });
    setSearchValue('');
    setShowSuggestions(false);
    if (hasSubmitted) setHasSubmitted(false); // Clear error when location is selected
  };

  const handleLocationRemove = (locationToRemove) => {
    const newLocations = selectedLocations.filter(location => location !== locationToRemove);
    setSelectedLocations(newLocations);
    updateFormData({ searchLocations: newLocations });
  };

  const clearSearchValue = () => {
    setSearchValue('');
    setShowSuggestions(false);
  };

  const handleNext = () => {
    setHasSubmitted(true);
    if (selectedLocations.length === 0) {
      return; // Don't proceed if no locations selected
    }
    onNext();
  };

  // Mock polygon coordinates for Lund area
  const lundPolygon = [
    [55.7058, 13.1910],
    [55.7200, 13.2400], 
    [55.6900, 13.2500],
    [55.6800, 13.2000],
    [55.7058, 13.1910]
  ];

  const hasSelectedLocation = selectedLocations.length > 0;
  const showError = hasSubmitted && selectedLocations.length === 0;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step2.title', 'Var söker du bostad?')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('tenant.listing.step2.subtitle', 'Ange de områden du är intresserad av att bo i')}
          </Typography>
        </div>

        {/* Search Input */}
        <div className="mb-8">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step2.searchLabel', 'Var letar du bostad?')}
            </label>
            
            <div className="relative">
              {/* Selected location tags */}
              {selectedLocations.length > 0 && (
                <div className="absolute left-12 top-1/2 transform -translate-y-1/2 flex items-center gap-2 z-10">
                  {selectedLocations.map((location, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-1 bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                    >
                      <span>{location}</span>
                      <button
                        type="button"
                        onClick={() => handleLocationRemove(location)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              
              <Search
                value={searchValue}
                onChange={handleSearchChange}
                placeholder={selectedLocations.length > 0 
                  ? t('tenant.listing.step2.addAreaPlaceholder', 'Lägg till område')
                  : t('tenant.listing.step2.searchPlaceholder', 'Sök på stad eller område')
                }
                size="lg"
                className={`${selectedLocations.length > 0 ? 'pl-32' : ''} ${showError ? 'border-red-500' : ''}`}
              />
              
              {/* Clear search value button - inside search area */}
              {searchValue && (
                <button
                  type="button"
                  onClick={clearSearchValue}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                  aria-label={t('common.clear', 'Rensa')}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Error message */}
            {showError && (
              <p className="mt-2 text-sm text-red-500">
                {t('tenant.listing.step2.error', 'Du måste välja ett område')}
              </p>
            )}

            {/* Suggestions Dropdown - Higher z-index */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 z-[60] mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleLocationSelect(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 flex items-center gap-3"
                  >
                    <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-900">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="h-96 md:h-[32rem] rounded-lg overflow-hidden border border-gray-200 mb-8 relative z-10">
          <MapContainer
            center={[55.7047, 13.1910]}
            zoom={hasSelectedLocation ? 12 : 10}
            style={{ height: '100%', width: '100%' }}
            zoomControl={true}
          >
            <TileLayer
              attribution='MapLibre | © LocationIQ © OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {/* Price markers */}
            <Marker position={[55.7200, 13.1800]}>
            </Marker>
            <Marker position={[55.6900, 13.2100]}>
            </Marker>
            
            {/* Selected area polygon */}
            {hasSelectedLocation && selectedLocations.includes('Lund') && (
              <Polygon
                positions={lundPolygon}
                pathOptions={{
                  color: '#000',
                  weight: 2,
                  fillColor: 'transparent',
                  fillOpacity: 0
                }}
              />
            )}
          </MapContainer>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <Button
            variant="tertiary"
            size="lg"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeft className="h-5 w-5" />}
            aria-label={t('common.back', 'Tillbaka')}
          />
          
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
          >
            {t('common.next', 'Nästa')}
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateTenantListingStep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep2; 