// Centralized styling for Button components

export const sizeClasses = {
  xs: 'h-8 px-4 text-sm rounded-full', // 32px height, 16px padding
  sm: 'h-10 px-5 text-sm rounded-full', // 40px height, 20px padding
  md: 'h-12 px-6 text-base rounded-full', // 48px height, 24px padding
  lg: 'h-14 px-8 text-lg rounded-full', // 56px height, 32px padding
  xl: 'h-16 px-8 text-xl rounded-full', // 64px height, 32px padding
};

// Icon-only button sizes (square aspect ratio)
export const iconOnlySizeClasses = {
  xs: 'h-8 w-8 p-0 text-sm rounded-full', // 32px square
  sm: 'h-10 w-10 p-0 text-sm rounded-full', // 40px square
  md: 'h-12 w-12 p-0 text-base rounded-full', // 48px square
  lg: 'h-14 w-14 p-0 text-lg rounded-full', // 56px square
  xl: 'h-16 w-16 p-0 text-xl rounded-full', // 64px square
};

export const variantClasses = {
  primary: [
    'theme-bg-primary text-white',
    'hover:brightness-90',
    'focus:brightness-90 focus:scale-95',
    'disabled:bg-loading disabled:text-white'
  ].join(' '),
  secondary: [
    'bg-bg-brand-secondary text-text-on-brand-secondary',
    'hover:bg-bg-brand-secondary-hover',
    'focus:bg-bg-brand-secondary-focus focus:scale-95',
    'disabled:bg-loading disabled:text-white'
  ].join(' '),
  tertiary: [
    'bg-bg-brand-tertiary text-text-on-brand-tertiary',
    'hover:bg-bg-brand-tertiary-hover',
    'focus:bg-bg-brand-tertiary-focus focus:scale-95',
    'disabled:bg-loading disabled:text-white'
  ].join(' '),
  outline: [
    'bg-transparent theme-border-primary border-2 theme-primary',
    'hover:theme-bg-primary hover:text-white',
    'focus:theme-bg-primary focus:text-white focus:scale-95',
    'disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-300'
  ].join(' '),
  ghost: [
    'bg-transparent theme-primary',
    'hover:bg-gray-100',
    'focus:bg-gray-100 focus:scale-95',
    'disabled:bg-transparent disabled:text-gray-400'
  ].join(' '),
  transparent: [
    'bg-transparent',
    'hover:bg-bg-brand-tertiary-hover',
    'focus:bg-bg-brand-tertiary-focus focus:scale-95',
    'disabled:bg-transparent disabled:text-black'
  ].join(' ')
};

export const baseClasses = [
  'inline-flex items-center justify-center',
  'font-medium font-body',
  'transition-all duration-150 ease-in-out',
  'focus:outline-none focus:ring-0',
  'disabled:cursor-not-allowed',
  'active:scale-95'
].join(' ');

export const getButtonClasses = (size, variant, fullWidth, iconOnly, className) => {
  return [
    baseClasses,
    iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
    variantClasses[variant],
    fullWidth && !iconOnly ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');
}; 