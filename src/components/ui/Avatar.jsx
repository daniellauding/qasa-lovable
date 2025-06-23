import React from 'react';
import PropTypes from 'prop-types';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

const Avatar = ({
  src,
  alt,
  size = 'md',
  className = '',
  ...props
}) => {
  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
    xl: 'h-14 w-14',
    '2xl': 'h-16 w-16',
    '3xl': 'h-32 w-32',
  };

  return (
    <AvatarPrimitive.Root
      className={`
        relative
        inline-flex
        shrink-0
        overflow-hidden
        rounded-full
        ${sizeClasses[size]}
        ${className}
      `}
      {...props}
    >
      <AvatarPrimitive.Image
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
      />
      <AvatarPrimitive.Fallback
        className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-600"
      >
        {alt?.slice(0, 2).toUpperCase() || '??'}
      </AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
  className: PropTypes.string,
};

export default Avatar; 