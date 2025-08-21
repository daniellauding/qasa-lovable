import React from 'react';
import PropTypes from 'prop-types';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { CheckCircle, Info, X, AlertCircle } from 'lucide-react';

const Toast = ({
  title,
  description,
  variant = 'info',
  duration = 5000,
  className = '',
  showIcon = true,
  ...props
}) => {
  const variantStyles = {
    black: {
      container: 'border-gray-800 bg-black text-white',
      icon: <Info className="h-5 w-5 text-white" />,
    },
    negative: {
      container: 'border-red-600 bg-red-600 text-white',
      icon: <AlertCircle className="h-5 w-5 text-white" />,
    },
  };

  return (
    <ToastPrimitive.Root
      duration={duration}
      className={`
        pointer-events-auto
        relative
        flex
        w-full
        items-start
        gap-4
        rounded-lg
        border
        p-4
        shadow-lg
        ${variantStyles[variant].container}
        ${className}
      `}
      {...props}
    >
      {showIcon && (
        <div className="shrink-0">
          {variantStyles[variant].icon}
        </div>
      )}

      <div className="flex-1">
        {title && (
          <ToastPrimitive.Title className={`text-sm font-medium ${
            variant === 'black' || variant === 'negative' ? 'text-white' : 'text-gray-900'
          }`}>
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className={`mt-1 text-sm ${
            variant === 'black' || variant === 'negative' ? 'text-gray-200' : 'text-gray-600'
          }`}>
            {description}
          </ToastPrimitive.Description>
        )}
      </div>

      <ToastPrimitive.Close
        className={`absolute right-2 top-2 rounded p-1 hover:opacity-80 transition-opacity ${
          variant === 'black' || variant === 'negative' ? 'text-gray-300 hover:text-white' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['black', 'negative']),
  duration: PropTypes.number,
  className: PropTypes.string,
  showIcon: PropTypes.bool,
};

export const ToastProvider = ToastPrimitive.Provider;
export const ToastViewport = ({ className = '', ...props }) => (
  <ToastPrimitive.Viewport
    className={`
      fixed
      bottom-0
      right-0
      z-50
      m-6
      flex
      w-full
      max-w-[420px]
      flex-col
      gap-2
      ${className}
    `}
    {...props}
  />
);

ToastViewport.propTypes = {
  className: PropTypes.string,
};

export default Toast; 