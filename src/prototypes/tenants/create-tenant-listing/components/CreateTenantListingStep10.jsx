import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep10 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [currentHousing, setCurrentHousing] = useState(formData.currentHousing || 'own_condominium');

  const housingOptions = [
    { value: 'first_hand_renting', label: t('tenant.listing.step10.firstHand', 'Första hand') },
    { value: 'second_hand_renting', label: t('tenant.listing.step10.secondHand', 'Andra hand') },
    { value: 'living_with_family', label: t('tenant.listing.step10.livingWithFamily', 'Bor hos familj') },
    { value: 'own_condominium', label: t('tenant.listing.step10.ownCondominium', 'Bostadsrätt') },
    { value: 'own_house', label: t('tenant.listing.step10.ownHouse', 'Eget hus') },
    { value: 'student_housing', label: t('tenant.listing.step10.studentHousing', 'Studentboende') },
    { value: 'co_living', label: t('tenant.listing.step10.coLiving', 'Inneboende') },
    { value: 'other_agreement_type', label: t('tenant.listing.step10.otherAccommodation', 'Annan boendeform') },
  ];

  const handleHousingChange = (value) => {
    setCurrentHousing(value);
    updateFormData({ currentHousing: value });
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
            {t('tenant.listing.step10.title', 'Hur bor du idag?')}
          </Typography>
        </div>

        <div className="space-y-6">
          <RadioGroup
            options={housingOptions}
            variant="card"
            value={currentHousing}
            onValueChange={handleHousingChange}
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

CreateTenantListingStep10.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep10; 