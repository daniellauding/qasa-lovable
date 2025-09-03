import { ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../components/ui/Button';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep14 = ({ onNext, onPrev }) => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">

<div className="w-full">
        <div className="flex flex-col md:flex-row items-center md:min-h-[80vh] max-w-[1024px] gap-20 px-4 md:px-12 pt-0 md:pt-8 mx-auto">
          {/* Left: Content */}
          <div>
            <div className="space-y-6">
              {/* Step indicator */}
              <div className="flex items-center">
                <div className="flex items-center justify-center rounded-full border-2 px-3 text-brown border-brown/10 h-8">
                  <Typography variant="label-md" className="text-brown">{t('landlords.createListing.step14.partIndicator')}</Typography>
                </div>
              </div>

              <SectionHeader
                title={t('landlords.createListing.step14.title')}
                description={t('landlords.createListing.step14.description')}
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
                <Button variant="primary" size="lg" onClick={onNext}>{t('common.next')}</Button>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div>
            <div className="w-full ml-auto overflow-hidden rounded-[32px] h-64 md:h-[28rem]">
              <img
                src="https://qasa.se/_next/static/media/image-chapter-3-desktop.e23a5184.png"
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

CreateListingStep14.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default CreateListingStep14; 