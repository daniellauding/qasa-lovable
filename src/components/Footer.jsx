import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '../utils/translations/LanguageContext';
import { Globe } from 'lucide-react';
import Button from './ui/Button';
import Typography from './ui/Typography';
import Modal from './ui/Modal';
import RadioGroup from './ui/RadioGroup';
import { languages } from '../translations';

const Footer = ({ isFluid = false }) => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  
  const containerClasses = isFluid 
    ? "w-full px-4 py-12 sm:px-6 lg:px-8"
    : "max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8";

  const languageOptions = languages.map(language => ({
    value: language.code,
    label: language.name,
    description: `Switch interface to ${language.name}`,
  }));

  const handleLanguageChange = () => {
    changeLanguage(selectedLanguage);
    setIsLanguageModalOpen(false);
  };

  // Update selected language when current language changes
  useEffect(() => {
    setSelectedLanguage(currentLanguage);
  }, [currentLanguage]);
  
  return (
    <footer className="bg-[var(--color-brown)] rounded-t-[32px] -mt-8">
      <div className={containerClasses}>
        <div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-start items-center md:items-stretch min-h-[200px]">
          {/* Logo section - takes natural width */}
          <div className="flex flex-col justify-between md:pr-8">
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--color-primary)" viewBox="0 0 1808.5 623.62" height="36" className="mb-6">
              <path d="M1322.33 105.88v-.02c.01 14.99-6.47 43.35-10.55 64.29-3.5 17.94-8.3 42.18-38.9 42.18-62.97 0-54.32-80.21-105.54-80.21-21.14 0-33.66 15.83-33.66 35.54 0 14.78 9.03 28.57 22.89 38.79l50.94 38.35c42.55 29.36 59.83 68.38 59.83 98.55 0 56.78-49.46 99.15-109.11 99.15h-126.48c-47.72 0-71.79-14.49-85.6-48.57-3.63-10.23-23.2-60.3-23.2-77.89 0-26.58 18.35-47.1 46.34-47.1 53.86 0 77.4 80.17 121.7 80.17 17.41 0 30.34-15.08 30.34-30.68 0-11.64-7.53-24.2-21.38-34.42l-44.29-34.94c-37.04-28.12-58.13-60.47-58.13-94.96 0-63.22 49.91-120.53 127.28-120.53h127.15c40.88 0 70.37 36.27 70.37 72.3ZM881.14 295.91c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81S568.1 38.75 683.14 38.75c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99ZM772.7 243.23c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Zm948.72 52.68c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81 74.14-213.13 189.18-213.13c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99Zm-108.44-52.68c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78ZM483.95 89.73c0 26.72-16.41 67.54-38.1 154.2-21.69 86.66-34.22 133.32-34.22 176.24s19.98 69.73 19.98 107.12-30.47 68-60.36 68h-52.38c-33.9 0-59.49-36.36-59.49-68 0-54.67 58.92-71.14 58.92-105.71 0-14.49-10.16-27.07-24.88-27.07-27.96 0-34.34 37.59-97.54 37.59-78.7 0-166.07-75.77-166.07-190.7S122.69 38.76 220.69 38.76c70.78 0 88.44 40.1 117.08 40.1 30.51 0 34.43-50.5 84.82-50.5 30.92 0 61.37 24.92 61.37 61.37ZM318.4 243.24c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Z"></path>
            </svg>
            
            {/* Language button positioned at bottom */}
            <div className="mt-auto">
              <Button 
                variant="tertiary" 
                size="md" 
                icon={<Globe size={16} />} 
                className="border border-[var(--color-button-outline-border)]"
                onClick={() => setIsLanguageModalOpen(true)}
              >
                {t('footer.language')}
              </Button>
            </div>
          </div>
          
          {/* Links section - takes flex: 1 to push content right */}
          <div className="flex flex-1">
            <div className="flex flex-1 gap-8 md:gap-12 justify-start md:justify-end">
              <div>
            <div className="space-y-2">
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.searchHome')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.findTenant')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.messages')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.myListings')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.rentals')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.help')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.logout')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.sitemap')}
                </Typography>
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-2">
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.pricing')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.housingRentals')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.forCompanies')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.termsConditions')}
                </Typography>
              </a>
            </div>
          </div>

          <div>
            <div className="space-y-2">
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.careers')}
                </Typography>
              </a>
              <a href="#" className="block group">
                <Typography variant="body-lg" color="white" className="opacity-75 group-hover:opacity-100 transition-opacity">
                  {t('footer.pressMedia')}
                </Typography>
              </a>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>

      {/* Language Selection Modal */}
      <Modal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        title={t('languageModal.title')}
      >
        <div className="space-y-6">
          <RadioGroup
            label={t('languageModal.subtitle')}
            options={languageOptions}
            variant="card"
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
          />

          <div className="flex space-x-3 pt-4">
            <Button
              variant="secondary"
              size="md"
              onClick={() => setIsLanguageModalOpen(false)}
              className="flex-1"
            >
              {t('common.cancel')}
            </Button>
            <Button 
              variant="primary" 
              size="md" 
              onClick={handleLanguageChange} 
              className="flex-1"
            >
              {t('common.apply')}
            </Button>
          </div>
        </div>
      </Modal>
    </footer>
  );
};

Footer.propTypes = {
  isFluid: PropTypes.bool,
};

export default Footer; 