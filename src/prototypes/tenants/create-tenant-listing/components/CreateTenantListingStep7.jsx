import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import CheckboxGroup from '../../../../components/ui/CheckboxGroup';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep7 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [preferences, setPreferences] = useState(formData.preferences || ['balcony']);

  const preferenceOptions = [
    { value: 'balcony', label: t('tenant.listing.step7.balcony', 'Balkong') },
    { value: 'storage', label: t('tenant.listing.step7.storage', 'Förråd') },
    { value: 'dishWasher', label: t('tenant.listing.step7.dishWasher', 'Diskmaskin') },
    { value: 'washingMachine', label: t('tenant.listing.step7.washingMachine', 'Tvättmaskin') },
    { value: 'tumbleDryer', label: t('tenant.listing.step7.tumbleDryer', 'Torktumlare') },
    { value: 'bathtub', label: t('tenant.listing.step7.bathtub', 'Badkar') },
    { value: 'bikeRoom', label: t('tenant.listing.step7.bikeRoom', 'Cykelrum') },
    { value: 'parking', label: t('tenant.listing.step7.parking', 'Parkering') },
    { value: 'recycling', label: t('tenant.listing.step7.recycling', 'Återvinningsrum') },
    { value: 'inhomeSauna', label: t('tenant.listing.step7.inhomeSauna', 'Egen bastu') },
  ];

  const handlePreferenceChange = (newPreferences) => {
    setPreferences(newPreferences);
    updateFormData({ preferences: newPreferences });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step7.title', 'Har du några särskilda preferenser?')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('tenant.listing.step7.subtitle', 'Markera de saker som är viktiga för dig.')}
          </Typography>
        </div>

        <div className="space-y-6">
          <CheckboxGroup
            label={t('tenant.listing.step7.preferencesLabel', 'Preferenser')}
            options={preferenceOptions}
            value={preferences}
            onValueChange={handlePreferenceChange}
            variant="card"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-8">
          <Button
            variant="tertiary"
            size="lg"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeftIcon className="h-5 w-5" />}
            aria-label={t('common.back', 'Tillbaka')}
          />
          
          <Button
            variant="primary"
            size="lg"
            onClick={handleNext}
          >
            {t('common.next', 'Nästa')}
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateTenantListingStep7.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep7; 