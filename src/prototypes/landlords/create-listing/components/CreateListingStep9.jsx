import PropTypes from 'prop-types';
import React from 'react';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep9 = ({ onNext, onPrev }) => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex">
      <div className="w-full max-w-6xl mx-auto flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Step Indicator */}
            <div className="flex w-max items-center justify-center rounded-full border-2 px-3 border-brown/10 h-8">
              <span className="text-sm font-medium text-brown">{t('landlords.createListing.step9.partIndicator')}</span>
            </div>

            <div className="space-y-6">
              <SectionHeader 
                title={t('landlords.createListing.step9.title')} 
                description={t('landlords.createListing.step9.description')} 
              />
            </div>

            <SectionFooter
              onNext={onNext}
              onPrev={onPrev}
              nextText="Nästa"
              prevText="Tillbaka"
            />
          </div>

          {/* Right Side - Image */}
          <div className="flex items-center justify-center">           
            <div className="w-96 ml-auto overflow-hidden rounded-[32px] h-64 md:h-[28rem]">
              <img
                src="https://qasa.se/_next/static/media/image-chapter-2-desktop.19055c83.png"
                alt="Create listing illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CreateListingStep9.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default CreateListingStep9; 