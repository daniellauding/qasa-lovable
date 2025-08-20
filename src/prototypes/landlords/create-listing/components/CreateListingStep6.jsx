import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import RadioGroup from '../../../../components/ui/RadioGroup';

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

CreateListingStep6.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep6; 