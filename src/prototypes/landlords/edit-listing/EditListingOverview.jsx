import { ArrowLeft, ArrowRight } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DevExperimentsButton from '../../../components/DevExperimentsButton';
import DynamicHeader from '../../../components/DynamicHeader';
import Footer from '../../../components/Footer';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import { useTranslation } from '../../../utils/translations/LanguageContext';

const EditListingOverview = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/experiments');
  };

  const handlePreviewAndPublish = () => {
    navigate('/landlords/create-listing/step/preview');
  };

  const steps = [
    {
      number: 1,
      title: 'Adress',
      description: 'Åsdammsvägen 2, 439 65, Stråvalla',
      path: '/landlords/create-listing/step/2'
    },
    {
      number: 2,
      title: 'Om bostaden',
      description: 'Hela bostaden, möblerat, övrigt, 2,5 rum (3 sovrum), 2 m², passar 3 personer',
      path: '/landlords/create-listing/step/5'
    },
    {
      number: 3,
      title: 'Uthyrningsperiod',
      description: 'Snarast möjligt - Tillsvidare',
      path: '/landlords/create-listing/step/8'
    },
    {
      number: 4,
      title: 'Bekvämligheter',
      description: 'Frys, kokvrå, egen toalett, torktumlare + 10 till',
      path: '/landlords/create-listing/step/10'
    },
    {
      number: 5,
      title: 'Beskrivning',
      description: 'asdasd',
      path: '/landlords/create-listing/step/12'
    },
    {
      number: 6,
      title: 'Bilder',
      description: '4 bilder',
      path: '/landlords/create-listing/step/13'
    },
    {
      number: 7,
      title: 'Hyra',
      description: '1 000 kr',
      path: '/landlords/create-listing/step/16'
    },
    {
      number: 8,
      title: 'Visningstider',
      description: '1 visning tillagd',
      path: '/landlords/create-listing/step/19'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <DynamicHeader isFluid={true} />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
            aria-label="Tillbaka"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          
          <Typography variant="h1" className="mb-2">
            Redigera din annons
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            Hoppa in där du vill fortsätta redigera din annons.
          </Typography>
        </div>

        {/* Steps List */}
        <div className="space-y-0 mb-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <button
                onClick={() => navigate(step.path)}
                className="w-full py-4 text-left group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Typography variant="h4" className="mb-1">
                      {step.number}. {step.title}
                    </Typography>
                    <Typography variant="body-sm" className="text-gray-600 break-all">
                      {step.description}
                    </Typography>
                  </div>
                  <ArrowRight className="h-5 w-5 flex-shrink-0" />
                </div>
              </button>
              {index < steps.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6 flex justify-end">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePreviewAndPublish}
            className="w-full sm:w-auto"
          >
            {t('editListing.previewAndPublish') || 'Granska och publicera'}
          </Button>
        </div>
        </div>
      </main>
      
      <Footer isFluid={true} />
      <DevExperimentsButton />
    </div>
  );
};

export default EditListingOverview; 