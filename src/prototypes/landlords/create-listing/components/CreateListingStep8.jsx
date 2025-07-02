import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep8 = ({ onNext, onPrev, formData, updateFormData }) => {
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
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Hur stor är bostaden?
            </Typography>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  m²
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Antal rum
              </label>
              <Select
                value={rooms}
                onValueChange={handleRoomsChange}
                options={roomOptions}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Antal sovrum <span className="text-gray-400">(Valfritt)</span>
              </label>
              <Select
                value={bedrooms}
                onValueChange={handleBedroomsChange}
                options={bedroomOptions}
              />
              <Typography variant="body-sm" className="text-gray-500 mt-2">
                Sovrum är inkluderade i totalt antal rum
              </Typography>
            </div>
          </div>
        </div>

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
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep8.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep8; 