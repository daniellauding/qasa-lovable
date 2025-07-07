import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import DynamicHeader from '../../../../components/DynamicHeader';
import Footer from '../../../../components/Footer';
import DevExperimentsButton from '../../../../components/DevExperimentsButton';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import TextArea from '../../../../components/ui/TextArea';

// Simplified version with only 5 essential steps instead of 17
const CreateTenantListingSimplify = () => {
  const { step = '1' } = useParams();
  const navigate = useNavigate();
  const currentStep = parseInt(step);
  const totalSteps = 5;

  const [formData, setFormData] = useState({
    // Basic info
    firstName: 'Daniel',
    lastName: 'Mattias',
    age: '28',
    
    // Location
    preferredAreas: 'Stockholm, Södermalm',
    
    // Housing
    housingType: 'apartment',
    budget: '15000',
    moveInDate: '2024-02-01',
    
    // Bio
    bio: 'Software developer looking for a cozy apartment in Stockholm',
    
    // Employment
    employment: 'Full-time software developer at tech company'
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      navigate(`/tenants/create-tenant-listing/step/${currentStep + 1}?variant=simplify`);
    } else {
      navigate('/tenants/profile?variant=simplified');
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      navigate(`/tenants/create-tenant-listing/step/${currentStep - 1}?variant=simplify`);
    } else {
      navigate('/tenants/create-tenant-listing?variant=simplify');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Typography variant="h1" className="mb-4">Vem är du?</Typography>
              <Typography variant="body1" className="text-gray-600">
                Berätta lite om dig själv så vi kan skapa din profil
              </Typography>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Förnamn"
                  value={formData.firstName}
                  onChange={(e) => updateFormData('firstName', e.target.value)}
                  placeholder="Daniel"
                />
                <Input
                  label="Efternamn"
                  value={formData.lastName}
                  onChange={(e) => updateFormData('lastName', e.target.value)}
                  placeholder="Mattias"
                />
              </div>
              
              <Input
                label="Ålder"
                type="number"
                value={formData.age}
                onChange={(e) => updateFormData('age', e.target.value)}
                placeholder="28"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Typography variant="h1" className="mb-4">Var vill du bo?</Typography>
              <Typography variant="body1" className="text-gray-600">
                Beskriv dina önskade områden och bostadstyp
              </Typography>
            </div>
            
            <div className="space-y-4">
              <Input
                label="Önskade områden"
                value={formData.preferredAreas}
                onChange={(e) => updateFormData('preferredAreas', e.target.value)}
                placeholder="Stockholm, Södermalm, Gamla stan..."
              />
              
              <div className="grid grid-cols-2 gap-4">
                <Input
                  label="Maxbudget (kr/månad)"
                  type="number"
                  value={formData.budget}
                  onChange={(e) => updateFormData('budget', e.target.value)}
                  placeholder="15000"
                />
                <Input
                  label="Inflytt datum"
                  type="date"
                  value={formData.moveInDate}
                  onChange={(e) => updateFormData('moveInDate', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Typography variant="h1" className="mb-4">Berätta om dig</Typography>
              <Typography variant="body1" className="text-gray-600">
                Skriv en kort presentation som hjälper hyresvärdar att lära känna dig
              </Typography>
            </div>
            
            <TextArea
              label="Din presentation"
              value={formData.bio}
              onChange={(e) => updateFormData('bio', e.target.value)}
              placeholder="Jag är en..."
              rows={6}
              maxLength={500}
            />
            <div className="text-sm text-gray-500 text-right">
              {formData.bio.length}/500 tecken
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Typography variant="h1" className="mb-4">Din sysselsättning</Typography>
              <Typography variant="body1" className="text-gray-600">
                Beskriv kort din nuvarande sysselsättning
              </Typography>
            </div>
            
            <TextArea
              label="Sysselsättning"
              value={formData.employment}
              onChange={(e) => updateFormData('employment', e.target.value)}
              placeholder="Full-time software developer at..."
              rows={4}
              maxLength={200}
            />
            <div className="text-sm text-gray-500 text-right">
              {formData.employment.length}/200 tecken
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <Typography variant="h1" className="mb-4">Grattis!</Typography>
              <Typography variant="body1" className="text-gray-600">
                Din förenkladе profil är nu klar. Du kan alltid redigera den senare.
              </Typography>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <Typography variant="h3">Din profil sammanfattning:</Typography>
              <div className="space-y-2 text-sm">
                <p><strong>Namn:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Ålder:</strong> {formData.age} år</p>
                <p><strong>Önskade områden:</strong> {formData.preferredAreas}</p>
                <p><strong>Budget:</strong> {formData.budget} kr/månad</p>
                <p><strong>Inflytt:</strong> {formData.moveInDate}</p>
                <p><strong>Sysselsättning:</strong> {formData.employment}</p>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Ogiltigt steg</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <DynamicHeader />
      
      <main className="flex-grow py-8">
        <div className="max-w-2xl mx-auto px-4">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Steg {currentStep} av {totalSteps}
              </span>
              <span className="text-sm text-gray-500">
                Förenklad version
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#6E3FF3] h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step content */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            {renderStep()}
          </div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <Button
                variant="secondary"
                onClick={prevStep}
                leftIcon={ArrowLeftIcon}
              >
                Tillbaka
              </Button>
            )}
            
            <div className="ml-auto">
              <Button
                variant="primary"
                onClick={nextStep}
                rightIcon={currentStep < totalSteps ? ArrowRightIcon : CheckCircleIcon}
              >
                {currentStep < totalSteps ? 'Nästa' : 'Slutför'}
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <DevExperimentsButton />
    </div>
  );
};

export default CreateTenantListingSimplify; 