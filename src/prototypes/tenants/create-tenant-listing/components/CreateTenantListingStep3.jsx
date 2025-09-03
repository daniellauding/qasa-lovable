import PropTypes from 'prop-types';
import React, { useState } from 'react';

import CheckboxGroup from '../../../../components/ui/CheckboxGroup';
import HintBox from '../../../../components/ui/HintBox';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep3 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [sharedAccommodation, setSharedAccommodation] = useState(formData.sharedAccommodation || 'all');
  const [furnishedType, setFurnishedType] = useState(formData.furnishedType || 'both');
  const [propertyTypes, setPropertyTypes] = useState(formData.propertyTypes || ['apartment']);
  const [tenantType, setTenantType] = useState(formData.tenantType || 'none');

  const sharedOptions = [
    { value: 'all', label: t('tenant.listing.step3.sharedAll', 'Spelar ingen roll (delat eller eget boende)') },
    { value: 'onlyPrivate', label: t('tenant.listing.step3.sharedPrivate', 'Eget boende') },
  ];

  const furnishedOptions = [
    { value: 'both', label: t('tenant.listing.step3.furnishedBoth', 'Båda') },
    { value: 'furnished', label: t('tenant.listing.step3.furnishedYes', 'Möblerat') },
    { value: 'unfurnished', label: t('tenant.listing.step3.furnishedNo', 'Omöblerat') },
  ];

  const propertyTypeOptions = [
    { value: 'apartment', label: t('tenant.listing.step3.apartment', 'Lägenhet') },
    { value: 'house', label: t('tenant.listing.step3.house', 'Hus') },
    { value: 'terrace_house', label: t('tenant.listing.step3.terraceHouse', 'Radhus') },
    { value: 'duplex', label: t('tenant.listing.step3.duplex', 'Parhus') },
    { value: 'other', label: t('tenant.listing.step3.other', 'Övrigt') },
  ];

  const tenantTypeOptions = [
    { value: 'none', label: t('tenant.listing.step3.tenantNone', 'Inget utav dessa') },
    { value: 'student', label: t('tenant.listing.step3.tenantStudent', 'Student') },
    { value: 'senior', label: t('tenant.listing.step3.tenantSenior', 'Pensionär') },
  ];

  const handleSharedChange = (value) => {
    setSharedAccommodation(value);
    updateFormData({ sharedAccommodation: value });
  };

  const handleFurnishedChange = (value) => {
    setFurnishedType(value);
    updateFormData({ furnishedType: value });
  };

  const handlePropertyTypeChange = (newTypes) => {
    setPropertyTypes(newTypes);
    updateFormData({ propertyTypes: newTypes });
  };

  const handleTenantTypeChange = (value) => {
    setTenantType(value);
    updateFormData({ tenantType: value });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <SectionHeader 
          title={t('tenant.listing.step3.title', 'Vad vill du hyra?')}
          description={t('tenant.listing.step3.subtitle', 'Berätta för hyresvärden vad du är ute efter. Dina krav kommer att visas i din annons.')}
          titleVariant="h1"
          titleColor="text-gray-900"
          descriptionColor="text-gray-600"
          className="mb-8"
        />

        <div className="space-y-8">
          {/* Shared vs Private */}
          <div>
            <Typography variant="h5" className="text-gray-900 mb-4">
              {t('tenant.listing.step3.sharedQuestion', 'Vill du hyra ett eget eller delat boende?')}
            </Typography>
            <RadioGroup
              options={sharedOptions}
              variant="card"
              value={sharedAccommodation}
              onValueChange={handleSharedChange}
            />
            <HintBox className="mt-3">
              {t('tenant.listing.step3.sharedInfo', 'Ett delat boende innebär att du kommer att dela bostaden med andra personer.')}
            </HintBox>
          </div>

          {/* Furnished */}
          <div>
            <Typography variant="h5" className="text-gray-900 mb-4">
              {t('tenant.listing.step3.furnishedQuestion', 'Vill du hyra möblerat eller omöblerat?')}
            </Typography>
            <RadioGroup
              options={furnishedOptions}
              variant="card"
              value={furnishedType}
              onValueChange={handleFurnishedChange}
            />
          </div>

          {/* Property Types */}
          <div>
            <CheckboxGroup
              label={t('tenant.listing.step3.propertyTypesQuestion', 'Vilken typ av bostad letar du efter?')}
              options={propertyTypeOptions}
              value={propertyTypes}
              onValueChange={handlePropertyTypeChange}
              variant="card"
            />
            <HintBox className="mt-3">
              {t('tenant.listing.step3.propertyTypesInfo', 'Övrigt kan vara andra typer av bostäder som inte visas här, exempelvis husbåt.')}
            </HintBox>
          </div>

          {/* Tenant Type */}
          {/* <div>
            <Typography variant="h5" className="text-gray-900 mb-4">
              {t('tenant.listing.step3.tenantTypeQuestion', 'Är du pensionär eller student?')}
            </Typography>
            <RadioGroup
              options={tenantTypeOptions}
              variant="card"
              value={tenantType}
              onValueChange={handleTenantTypeChange}
            />
            <HintBox className="mt-3">
              {t('tenant.listing.step3.tenantTypeInfo', 'Om du är student eller pensionär kan du ha rätt till ett särskilt hyresavtal')}
            </HintBox>
          </div> */}
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

CreateTenantListingStep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep3; 