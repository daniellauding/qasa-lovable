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
  className = '',
  ...props 
}) => {
  return (
    <div className={`px-8 py-6 bg-white flex items-center justify-between ${className}`} {...props}>
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
  className: PropTypes.string,
};

export default SectionFooter;
