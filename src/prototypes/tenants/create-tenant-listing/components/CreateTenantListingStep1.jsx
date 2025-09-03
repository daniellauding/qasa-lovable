import { ArrowRight, Globe } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep1 = ({ onNext, formData, updateFormData }) => {
  const { t, language, setLanguage } = useTranslation();
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  const benefits = [
    {
      title: t('tenant.listing.step1.benefit1.title', 'Visa upp dig för hyresvärdar'),
      description: t('tenant.listing.step1.benefit1.description', 'Skapa en profilannons så att hyresvärdar med bostäder som matchar dina behov enkelt kan komma i kontakt med dig.')
    },
    {
      title: t('tenant.listing.step1.benefit2.title', 'Verifierade hyresvärdar och ett schysst hyresavtal'),
      description: t('tenant.listing.step1.benefit2.description', 'Alla våra hyresvärdar är id-verifierade för din säkerhet. Vi hjälper dig att skapa ett tryggt hyresvavtal med schyssta villkor för dig under hela hyrestiden.')
    },
    {
      title: t('tenant.listing.step1.benefit3.title', 'Personlig support under hela hyrestiden'),
      description: t('tenant.listing.step1.benefit3.description', 'Vi finns här för dig från början och tills du flyttar ut. Kontakta oss om du behöver stöd eller råd.')
    }
  ];

  const languages = [
    {
      code: 'sv',
      name: 'Svenska',
    },
    {
      code: 'en', 
      name: 'English',
    }
  ];

  const handleLanguageChange = (languageCode) => {
    setLanguage(languageCode);
    updateFormData({ language: languageCode });
    setShowLanguageModal(false);
  };

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col justify-start min-h-[calc(100vh-64px)]">
        <SectionHeader 
          title={t('tenant.listing.step1.title', 'Skapa profilannons')}
          description={t('tenant.listing.step1.subtitle', 'Se till att du är synlig för hyresvärdar och öka dina chanser att få en bostad.')}
          titleVariant="h1"
          titleColor="text-gray-900"
          descriptionColor="text-gray-600"
          className="mb-12"
        />

        {/* Benefits */}
        <div className="space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center mt-1">
                <ArrowRight className="w-4 h-4 text-gray-600" strokeWidth={3} />
              </div>
              <div>
                <Typography variant="h4" className="text-gray-900 mb-1">
                  {benefit.title}
                </Typography>
                <Typography variant="body" className="text-gray-600">
                  {benefit.description}
                </Typography>
              </div>
            </div>
          ))}
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="lg"
            onClick={() => setShowLanguageModal(true)}
            icon={<Globe className="w-5 h-5" />}
          >
            {currentLanguage.name}
          </Button>
        </div>

        <SectionFooter 
          onNext={onNext}
          nextText={t('common.next', 'Nästa')}
          variant="centered-wide"
          showPrev={false}
        />
      </div>

      {/* Language Modal */}
      <Modal
        isOpen={showLanguageModal}
        onClose={() => setShowLanguageModal(false)}
        title={t('common.language', 'Språk')}
        className="md:max-w-[350px] md:w-auto md:h-fit h-fit"
      >
        <div className="space-y-2">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              variant={language === lang.code ? "primary" : "outline"}
              size="lg"
              className="w-full justify-start"
              icon={<Globe className="w-5 h-5" />}
            >
              {lang.name}
            </Button>
          ))}
        </div>
      </Modal>
    </div>
  );
};

CreateTenantListingStep1.propTypes = {
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep1; 