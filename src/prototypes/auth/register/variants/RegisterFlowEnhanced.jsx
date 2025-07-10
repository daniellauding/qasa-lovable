import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderCreationFlow from '../../../../components/Header/HeaderCreationFlow';
import DevExperimentsButton from '../../../../components/DevExperimentsButton';
import RegisterStep1 from '../components/RegisterStep1';
import RegisterStep2Enhanced from './components/RegisterStep2Enhanced';
import RegisterStep3 from '../components/RegisterStep3';

const RegisterFlowEnhanced = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);
  const [formData, setFormData] = useState({
    userType: 'tenant',
    email: '',
    password: '',
    verificationCode: '',
    firstName: '',
    lastName: '',
    phone: '',
    profileImage: null,
    // Enhanced profile fields
    bioTitle: '',
    moveInDate: '',
    householdSize: '',
    hasPets: '',
    petType: '',
    isIdVerified: false,
  });

  // Update URL when step changes
  useEffect(() => {
    const stepFromUrl = parseInt(step) || 1;
    if (stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [step]);

  const handleNext = () => {
    if (currentStep < 3) {
      const nextStep = currentStep + 1;
      navigate(`/auth/register/step/${nextStep}?variant=enhanced-profile`);
      setCurrentStep(nextStep);
    } else {
      // Complete registration and redirect to experiments
      navigate('/experiments');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      navigate(`/auth/register/step/${prevStep}?variant=enhanced-profile`);
      setCurrentStep(prevStep);
    }
  };

  const handleDismiss = () => {
    navigate('/experiments');
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <RegisterStep1 
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <RegisterStep2Enhanced 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <RegisterStep3 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderCreationFlow onDismiss={handleDismiss} />
      <main className="flex-grow">
        {renderStep()}
      </main>
      <DevExperimentsButton />
    </div>
  );
};

export default RegisterFlowEnhanced; 