import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DevExperimentsButton from '../../../components/DevExperimentsButton';
import HeaderCreationFlow from '../../../components/Header/HeaderCreationFlow';
import CreateTenantListingStep1 from './components/CreateTenantListingStep1';
import CreateTenantListingStep10 from './components/CreateTenantListingStep10';
import CreateTenantListingStep11 from './components/CreateTenantListingStep11';
import CreateTenantListingStep12 from './components/CreateTenantListingStep12';
import CreateTenantListingStep13 from './components/CreateTenantListingStep13';
import CreateTenantListingStep14 from './components/CreateTenantListingStep14';
import CreateTenantListingStep15 from './components/CreateTenantListingStep15';
import CreateTenantListingStep16 from './components/CreateTenantListingStep16';
import CreateTenantListingStep17 from './components/CreateTenantListingStep17';
import CreateTenantListingStep2 from './components/CreateTenantListingStep2';
import CreateTenantListingStep3 from './components/CreateTenantListingStep3';
import CreateTenantListingStep4 from './components/CreateTenantListingStep4';
import CreateTenantListingStep5 from './components/CreateTenantListingStep5';
import CreateTenantListingStep6 from './components/CreateTenantListingStep6';
import CreateTenantListingStep7 from './components/CreateTenantListingStep7';
import CreateTenantListingStep8 from './components/CreateTenantListingStep8';
import CreateTenantListingStep9 from './components/CreateTenantListingStep9';

const CreateTenantListingFlow = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const [currentStep, setCurrentStep] = useState(parseInt(step) || 1);
  const [formData, setFormData] = useState({
    searchLocations: [],
    language: 'sv',
    sharedAccommodation: 'all',
    furnishedType: 'both', 
    propertyTypes: ['apartment'],
    tenantType: 'none',
    numberOfTenants: '',
    minimumRooms: '',
    minimumSquareMeters: '',
    moveInType: 'indeterminate',
    moveInDate: null,
    moveOutType: 'indeterminate', 
    moveOutDate: null,
    requirements: [],
    preferences: ['balcony'],
    maxRent: '',
    // New fields for steps 9-15
    profilePicture: null,
    firstName: 'Daniel',
    lastName: 'Lauding',
    phoneNumber: '+46739184410',
    currentHousing: 'own_condominium',
    currentCity: '',
    movingReason: '',
    bioLived: '',
    occupations: [],
    bioTitle: '',
    bio: '',
    bioPets: '',
  });

  // Update URL when step changes
  useEffect(() => {
    const stepFromUrl = parseInt(step) || 1;
    if (stepFromUrl !== currentStep) {
      setCurrentStep(stepFromUrl);
    }
  }, [step]);

  const handleNext = () => {
    if (currentStep < 17) {
      const nextStep = currentStep + 1;
      navigate(`/tenants/create-tenant-listing/step/${nextStep}`);
      setCurrentStep(nextStep);
    } else {
      // Complete the flow
      navigate('/experiments');
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      navigate(`/tenants/create-tenant-listing/step/${prevStep}`);
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
          <CreateTenantListingStep1 
            onNext={handleNext}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <CreateTenantListingStep2 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <CreateTenantListingStep3 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <CreateTenantListingStep4 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <CreateTenantListingStep5 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 6:
        return (
          <CreateTenantListingStep6 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 7:
        return (
          <CreateTenantListingStep7 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 8:
        return (
          <CreateTenantListingStep8 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 9:
        return (
          <CreateTenantListingStep9 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 10:
        return (
          <CreateTenantListingStep10 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 11:
        return (
          <CreateTenantListingStep11 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 12:
        return (
          <CreateTenantListingStep12 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 13:
        return (
          <CreateTenantListingStep13 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 14:
        return (
          <CreateTenantListingStep14 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 15:
        return (
          <CreateTenantListingStep15 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 16:
        return (
          <CreateTenantListingStep16 
            onNext={handleNext}
            onPrev={handlePrev}
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 17:
        return (
          <CreateTenantListingStep17 
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

CreateTenantListingFlow.propTypes = {};

export default CreateTenantListingFlow; 