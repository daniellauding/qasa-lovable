import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep3 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [localFormData, setLocalFormData] = useState({
    address: formData.address || 'Åsdammsvägen, 439 65 Stråvalla, Sverige',
    street: formData.street || 'Åsdammsvägen',
    streetNumber: formData.streetNumber || '',
    postalCode: formData.postalCode || '439 65',
    city: formData.city || 'Stråvalla',
    municipality: formData.municipality || '',
    apartmentNumber: formData.apartmentNumber || '',
    floor: formData.floor || '',
    buildingFloors: formData.buildingFloors || '',
  });

  const [errors, setErrors] = useState({
    streetNumber: !formData.streetNumber ? 'Det här fältet är obligatoriskt' : '',
  });

  const handleInputChange = (field, value) => {
    setLocalFormData(prev => ({ ...prev, [field]: value }));
    updateFormData({ [field]: value });
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleNext = () => {
    // Validate required fields
    const newErrors = {};
    if (!localFormData.streetNumber.trim()) {
      newErrors.streetNumber = 'Det här fältet är obligatoriskt';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    onNext();
  };

  const isNextDisabled = Object.values(errors).some(error => error !== '') || !localFormData.streetNumber.trim();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Vilken adress har bostaden?
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Vi behöver din fullständiga adress för att kunna visa ditt hem på en karta. Endast gatunamnet syns i annonsen.
            </Typography>
          </div>

          {/* Address Search Input - Read Only */}
          <div className="space-y-4">
            <div className="relative">
              <Input
                value={localFormData.address}
                readOnly
                className="w-full pl-10 bg-gray-50"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="text-gray-400"
                >
                  <path d="m21 21-4.34-4.34"></path>
                  <circle cx="11" cy="11" r="8"></circle>
                </svg>
              </div>
            </div>

            {/* Separator */}
            <div className="border-t border-gray-200 my-6"></div>

            {/* Address Details Form */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Street */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gata
                </label>
                <Input
                  value={localFormData.street}
                  onChange={(e) => handleInputChange('street', e.target.value)}
                />
              </div>

              {/* Street Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gatunummer
                </label>
                <Input
                  value={localFormData.streetNumber}
                  onChange={(e) => handleInputChange('streetNumber', e.target.value)}
                  error={!!errors.streetNumber}
                />
                {errors.streetNumber && (
                  <Typography variant="body-sm" className="text-red-600 mt-1">
                    {errors.streetNumber}
                  </Typography>
                )}
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postnummer
                </label>
                <Input
                  value={localFormData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stad
                </label>
                <Input
                  value={localFormData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                />
              </div>

              {/* Municipality */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Kommun <span className="text-gray-400">(Valfritt)</span>
                </label>
                <Input
                  value={localFormData.municipality}
                  onChange={(e) => handleInputChange('municipality', e.target.value)}
                />
              </div>

              {/* Apartment Number */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Lägenhetsnummer <span className="text-gray-400">(Valfritt)</span>
                </label>
                <Input
                  value={localFormData.apartmentNumber}
                  onChange={(e) => handleInputChange('apartmentNumber', e.target.value)}
                />
              </div>

              {/* Floor */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Våning <span className="text-gray-400">(Valfritt)</span>
                </label>
                <Input
                  type="number"
                  step="1"
                  value={localFormData.floor}
                  onChange={(e) => handleInputChange('floor', e.target.value)}
                />
              </div>

              {/* Building Floors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Våningar i byggnaden <span className="text-gray-400">(Valfritt)</span>
                </label>
                <Input
                  type="number"
                  step="1"
                  value={localFormData.buildingFloors}
                  onChange={(e) => handleInputChange('buildingFloors', e.target.value)}
                />
              </div>
            </div>

            {/* Info box */}
            <div className="bg-gray-50 rounded-lg p-4 mt-6">
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Din fullständiga adress kommer inte att synas i annonsen.</li>
                <li>• Du kommer inte kunna ändra adress när du har publicerat annonsen.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="transparent"
            size="md"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeftIcon className="h-5 w-5" />}
            aria-label="Tillbaka"
          />
          
          <Button
            variant="primary"
            size="md"
            onClick={handleNext}
            disabled={isNextDisabled}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep3; 