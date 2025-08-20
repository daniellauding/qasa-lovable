import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../../components/ui/Button';
import Typography from '../../../../../components/ui/Typography';
import Input from '../../../../../components/ui/Input';
import TextArea from '../../../../../components/ui/TextArea';
import Select from '../../../../../components/ui/Select';
import RadioGroup from '../../../../../components/ui/RadioGroup';
import HintBox from '../../../../../components/ui/HintBox';
import { Camera, User, X, CheckCircle, Star, Users, Heart } from 'lucide-react';

const RegisterStep2Enhanced = ({ onNext, onPrev, formData, updateFormData }) => {
  // Email verification state
  const [verificationCode, setVerificationCode] = useState(formData.verificationCode || '');
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Enhanced profile fields
  const [profileImage, setProfileImage] = useState(formData.profileImage || null);
  const [bioTitle, setBioTitle] = useState(formData.bioTitle || '');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');
  const [householdSize, setHouseholdSize] = useState(formData.householdSize || '');
  const [hasPets, setHasPets] = useState(formData.hasPets || '');
  const [petType, setPetType] = useState(formData.petType || '');

  // Handle email verification
  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
    updateFormData({ verificationCode: value });
    
    // Auto-verify when 6 digits entered
    if (value.length === 6) {
      setIsEmailVerified(true);
    }
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
  };

  // Handle profile fields
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
    // Simulate ID verification
    updateFormData({ isIdVerified: true });
    console.log('ID verification started...');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  // Calculate profile completeness
  const calculateCompleteness = () => {
    let completed = 0;
    const fields = [
      isEmailVerified,
      profileImage,
      bioTitle,
      moveInDate,
      householdSize,
      hasPets,
      formData.isIdVerified
    ];
    
    completed = fields.filter(Boolean).length;
    return Math.round((completed / fields.length) * 100);
  };

  const completeness = calculateCompleteness();

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
    <div className="min-h-[calc(100vh-64px)] bg-[var(--color-background-inset)]">
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              {/* Email Verification Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  {isEmailVerified ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full" />
                  )}
                  <Typography variant="h2" className="text-gray-900">
                    Verifiera din mejl
                  </Typography>
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
                          className="w-12 h-12 text-center text-lg font-mono border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                          value={verificationCode[index] || ''}
                          onChange={(e) => {
                            const newCode = verificationCode.split('');
                            newCode[index] = e.target.value;
                            const updatedCode = newCode.join('').slice(0, 6);
                            setVerificationCode(updatedCode);
                            updateFormData({ verificationCode: updatedCode });
                            
                            // Auto-focus next input
                            if (e.target.value && index < 5) {
                              const nextInput = e.target.parentElement.children[index + 1];
                              nextInput?.focus();
                            }
                            
                            // Auto-verify when complete
                            if (updatedCode.length === 6) {
                              setIsEmailVerified(true);
                            }
                          }}
                          onKeyDown={(e) => {
                            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                              const prevInput = e.target.parentElement.children[index - 1];
                              prevInput?.focus();
                            }
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="text-center mb-6">
                      <Typography variant="body-sm" className="text-gray-600">
                        Fick du inte koden?{' '}
                        <button
                          type="button"
                          onClick={handleResendCode}
                          className="underline text-blue-600 hover:text-blue-800"
                        >
                          Skicka en ny kod
                        </button>
                      </Typography>
                    </div>
                  </div>
                ) : (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <Typography variant="body-md" className="text-green-800">
                      ✓ E-post verifierad! Du kan nu fortsätta fylla i din profil.
                    </Typography>
                  </div>
                )}
              </div>

              {/* Profile Completion Section - Only show after email verification */}
              {isEmailVerified && (
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <Typography variant="h2" className="text-gray-900">
                      Förbättra din profil
                    </Typography>
                    <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Valfritt
                    </span>
                  </div>

                  <HintBox className="mb-6">
                    <Typography variant="body-sm">
                      En komplett profil ökar dina chanser att få en bostad med upp till 75%. 
                      Alla fält är valfria, men vi rekommenderar att du fyller i så många som möjligt.
                    </Typography>
                  </HintBox>

                  <div className="space-y-6">
                    {/* Profile Picture */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <Camera className="w-4 h-4 inline mr-2" />
                        Profilbild
                      </label>
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
                              <User className="w-8 h-8 text-gray-400" />
                            )}
                          </div>
                          
                          {profileImage && (
                            <button
                              type="button"
                              onClick={handleRemoveImage}
                              className="absolute -top-1 -right-1 bg-gray-900 text-white rounded-full p-1"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                        
                        <label className="cursor-pointer">
                          <div className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 transition-colors">
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
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Beskriv dig själv i en mening
                      </label>
                      <Input
                        value={bioTitle}
                        onChange={handleBioTitleChange}
                        placeholder="Ex: Par utan barn söker lägenhet nära centralstationen"
                        maxLength={100}
                      />
                      <Typography variant="body-xs" className="text-gray-500 mt-1">
                        {bioTitle.length}/100 tecken
                      </Typography>
                    </div>

                    {/* Move-in Date */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <CalendarIcon className="w-4 h-4 inline mr-2" />
                        När vill du flytta in?
                      </label>
                      <Input
                        type="date"
                        value={moveInDate}
                        onChange={handleMoveInDateChange}
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    {/* Household Size */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Users className="w-4 h-4 inline mr-2" />
                        Hur många är ni i hushållet?
                      </label>
                      <Select
                        value={householdSize}
                        onValueChange={handleHouseholdSizeChange}
                        options={householdOptions}
                      />
                    </div>

                    {/* Pets */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <Heart className="w-4 h-4 inline mr-2" />
                        Har du husdjur?
                      </label>
                      <RadioGroup
                        options={petsOptions}
                        variant="card"
                        value={hasPets}
                        onValueChange={handlePetsChange}
                      />
                      
                      {hasPets === 'yes' && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Vilken typ av husdjur?
                          </label>
                          <Input
                            value={petType}
                            onChange={handlePetTypeChange}
                            placeholder="Ex: En liten katt, en hund"
                            maxLength={50}
                          />
                        </div>
                      )}
                    </div>

                    {/* ID Verification */}
                    <div>
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <IdentificationIcon className="w-5 h-5 text-gray-500" />
                            <div>
                              <Typography variant="body-md" className="font-medium text-gray-900">
                                Verifiera din identitet
                              </Typography>
                              <Typography variant="body-sm" className="text-gray-600">
                                Verifierat ID visar att du är en pålitlig hyresgäst
                              </Typography>
                            </div>
                          </div>
                          
                          {formData.isIdVerified ? (
                            <div className="flex items-center gap-2 text-green-600">
                              <CheckCircle className="w-5 h-5" />
                              <span className="text-sm font-medium">Verifierad</span>
                            </div>
                          ) : (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleVerifyId}
                            >
                              Verifiera
                            </Button>
                          )}
                        </div>
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
                >
                  Fortsätt
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Preview Sidebar - Desktop Only */}
          <div className="hidden lg:block">
            <div className="sticky top-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <Typography variant="h3" className="text-gray-900">
                    Din profil
                  </Typography>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">{completeness}%</div>
                    <div className="text-xs text-gray-500">komplett</div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      completeness >= 80 ? 'bg-green-500' : 
                      completeness >= 50 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${completeness}%` }}
                  />
                </div>

                {/* Preview Card */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Typography variant="body-md" className="font-medium text-gray-900 truncate">
                          {formData.firstName || 'Ditt namn'}
                        </Typography>
                        {formData.isIdVerified && (
                          <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        )}
                      </div>
                      
                      {bioTitle && (
                        <Typography variant="body-sm" className="text-gray-600 line-clamp-2">
                          {bioTitle}
                        </Typography>
                      )}
                    </div>
                  </div>

                  {/* Preview Details */}
                  <div className="space-y-2 text-sm">
                    {householdSize && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{householdSize} {householdSize === '1' ? 'person' : 'personer'}</span>
                      </div>
                    )}
                    
                    {moveInDate && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <CalendarIcon className="w-4 h-4" />
                        <span>Inflyttning: {new Date(moveInDate).toLocaleDateString('sv-SE')}</span>
                      </div>
                    )}
                    
                    {hasPets === 'yes' && petType && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <span>{petType}</span>
                      </div>
                    )}
                    
                    {hasPets === 'no' && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <Heart className="w-4 h-4" />
                        <span>Inga husdjur</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Completeness Tips */}
                <div className="mt-4">
                  <Typography variant="body-sm" className="text-gray-600 mb-2">
                    För att förbättra din profil:
                  </Typography>
                  <div className="space-y-1 text-xs text-gray-500">
                    {!profileImage && <div>• Lägg till profilbild</div>}
                    {!bioTitle && <div>• Skriv en kort beskrivning</div>}
                    {!moveInDate && <div>• Ange önskat inflyttningsdatum</div>}
                    {!householdSize && <div>• Specificera hushållsstorlek</div>}
                    {!hasPets && <div>• Ange husdjursstatus</div>}
                    {!formData.isIdVerified && <div>• Verifiera din identitet</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

RegisterStep2Enhanced.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep2Enhanced; 