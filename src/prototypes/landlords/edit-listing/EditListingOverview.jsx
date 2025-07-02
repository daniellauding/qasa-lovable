import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import DevExperimentsButton from '../../../components/DevExperimentsButton';

const EditListingOverview = () => {
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
      path: '/landlords/create-listing/step/9'
    },
    {
      number: 4,
      title: 'Bekvämligheter',
      description: 'Frys, kokvrå, egen toalett, torktumlare + 10 till',
      path: '/landlords/create-listing/step/11'
    },
    {
      number: 5,
      title: 'Beskrivning',
      description: 'asdasd',
      path: '/landlords/create-listing/step/13'
    },
    {
      number: 6,
      title: 'Bilder',
      description: '4 bilder',
      path: '/landlords/create-listing/step/14'
    },
    {
      number: 7,
      title: 'Hyra',
      description: '1 000 kr',
      path: '/landlords/edit-rent'
    },
    {
      number: 8,
      title: 'Visningstider',
      description: '1 visning tillagd',
      path: '/landlords/create-listing/step/18'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
            aria-label="Tillbaka"
          >
            <ArrowLeftIcon className="h-5 w-5" />
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
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Typography variant="h3" className="mb-1 group-hover:text-blue-600">
                      {step.number}. {step.title}
                    </Typography>
                    <Typography variant="body-sm" className="text-gray-600 break-all">
                      {step.description}
                    </Typography>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 ml-4 flex-shrink-0" />
                </div>
              </button>
              {index < steps.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-6">
          <Button
            variant="primary"
            size="lg"
            onClick={handlePreviewAndPublish}
            className="w-full sm:w-auto"
          >
            Granska och publicera
          </Button>
        </div>
      </div>
      <DevExperimentsButton />
    </div>
  );
};

export default EditListingOverview; 