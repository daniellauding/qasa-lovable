import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderCreationFlow from '../../../components/Header/HeaderCreationFlow';
import DevExperimentsButton from '../../../components/DevExperimentsButton';
import LoginStep1 from './components/LoginStep1';
import LoginStep2 from './components/LoginStep2';

const LoginFlow = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // Update URL when step changes
  useEffect(() => {
    const stepFromUrl = parseInt(step) || 1;
    if (stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [step]);

  const handleNext = () => {
    if (currentStep < 2) {
      const nextStep = currentStep + 1;
      navigate(`/auth/login/step/${nextStep}`);
      setCurrentStep(nextStep);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      navigate(`/auth/login/step/${prevStep}`);
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
          <LoginStep1 
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <LoginStep2 
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

export default LoginFlow; 