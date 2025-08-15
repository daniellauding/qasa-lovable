import React from 'react';
import PropTypes from 'prop-types';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { CheckCircle, Info, X } from 'lucide-react';

const Toast = ({
  title,
  description,
  variant = 'info',
  duration = 5000,
  className = '',
  ...props
}) => {
  const variantStyles = {
    success: {
      container: 'border-green-500 bg-green-50',
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    error: {
      container: 'border-red-500 bg-red-50',
      icon: <ExclamationCircleIcon className="h-5 w-5 text-red-500" />,
    },
    info: {
      container: 'border-blue-500 bg-blue-50',
      icon: <Info className="h-5 w-5 text-blue-500" />,
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
      <div className="shrink-0">
        {variantStyles[variant].icon}
      </div>

      <div className="flex-1">
        {title && (
          <ToastPrimitive.Title className="text-sm font-medium text-gray-900">
            {title}
          </ToastPrimitive.Title>
        )}
        {description && (
          <ToastPrimitive.Description className="mt-1 text-sm text-gray-600">
            {description}
          </ToastPrimitive.Description>
        )}
      </div>

      <ToastPrimitive.Close
        className="absolute right-2 top-2 rounded p-1 text-gray-400 hover:text-gray-600"
      >
        <X className="h-4 w-4" />
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
  );
};

Toast.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'info']),
  duration: PropTypes.number,
  className: PropTypes.string,
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