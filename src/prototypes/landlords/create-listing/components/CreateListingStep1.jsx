import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep1 = ({ onNext }) => {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-md">
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/_next/static/media/image-chapter-1-desktop.bb9a2a9d.png" 
              alt="Create listing illustration"
              className="max-w-full h-auto"
              onError={(e) => {
                // Fallback to a simple illustration if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <div style={{ display: 'none' }} className="w-64 h-48 bg-gradient-to-br from-ui-pink/20 to-ui-pink/10 rounded-lg flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" className="text-ui-pink">
                <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-6">
            {/* Step indicator */}
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center rounded-full border-2 px-3 text-brown border-brown/10 h-8">
                <Typography variant="label-md" className="text-brown">Del 1 av 3</Typography>
              </div>
            </div>

            {/* Title */}
            <Typography variant="title-lg" className="text-gray-900">
              Berätta lite om ditt hem.
            </Typography>

            {/* Description */}
            <Typography variant="body-lg" className="text-gray-700">
              Låt oss börja med att lägga grunden för din annons, såsom storlek och plats.
            </Typography>

            {/* Next button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={onNext}
                className="w-full sm:w-auto"
              >
                Nästa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateListingStep1.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default CreateListingStep1; 