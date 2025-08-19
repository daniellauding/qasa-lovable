import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import RadioGroup from '../../../../components/ui/RadioGroup';
import { ArrowLeft } from 'lucide-react';

const CreateListingStep6 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [rentalType, setRentalType] = useState(formData.rentalType || 'whole');
  const [furnished, setFurnished] = useState(formData.furnished || '');

  const rentalTypeOptions = [
    { value: 'whole', label: 'Hela bostaden' },
    { value: 'room', label: 'Ett rum' },
  ];

  const furnishedOptions = [
    { value: 'furnished', label: 'Möblerat' },
    { value: 'partially', label: 'Delvis möblerat' },
    { value: 'unfurnished', label: 'Omöblerat' },
  ];

  const handleRentalTypeChange = (value) => {
    setRentalType(value);
    updateFormData({ rentalType: value });
  };

  const handleFurnishedChange = (value) => {
    setFurnished(value);
    updateFormData({ furnished: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <SectionHeader title="Vad vill du hyra ut?" />

          <div className="space-y-8">
            <div>
              <Typography variant="body-md" color="secondary" className="mb-4">
                Hel bostad eller rum?
              </Typography>
              <RadioGroup
                label=""
                options={rentalTypeOptions}
                variant="card"
                value={rentalType}
                onValueChange={handleRentalTypeChange}
              />
            </div>

            <div>
              <Typography variant="body-md" color="secondary" className="mb-4">
                Hyr du ut möblerat?
              </Typography>
              <RadioGroup
                label=""
                options={furnishedOptions}
                variant="card"
                value={furnished}
                onValueChange={handleFurnishedChange}
              />
            </div>
          </div>
        </div>

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tillbaka"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep6.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep6; 