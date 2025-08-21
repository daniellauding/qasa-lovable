import React from 'react';
import DynamicHeader from '../../components/DynamicHeader';
import Footer from '../../components/Footer';
import DevExperimentsButton from '../../components/DevExperimentsButton';

const BlankTemplate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <DynamicHeader isFluid={true} />
      <main className="flex-grow bg-white">
        {/* Empty content area for AI/Lovable to populate */}
        <div className="container mx-auto px-4 py-8">
          {/* Empty content area for AI/Lovable to populate */}
        </div>
      </main>
      <Footer isFluid={true} />
      <DevExperimentsButton />
    </div>
  );
};

export default BlankTemplate;