import { ArrowLeft, Camera } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep9 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [profileData, setProfileData] = useState({
    profilePicture: formData.profilePicture || null,
    firstName: formData.firstName || 'Daniel',
    lastName: formData.lastName || 'Lauding',
    phoneNumber: formData.phoneNumber || '+46739184410',
    ...formData,
  });

  const handleInputChange = (field, value) => {
    const newData = { ...profileData, [field]: value };
    setProfileData(newData);
    updateFormData(newData);
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
            {t('tenant.listing.step9.title', 'Vem är du?')}
          </Typography>
        </div>

        <div className="space-y-6">
          {/* Profile Picture */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              {t('tenant.listing.step9.profilePictureLabel', 'Profilbild')}
            </label>
            <div className="flex flex-col items-start">
              <div className="relative inline-block">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                  {profileData.profilePicture ? (
                    <img
                      src={profileData.profilePicture}
                      alt={profileData.firstName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="https://img.qasa.se/unsafe/fit-in/320x320/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/aaf2bcf286f1d691a4279a435dff6e631d8604a56d46c9003c2b864e075382b5.png"
                      alt={profileData.firstName}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <button
                  type="button"
                  className="w-[100px] absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-full px-3 py-1 text-xs flex items-center gap-1 hover:bg-gray-800 transition-colors"
                  aria-label={t('tenant.listing.step9.changeImage', 'Ändra bild')}
                >
                  <Camera className="w-4 h-4" />
                  {t('tenant.listing.step9.changeImage', 'Ändra bild')}
                </button>
              </div>
            </div>
          </div>

          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step9.firstNameLabel', 'Förnamn')}
            </label>
            <Input
              value={profileData.firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              autoComplete="given-name"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step9.lastNameLabel', 'Efternamn')}
            </label>
            <Input
              placeholder="Efternamn"
              value={profileData.lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              autoComplete="family-name"
            />
            <HintBox className="mt-2">
              {t('tenant.listing.step9.lastNameHint', 'Ditt efternamn visas inte för andra användare.')}
            </HintBox>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('tenant.listing.step9.phoneLabel', 'Telefonnummer')}
            </label>
            <Input
              placeholder="Telefonnummer"
              value={profileData.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            />
            <HintBox className="mt-2">
              {t('tenant.listing.step9.phoneHint', 'Telefonnummer kommer inte att visas för hyresvärdar.')}
            </HintBox>
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

CreateTenantListingStep9.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep9; 