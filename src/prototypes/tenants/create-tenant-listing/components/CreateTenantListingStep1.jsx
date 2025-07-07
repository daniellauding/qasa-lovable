import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Modal from '../../../../components/ui/Modal';
import { ArrowRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Globe } from 'lucide-react';
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
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width="24">
          <g clipPath="url(#clip0_77_10039)">
            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#FFDA44"/>
            <path d="M13.7827 20.8696H42.7968C41.2628 9.09394 31.1937 0 19 0C17.208 0 15.4625 0.198094 13.7826 0.570469V20.8696H13.7827Z" fill="#0052B4"/>
            <path d="M7.52169 20.8695V2.91815C0.931624 6.51384 -3.78597 13.1092 -4.79688 20.8696H7.52169V20.8695Z" fill="#0052B4"/>
            <path d="M7.52159 27.1304H-4.79688C-3.78597 34.8907 0.931624 41.4862 7.52169 45.0817L7.52159 27.1304Z" fill="#0052B4"/>
            <path d="M13.7826 27.1305V47.4295C15.4625 47.8019 17.208 48 19 48C31.1937 48 41.2628 38.9061 42.7968 27.1304H13.7826V27.1305Z" fill="#0052B4"/>
            <g clipPath="url(#clip1_77_10039)">
              <path d="M-5 0H67.0001V48.0006H-5V0Z" fill="#0052B4"/>
              <path d="M22 -0.000213623H13V19.4997H-5V28.4997H13V47.9996H22V28.4997H67.0001V19.4997H22V-0.000213623Z" fill="#FFDA44"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_77_10039">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
            <clipPath id="clip1_77_10039">
              <rect width="72.0001" height="48" fill="white" transform="translate(-5)"/>
            </clipPath>
          </defs>
        </svg>
      )
    },
    {
      code: 'en',
      name: 'English',
      flag: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="none" width="24">
          <g clipPath="url(#clip0_77_10037)">
            <path d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z" fill="#F0F0F0"/>
            <path d="M4.96125 9.38831C3.07603 11.8411 1.6545 14.6681 0.826782 17.7393H13.3122L4.96125 9.38831Z" fill="#0052B4"/>
            <path d="M47.1732 17.7393C46.3455 14.6682 44.9239 11.8412 43.0388 9.3884L34.688 17.7393H47.1732Z" fill="#0052B4"/>
            <path d="M0.826782 30.261C1.65459 33.332 3.07613 36.1591 4.96125 38.6118L13.3119 30.261H0.826782Z" fill="#0052B4"/>
            <path d="M38.6117 4.96134C36.159 3.07613 33.332 1.65459 30.2609 0.826782V13.3121L38.6117 4.96134Z" fill="#0052B4"/>
            <path d="M9.38831 43.0386C11.8411 44.9239 14.6681 46.3454 17.7392 47.1732V34.688L9.38831 43.0386Z" fill="#0052B4"/>
            <path d="M17.7391 0.826782C14.668 1.65459 11.841 3.07613 9.38831 4.96125L17.7391 13.312V0.826782Z" fill="#0052B4"/>
            <path d="M30.2609 47.1732C33.3319 46.3454 36.159 44.9239 38.6116 43.0387L30.2609 34.688V47.1732Z" fill="#0052B4"/>
            <path d="M34.688 30.261L43.0388 38.6119C44.9239 36.1592 46.3455 33.332 47.1732 30.261H34.688Z" fill="#0052B4"/>
            <path d="M47.7968 20.8696H27.1306H27.1305V0.203156C26.1057 0.06975 25.061 0 24 0C22.9388 0 21.8943 0.06975 20.8696 0.203156V20.8694V20.8695H0.203156C0.06975 21.8943 0 22.939 0 24C0 25.0612 0.06975 26.1057 0.203156 27.1304H20.8694H20.8695V47.7968C21.8943 47.9303 22.9388 48 24 48C25.061 48 26.1057 47.9303 27.1304 47.7968V27.1306V27.1305H47.7968C47.9303 26.1057 48 25.0612 48 24C48 22.939 47.9303 21.8943 47.7968 20.8696Z" fill="#D80027"/>
            <path d="M30.2609 30.261L40.9705 40.9706C41.4631 40.4782 41.9329 39.9635 42.3812 39.4298L33.2123 30.2609H30.2609V30.261Z" fill="#D80027"/>
            <path d="M17.7391 30.261H17.7389L7.02942 40.9705C7.52179 41.4631 8.03657 41.933 8.5702 42.3813L17.7391 33.2121V30.261Z" fill="#D80027"/>
            <path d="M17.7391 17.7393V17.7391L7.02952 7.02939C6.53696 7.52176 6.06709 8.03654 5.61877 8.57017L14.7878 17.7392H17.7391V17.7393Z" fill="#D80027"/>
            <path d="M30.2609 17.7393L40.9706 7.02946C40.4782 6.5369 39.9634 6.06702 39.4298 5.6188L30.2609 14.7878V17.7393Z" fill="#D80027"/>
          </g>
          <defs>
            <clipPath id="clip0_77_10037">
              <rect width="48" height="48" rx="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
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
      <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col justify-center min-h-[calc(100vh-64px)]">
        {/* Header */}
        <div className="mb-12">
          <Typography variant="h1" className="text-gray-900 mb-4">
            {t('tenant.listing.step1.title', 'Skapa profilannons')}
          </Typography>
          <Typography variant="body-lg" className="text-gray-600">
            {t('tenant.listing.step1.subtitle', 'Se till att du är synlig för hyresvärdar och öka dina chanser att få en bostad.')}
          </Typography>
        </div>

        {/* Benefits */}
        <div className="space-y-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center mt-1">
                <ArrowRightIcon className="w-4 h-4 text-gray-600" strokeWidth={3} />
              </div>
              <div>
                <Typography variant="h3" className="text-gray-900 mb-1">
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
          <button
            type="button"
            onClick={() => setShowLanguageModal(true)}
            className="flex items-center gap-3 text-gray-900 hover:text-gray-700 transition-colors"
          >
            <Globe className="w-5 h-5 text-gray-600" />
            <span>{currentLanguage.name}</span>
          </button>
        </div>

        {/* Footer */}
        <div>
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
            className="w-full"
          >
            {t('common.next', 'Nästa')}
          </Button>
        </div>
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
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 p-4 rounded-lg border-2 transition-colors ${
                language === lang.code
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {lang.flag}
              <span className="text-gray-900 font-medium">{lang.name}</span>
            </button>
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