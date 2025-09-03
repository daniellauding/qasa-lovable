import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Select from '../../../../components/ui/Select';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep4 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [numberOfTenants, setNumberOfTenants] = useState(formData.numberOfTenants || '');
  const [minimumRooms, setMinimumRooms] = useState(formData.minimumRooms || '');
  const [minimumSquareMeters, setMinimumSquareMeters] = useState(formData.minimumSquareMeters || '');

  const tenantOptions = [
    { value: '', label: t('tenant.listing.step4.tenantsPlaceholder', 'Ange hur många ni är som söker bostad') },
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' },
  ];

  const roomOptions = [
    { value: '', label: t('tenant.listing.step4.roomsPlaceholder', 'Välj antal rum') },
    { value: '1', label: '1+' },
    { value: '2', label: '2+' },
    { value: '3', label: '3+' },
    { value: '4', label: '4+' },
    { value: '5', label: '5+' },
    { value: '6', label: '6+' },
    { value: '7', label: '7+' },
  ];

  const handleTenantsChange = (value) => {
    setNumberOfTenants(value);
    updateFormData({ numberOfTenants: value });
  };

  const handleRoomsChange = (value) => {
    setMinimumRooms(value);
    updateFormData({ minimumRooms: value });
  };

  const handleSquareMetersChange = (e) => {
    const value = e.target.value;
    setMinimumSquareMeters(value);
    updateFormData({ minimumSquareMeters: value });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <SectionHeader 
          title={t('tenant.listing.step4.title', 'Hur stort hem letar du efter?')}
          titleVariant="h1"
          titleColor="text-gray-900"
          className="mb-8"
        />

        <div className="space-y-6">
          {/* Number of Tenants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step4.tenantsLabel', 'Antal hyresgäster')}
            </label>
            <Select
              value={numberOfTenants}
              onValueChange={handleTenantsChange}
              options={tenantOptions}
            />
          </div>

          {/* Minimum Rooms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step4.roomsLabel', 'Antal rum (minst)')}
            </label>
            <Select
              value={minimumRooms}
              onValueChange={handleRoomsChange}
              options={roomOptions}
            />
          </div>

          {/* Minimum Square Meters */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step4.squareMetersLabel', 'Kvadratmeter (minst)')}
            </label>
            <div className="relative">
              <Input
                placeholder={t('tenant.listing.step4.squareMetersPlaceholder', 'Ange minsta storlek')}
                value={minimumSquareMeters}
                onChange={handleSquareMetersChange}
                className="pr-12"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500 text-sm">m²</span>
              </div>
            </div>
          </div>
        </div>

        <SectionFooter 
          onNext={handleNext}
          onPrev={onPrev}
          nextText={t('common.next', 'Nästa')}
          prevText={t('common.back', 'Tillbaka')}
          className="mt-8"
        />
      </div>
    </div>
  );
};

CreateTenantListingStep4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep4; 