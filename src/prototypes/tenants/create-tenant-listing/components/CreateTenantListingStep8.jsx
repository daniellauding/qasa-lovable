import { ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep8 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [maxRent, setMaxRent] = useState(formData.maxRent || '');

  const handleMaxRentChange = (e) => {
    setMaxRent(e.target.value);
    updateFormData({ maxRent: e.target.value });
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-left mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step8.title', 'Vilken hyra kan du maximalt betala?')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('tenant.listing.step8.subtitle', 'Ange din maxhyra per månad. Detta hjälper hyresvärdar att se om ni matchar.')}
          </Typography>
        </div>

        <div className="space-y-6">
          {/* Max Rent Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step8.maxRentLabel', 'Maxhyra per månad')}
            </label>
            <Input
              type="number"
              placeholder="15000"
              value={maxRent}
              onChange={handleMaxRentChange}
              suffix="kr/månad"
            />
          </div>

          {/* Info Card */}
          <HintBox>
            <div className="flex items-start gap-3">
              <img
                src="https://staging.qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=96&q=75&dpl=dpl_9cG1Lu7hEDiqjcTQQ2DyKLBuB8au"
                alt="Create listing illustration"
                className="w-10 h-10"
              />
              <div>
                <Typography variant="body-md" className="text-gray-900 font-medium">
                  {t('tenant.listing.step8.noDepositTitle', 'Ingen deposition')}
                </Typography>
                <Typography variant="body-sm" className="text-gray-600 mt-1">
                  {t('tenant.listing.step8.noDepositMessage', 'Hos Qasa behöver du inte betala deposition när du hyr en bostad.')}
                </Typography>
              </div>
            </div>
          </HintBox>
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
            {t('tenant.listing.step8.complete', 'Skapa annons')}
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateTenantListingStep8.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep8; 