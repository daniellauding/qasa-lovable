import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Button from './Button';
import LocationSearch from './LocationSearch';

const HeroSection = ({
  title,
  subtitle,
  onLocationSelect,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  className = '',
  showSearch = true,
}) => {
  return (
    <section className={`rounded-2xl bg-[#342620] text-white overflow-hidden ${className}`}>
      <div className="p-0 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[60vh]">
          <div className="px-2 py-6 md:px-8">
            <Typography variant="display-sm" color="white" className="mb-4">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body-lg" color="white" className="mb-6 opacity-90">
                {subtitle}
              </Typography>
            )}
            <div className="flex gap-3 flex-col sm:flex-row">
              {showSearch ? (
                <div className="flex items-center gap-3 w-full max-w-xl">
                  <LocationSearch onSelect={onLocationSelect} iconColorClass="text-white" />
                  <Button variant="primary" size="md" iconOnly aria-label="Search" className="text-white">
                    {/* magnifier icon using SVG to avoid extra deps */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21 21-4.34-4.34"></path>
                      <circle cx="11" cy="11" r="8"></circle>
                    </svg>
                  </Button>
                </div>
              ) : (
                <>
                  {ctaPrimary && (
                    <Button variant="primary" size="lg">{ctaPrimary}</Button>
                  )}
                  {ctaSecondary && (
                    <Button variant="tertiary" size="lg">{ctaSecondary}</Button>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="p-2 lg:p-4">
            <div className="relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] bg-white rounded-xl overflow-hidden">
              {imageSrc ? (
                <img src={imageSrc} alt="Hero" className="absolute inset-0 w-full h-full object-cover object-center" />
              ) : (
                <div className="absolute inset-0 bg-gray-100" />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  onSearch: PropTypes.func,
  ctaPrimary: PropTypes.string,
  ctaSecondary: PropTypes.string,
  imageSrc: PropTypes.string,
  className: PropTypes.string,
  showSearch: PropTypes.bool,
};

export default HeroSection;
