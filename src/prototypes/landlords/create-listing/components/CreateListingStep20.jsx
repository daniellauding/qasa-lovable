import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import TextArea from '../../../../components/ui/TextArea';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep20 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '+46739184410');
  const [practicalInfo, setPracticalInfo] = useState(formData.practicalInfo || '');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    updateFormData({ phoneNumber: e.target.value });
  };

  const handlePracticalInfoChange = (e) => {
    setPracticalInfo(e.target.value);
    updateFormData({ practicalInfo: e.target.value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="py-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              {t('landlords.createListing.step20.title')}
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              {t('landlords.createListing.step20.description')}
            </Typography>
          </div>

          <div className="space-y-8">
            {/* Phone Number Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('landlords.createListing.step20.phoneLabel')}
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="+46739184410"
                  className="w-full"
                />
                <Typography variant="body-sm" className="text-gray-500 mt-2">
                  {t('landlords.createListing.step20.phoneHint')}
                </Typography>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled
                >
                  {t('landlords.createListing.step20.saveButton')}
                </Button>
              </div>
            </form>

            {/* Practical Information Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="practicalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('landlords.createListing.step20.practicalInfoLabel')}<span className="text-gray-400"> {t('landlords.createListing.step20.practicalInfoOptional')}</span>
                </label>
                <TextArea
                  id="practicalInfo"
                  value={practicalInfo}
                  onChange={handlePracticalInfoChange}
                  placeholder={t('landlords.createListing.step20.practicalInfoPlaceholder')}
                  rows={4}
                  className="w-full"
                />
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled
                >
                  {t('landlords.createListing.step20.saveButton')}
                </Button>
              </div>
            </form>

            {/* Info Box */}
            <HintBox>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)] font-medium mb-2">
                {t('landlords.createListing.step20.infoTitle')}
              </Typography>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                {t('landlords.createListing.step20.infoDescription')}
              </Typography>
            </HintBox>
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText={t('landlords.createListing.step20.reviewButton')}
          prevText="Tillbaka"
        />
      </div>
    </div>
  );
};

CreateListingStep20.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep20;
