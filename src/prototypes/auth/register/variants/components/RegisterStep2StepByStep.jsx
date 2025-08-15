import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/ui/Button';
import Typography from '../../../../../components/ui/Typography';
import Input from '../../../../../components/ui/Input';
import Select from '../../../../../components/ui/Select';
import RadioGroup from '../../../../../components/ui/RadioGroup';
import HintBox from '../../../../../components/ui/HintBox';
import { Camera, User, X, CheckCircle, Users, Heart, ArrowLeft, ArrowRight } from 'lucide-react';

const RegisterStep2StepByStep = ({ onNext, onPrev, formData, updateFormData }) => {
  const [currentProfileStep, setCurrentProfileStep] = useState(formData.currentProfileStep || 1);
  
  // Profile fields
  const [profileImage, setProfileImage] = useState(formData.profileImage || null);
  const [bioTitle, setBioTitle] = useState(formData.bioTitle || '');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');
  const [householdSize, setHouseholdSize] = useState(formData.householdSize || '');
  const [hasPets, setHasPets] = useState(formData.hasPets || '');
  const [petType, setPetType] = useState(formData.petType || '');

  const totalProfileSteps = 6;

  // Profile steps configuration
  const profileSteps = [
    {
      id: 1,
      title: 'Lägg till en profilbild',
      description: 'En bild hjälper hyresvärdar att känna förtroende för dig',
      icon: CameraIcon,
      benefit: 'Ökar dina chanser med 40%',
      required: false
    },
    {
      id: 2,
      title: 'Beskriv dig själv',
      description: 'Skriv en kort mening som beskriver vem du är',
      icon: UserIcon,
      benefit: 'Gör din profil mer personlig',
      required: false
    },
    {
      id: 3,
      title: 'När vill du flytta in?',
      description: 'Hjälp hyresvärdar att matcha dina tidskrav',
      icon: CalendarIcon,
      benefit: 'Bättre matchning med bostäder',
      required: false
    },
    {
      id: 4,
      title: 'Hushållsstorlek',
      description: 'Hur många personer kommer att bo i lägenheten?',
      icon: UsersIcon,
      benefit: 'Hjälper hitta rätt storlek på bostad',
      required: false
    },
    {
      id: 5,
      title: 'Husdjur',
      description: 'Har du några husdjur som kommer med?',
      icon: HeartIcon,
      benefit: 'Undviker missförstånd senare',
      required: false
    },
    {
      id: 6,
      title: 'Verifiera din identitet',
      description: 'Visa att du är en pålitlig hyresgäst',
      icon: IdentificationIcon,
      benefit: 'Ökar förtroendet kraftigt',
      required: false
    }
  ];

  const currentStepConfig = profileSteps[currentProfileStep - 1];

  // Handle field updates
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

  const handleBioTitleChange = (e) => {
    setBioTitle(e.target.value);
    updateFormData({ bioTitle: e.target.value });
  };

  const handleMoveInDateChange = (e) => {
    setMoveInDate(e.target.value);
    updateFormData({ moveInDate: e.target.value });
  };

  const handleHouseholdSizeChange = (value) => {
    setHouseholdSize(value);
    updateFormData({ householdSize: value });
  };

  const handlePetsChange = (value) => {
    setHasPets(value);
    updateFormData({ hasPets: value });
    if (value === 'no') {
      setPetType('');
      updateFormData({ petType: '' });
    }
  };

  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
    updateFormData({ petType: e.target.value });
  };

  const handleVerifyId = () => {
    updateFormData({ isIdVerified: true });
  };

  const handleStepNext = () => {
    if (currentProfileStep < totalProfileSteps) {
      const nextStep = currentProfileStep + 1;
      setCurrentProfileStep(nextStep);
      updateFormData({ currentProfileStep: nextStep });
    } else {
      // Complete profile steps and move to next main step
      onNext();
    }
  };

  const handleStepPrev = () => {
    if (currentProfileStep > 1) {
      const prevStep = currentProfileStep - 1;
      setCurrentProfileStep(prevStep);
      updateFormData({ currentProfileStep: prevStep });
    } else {
      // Go back to main previous step
      onPrev();
    }
  };

  const handleSkipStep = () => {
    handleStepNext();
  };

  // Check if current step has required content
  const isCurrentStepValid = () => {
    switch (currentProfileStep) {
      case 1: return true; // Profile image is optional
      case 2: return bioTitle.length >= 5; // Bio needs some content
      case 3: return true; // Move-in date is optional
      case 4: return true; // Household size is optional
      case 5: return true; // Pets info is optional
      case 6: return true; // ID verification is optional
      default: return true;
    }
  };

  // Check if current step is completed
  const isCurrentStepCompleted = () => {
    switch (currentProfileStep) {
      case 1: return !!profileImage;
      case 2: return bioTitle.length >= 5;
      case 3: return !!moveInDate;
      case 4: return !!householdSize;
      case 5: return !!hasPets;
      case 6: return formData.isIdVerified;
      default: return false;
    }
  };

  const householdOptions = [
    { value: '', label: 'Välj antal personer' },
    { value: '1', label: '1 person' },
    { value: '2', label: '2 personer' },
    { value: '3', label: '3 personer' },
    { value: '4', label: '4 personer' },
    { value: '5+', label: '5+ personer' }
  ];

  const petsOptions = [
    { value: 'no', label: 'Nej, inga husdjur' },
    { value: 'yes', label: 'Ja, jag har husdjur' }
  ];

  const renderStepContent = () => {
    switch (currentProfileStep) {
      case 1:
        return (
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img 
                      src={profileImage} 
                      alt="Profile" 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <User className="w-16 h-16 text-gray-400" />
                  )}
                </div>
                
                {profileImage && (
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-gray-900 text-white rounded-full p-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
            
            <label className="cursor-pointer">
              <div className="bg-blue-100 hover:bg-blue-200 px-6 py-3 rounded-lg text-blue-700 font-medium transition-colors inline-block">
                <Camera className="w-5 h-5 inline mr-2" />
                {profileImage ? 'Ändra profilbild' : 'Lägg till profilbild'}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
            
            {profileImage && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Typography variant="body-sm" className="text-green-800">
                  ✓ Perfekt! Din profilbild är uppladdad.
                </Typography>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div>
            <Input
              value={bioTitle}
              onChange={handleBioTitleChange}
              placeholder="Ex: Par utan barn söker lägenhet nära centralstationen"
              maxLength={100}
              className="text-lg p-4"
              autoFocus
            />
            <div className="flex justify-between items-center mt-3">
              <Typography variant="body-xs" className="text-gray-500">
                {bioTitle.length}/100 tecken
              </Typography>
              {bioTitle.length >= 5 && (
                <Typography variant="body-xs" className="text-green-600 font-medium">
                  ✓ Bra beskrivning!
                </Typography>
              )}
            </div>
            
            <HintBox className="mt-4">
              <Typography variant="body-sm">
                💡 Tip: Nämn vad som är viktigt för dig, som närhet till kollektivtrafik eller vilken typ av område du föredrar.
              </Typography>
            </HintBox>
          </div>
        );

      case 3:
        return (
          <div>
            <Input
              type="date"
              value={moveInDate}
              onChange={handleMoveInDateChange}
              min={new Date().toISOString().split('T')[0]}
              className="text-lg p-4"
              autoFocus
            />
            
            {moveInDate && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Typography variant="body-sm" className="text-green-800">
                  ✓ Inflyttningsdatum valt: {new Date(moveInDate).toLocaleDateString('sv-SE')}
                </Typography>
              </div>
            )}
            
            <HintBox className="mt-4">
              <Typography variant="body-sm">
                📅 Ett specifikt datum hjälper hyresvärdar att planera och ökar dina chanser att få rätt bostad vid rätt tid.
              </Typography>
            </HintBox>
          </div>
        );

      case 4:
        return (
          <div>
            <Select
              value={householdSize}
              onValueChange={handleHouseholdSizeChange}
              options={householdOptions}
              className="text-lg"
            />
            
            {householdSize && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Typography variant="body-sm" className="text-green-800">
                  ✓ Hushållsstorlek: {householdSize} {householdSize === '1' ? 'person' : 'personer'}
                </Typography>
              </div>
            )}
            
            <HintBox className="mt-4">
              <Typography variant="body-sm">
                👥 Detta hjälper hyresvärdar att förstå hur många som kommer att bo i lägenheten och hitta rätt storlek på bostad.
              </Typography>
            </HintBox>
          </div>
        );

      case 5:
        return (
          <div>
            <RadioGroup
              options={petsOptions}
              variant="card"
              value={hasPets}
              onValueChange={handlePetsChange}
            />
            
            {hasPets === 'yes' && (
              <div className="mt-6">
                <Typography variant="body-md" className="text-gray-700 mb-3">
                  Vilken typ av husdjur?
                </Typography>
                <Input
                  value={petType}
                  onChange={handlePetTypeChange}
                  placeholder="Ex: En liten katt, en hund"
                  maxLength={50}
                  className="text-lg p-4"
                />
              </div>
            )}
            
            {hasPets && (
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                <Typography variant="body-sm" className="text-green-800">
                  ✓ Husdjursinformation sparad
                </Typography>
              </div>
            )}
            
            <HintBox className="mt-4">
              <Typography variant="body-sm">
                🐾 Att vara öppen om husdjur från början undviker missförstånd och hjälper dig hitta husdjursvänliga bostäder.
              </Typography>
            </HintBox>
          </div>
        );

      case 6:
        return (
          <div className="text-center">
            <div className="mb-6">
              <IdentificationIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <Typography variant="body-md" className="text-gray-600 mb-4">
                ID-verifiering visar hyresvärdar att du är en pålitlig person och ökar kraftigt dina chanser att få en bostad.
              </Typography>
            </div>
            
            {formData.isIdVerified ? (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <Typography variant="body-md" className="text-green-800 font-medium">
                  ✓ Din identitet är verifierad!
                </Typography>
              </div>
            ) : (
              <Button
                variant="primary"
                size="lg"
                onClick={handleVerifyId}
                className="mb-4"
              >
                <IdentificationIcon className="w-5 h-5 mr-2" />
                Verifiera identitet
              </Button>
            )}
            
            <HintBox>
              <Typography variant="body-sm">
                🛡️ Verifieringen är säker och tar bara några minuter. Din personliga information skyddas enligt GDPR.
              </Typography>
            </HintBox>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Typography variant="body-sm" className="text-gray-600">
              Steg {currentProfileStep} av {totalProfileSteps}
            </Typography>
            <Typography variant="body-sm" className="text-blue-600">
              Profiloptimering
            </Typography>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentProfileStep / totalProfileSteps) * 100}%` }}
            />
          </div>
          
          {/* Step Info */}
          <div className="text-center mb-6">
            <currentStepConfig.icon className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <Typography variant="h2" className="text-gray-900 mb-2">
              {currentStepConfig.title}
            </Typography>
            <Typography variant="body-md" className="text-gray-600 mb-3">
              {currentStepConfig.description}
            </Typography>
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              ✨ {currentStepConfig.benefit}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t">
          <div className="flex items-center gap-3">
            <Button
              variant="tertiary"
              size="md"
              onClick={handleStepPrev}
              iconOnly
              icon={<ArrowLeft className="h-5 w-5" />}
              aria-label="Föregående steg"
            />
            
            {currentProfileStep > 1 && (
              <Typography variant="body-sm" className="text-gray-500">
                Föregående
              </Typography>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            {!currentStepConfig.required && !isCurrentStepCompleted() && (
              <Button
                variant="tertiary"
                size="md"
                onClick={handleSkipStep}
              >
                Hoppa över
              </Button>
            )}
            
            <Button
              variant="primary"
              size="md"
              onClick={handleStepNext}
              disabled={currentStepConfig.required && !isCurrentStepValid()}
              icon={<ArrowRight className="h-5 w-5" />}
              iconPosition="right"
            >
              {currentProfileStep === totalProfileSteps ? 'Slutför' : 'Nästa'}
            </Button>
          </div>
        </div>

        {/* Optional: Show completed steps count */}
        <div className="text-center mt-6">
          <Typography variant="body-sm" className="text-gray-500">
            {profileSteps.filter((_, index) => {
              const stepNum = index + 1;
              switch (stepNum) {
                case 1: return !!profileImage;
                case 2: return bioTitle.length >= 5;
                case 3: return !!moveInDate;
                case 4: return !!householdSize;
                case 5: return !!hasPets;
                case 6: return formData.isIdVerified;
                default: return false;
              }
            }).length} av {totalProfileSteps} steg klara
          </Typography>
        </div>
      </div>
    </div>
  );
};

RegisterStep2StepByStep.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep2StepByStep; 