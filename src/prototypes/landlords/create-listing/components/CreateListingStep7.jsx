import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Select from '../../../../components/ui/Select';
import Typography from '../../../../components/ui/Typography';

const CreateListingStep7 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [size, setSize] = useState(formData.size || '');
  const [rooms, setRooms] = useState(formData.rooms || '');
  const [bedrooms, setBedrooms] = useState(formData.bedrooms || '');

  const roomOptions = [
    { value: '', label: '-' },
    { value: '1', label: '1 rum' },
    { value: '1.5', label: '1,5 rum' },
    { value: '2', label: '2 rum' },
    { value: '2.5', label: '2,5 rum' },
    { value: '3', label: '3 rum' },
    { value: '3.5', label: '3,5 rum' },
    { value: '4', label: '4 rum' },
    { value: '4.5', label: '4,5 rum' },
    { value: '5', label: '5 rum' },
    { value: '6', label: '6 rum' },
    { value: '7', label: '7 rum' },
    { value: '8', label: '8 rum' },
    { value: '9', label: '9 rum' },
    { value: '10', label: '10 rum' },
  ];

  const bedroomOptions = [
    { value: '', label: '-' },
    { value: '1', label: '1 sovrum' },
    { value: '2', label: '2 sovrum' },
    { value: '3', label: '3 sovrum' },
    { value: '4', label: '4 sovrum' },
    { value: '5', label: '5 sovrum' },
    { value: '6', label: '6 sovrum' },
    { value: '7', label: '7 sovrum' },
    { value: '8', label: '8 sovrum' },
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
            <SectionHeader title="Hur stor är bostaden?" />
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Storlek
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
                Antal rum
              </label>
              <Select
                value={rooms}
                onValueChange={handleRoomsChange}
                options={roomOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Antal sovrum <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={bedrooms}
                onValueChange={handleBedroomsChange}
                options={bedroomOptions}
              />
              <Typography variant="body-sm" color="secondary" className="mt-2">
                Sovrum är inkluderade i totalt antal rum
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