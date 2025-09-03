import { ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import TextArea from '../../../../components/ui/TextArea';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep12 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [movingReason, setMovingReason] = useState(formData.movingReason || 'det är hemligt');

  const handleReasonChange = (e) => {
    const value = e.target.value;
    setMovingReason(value);
    updateFormData({ movingReason: value });
  };

  const handleNext = () => {
    onNext();
  };

  const characterCount = movingReason.length;
  const maxLength = 240;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-left mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step12.title', 'Vad är din anledning till att flytta?')}
          </Typography>
        </div>

        <div className="space-y-6">
          <div>
            <TextArea
              placeholder={t('tenant.listing.step12.reasonPlaceholder', 'Exempel: Jag har fått jobb i Stockholm')}
              value={movingReason}
              onChange={handleReasonChange}
              maxLength={maxLength}
              rows={4}
            />
            <div className="text-sm text-gray-500 mt-2">
              {characterCount} / {maxLength}
            </div>
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
            variant="secondary"
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

CreateTenantListingStep12.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep12; 