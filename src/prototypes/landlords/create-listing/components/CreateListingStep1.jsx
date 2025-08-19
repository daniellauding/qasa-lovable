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
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
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
          <div className="order-1 lg:order-2">
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