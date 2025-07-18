import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCreationFlow from '../../../../components/Header/HeaderCreationFlow';
import DevExperimentsButton from '../../../../components/DevExperimentsButton';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import DatePicker from '../../../../components/ui/DatePicker';
import Select from '../../../../components/ui/Select';
import TenantCard from '../../../../components/ui/Card/TenantCard';
import { CameraIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

const RegisterFlowRealTimePreview = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    avatar: null,
    firstName: '',
    lastName: '',
    bio: '',
    phone: '',
    tenantCount: '1',
    pets: 'no',
    petDetails: '',
    moveIn: 'asap',
    moveInDate: '',
    moveOut: 'until-further-notice',
    moveOutDate: ''
  });

  const fileInputRef = useRef(null);

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        updateFormData('avatar', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Calculate progress based on required fields
  const calculateProgress = () => {
    const requiredFields = ['firstName', 'lastName', 'phone'];
    const filledRequired = requiredFields.filter(field => formData[field].trim() !== '').length;
    const totalFields = requiredFields.length + 2; // +2 for tenants and move dates (steps 2&3)
    
    let stepProgress = filledRequired;
    if (currentStep >= 2) stepProgress += 1; // Step 2 completed
    if (currentStep >= 3) stepProgress += 1; // Step 3 completed
    
    return Math.round((stepProgress / totalFields) * 100);
  };

  const canProceedToNext = () => {
    return true; // Always allow proceeding to next step
  };

  const nextStep = () => {
    if (canProceedToNext() && currentStep < 3) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    } else {
      // Navigate back to experiments when on step 1
      navigate('/experiments');
    }
  };

  const handleCompleteProfile = () => {
    navigate('/experiments');
  };

  const handleDismiss = () => {
    navigate('/experiments');
  };

  const tenantOptions = [
    { value: '1', label: '1 person' },
    { value: '2', label: '2 people' },
    { value: '3', label: '3 people' },
    { value: '4', label: '4 people' },
    { value: '5+', label: '5+ people' }
  ];

  const petOptions = [
    { value: 'no', label: 'No pets' },
    { value: 'yes', label: 'Yes, I have pets' }
  ];

  const moveInOptions = [
    { value: 'asap', label: 'As soon as possible' },
    { value: 'specific', label: 'Choose date' }
  ];

  const moveOutOptions = [
    { value: 'until-further-notice', label: 'Until further notice' },
    { value: 'specific', label: 'Choose date' }
  ];

  const renderStep1 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome in!</h2>
      </div>

      {/* Avatar Upload */}
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 mb-4">
          {formData.avatar ? (
            <img
              src={formData.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
            />
          ) : (
            <div className="w-24 h-24 rounded-full bg-gray-100 border-4 border-gray-200 flex items-center justify-center">
              <CameraIcon className="w-8 h-8 text-gray-400" />
            </div>
          )}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <CameraIcon className="w-4 h-4" />
          </button>
        </div>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          Add photo
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="hidden"
        />
      </div>

      {/* Basic Info */}
      <div className="space-y-4">
        <Input
          label="First name *"
          value={formData.firstName}
          onChange={(e) => updateFormData('firstName', e.target.value)}
          placeholder="Enter your first name"
        />

        <Input
          label="Last name *"
          value={formData.lastName}
          onChange={(e) => updateFormData('lastName', e.target.value)}
          placeholder="Enter your last name"
        />

        <Input
          label="Present yourself in a short sentence (optional)"
          value={formData.bio}
          onChange={(e) => updateFormData('bio', e.target.value)}
          placeholder="Tell us about yourself"
        />

        <Input
          label="Phone number *"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateFormData('phone', e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Who is moving in?</h2>
        <p className="text-gray-600 mb-6">Tell us how many you are and if you have any pets.</p>
      </div>

      <div className="space-y-6">
        <Select
          label="Number of tenants"
          value={formData.tenantCount}
          onChange={(value) => updateFormData('tenantCount', value)}
          options={tenantOptions}
        />

                  <div>
            <RadioGroup
              label="Do you have pets?"
              options={petOptions}
              value={formData.pets}
              onValueChange={(value) => updateFormData('pets', value)}
              variant="card"
            />

          {formData.pets === 'yes' && (
            <div className="mt-4">
              <Input
                label="What kind of pets?"
                value={formData.petDetails}
                onChange={(e) => updateFormData('petDetails', e.target.value)}
                placeholder="e.g., 1 cat, 2 dogs"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">When will you move?</h2>
        <p className="text-gray-600 mb-6">Your dates help us to match you with the right landlords.</p>
      </div>

      <div className="space-y-6">
                  <div>
            <RadioGroup
              label="Move in"
              options={moveInOptions}
              value={formData.moveIn}
              onValueChange={(value) => updateFormData('moveIn', value)}
              variant="card"
            />

          {formData.moveIn === 'specific' && (
            <div className="mt-4">
              <DatePicker
                value={formData.moveInDate}
                onChange={(value) => updateFormData('moveInDate', value)}
                placeholder="Select move-in date"
              />
            </div>
          )}
        </div>

                  <div>
            <RadioGroup
              label="Move out"
              options={moveOutOptions}
              value={formData.moveOut}
              onValueChange={(value) => updateFormData('moveOut', value)}
              variant="card"
            />

          {formData.moveOut === 'specific' && (
            <div className="mt-4">
              <DatePicker
                value={formData.moveOutDate}
                onChange={(value) => updateFormData('moveOutDate', value)}
                placeholder="Select move-out date"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return renderStep1();
      case 2:
        return renderStep2();
      case 3:
        return renderStep3();
      default:
        return renderStep1();
    }
  };

      return (
      <div className="min-h-screen flex flex-col bg-gray-10">
        <HeaderCreationFlow onDismiss={handleDismiss} />
        <style>{`
          header {
            background-color: transparent !important;
          }
        `}</style>
      <main className="flex-grow p-6">
        <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Form Section */}
          <div className="bg-white rounded-xl overflow-hidden h-fit">
            <div className="p-8">
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Profile completion</span>
                  <span className="text-sm font-bold text-gray-900">{calculateProgress()}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="theme-bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${calculateProgress()}%` }}
                  />
                </div>
              </div>

              {/* Step Content */}
              {renderStepContent()}
            </div>

            {/* Footer */}
            <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
              <Button
                variant="tertiary"
                size="lg"
                onClick={prevStep}
                iconOnly
                icon={<ArrowLeftIcon className="h-5 w-5" />}
                aria-label="Previous"
              />

              {currentStep < 3 ? (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={nextStep}
                >
                  Next
                </Button>
              ) : (
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={handleCompleteProfile}
                >
                  Complete Profile
                </Button>
              )}
            </div>
           </div>

                      {/* Live Preview Section */}
           <div className="bg-white rounded-xl p-8 h-fit sticky top-6">
             <h3 className="text-lg font-semibold text-gray-900 mb-2">This is what your profile might look like for landlords</h3>
             <p className="text-gray-600 mb-6">We've automatically filled in your profile based on what you told us – you can adjust everything in the next step.</p>
             
             <TenantCard
               user={{
                 name: formData.firstName && formData.lastName 
                   ? `${formData.firstName} ${formData.lastName}` 
                   : 'Your Name',
                 avatar: formData.avatar || '/api/placeholder/100/100',
                 description: formData.bio || 'Add a bio to tell landlords about yourself...',
                 people: `${formData.tenantCount} ${formData.tenantCount === '1' ? 'person' : 'people'}`,
                 rooms: '1-2 rooms',
                 maxRent: 'SEK 15,000',
                 furnished: 'Furnished',
                 moveDate: (() => {
                   const moveIn = formData.moveIn === 'specific' && formData.moveInDate 
                     ? new Date(formData.moveInDate).toLocaleDateString() 
                     : 'ASAP';
                   const moveOut = formData.moveOut === 'specific' && formData.moveOutDate 
                     ? new Date(formData.moveOutDate).toLocaleDateString() 
                     : 'Until further notice';
                   return `${moveIn} → ${moveOut}`;
                 })()
               }}
               verified={true}
             />
           </div>
         </div>
       </div>
       </main>
       <DevExperimentsButton />
     </div>
   );
 };

export default RegisterFlowRealTimePreview; 