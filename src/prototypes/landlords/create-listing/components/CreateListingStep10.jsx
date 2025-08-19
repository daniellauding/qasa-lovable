import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import { ArrowLeft } from 'lucide-react';

const CreateListingStep10 = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex">
      <div className="w-full max-w-6xl mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Step Indicator */}
            <div className="flex w-max items-center justify-center rounded-full border-2 px-3 border-brown/10 h-8">
              <span className="text-sm font-medium text-brown">Del 2 av 3</span>
            </div>

            <div className="space-y-6">
              <SectionHeader title="Vad får ditt hem att sticka ut?" description="Lägg till bilder och beskrivning för att få din annons att stå ut ur mängden." />
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <button
                onClick={onPrev}
                className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
                aria-label="Tillbaka"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <Button
                variant="primary"
                size="lg"
                onClick={onNext}
              >
                Nästa
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <img 
                src="/_next/static/media/image-chapter-2-desktop.19055c83.png" 
                alt="Part 2 illustration"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateListingStep10.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default CreateListingStep10; 