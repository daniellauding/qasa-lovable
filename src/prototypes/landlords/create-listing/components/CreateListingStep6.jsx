import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Select from '../../../../components/ui/Select';
import HintBox from '../../../../components/ui/HintBox';

const CreateListingStep6 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [propertyType, setPropertyType] = useState(formData.propertyType || '');
  const [ownership, setOwnership] = useState(formData.ownership || '');

  const propertyTypeOptions = [
    { value: 'apartment', label: 'Lägenhet' },
    { value: 'house', label: 'Villa' },
    { value: 'terrace', label: 'Radhus' },
    { value: 'cottage', label: 'Stuga' },
    { value: 'duplex', label: 'Parhus' },
    { value: 'corridor', label: 'Korridorsrum' },
    { value: 'loft', label: 'Loftgångshus' },
    { value: 'other', label: 'Övrigt' },
  ];

  const ownershipOptions = [
    { value: '', label: 'Ange bostadsform' },
    { value: 'condominium', label: 'Bostadsrätt' },
    { value: 'proprietary', label: 'Villa eller äganderätt' },
    { value: 'tenancy', label: 'Hyresrätt' },
  ];

  const handlePropertyTypeChange = (value) => {
    setPropertyType(value);
    updateFormData({ propertyType: value });
  };

  const handleOwnershipChange = (value) => {
    setOwnership(value);
    updateFormData({ ownership: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <SectionHeader title="Vilken typ av bostad är det?" />

          <div className="space-y-8">
            <RadioGroup
              label=""
              options={propertyTypeOptions}
              variant="card"
              value={propertyType}
              onValueChange={handlePropertyTypeChange}
            />

            {propertyType === 'other' && (
              <HintBox>
                Välj ''Övrigt'' om ingen av alternativen ovan matchar din typ av bostad
              </HintBox>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bostadsform
              </label>
              <Select
                value={ownership}
                onValueChange={handleOwnershipChange}
                options={ownershipOptions}
              />
              <HintBox className="mt-2">
                Informationen kommer inte att visas i annonsen, men finns här så att vi kan hjälpa dig skriva ett korrekt hyresavtal när du är redo.
              </HintBox>
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