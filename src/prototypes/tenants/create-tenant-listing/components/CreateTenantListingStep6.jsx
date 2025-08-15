import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import CheckboxGroup from '../../../../components/ui/CheckboxGroup';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep6 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [requirements, setRequirements] = useState(formData.requirements || []);

  const requirementOptions = [
    { value: 'wheelchairAccessible', label: t('tenant.listing.step6.wheelchairAccessible', 'Tillgänglig med rullstol') },
    { value: 'pets', label: t('tenant.listing.step6.petsAllowed', 'Husdjur tillåtet') },
    { value: 'smoker', label: t('tenant.listing.step6.smokingAllowed', 'Rökning tillåten') },
  ];

  const handleRequirementChange = (newRequirements) => {
    setRequirements(newRequirements);
    updateFormData({ requirements: newRequirements });
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
            {t('tenant.listing.step6.title', 'Har du några krav på bostaden?')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('tenant.listing.step6.subtitle', 'Markera dina strikta krav.')}
          </Typography>
        </div>

        <div className="space-y-6">
          <CheckboxGroup
            label={t('tenant.listing.step6.preferencesLabel', 'Preferenser')}
            options={requirementOptions}
            value={requirements}
            onValueChange={handleRequirementChange}
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
            icon={<ArrowLeft className="h-5 w-5" />}
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

CreateTenantListingStep6.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep6; 