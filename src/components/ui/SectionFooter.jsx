import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { ArrowLeft } from 'lucide-react';

const SectionFooter = ({ 
  onNext, 
  onPrev, 
  nextText = 'Nästa',
  prevText = 'Tillbaka',
  nextDisabled = false,
  showPrev = true,
  showNext = true,
  variant = 'default',
  className = '',
  ...props 
}) => {
  const getLayoutClasses = () => {
    switch (variant) {
      case 'centered':
        return 'px-8 py-6 bg-white flex items-center justify-center';
      case 'centered-wide':
        return 'px-8 py-6 bg-white flex items-center justify-center w-full';
      case 'left-tertiary-right-primary':
        return 'px-8 py-6 bg-white flex items-center justify-between';
      case 'centered-tertiary-and-primary':
        return 'px-8 py-6 bg-white flex items-center justify-center gap-4';
      default:
        return 'px-8 py-6 bg-white flex items-center justify-between';
    }
  };

  const renderButtons = () => {
    switch (variant) {
      case 'centered':
        return (
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
            disabled={nextDisabled}
            className="mx-auto"
          >
            {nextText}
          </Button>
        );
      
      case 'centered-wide':
        return (
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
            disabled={nextDisabled}
            className="w-full max-w-md mx-auto"
          >
            {nextText}
          </Button>
        );
      
      case 'left-tertiary-right-primary':
        return (
          <>
            {showPrev ? (
              <Button
                variant="tertiary"
                size="lg"
                onClick={onPrev}
              >
                {prevText}
              </Button>
            ) : (
              <div />
            )}
            
            {showNext && (
              <Button
                variant="primary"
                size="lg"
                onClick={onNext}
                disabled={nextDisabled}
              >
                {nextText}
              </Button>
            )}
          </>
        );
      
      case 'centered-tertiary-and-primary':
        return (
          <>
            {showPrev && (
              <Button
                variant="tertiary"
                size="lg"
                onClick={onPrev}
              >
                {prevText}
              </Button>
            )}
            
            {showNext && (
              <Button
                variant="primary"
                size="lg"
                onClick={onNext}
                disabled={nextDisabled}
              >
                {nextText}
              </Button>
            )}
          </>
        );
      
      default:
        return (
          <>
            {showPrev ? (
              <Button
                variant="tertiary"
                size="lg"
                onClick={onPrev}
                iconOnly
                icon={<ArrowLeft className="h-5 w-5" />}
                aria-label={prevText}
              />
            ) : (
              <div />
            )}
            
            {showNext && (
              <Button
                variant="primary"
                size="lg"
                onClick={onNext}
                disabled={nextDisabled}
              >
                {nextText}
              </Button>
            )}
          </>
        );
    }
  };

  return (
    <div className={`${getLayoutClasses()} ${className}`} {...props}>
      {renderButtons()}
    </div>
  );
};

SectionFooter.propTypes = {
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  nextText: PropTypes.string,
  prevText: PropTypes.string,
  nextDisabled: PropTypes.bool,
  showPrev: PropTypes.bool,
  showNext: PropTypes.bool,
  variant: PropTypes.oneOf(['default', 'centered', 'centered-wide', 'left-tertiary-right-primary', 'centered-tertiary-and-primary']),
  className: PropTypes.string,
};

export default SectionFooter;
