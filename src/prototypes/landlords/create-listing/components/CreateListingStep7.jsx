import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Select from '../../../../components/ui/Select';
import HintBox from '../../../../components/ui/HintBox';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep7 = ({ onNext, onPrev, formData, updateFormData }) => {
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
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Vilken typ av bostad är det?
            </Typography>
          </div>

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

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tillbaka"
          >
            <ArrowLeftIcon className="h-5 w-5 text-gray-600" />
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

CreateListingStep7.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep7; 