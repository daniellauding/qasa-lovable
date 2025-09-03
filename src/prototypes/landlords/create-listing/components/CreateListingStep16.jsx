import { HelpCircle, Home, MapPin, Wifi } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import Chip from '../../../../components/ui/Chip';
import HintBox from '../../../../components/ui/HintBox';
import Input from '../../../../components/ui/Input';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep16 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [rent, setRent] = useState(formData.rent || '');
  const [showModal, setShowModal] = useState(false);
  
  const recommendedRent = 7730;
  const maxRecommended = 8271;

  const handleRentChange = (e) => {
    const value = e.target.value;
    setRent(value);
    updateFormData({ rent: value });
  };

  const handleRecommendedRentClick = () => {
    setRent(recommendedRent.toString());
    updateFormData({ rent: recommendedRent.toString() });
  };

  const isOverRecommended = rent && parseInt(rent) > maxRecommended;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="p-8 space-y-8">
          <SectionHeader 
            title={t('landlords.createListing.step16.title')}
            description={t('landlords.createListing.step16.description')}
          />

          <div className="space-y-6">
            {/* Recommended Rent Section */}
            <div className="space-y-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Typography variant="body-md" className="text-[var(--color-text-primary)]">
                    {t('landlords.createListing.step16.recommendedRentLabel')}
                  </Typography>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowModal(true)}
                    icon={<HelpCircle className="h-4 w-4" />}
                    iconOnly
                    className="text-[var(--color-text-secondary)]"
                  />
                </div>

                <Typography variant="text-3xl" className="text-[var(--color-text-primary)]">
                  {t('landlords.createListing.step16.recommendedRentAmount')}
                </Typography>
              </div>
                  
            </div>

            {/* Rent Input */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                {t('landlords.createListing.step16.rentLabel')}
              </label>
              <div className="relative">
                <Input
                  type="number"
                  value={rent}
                  onChange={handleRentChange}
                  className="pr-12"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-text-secondary)]">
                  kr
                </div>
              </div>
              <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
                {t('landlords.createListing.step16.rentHelperText')}
              </Typography>
              
              {/* Warning Chip */}
              {isOverRecommended && (
                <div className="mt-2">
                  <Chip size="sm" className="bg-orange-100 text-orange-800 border-orange-200">
                    {t('landlords.createListing.step16.overRecommendedChip')}
                  </Chip>
                </div>
              )}
            </div>

            {/* Payment Guarantee */}
            <HintBox
              title={t('landlords.createListing.step16.paymentGuaranteeTitle')}
              description={t('landlords.createListing.step16.paymentGuaranteeDescription')}
              icon={
                <img
                  src="https://staging.qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwatch.422e3957.png&w=96&q=75&dpl=dpl_66JpsRs53BHF6VqhrkzSFP3c1duK"
                  alt="Payment guarantee"
                  className="w-10 h-10"
                />
              }
            />
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
        />
      </div>

      {/* Recommended Rent Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  {t('landlords.createListing.step16.modalTitle')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowModal(false)}
                  iconOnly
                  icon={<span className="text-xl">×</span>}
                />
              </div>
              
              <div className="space-y-4">
                <Typography variant="body-md" className="text-gray-600">
                  {t('landlords.createListing.step16.modalDescription')}
                </Typography>
                
                <Typography variant="body-md" className="text-gray-600">
                  {t('landlords.createListing.step16.modalPriceRange')}
                </Typography>
                
                <div className="space-y-3">
                  <Typography variant="body-md" className="text-gray-900 font-medium">
                    {t('landlords.createListing.step16.modalFactorsTitle')}
                  </Typography>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Home className="w-5 h-5 text-[var(--color-text-secondary)]" />
                      <Typography variant="body-sm" className="text-gray-600">
                        {t('landlords.createListing.step16.modalFactors.size')}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[var(--color-text-secondary)]" />
                      <Typography variant="body-sm" className="text-gray-600">
                        {t('landlords.createListing.step16.modalFactors.address')}
                      </Typography>
                    </div>
                    <div className="flex items-center gap-3">
                      <Wifi className="w-5 h-5 text-[var(--color-text-secondary)]" />
                      <Typography variant="body-sm" className="text-gray-600">
                        {t('landlords.createListing.step16.modalFactors.amenities')}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="primary" 
                onClick={() => setShowModal(false)} 
                className="w-full mt-6"
              >
                Stäng
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CreateListingStep16.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep16;