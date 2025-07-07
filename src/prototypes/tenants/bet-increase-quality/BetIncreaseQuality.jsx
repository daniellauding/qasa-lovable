import React from 'react';
import ApplicationForm from './components/ApplicationForm';
import QualityIndicator from './components/QualityIndicator';
import DevExperimentsButton from '../../../components/DevExperimentsButton';

function BetIncreaseQuality() {
  const [quality, setQuality] = React.useState(0);

  const handleFormChange = (formData) => {
    // Simple quality scoring logic
    let score = 0;
    if (formData.employment?.length > 100) score += 20;
    if (formData.references?.length > 0) score += 30;
    if (formData.aboutMe?.length > 200) score += 25;
    if (formData.documents?.length > 0) score += 25;
    setQuality(score);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-2xl font-semibold text-gray-900">
            Rental Application
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ApplicationForm onChange={handleFormChange} />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <QualityIndicator score={quality} />
            </div>
          </div>
        </div>
      </main>
      
      <DevExperimentsButton />
    </div>
  );
}

export default BetIncreaseQuality; 