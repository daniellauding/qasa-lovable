import { EyeOff, HousePlus } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep13 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [landlordName, setLandlordName] = useState(formData.landlordName || '');
  const [landlordPhone, setLandlordPhone] = useState(formData.landlordPhone || '');

  const handleLandlordNameChange = (e) => {
    const value = e.target.value;
    setLandlordName(value);
    updateFormData({ landlordName: value });
  };

  const handleLandlordPhoneChange = (e) => {
    const value = e.target.value;
    setLandlordPhone(value);
    updateFormData({ landlordPhone: value });
  };

  const handleNext = () => {
    onNext();
  };

  const handleSkip = () => {
    // Clear the reference data and proceed
    setLandlordName('');
    setLandlordPhone('');
    updateFormData({ landlordName: '', landlordPhone: '' });
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <SectionHeader 
          title={t('tenant.listing.step13.title')}
          description={t('tenant.listing.step13.subtitle')}
          titleVariant="h1"
          titleColor="text-gray-900"
          descriptionColor="text-gray-600"
          className="mb-8"
        />

        <form className="space-y-6">
          {/* Landlord Company Name */}
          <div>
            <label htmlFor="landlordName" className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step13.landlordNameLabel')}
            </label>
            <Input
              id="landlordName"
              type="text"
              value={landlordName}
              onChange={handleLandlordNameChange}
              placeholder={t('tenant.listing.step13.landlordNamePlaceholder')}
              className="w-full"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="landlordPhone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step13.phoneLabel')}
            </label>
            <Input
              id="landlordPhone"
              type="tel"
              value={landlordPhone}
              onChange={handleLandlordPhoneChange}
              placeholder={t('tenant.listing.step13.phonePlaceholder')}
              className="w-full"
            />
          </div>

          {/* Reference Hint */}
          <HintBox>
            <div className="flex items-start gap-2">
              <div className="flex gap-2 items-center">
                <Button variant="tertiary"icon={<HousePlus />} size="sm" className="pointer-events-none">
                  {t('tenant.listing.step13.referenceTitle')}
                </Button>
                <Typography variant="body-sm" className="text-gray-600">
                  {t('tenant.listing.step13.referenceHint')}
                </Typography>
              </div>
            </div>
          </HintBox>

          {/* Privacy Hint */}
          <HintBox>
            <div className="flex items-start gap-2">
              <EyeOff className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <Typography variant="body-sm">
                {t('tenant.listing.step13.privacyHint')}
              </Typography>
            </div>
          </HintBox>
        </form>

        <SectionFooter 
          onNext={handleSkip}
          onPrev={onPrev}
          nextText={t('common.skip', 'Hoppa över')}
          prevText={t('common.back', 'Tillbaka')}
          nextVariant="secondary"
          className="mt-8"
        />
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