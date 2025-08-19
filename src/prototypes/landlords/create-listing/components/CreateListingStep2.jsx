import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Input from '../../../../components/ui/Input';
import Search from '../../../../components/ui/Search';
import HintBox from '../../../../components/ui/HintBox';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState(formData.address || '');
  const [showAddressFields, setShowAddressFields] = useState(true);

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    updateFormData({ address: value });
    
    // Show address fields immediately when user types something (for demo)
    if (value.trim() && !showAddressFields) {
      setShowAddressFields(true);
      // Auto-fill demo data
      updateFormData({
        address: value,
        street: 'Åsdammsvägen',
        streetNumber: '',
        postalCode: '439 65',
        city: 'Stråvalla',
        municipality: '',
        apartmentNumber: '',
        floor: '',
        buildingFloors: '',
      });
    } else if (!value.trim()) {
      setShowAddressFields(false);
    }
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <SectionHeader
            title={t('landlords.createListing.step2.title')}
            description={t('landlords.createListing.step2.description')}
          />

          {/* Address Search Input */}
          <div className="space-y-4">
            <Search
              placeholder="Sök adress..."
              value={address}
              onChange={handleAddressChange}
              size="lg"
            />

            {/* Address Details Form - Show when user starts typing */}
            {showAddressFields && (
              <>
                {/* Separator */}
                <div className="my-6"></div>

                {/* Address Details Form */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Street */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gata
                    </label>
                    <Input
                      value={formData.street || ''}
                      onChange={(e) => updateFormData({ street: e.target.value })}
                    />
                  </div>

                  {/* Street Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gatunummer
                    </label>
                    <Input
                      value={formData.streetNumber || ''}
                      onChange={(e) => updateFormData({ streetNumber: e.target.value })}
                      placeholder="12"
                    />
                  </div>

                  {/* Postal Code */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postnummer
                    </label>
                    <Input
                      value={formData.postalCode || ''}
                      onChange={(e) => updateFormData({ postalCode: e.target.value })}
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stad
                    </label>
                    <Input
                      value={formData.city || ''}
                      onChange={(e) => updateFormData({ city: e.target.value })}
                    />
                  </div>

                  {/* Municipality */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Kommun <span className="text-gray-400">(Valfritt)</span>
                    </label>
                    <Input
                      value={formData.municipality || ''}
                      onChange={(e) => updateFormData({ municipality: e.target.value })}
                    />
                  </div>

                  {/* Apartment Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lägenhetsnummer <span className="text-gray-400">(Valfritt)</span>
                    </label>
                    <Input
                      value={formData.apartmentNumber || ''}
                      onChange={(e) => updateFormData({ apartmentNumber: e.target.value })}
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
                      value={formData.floor || ''}
                      onChange={(e) => updateFormData({ floor: e.target.value })}
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
                      value={formData.buildingFloors || ''}
                      onChange={(e) => updateFormData({ buildingFloors: e.target.value })}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Info box */}
            <HintBox>
              <ul className="space-y-2">
                <li>• Din fullständiga adress kommer inte att synas i annonsen.</li>
                <li>• Du kommer inte kunna ändra adress när du har publicerat annonsen.</li>
              </ul>
            </HintBox>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white flex items-center justify-between">
          <Button
            variant="tertiary"
            size="lg"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeft className="h-5 w-5" />}
            aria-label="Tillbaka"
          />
          
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep2; 