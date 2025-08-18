import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Button from './Button';
import LocationSearch from './LocationSearch';
import { Search as SearchIcon } from 'lucide-react';

const HeroSection = ({
  title,
  subtitle,
  onLocationSelect,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  className = '',
  showSearch = true,
  suggestions = [],
}) => {
  return (
    <section className={`rounded-2xl bg-[var(--color-brown,#2f221c)] text-white ${className}`}>
      <div className="p-0 lg:p-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center min-h-[60vh]">
          <div className="px-2 py-6 md:px-8 text-center">
            <Typography variant="title-8xl" color="white" className="mb-4 leading-none uppercase">
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body-lg" color="white" className="mb-6 opacity-90">
                {subtitle}
              </Typography>
            )}
            <div className="flex gap-3 flex-col sm:flex-row">
              {showSearch ? (
                <div className="flex items-center gap-3 w-full max-w-lg mx-auto">
                  <LocationSearch suggestions={suggestions} onSelect={onLocationSelect} />
                  <Button
                    variant="primary"
                    size="xl"
                    className="w-20 h-16"
                    iconOnly
                    aria-label="Search"
                    icon={<SearchIcon className="w-5 h-5 text-[var(--color-brown,#2f221c)]" />}
                  />
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
