import React from 'react';
import PropTypes from 'prop-types';
import Typography from './Typography';
import Button from './Button';

const ContentBlock = ({
  title,
  description,
  image,
  imagePosition = 'left',
  background = 'white',
  rounded = 'xl',
  ctaText,
  ctaVariant = 'primary',
  ctaOnClick,
  stepper,
  className = '',
  children,
  ...props
}) => {
  const backgroundClasses = {
    white: 'bg-white',
    softPink: 'bg-[var(--color-softPink)]',
    inset: 'bg-[var(--color-background-inset)]',
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-lg',
    md: 'rounded-xl',
    lg: 'rounded-2xl',
    full: 'rounded-full',
  };

  const imageLayoutClasses = {
    left: 'flex-row',
    right: 'flex-row-reverse',
    center: 'flex-col text-center',
  };

  const renderStepper = () => {
    if (!stepper) return null;
    
    return (
      <div className="flex items-center gap-4 mb-6">
        {stepper.map((step, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-sm font-medium">
              {index + 1}
            </div>
            <Typography variant="body-sm" className="text-[var(--color-text-secondary)]">
              {step}
            </Typography>
            {index < stepper.length - 1 && (
              <div className="w-4 h-px bg-[var(--color-border)]" />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderImage = () => {
    if (!image) return null;
    
    return (
      <div className={`flex-shrink-0 ${imagePosition === 'center' ? 'w-full mb-6' : 'w-1/2'}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    );
  };

  const renderContent = () => (
    <div className={`flex-1 ${imagePosition === 'center' ? 'w-full' : 'w-1/2'}`}>
      {title && (
        <Typography variant="title-lg" className="mb-4 text-[var(--color-text-primary)]">
          {title}
        </Typography>
      )}
      
      {description && (
        <Typography variant="body-md" className="mb-6 text-[var(--color-text-secondary)]">
          {description}
        </Typography>
      )}
      
      {children}
      
      {ctaText && (
        <Button
          variant={ctaVariant}
          size="lg"
          onClick={ctaOnClick}
          className="mt-6"
        >
          {ctaText}
        </Button>
      )}
    </div>
  );

  return (
    <div
      className={`
        p-8 ${backgroundClasses[background]} ${roundedClasses[rounded]}
        ${image ? `flex ${imageLayoutClasses[imagePosition]} gap-8` : ''}
        ${className}
      `}
      {...props}
    >
      {renderStepper()}
      
      {image ? (
        <>
          {renderImage()}
          {renderContent()}
        </>
      ) : (
        renderContent()
      )}
    </div>
  );
};

ContentBlock.propTypes = {
  title: PropTypes.node,
  description: PropTypes.node,
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(['left', 'right', 'center']),
  background: PropTypes.oneOf(['white', 'softPink', 'inset']),
  rounded: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'full']),
  ctaText: PropTypes.string,
  ctaVariant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'outline']),
  ctaOnClick: PropTypes.func,
  stepper: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContentBlock;
