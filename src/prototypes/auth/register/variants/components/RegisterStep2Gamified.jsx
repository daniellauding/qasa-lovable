import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/ui/Button';
import Typography from '../../../../../components/ui/Typography';
import Input from '../../../../../components/ui/Input';
import Select from '../../../../../components/ui/Select';
import RadioGroup from '../../../../../components/ui/RadioGroup';
import HintBox from '../../../../../components/ui/HintBox';
import { 
  CameraIcon, 
  UserIcon, 
  XMarkIcon, 
  CheckCircleIcon, 
  IdentificationIcon, 
  StarIcon, 
  CalendarIcon, 
  UsersIcon, 
  HeartIcon,
  TrophyIcon,
  LightBulbIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const RegisterStep2Gamified = ({ onNext, onPrev, formData, updateFormData }) => {
  // Email verification state
  const [verificationCode, setVerificationCode] = useState(formData.verificationCode || '');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Profile fields
  const [profileImage, setProfileImage] = useState(formData.profileImage || null);
  const [bioTitle, setBioTitle] = useState(formData.bioTitle || '');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');
  const [householdSize, setHouseholdSize] = useState(formData.householdSize || '');
  const [hasPets, setHasPets] = useState(formData.hasPets || '');
  const [petType, setPetType] = useState(formData.petType || '');

  // Gamification states
  const [profileScore, setProfileScore] = useState(formData.profileScore || 0);
  const [achievements, setAchievements] = useState(formData.achievements || []);
  const [showAchievement, setShowAchievement] = useState(null);
  const [streak, setStreak] = useState(0);

  // Achievement definitions
  const achievementDefinitions = {
    'email-verified': { name: 'E-post Mästare', icon: '📧', points: 50, description: 'Verifierade din e-post' },
    'first-photo': { name: 'Fotograf', icon: '📸', points: 100, description: 'Lade till första profilbilden' },
    'bio-writer': { name: 'Berättare', icon: '✍️', points: 75, description: 'Skrev en beskrivning av dig själv' },
    'planner': { name: 'Planerare', icon: '📅', points: 50, description: 'Angav inflyttningsdatum' },
    'household-info': { name: 'Hushållsexpert', icon: '👥', points: 50, description: 'Angav hushållsstorlek' },
    'pet-lover': { name: 'Djurälskare', icon: '🐾', points: 50, description: 'Berättade om dina husdjur' },
    'verified-user': { name: 'Verifierad Användare', icon: '🛡️', points: 150, description: 'Verifierade din identitet' },
    'completionist': { name: 'Fullständig Profil', icon: '🏆', points: 200, description: 'Fyllde i alla profilfält' }
  };

  // Handle email verification
  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
    updateFormData({ verificationCode: value });
    
    if (value.length === 6) {
      setIsEmailVerified(true);
      unlockAchievement('email-verified');
    }
  };

  // Unlock achievement function
  const unlockAchievement = (achievementId) => {
    if (!achievements.includes(achievementId)) {
      const newAchievements = [...achievements, achievementId];
      const achievement = achievementDefinitions[achievementId];
      const newScore = profileScore + achievement.points;
      
      setAchievements(newAchievements);
      setProfileScore(newScore);
      setShowAchievement(achievement);
      
      updateFormData({ 
        achievements: newAchievements, 
        profileScore: newScore 
      });

      // Hide achievement after 3 seconds
      setTimeout(() => setShowAchievement(null), 3000);
    }
  };

  // Handle profile field changes with achievements
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
      updateFormData({ profileImage: imageUrl });
      unlockAchievement('first-photo');
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    updateFormData({ profileImage: null });
  };

  const handleBioTitleChange = (e) => {
    const value = e.target.value;
    setBioTitle(value);
    updateFormData({ bioTitle: value });
    
    if (value.length >= 10) {
      unlockAchievement('bio-writer');
    }
  };

  const handleMoveInDateChange = (e) => {
    setMoveInDate(e.target.value);
    updateFormData({ moveInDate: e.target.value });
    unlockAchievement('planner');
  };

  const handleHouseholdSizeChange = (value) => {
    setHouseholdSize(value);
    updateFormData({ householdSize: value });
    unlockAchievement('household-info');
  };

  const handlePetsChange = (value) => {
    setHasPets(value);
    updateFormData({ hasPets: value });
    if (value === 'no') {
      setPetType('');
      updateFormData({ petType: '' });
    }
    unlockAchievement('pet-lover');
  };

  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
    updateFormData({ petType: e.target.value });
  };

  const handleVerifyId = () => {
    updateFormData({ isIdVerified: true });
    unlockAchievement('verified-user');
  };

  // Check for completionist achievement
  useEffect(() => {
    const requiredFields = [
      isEmailVerified,
      profileImage,
      bioTitle && bioTitle.length >= 10,
      moveInDate,
      householdSize,
      hasPets,
      formData.isIdVerified
    ];
    
    if (requiredFields.every(Boolean)) {
      unlockAchievement('completionist');
    }
  }, [isEmailVerified, profileImage, bioTitle, moveInDate, householdSize, hasPets, formData.isIdVerified]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  // Calculate level based on score
  const getLevel = (score) => Math.floor(score / 100) + 1;
  const getProgressToNextLevel = (score) => (score % 100);

  const level = getLevel(profileScore);
  const progressToNext = getProgressToNextLevel(profileScore);

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

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Achievement Popup */}
      {showAchievement && (
        <div className="fixed top-4 right-4 bg-white border-2 border-yellow-400 rounded-lg p-4 shadow-lg z-50 animate-bounce">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{showAchievement.icon}</div>
            <div>
              <Typography variant="body-md" className="font-bold text-gray-900">
                🎉 {showAchievement.name}!
              </Typography>
              <Typography variant="body-sm" className="text-gray-600">
                +{showAchievement.points} poäng
              </Typography>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Gamification Sidebar */}
          <div className="lg:order-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              {/* Level & Score */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                  {level}
                </div>
                <Typography variant="h3" className="text-gray-900 mb-1">
                  Nivå {level}
                </Typography>
                <Typography variant="body-sm" className="text-gray-600">
                  {profileScore} poäng
                </Typography>
                
                {/* Progress to next level */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${progressToNext}%` }}
                    />
                  </div>
                  <Typography variant="body-xs" className="text-gray-500 mt-1">
                    {100 - progressToNext} poäng till nästa nivå
                  </Typography>
                </div>
              </div>

              {/* Current Challenge */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <LightBulbIcon className="w-4 h-4 text-blue-500" />
                  <Typography variant="body-sm" className="font-medium text-blue-900">
                    Aktuell utmaning
                  </Typography>
                </div>
                <Typography variant="body-xs" className="text-blue-800">
                  {!isEmailVerified ? 'Verifiera din e-post för att låsa upp profilsektionen!' :
                   !profileImage ? 'Lägg till en profilbild för +100 poäng!' :
                   !bioTitle ? 'Skriv en kort beskrivning om dig själv!' :
                   !formData.isIdVerified ? 'Verifiera din identitet för +150 poäng!' :
                   'Du är fantastisk! Alla utmaningar klarade! 🎉'}
                </Typography>
              </div>

              {/* Achievements */}
              <div>
                <Typography variant="h4" className="text-gray-900 mb-3">
                  Utmärkelser ({achievements.length}/{Object.keys(achievementDefinitions).length})
                </Typography>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(achievementDefinitions).map(([id, achievement]) => (
                    <div
                      key={id}
                      className={`border-2 rounded-lg p-3 text-center transition-all ${
                        achievements.includes(id)
                          ? 'border-yellow-400 bg-yellow-50'
                          : 'border-gray-200 bg-gray-50 opacity-50'
                      }`}
                    >
                      <div className="text-lg mb-1">{achievement.icon}</div>
                      <Typography variant="body-xs" className="text-gray-700 font-medium">
                        {achievement.name}
                      </Typography>
                      {achievements.includes(id) && (
                        <Typography variant="body-xs" className="text-yellow-700">
                          +{achievement.points}p
                        </Typography>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 lg:order-2">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {/* Email Verification Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  {isEmailVerified ? (
                    <CheckCircleIcon className="w-6 h-6 text-green-500" />
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full animate-pulse" />
                  )}
                  <Typography variant="h2" className="text-gray-900">
                    Verifiera din mejl
                  </Typography>
                  {!isEmailVerified && (
                    <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                      +50 poäng
                    </span>
                  )}
                </div>
                
                {!isEmailVerified ? (
                  <div>
                    <Typography variant="body-md" className="text-gray-600 mb-6">
                      Fyll i koden vi skickade till <strong>{formData.email || 'daniel@lauding.se'}</strong>
                    </Typography>
                    
                    <div className="flex gap-2 justify-center mb-6">
                      {[...Array(6)].map((_, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength="1"
                          className="w-12 h-12 text-center text-lg font-mono border-2 border-purple-300 rounded-lg focus:border-purple-500 focus:outline-none"
                          value={verificationCode[index] || ''}
                          onChange={(e) => {
                            const newCode = verificationCode.split('');
                            newCode[index] = e.target.value;
                            const updatedCode = newCode.join('').slice(0, 6);
                            handleCodeChange({ target: { value: updatedCode } });
                            
                            // Auto-focus next input
                            if (e.target.value && index < 5) {
                              const nextInput = e.target.parentElement.children[index + 1];
                              nextInput?.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <Typography variant="body-md" className="text-green-800">
                      🎉 E-post verifierad! Du tjänade 50 poäng och låste upp profilsektionen!
                    </Typography>
                  </div>
                )}
              </div>

              {/* Profile Completion Section - Only show after email verification */}
              {isEmailVerified && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <StarIcon className="w-6 h-6 text-yellow-500" />
                    <Typography variant="h2" className="text-gray-900">
                      Byggd din superprofil
                    </Typography>
                    <FireIcon className="w-5 h-5 text-orange-500" />
                  </div>

                  <HintBox className="mb-6 bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
                    <Typography variant="body-sm">
                      🚀 Varje fält du fyller i ger dig poäng och ökar dina chanser att få bostad! 
                      Kan du samla alla utmärkelser?
                    </Typography>
                  </HintBox>

                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-700">
                          <CameraIcon className="w-4 h-4 inline mr-2" />
                          Profilbild
                        </label>
                        {!profileImage && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            +100 poäng
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
                            {profileImage ? (
                              <img 
                                src={profileImage} 
                                alt="Profile" 
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <UserIcon className="w-8 h-8 text-gray-400" />
                            )}
                          </div>
                          
                          {profileImage && (
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="absolute -top-1 -right-1 bg-gray-900 text-white rounded-full p-1"
                            >
                              <XMarkIcon className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                        
                        <label className="cursor-pointer">
                          <div className="bg-purple-100 hover:bg-purple-200 px-4 py-2 rounded-lg text-sm font-medium text-purple-700 transition-colors">
                            {profileImage ? 'Ändra bild' : 'Lägg till bild'}
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    {/* Bio Title */}
                    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Beskriv dig själv i en mening
                        </label>
                        {bioTitle.length < 10 && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            +75 poäng
                          </span>
                        )}
                      </div>
                      <Input
                        value={bioTitle}
                        onChange={handleBioTitleChange}
                        placeholder="Ex: Par utan barn söker lägenhet nära centralstationen"
                        maxLength={100}
                        className="border-purple-200 focus:border-purple-500"
                      />
                      <div className="flex justify-between mt-1">
                        <Typography variant="body-xs" className="text-gray-500">
                          {bioTitle.length}/100 tecken
                        </Typography>
                        {bioTitle.length >= 10 && (
                          <Typography variant="body-xs" className="text-green-600 font-medium">
                            ✓ Bra jobbat!
                          </Typography>
                        )}
                      </div>
                    </div>

                    {/* Other fields with similar gamified styling... */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Move-in Date */}
                      <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            <CalendarIcon className="w-4 h-4 inline mr-2" />
                            Inflyttningsdatum
                          </label>
                          {!moveInDate && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              +50 poäng
                            </span>
                          )}
                        </div>
                        <Input
                          type="date"
                          value={moveInDate}
                          onChange={handleMoveInDateChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>

                      {/* Household Size */}
                      <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-700">
                            <UsersIcon className="w-4 h-4 inline mr-2" />
                            Hushållsstorlek
                          </label>
                          {!householdSize && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              +50 poäng
                            </span>
                          )}
                        </div>
                        <Select
                          value={householdSize}
                          onValueChange={handleHouseholdSizeChange}
                          options={householdOptions}
                        />
                      </div>
                    </div>

                    {/* Pets */}
                    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <label className="block text-sm font-medium text-gray-700">
                          <HeartIcon className="w-4 h-4 inline mr-2" />
                          Har du husdjur?
                        </label>
                        {!hasPets && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            +50 poäng
                          </span>
                        )}
                      </div>
                      <RadioGroup
                        options={petsOptions}
                        variant="card"
                        value={hasPets}
                        onValueChange={handlePetsChange}
                      />
                      
                      {hasPets === 'yes' && (
                        <div className="mt-4">
                          <Input
                            value={petType}
                            onChange={handlePetTypeChange}
                            placeholder="Ex: En liten katt, en hund"
                            maxLength={50}
                            className="border-purple-200 focus:border-purple-500"
                          />
                        </div>
                      )}
                    </div>

                    {/* ID Verification */}
                    <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 hover:border-purple-400 transition-colors">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <IdentificationIcon className="w-5 h-5 text-gray-500" />
                          <div>
                            <Typography variant="body-md" className="font-medium text-gray-900">
                              Verifiera din identitet
                            </Typography>
                            <Typography variant="body-sm" className="text-gray-600">
                              Få förtroende från hyresvärdar
                            </Typography>
                          </div>
                          {!formData.isIdVerified && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              +150 poäng
                            </span>
                          )}
                        </div>
                        
                        {formData.isIdVerified ? (
                          <div className="flex items-center gap-2 text-green-600">
                            <CheckCircleIcon className="w-5 h-5" />
                            <span className="text-sm font-medium">Verifierad</span>
                          </div>
                        ) : (
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleVerifyId}
                            className="border-purple-300 text-purple-700 hover:bg-purple-50"
                          >
                            Verifiera
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t">
                <Button
                  variant="tertiary"
                  size="lg"
                  onClick={onPrev}
                >
                  Tillbaka
                </Button>
                
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleSubmit}
                  disabled={!isEmailVerified}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Fortsätt och tjäna mer! →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterStep2Gamified.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep2Gamified; 