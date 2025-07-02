import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useParams } from 'react-router-dom';
import HeaderCreationFlow from '../../../components/Header/HeaderCreationFlow';
import Footer from '../../../components/Footer';
import DevExperimentsButton from '../../../components/DevExperimentsButton';
import CreateListingStep1 from './components/CreateListingStep1';
import CreateListingStep2 from './components/CreateListingStep2';
import CreateListingStep3 from './components/CreateListingStep3';
import CreateListingStep4 from './components/CreateListingStep4';
import CreateListingStep5 from './components/CreateListingStep5';
import CreateListingStep6 from './components/CreateListingStep6';
import CreateListingStep7 from './components/CreateListingStep7';
import CreateListingStep8 from './components/CreateListingStep8';
import CreateListingStep9 from './components/CreateListingStep9';
import CreateListingStep10 from './components/CreateListingStep10';
import CreateListingStep11 from './components/CreateListingStep11';
import CreateListingStep12 from './components/CreateListingStep12';
import CreateListingStep13 from './components/CreateListingStep13';
import CreateListingStep14 from './components/CreateListingStep14';
import CreateListingStep15 from './components/CreateListingStep15';
import CreateListingStep16 from './components/CreateListingStep16';
import CreateListingStep17 from './components/CreateListingStep17';
import CreateListingStep18 from './components/CreateListingStep18';
import CreateListingStep19 from './components/CreateListingStep19';
import ListingPreview from './components/ListingPreview';

const CreateListingFlow = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);
  const [formData, setFormData] = useState({
    address: '',
    street: '',
    streetNumber: '',
    postalCode: '',
    city: '',
    municipality: '',
    apartmentNumber: '',
    floor: '',
    buildingFloors: '',
  });

  // Check if we're in preview mode
  const isPreview = step === 'preview';

  // Update URL when step changes
  useEffect(() => {
    if (step === 'preview') {
      return; // Don't update step for preview
    }
    const stepFromUrl = parseInt(step) || 1;
    if (stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [step]);

  const handleNext = () => {
    if (currentStep < 19) {
      const nextStep = currentStep + 1;
      navigate(`/landlords/create-listing/step/${nextStep}`);
      setCurrentStep(nextStep);
    } else if (currentStep === 19) {
      // Go to preview after step 19
      navigate('/landlords/create-listing/step/preview');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      navigate(`/landlords/create-listing/step/${prevStep}`);
      setCurrentStep(prevStep);
    }
  };

  const handleDismiss = () => {
    // Navigate back to experiments dashboard
    navigate('/experiments');
  };

  const handleEditFromPreview = () => {
    // Go back to the last step (19)
    navigate('/landlords/create-listing/step/19');
    setCurrentStep(19);
  };

  const handlePublishFromPreview = () => {
    // Navigate to dashboard or success page
    navigate('/landlords/dashboard');
  };

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const renderStep = () => {
    if (isPreview) {
      return (
        <ListingPreview 
          formData={formData}
          onEdit={handleEditFromPreview}
          onPublish={handlePublishFromPreview}
        />
      );
    }

    switch (currentStep) {
      case 1:
        return (
          <CreateListingStep1 
            onNext={handleNext}
          />
        );
      case 2:
        return (
          <CreateListingStep2 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <CreateListingStep3 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <CreateListingStep4 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <CreateListingStep5 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 6:
        return (
          <CreateListingStep6 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 7:
        return (
          <CreateListingStep7 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 8:
        return (
          <CreateListingStep8 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 9:
        return (
          <CreateListingStep9 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 10:
        return (
          <CreateListingStep10 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 11:
        return (
          <CreateListingStep11 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 12:
        return (
          <CreateListingStep12 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 13:
        return (
          <CreateListingStep13 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 14:
        return (
          <CreateListingStep14 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 15:
        return (
          <CreateListingStep15 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 16:
        return (
          <CreateListingStep16 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 17:
        return (
          <CreateListingStep17 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 18:
        return (
          <CreateListingStep18 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 19:
        return (
          <CreateListingStep19 
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
      {!isPreview && <HeaderCreationFlow onDismiss={handleDismiss} />}
      <main className="flex-grow">
        {renderStep()}
      </main>
      <DevExperimentsButton />
    </div>
  );
};

CreateListingFlow.propTypes = {};

export default CreateListingFlow; 