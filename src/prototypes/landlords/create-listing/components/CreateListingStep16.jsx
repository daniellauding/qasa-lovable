import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Select from '../../../../components/ui/Select';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep16 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [maxOccupants, setMaxOccupants] = useState(formData.maxOccupants || '3');
  const [petsAllowed, setPetsAllowed] = useState(formData.petsAllowed || 'no');
  const [smokingAllowed, setSmokingAllowed] = useState(formData.smokingAllowed || 'no');
  const [wheelchairAccessible, setWheelchairAccessible] = useState(formData.wheelchairAccessible || 'no');

  const petsOptions = [
    { value: 'yes', label: 'Ja' },
    { value: 'no', label: 'Nej' },
  ];

  const smokingOptions = [
    { value: 'yes', label: 'Ja' },
    { value: 'no', label: 'Nej' },
  ];

  const wheelchairOptions = [
    { value: 'yes', label: 'Ja' },
    { value: 'no', label: 'Nej' },
  ];

  const occupantOptions = [
    { value: '', label: '-' },
    ...Array.from({ length: 30 }, (_, i) => ({
      value: String(i + 1),
      label: i === 29 ? '30 +' : String(i + 1)
    }))
  ];

  const handleMaxOccupantsChange = (value) => {
    setMaxOccupants(value);
    updateFormData({ maxOccupants: value });
  };

  const handlePetsAllowedChange = (value) => {
    setPetsAllowed(value);
    updateFormData({ petsAllowed: value });
  };

  const handleSmokingAllowedChange = (value) => {
    setSmokingAllowed(value);
    updateFormData({ smokingAllowed: value });
  };

  const handleWheelchairAccessibleChange = (value) => {
    setWheelchairAccessible(value);
    updateFormData({ wheelchairAccessible: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Regler och tillgänglighet
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Ange regler och tillgänglighet för ditt boende
            </Typography>
          </div>

          <div className="space-y-8">
            {/* Max Occupants */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hur många kan bo här?
              </label>
              <Select
                value={maxOccupants}
                onChange={handleMaxOccupantsChange}
                options={occupantOptions}
              />
            </div>

            {/* Pets Allowed */}
            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Husdjur tillåtet
              </Typography>
              <RadioGroup
                label=""
                options={petsOptions}
                variant="card"
                value={petsAllowed}
                onValueChange={handlePetsAllowedChange}
              />
            </div>

            {/* Smoking Allowed */}
            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Rökning tillåten
              </Typography>
              <RadioGroup
                label=""
                options={smokingOptions}
                variant="card"
                value={smokingAllowed}
                onValueChange={handleSmokingAllowedChange}
              />
            </div>

            {/* Wheelchair Accessible */}
            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Tillgänglig med rullstol
              </Typography>
              <RadioGroup
                label=""
                options={wheelchairOptions}
                variant="card"
                value={wheelchairAccessible}
                onValueChange={handleWheelchairAccessibleChange}
              />
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="tertiary"
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

CreateListingStep16.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep16; 