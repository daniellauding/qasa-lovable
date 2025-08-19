import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep1 = ({ onNext, onPrev }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white flex items-center justify-center p-4 md:py-8">
      <div className="w-full">
        <div className="flex flex-col md:flex-row items-center md:min-h-[80vh] max-w-[1024px] gap-20 px-4 md:px-12 pt-0 md:pt-8 mx-auto">
          {/* Left: Content */}
          <div>
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center">
                <div className="flex items-center justify-center rounded-full border-2 px-3 text-brown border-brown/10 h-8">
                  <Typography variant="label-md" className="text-brown">Del 1 av 3</Typography>
                </div>
              </div>

              <SectionHeader
                title={t('landlords.createListing.step1.title')}
                description={t('landlords.createListing.step1.description')}
              />

              {/* Footer */}
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="tertiary"
                  size="lg"
                  onClick={onPrev}
                  iconOnly
                  icon={<ArrowLeft className="h-5 w-5" />}
                  aria-label="Tillbaka"
                />
                <Button variant="primary" size="lg" onClick={onNext}>Nästa</Button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div className="w-full ml-auto overflow-hidden rounded-[32px] h-64 md:h-[28rem]">
              <img
                src="https://qasa.se/_next/static/media/image-chapter-1-desktop.bb9a2a9d.png"
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

CreateListingStep1.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func,
};

export default CreateListingStep1; 