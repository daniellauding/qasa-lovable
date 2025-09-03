import { Camera, User, X } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import DatePicker from '../../../../components/ui/DatePicker';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Select from '../../../../components/ui/Select';
import TextArea from '../../../../components/ui/TextArea';
import Typography from '../../../../components/ui/Typography';
import { useAuth } from '../../../../contexts/AuthContext';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const RegisterStep3 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const [firstName, setFirstName] = useState(formData.firstName || '');
  const [lastName, setLastName] = useState(formData.lastName || '');
  const [phone, setPhone] = useState(formData.phone || '');
  const [profileImage, setProfileImage] = useState(formData.profileImage || null);
  const [bio, setBio] = useState(formData.bio || '');
  const [tenantCount, setTenantCount] = useState(formData.tenantCount || '1');
  const [moveInType, setMoveInType] = useState(formData.moveInType || 'asap');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    updateFormData({ firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    updateFormData({ lastName: e.target.value });
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    updateFormData({ phone: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      updateFormData({ profileImage: imageUrl });
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    updateFormData({ profileImage: null });
  };

  const handleBioChange = (e) => {
    setBio(e.target.value);
    updateFormData({ bio: e.target.value });
  };

  const handleTenantCountChange = (value) => {
    setTenantCount(value);
    updateFormData({ tenantCount: value });
  };

  const handleMoveInTypeChange = (value) => {
    setMoveInType(value);
    updateFormData({ moveInType: value });
  };

  const handleMoveInDateChange = (value) => {
    setMoveInDate(value);
    updateFormData({ moveInDate: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Complete registration, log user in and navigate to landing page
    console.log('Profile completed:', { firstName, lastName, phone, profileImage, bio, tenantCount, moveInType, moveInDate });
    login(); // Set authentication state
    navigate('/landing'); // Navigate to landing page
  };

  const tenantCountOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
    { value: '6', label: '6' },
    { value: '7', label: '7' }
  ];

  const moveInOptions = [
    { value: 'asap', label: t('auth.register.step3.moveInAsap') },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-transparent flex items-center flex-col justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 cursor-pointer">
        <div className="text-left mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('auth.register.step3.title')}
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            {t('auth.register.step3.subtitle')}
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Profile Image Upload */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-gray-400" />
                )}
              </div>
              
              <label className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 cursor-pointer w-[120px]">
                <div className="bg-gray-900 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <Camera className="w-4 h-4" />
                  {profileImage ? t('auth.register.step3.changePhoto') : t('auth.register.step3.addPhoto')}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>

              {profileImage && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="absolute -top-1 -right-1 bg-gray-900 text-white rounded-full p-1"
                  aria-label={t('auth.register.step3.removePhotoLabel')}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Profile Picture Hint */}
          <HintBox>
            <Typography variant="body-sm" className="text-gray-600">
              {t('auth.register.step3.profilePicHint')}
            </Typography>
          </HintBox>

          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.register.step3.firstNameLabel')}
            </label>
            <Input
              id="firstName"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.register.step3.lastNameLabel')}
            </label>
            <Input
              id="lastName"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              maxLength={240}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.register.step3.phoneLabel')}
            </label>
            <Input
              id="phone"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder={t('auth.register.step3.phonePlaceholder')}
              maxLength={240}
              className="w-full"
            />
          </div>

          <HintBox>
            <div className="flex items-start gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                <path d="m2 2 20 20"></path>
              </svg>
              <Typography variant="body-sm" className="text-gray-600">
                {t('auth.register.step3.privacyNote')}
              </Typography>
            </div>
          </HintBox>

          {/* Bio TextArea */}
          <div>
            <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.register.step3.bioLabel')} <span className="text-gray-500">{t('auth.register.step3.bioOptional')}</span>
            </label>
            <TextArea
              id="bio"
              value={bio}
              onChange={handleBioChange}
              placeholder={t('auth.register.step3.bioPlaceholder')}
              rows={7}
              maxLength={240}
              className="w-full"
            />
            <div className="text-left mt-1">
              <Typography variant="body-sm" className="text-gray-500">
                {bio.length} / 240
              </Typography>
            </div>
          </div>

          {/* Tenant Count Select */}
          <div>
            <label htmlFor="tenantCount" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.register.step3.tenantCountLabel')} <span className="text-gray-500">{t('auth.register.step3.tenantCountOptional')}</span>
            </label>
            <Select
              value={tenantCount}
              onValueChange={handleTenantCountChange}
              options={tenantCountOptions}
            />
          </div>

          {/* Move In RadioGroup */}
          <div className="space-y-4">
            <Typography variant="body-md" className="text-gray-700 mb-4">
              {t('auth.register.step3.moveInLabel')}
            </Typography>
            <RadioGroup
              options={moveInOptions}
              variant="card"
              value={moveInType}
              onValueChange={handleMoveInTypeChange}
            />
            
            <DatePicker
              value={moveInDate}
              onChange={handleMoveInDateChange}
              placeholder={t('auth.register.step3.moveInChooseDate')}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
{t('auth.register.step3.nextButton')}
          </Button>
        </form>
      </div>
    </div>
  );
};

RegisterStep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep3; 