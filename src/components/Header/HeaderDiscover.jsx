import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../../utils/translations/LanguageContext';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { languages } from '../../translations';
import Modal from '../ui/Modal';
import RadioGroup from '../ui/RadioGroup';
import Button from '../ui/Button';
import Typography from '../ui/Typography';

const HeaderDiscover = ({ 
  user = {
    name: 'Daniel Mattias',
    avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
  },
  messageCount = 9,
  notificationCount = 0,
  isFluid = false
}) => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  const { logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
  };

  const handleMessagesClick = () => {
    navigate('/messages');
  };

  // Handle scroll to add shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: t('headerMenu.leases'), href: "/sv/leases" },
    { label: t('headerMenu.profile'), href: "/sv/profile" },
    { label: t('headerMenu.savedSearches'), href: "/sv/saved-searches" },
    { label: t('headerMenu.settings'), href: "/sv/settings" },
    { label: t('headerMenu.howItWorks'), href: "/sv/how-it-works" },
    { label: t('headerMenu.help'), href: "/sv/help" },
    { label: t('headerMenu.language'), href: "#", isLanguageButton: true },
    { label: t('headerMenu.logout'), href: "#", isLogoutButton: true },
  ];

  const languageOptions = languages.map(language => ({
    value: language.code,
    label: language.name,
    description: `Switch interface to ${language.name}`,
  }));

  const handleLanguageChange = () => {
    changeLanguage(selectedLanguage);
    setIsLanguageModalOpen(false);
    setIsUserMenuOpen(false);
  };

  const containerClasses = isFluid 
    ? "w-full px-4 sm:px-6 lg:px-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8";

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-200 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className={containerClasses}>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div>
              <a aria-label="Sök bostad" href="/" className="flex">
                {theme?.logo || (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#342620"
                  viewBox="0 0 1808.5 623.62"
                  height="36"
                  style={{ transform: 'translateY(4px)' }}
                >
                  <path d="M1322.33 105.88v-.02c.01 14.99-6.47 43.35-10.55 64.29-3.5 17.94-8.3 42.18-38.9 42.18-62.97 0-54.32-80.21-105.54-80.21-21.14 0-33.66 15.83-33.66 35.54 0 14.78 9.03 28.57 22.89 38.79l50.94 38.35c42.55 29.36 59.83 68.38 59.83 98.55 0 56.78-49.46 99.15-109.11 99.15h-126.48c-47.72 0-71.79-14.49-85.6-48.57-3.63-10.23-23.2-60.3-23.2-77.89 0-26.58 18.35-47.1 46.34-47.1 53.86 0 77.4 80.17 121.7 80.17 17.41 0 30.34-15.08 30.34-30.68 0-11.64-7.53-24.2-21.38-34.42l-44.29-34.94c-37.04-28.12-58.13-60.47-58.13-94.96 0-63.22 49.91-120.53 127.28-120.53h127.15c40.88 0 70.37 36.27 70.37 72.3ZM881.14 295.91c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81S568.1 38.75 683.14 38.75c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99ZM772.7 243.23c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Zm948.72 52.68c0 27.44 12.89 58.75 12.89 86.87 0 30.68-24.42 59.71-60.37 59.71-45.03 0-44.93-42.79-69.72-42.79s-26.57 47.99-104.97 47.99-165.01-83.33-165.01-195.81 74.14-213.13 189.18-213.13c65.77 0 89.74 40.1 112.39 40.1 29.49 0 29.88-50.5 83.17-50.5 33.39 0 59.71 27.72 59.71 60.56 0 52.37-57.27 131.15-57.27 206.99Zm-108.44-52.68c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78ZM483.95 89.73c0 26.72-16.41 67.54-38.1 154.2-21.69 86.66-34.22 133.32-34.22 176.24s19.98 69.73 19.98 107.12-30.47 68-60.36 68h-52.38c-33.9 0-59.49-36.36-59.49-68 0-54.67 58.92-71.14 58.92-105.71 0-14.49-10.16-27.07-24.88-27.07-27.96 0-34.34 37.59-97.54 37.59-78.7 0-166.07-75.77-166.07-190.7S122.69 38.76 220.69 38.76c70.78 0 88.44 40.1 117.08 40.1 30.51 0 34.43-50.5 84.82-50.5 30.92 0 61.37 24.92 61.37 61.37ZM318.4 243.24c0-43.51-35.27-78.78-78.78-78.78s-78.78 35.27-78.78 78.78 35.27 78.78 78.78 78.78 78.78-35.27 78.78-78.78Z"></path>
                </svg>
                )}
              </a>
            </div>
            <nav className="ml-6 hidden lg:block">
              <ul className="flex gap-1">
                <li>
                  <a
                    href="/homes?variant=discover"
                    className="type-label-md group relative flex h-10 items-center rounded-full px-4 py-2"
                  >
                    <span
                      className="absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="group-hover:bg-gray-20/40 scale-80 absolute inset-0 rounded-full transition group-hover:scale-100"
                      aria-hidden="true"
                    ></span>
                    <span className="isolate pt-px">Discover</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/sv/how-it-works"
                    className="type-label-md group relative flex h-10 items-center rounded-full px-4 py-2"
                  >
                    <span
                      className="absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2"
                      aria-hidden="true"
                    ></span>
                    <span
                      className="group-hover:bg-gray-20/40 scale-80 absolute inset-0 rounded-full transition group-hover:scale-100"
                      aria-hidden="true"
                    ></span>
                    <span className="isolate pt-px">{t('header.howItWorks')}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center">
            <div className="flex items-center">
              {/* Rent out button */}
              <a href="/landlords/create-listing/step/1">
                <Button variant="tertiary" size="sm" className="mr-2">
                  {t('header.rentOut')}
                </Button>
              </a>

              {/* Messages button */}
              <button
                aria-label="Messages"
                className="relative p-2 rounded-full hover:bg-gray-100"
                onClick={handleMessagesClick}
              >
                <div className="relative">
                  {messageCount > 0 && (
                    <div className="absolute -top-1 -right-1">
                      <div className="h-[18px] min-w-[18px] rounded-full theme-badge-bg flex items-center justify-center px-1">
                        <p className="text-sm font-normal font-body theme-badge-text leading-none">
                          {messageCount}
                        </p>
                      </div>
                    </div>
                  )}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </div>
              </button>

              {/* User profile dropdown */}
              <div className="relative">
                <button
                  aria-label="Profile"
                  className="relative p-2"
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                >
                  <div className="relative">
                    {notificationCount > 0 && (
                      <div className="absolute -top-1 -right-1">
                        <div className="h-[18px] min-w-[18px] rounded-full bg-red-500 flex items-center justify-center px-1">
                          <p className="text-sm font-normal text-white leading-none">
                            {notificationCount}
                          </p>
                        </div>
                      </div>
                    )}
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-8 w-8 rounded-full"
                    />
                  </div>
                </button>

                {/* User menu dropdown */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-10 w-10 rounded-full"
                        />
                        <div>
                          <Typography variant="body1" weight="medium">
                            {user.name}
                          </Typography>
                          <Typography variant="body2" color="secondary">
                            Online
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <div className="py-2">
                      {menuItems.map((item, index) => (
                        <button
                          key={index}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => {
                            if (item.isLogoutButton) {
                              handleLogout();
                            } else if (item.isLanguageButton) {
                              setIsLanguageModalOpen(true);
                              setIsUserMenuOpen(false);
                            } else {
                              window.location.href = item.href;
                            }
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              aria-label="Menu"
              type="button"
              className="p-2 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 12h16" />
                <path d="M4 18h16" />
                <path d="M4 6h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 pt-4 pb-4">
            <nav className="space-y-2">
              <a
                href="/homes?variant=discover"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Discover
              </a>
              <a
                href="/sv/how-it-works"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {t('header.howItWorks')}
              </a>
            </nav>
            <div className="mt-4 pt-4 border-t border-gray-200 space-y-2">
              <button
                onClick={handleMessagesClick}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                Messages {messageCount > 0 && `(${messageCount})`}
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md"
              >
                {t('header.logout')}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Language Modal */}
      <Modal
        isOpen={isLanguageModalOpen}
        onClose={() => setIsLanguageModalOpen(false)}
        title={t('languageModal.title')}
      >
        <div className="p-6">
          <Typography variant="body1" className="mb-4">
            {t('languageModal.description')}
          </Typography>
          
          <RadioGroup
            options={languageOptions}
            value={selectedLanguage}
            onValueChange={setSelectedLanguage}
            variant="card"
            className="mb-6"
          />
          
          <div className="flex gap-3">
            <Button 
              variant="secondary"
              onClick={() => setIsLanguageModalOpen(false)}
              className="flex-1"
            >
              {t('common.cancel')}
            </Button>
            <Button 
              onClick={handleLanguageChange}
              className="flex-1"
            >
              {t('common.save')}
            </Button>
          </div>
        </div>
      </Modal>
    </header>
  );
};

HeaderDiscover.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    avatar: PropTypes.string,
  }),
  messageCount: PropTypes.number,
  notificationCount: PropTypes.number,
  isFluid: PropTypes.bool,
};

export default HeaderDiscover; 