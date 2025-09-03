import PropTypes from 'prop-types';
import React, { useState } from 'react';
import HintBox from '../../../../components/ui/HintBox';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Select from '../../../../components/ui/Select';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep6 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [propertyType, setPropertyType] = useState(formData.propertyType || '');
  const [ownership, setOwnership] = useState(formData.ownership || '');

  const propertyTypeOptions = [
    { value: 'apartment', label: t('landlords.createListing.step6.propertyTypes.apartment') },
    { value: 'house', label: t('landlords.createListing.step6.propertyTypes.house') },
    { value: 'terrace', label: t('landlords.createListing.step6.propertyTypes.terrace') },
    { value: 'cottage', label: t('landlords.createListing.step6.propertyTypes.cottage') },
    { value: 'duplex', label: t('landlords.createListing.step6.propertyTypes.duplex') },
    { value: 'corridor', label: t('landlords.createListing.step6.propertyTypes.corridor') },
    { value: 'loft', label: t('landlords.createListing.step6.propertyTypes.loft') },
    { value: 'other', label: t('landlords.createListing.step6.propertyTypes.other') },
  ];

  const ownershipOptions = [
    { value: '', label: t('landlords.createListing.step6.ownershipPlaceholder') },
    { value: 'condominium', label: t('landlords.createListing.step6.ownership.condominium') },
    { value: 'proprietary', label: t('landlords.createListing.step6.ownership.proprietary') },
    { value: 'tenancy', label: t('landlords.createListing.step6.ownership.tenancy') },
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
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="py-8 space-y-8">
          <SectionHeader title={t('landlords.createListing.step6.title')} />

          <div className="space-y-6">
            <div className="space-y-3">
              <RadioGroup
                label=""
                options={propertyTypeOptions}
                variant="card"
                value={propertyType}
                onValueChange={handlePropertyTypeChange}
              />

              <HintBox>
                {t('landlords.createListing.step6.propertyTypeHint')}
              </HintBox>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('landlords.createListing.step6.ownershipLabel')}
              </label>
              <Select
                value={ownership}
                onValueChange={handleOwnershipChange}
                options={ownershipOptions}
              />
              <HintBox className="mt-2">
                {t('landlords.createListing.step6.ownershipHint')}
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