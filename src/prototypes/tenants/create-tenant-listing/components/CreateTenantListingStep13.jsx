import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import TextArea from '../../../../components/ui/TextArea';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep13 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [bioLived, setBioLived] = useState(formData.bioLived || 'aa');

  const handleBioLivedChange = (e) => {
    const value = e.target.value;
    setBioLived(value);
    updateFormData({ bioLived: value });
  };

  const handleNext = () => {
    onNext();
  };

  const characterCount = bioLived.length;
  const maxLength = 160;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step13.title', 'Var har du tidigare bott?')}
          </Typography>
        </div>

        <div className="space-y-6">
          <div>
            <TextArea
              placeholder={t('tenant.listing.step13.bioLivedPlaceholder', 'Exempel: Jag har bott i Barcelona och ...')}
              value={bioLived}
              onChange={handleBioLivedChange}
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

CreateTenantListingStep13.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep13; 