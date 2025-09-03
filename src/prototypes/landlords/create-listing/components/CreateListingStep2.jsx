import { ArrowRight } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import Search from '../../../../components/ui/Search';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState(formData.address || '');
  const [showAddressFields, setShowAddressFields] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  
  // Example addresses for dropdown
  const exampleAddresses = [
    { address: 'Åsdammsvägen 12, 439 65 Stråvalla', street: 'Åsdammsvägen', streetNumber: '12', postalCode: '439 65', city: 'Stråvalla' },
    { address: 'Vasagatan 25, 111 20 Stockholm', street: 'Vasagatan', streetNumber: '25', postalCode: '111 20', city: 'Stockholm' },
    { address: 'Drottninggatan 8, 411 14 Göteborg', street: 'Drottninggatan', streetNumber: '8', postalCode: '411 14', city: 'Göteborg' },
    { address: 'Storgatan 15, 211 34 Malmö', street: 'Storgatan', streetNumber: '15', postalCode: '211 34', city: 'Malmö' },
  ];

  const handleAddressChange = (e) => {
    const value = e.target.value;
    setAddress(value);
    updateFormData({ address: value });
    
    // Show dropdown when user types, hide when empty
    if (value.trim()) {
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
      setShowAddressFields(false);
    }
  };

  const handleAddressSelect = (selectedAddress) => {
    setAddress(selectedAddress.address);
    setShowDropdown(false);
    setShowAddressFields(true);
    
    // Auto-fill selected address data
    updateFormData({
      address: selectedAddress.address,
      street: selectedAddress.street,
      streetNumber: selectedAddress.streetNumber,
      postalCode: selectedAddress.postalCode,
      city: selectedAddress.city,
      municipality: '',
      apartmentNumber: '',
      floor: '',
      buildingFloors: '',
    });
  };

  const handleManualEntry = () => {
    setShowDropdown(false);
    setShowAddressFields(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && address.trim()) {
      setShowDropdown(false);
      setShowAddressFields(true);
      // Auto-fill with first example for demo
      if (exampleAddresses.length > 0) {
        handleAddressSelect(exampleAddresses[0]);
      }
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="py-8 space-y-8">
          {/* Header */}
          <SectionHeader
            title={t('landlords.createListing.step2.title')}
            description={t('landlords.createListing.step2.description')}
            descriptionVariant="text-md"
            descriptionColor="text-[var(--color-text-secondary)]"
          />

          {/* Address Search Input with Dropdown */}
          <div className="space-y-8 relative">
            <div className="relative" ref={dropdownRef}>
              <Search
                placeholder="Sök adress..."
                value={address}
                onChange={handleAddressChange}
                onKeyPress={handleKeyPress}
                size="md"
                className="rounded-xl"
              />
              
              {/* Dropdown with address suggestions */}
              {showDropdown && (
                <div className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-lg z-10 mt-1">
                  {/* Filter addresses based on search input */}
                  {exampleAddresses
                    .filter(addr => 
                      address.trim() === '' || 
                      addr.address.toLowerCase().includes(address.toLowerCase())
                    )
                    .map((addr, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-3 hover:bg-gray-10"
                        onClick={() => handleAddressSelect(addr)}
                      >
                        <div className="text-gray-900">{addr.address}</div>
                      </button>
                    ))
                  }
                  
                  {/* Manual entry option as last item - ALWAYS VISIBLE */}
                  <button
                    className="w-full text-left px-4 py-3 hover:bg-gray-10 rounded-b-lg flex items-center gap-2 hover:text-[var(--color-text-primary)] font-bold"
                    onClick={handleManualEntry}
                  >
                    <ArrowRight size={16} />
                    {t('landlords.createListing.step2.fillManually')}
                  </button>
                </div>
              )}
            </div>

            {/* Address Details Form - Show when user starts typing */}
            {showAddressFields && (
              <>
                {/* Separator */}
                <div className="my-12 border-t border-gray-30"></div>

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
                <li>Din fullständiga adress kommer inte att synas i annonsen.</li>
                <li>Du kommer inte kunna ändra adress när du har publicerat annonsen.</li>
              </ul>
            </HintBox>
          </div>
        </div>

        <SectionFooter
          onNext={handleNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
        />
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