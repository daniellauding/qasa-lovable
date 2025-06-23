import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '../utils/translations/LanguageContext';
import { Globe } from 'lucide-react';

const Footer = ({ isFluid = false }) => {
  const { t } = useTranslation();
  
  const containerClasses = isFluid 
    ? "w-full px-4 py-12 sm:px-6 lg:px-8"
    : "max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8";
  
  return (
    <footer className="bg-[#342620] mt-auto rounded-t-[32px]">
      <div className={containerClasses}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="#ff84b6" viewBox="0 0 1808.5 623.62" height="36" className="mb-6">
              <path d="M1322.33 105.88v-.02c.01 14.99-6.47 43.35-10.55 64.29-3.5 17.94-8.3 42.18-38.9 42.18-62.97 0-54.32-80.21-105.54-80.21-21.14 0-33.66 15.83-33.66 35.54 0 14.78 9.03 28.57 22.89 38.79l50.94 38.35c42.55 29.36 59.83 68.38 59.83 98.55 0 56.78-49.46 99.15-109.11 99.15h-126.48c-47.72 0-71.79-14.49-85.6-48.57-3.63-10.23-23.2-60.3-23.2-77.89 0-26.58 18.35-47.1 46.34-47.1 53.86 0 77.4 80.17 121.7 80.17 17.41 0 30.34-15.08 30.34-30.68 0-11.64-7.53-24.2-21.38-34.42l-44.29-34.94c-37.04-28.12-58.13-60.47-58.13-94.96 0-63.22 49.91-120.53 127.28-120.53h127.15c40.88 0 70.37 36.27 70.37 72.3ZM881.14 295.91c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81S568.1 38.75 683.14 38.75c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99ZM772.7 243.23c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Zm948.72 52.68c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81 74.14-213.13 189.18-213.13c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99Zm-108.44-52.68c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78ZM483.95 89.73c0 26.72-16.41 67.54-38.1 154.2-21.69 86.66-34.22 133.32-34.22 176.24s19.98 69.73 19.98 107.12-30.47 68-60.36 68h-52.38c-33.9 0-59.49-36.36-59.49-68 0-54.67 58.92-71.14 58.92-105.71 0-14.49-10.16-27.07-24.88-27.07-27.96 0-34.34 37.59-97.54 37.59-78.7 0-166.07-75.77-166.07-190.7S122.69 38.76 220.69 38.76c70.78 0 88.44 40.1 117.08 40.1 30.51 0 34.43-50.5 84.82-50.5 30.92 0 61.37 24.92 61.37 61.37ZM318.4 243.24c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Z"></path>
            </svg>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-tertiary rounded-full text-sm text-brown border border-brown/20">
              <Globe size={16} />
              <span>{t('footer.language')}</span>
            </button>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">{t('footer.searchHome')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.findTenant')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.messages')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.myListings')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.rentals')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.help')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.logout')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.sitemap')}</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">{t('footer.pricing')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.housingRentals')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.forCompanies')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.termsConditions')}</a></li>
            </ul>
          </div>

          <div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-white">{t('footer.pressMedia')}</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  isFluid: PropTypes.bool,
};

export default Footer; 