import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Select from '../../../../components/ui/Select';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep7 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [size, setSize] = useState(formData.size || '');
  const [rooms, setRooms] = useState(formData.rooms || '');
  const [bedrooms, setBedrooms] = useState(formData.bedrooms || '');

  const roomOptions = [
    { value: '', label: '-' },
    { value: '1', label: t('landlords.createListing.step7.roomOptions.1') || '1 rum' },
    { value: '1.5', label: t('landlords.createListing.step7.roomOptions.1.5') || '1,5 rum' },
    { value: '2', label: t('landlords.createListing.step7.roomOptions.2') || '2 rum' },
    { value: '2.5', label: t('landlords.createListing.step7.roomOptions.2.5') || '2,5 rum' },
    { value: '3', label: t('landlords.createListing.step7.roomOptions.3') || '3 rum' },
    { value: '3.5', label: t('landlords.createListing.step7.roomOptions.3.5') || '3,5 rum' },
    { value: '4', label: t('landlords.createListing.step7.roomOptions.4') || '4 rum' },
    { value: '4.5', label: t('landlords.createListing.step7.roomOptions.4.5') || '4,5 rum' },
    { value: '5', label: t('landlords.createListing.step7.roomOptions.5') || '5 rum' },
    { value: '6', label: t('landlords.createListing.step7.roomOptions.6') || '6 rum' },
    { value: '7', label: t('landlords.createListing.step7.roomOptions.7') || '7 rum' },
    { value: '8', label: t('landlords.createListing.step7.roomOptions.8') || '8 rum' },
    { value: '9', label: t('landlords.createListing.step7.roomOptions.9') || '9 rum' },
    { value: '10', label: t('landlords.createListing.step7.roomOptions.10') || '10 rum' },
  ];

  const bedroomOptions = [
    { value: '', label: '-' },
    { value: '1', label: t('landlords.createListing.step7.bedroomOptions.1') || '1 sovrum' },
    { value: '2', label: t('landlords.createListing.step7.bedroomOptions.2') || '2 sovrum' },
    { value: '3', label: t('landlords.createListing.step7.bedroomOptions.3') || '3 sovrum' },
    { value: '4', label: t('landlords.createListing.step7.bedroomOptions.4') || '4 sovrum' },
    { value: '5', label: t('landlords.createListing.step7.bedroomOptions.5') || '5 sovrum' },
    { value: '6', label: t('landlords.createListing.step7.bedroomOptions.6') || '6 sovrum' },
    { value: '7', label: t('landlords.createListing.step7.bedroomOptions.7') || '7 sovrum' },
    { value: '8', label: t('landlords.createListing.step7.bedroomOptions.8') || '8 sovrum' },
  ];

  const handleSizeChange = (e) => {
    setSize(e.target.value);
    updateFormData({ size: e.target.value });
  };

  const handleRoomsChange = (value) => {
    setRooms(value);
    updateFormData({ rooms: value });
  };

  const handleBedroomsChange = (value) => {
    setBedrooms(value);
    updateFormData({ bedrooms: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <SectionHeader title={t('landlords.createListing.step7.title')} />
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('landlords.createListing.step7.sizeLabel')}
              </label>
              <div className="relative">
                <Input
                  type="number"
                  step="1"
                  value={size}
                  onChange={handleSizeChange}
                  className="pr-12"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
                  m²
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('landlords.createListing.step7.roomsLabel')}
              </label>
              <Select
                value={rooms}
                onValueChange={handleRoomsChange}
                options={roomOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('landlords.createListing.step7.bedroomsLabel')} <span className="text-gray-400">{t('landlords.createListing.step7.bedroomsOptional')}</span>
              </label>
              <Select
                value={bedrooms}
                onValueChange={handleBedroomsChange}
                options={bedroomOptions}
              />
              <Typography variant="body-sm" color="secondary" className="mt-2">
                {t('landlords.createListing.step7.bedroomsHint')}
              </Typography>
            </div>
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
        />
      </div>
    </div>
  );
};

CreateListingStep7.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep7; 