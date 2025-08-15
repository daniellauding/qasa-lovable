import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import DatePicker from '../../../../components/ui/DatePicker';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep5 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [moveInType, setMoveInType] = useState(formData.moveInType || 'indeterminate');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || null);
  const [moveOutType, setMoveOutType] = useState(formData.moveOutType || 'indeterminate');
  const [moveOutDate, setMoveOutDate] = useState(formData.moveOutDate || null);

  const moveInOptions = [
    { value: 'indeterminate', label: t('tenant.listing.step5.moveInASAP', 'Snarast möjligt') },
    { value: 'exact_date', label: moveInDate ? moveInDate.toISOString().split('T')[0] : t('tenant.listing.step5.moveInChooseDate', 'Välj datum') },
  ];

  const moveOutOptions = [
    { value: 'indeterminate', label: t('tenant.listing.step5.moveOutIndefinite', 'Tillsvidare') },
    { value: 'exact_date', label: moveOutDate ? moveOutDate.toISOString().split('T')[0] : t('tenant.listing.step5.moveOutChooseDate', 'Välj datum') },
  ];

  const handleMoveInTypeChange = (value) => {
    setMoveInType(value);
    updateFormData({ moveInType: value });
    
    if (value === 'exact_date' && !moveInDate) {
      // Set default date to tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setMoveInDate(tomorrow);
      updateFormData({ moveInDate: tomorrow });
    }
  };

  const handleMoveInDateChange = (date) => {
    setMoveInDate(date);
    updateFormData({ moveInDate: date });
  };

  const handleMoveOutTypeChange = (value) => {
    setMoveOutType(value);
    updateFormData({ moveOutType: value });
    
    if (value === 'exact_date' && !moveOutDate) {
      // Set default date to 1 month after move-in
      const futureDate = moveInDate ? new Date(moveInDate) : new Date();
      futureDate.setMonth(futureDate.getMonth() + 1);
      setMoveOutDate(futureDate);
      updateFormData({ moveOutDate: futureDate });
    }
  };

  const handleMoveOutDateChange = (date) => {
    setMoveOutDate(date);
    updateFormData({ moveOutDate: date });
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
            {t('tenant.listing.step5.title', 'När vill du hyra?')}
          </Typography>
        </div>

        <div className="space-y-8">
          {/* Move In */}
          <div>
            <Typography variant="h3" className="text-gray-900 mb-4">
              {t('tenant.listing.step5.moveInLabel', 'Inflytt')}
            </Typography>
            <RadioGroup
              options={moveInOptions}
              variant="card"
              value={moveInType}
              onValueChange={handleMoveInTypeChange}
            />
            
            {moveInType === 'exact_date' && (
              <div className="mt-4">
                <DatePicker
                  label=""
                  value={moveInDate}
                  onChange={handleMoveInDateChange}
                  placeholder={t('tenant.listing.step5.selectDate', 'Välj datum')}
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          {/* Move Out */}
          <div>
            <Typography variant="h3" className="text-gray-900 mb-4">
              {t('tenant.listing.step5.moveOutLabel', 'Utflytt')}
            </Typography>
            <RadioGroup
              options={moveOutOptions}
              variant="card"
              value={moveOutType}
              onValueChange={handleMoveOutTypeChange}
            />
            
            {moveOutType === 'exact_date' && (
              <div className="mt-4">
                <DatePicker
                  label=""
                  value={moveOutDate}
                  onChange={handleMoveOutDateChange}
                  placeholder={t('tenant.listing.step5.selectDate', 'Välj datum')}
                  minDate={moveInDate || new Date()}
                />
              </div>
            )}
          </div>
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

CreateTenantListingStep5.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep5; 