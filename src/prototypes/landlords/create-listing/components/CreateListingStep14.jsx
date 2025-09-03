import PropTypes from 'prop-types';
import React from 'react';
import SectionFooter from '../../../../components/ui/SectionFooter';
import Typography from '../../../../components/ui/Typography';

const CreateListingStep14 = ({ onNext, onPrev }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="order-2 lg:order-1">
            <img 
              src="/_next/static/media/image-chapter-3-desktop.e23a5184.png" 
              alt="Del 3 av 3"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex w-max items-center justify-center rounded-full border-2 px-3 text-brown border-brown/10 h-8">
              <span className="text-sm font-medium text-brown">Del 3 av 3</span>
            </div>

            <Typography variant="title-xl" className="text-gray-900">
              Bra jobbat! Bara några få frågor kvar.
            </Typography>

            <Typography variant="body-lg" className="text-gray-600">
              Gör klart din annons och förhandsgranska den innan publicering.
            </Typography>

            <SectionFooter
              onNext={onNext}
              onPrev={onPrev}
              nextText="Nästa"
              prevText="Tillbaka"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CreateListingStep14.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default CreateListingStep14; 