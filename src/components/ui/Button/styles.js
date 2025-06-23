// Centralized styling for Button components

export const sizeClasses = {
  xs: 'h-8 px-4 text-sm rounded-full', // 32px height, 16px padding
  sm: 'h-10 px-5 text-sm rounded-full', // 40px height, 20px padding
  md: 'h-12 px-6 text-base rounded-full', // 48px height, 24px padding
  lg: 'h-14 px-8 text-lg rounded-full', // 56px height, 32px padding
  xl: 'h-16 px-8 text-xl rounded-full', // 64px height, 32px padding
};

export const variantClasses = {
  primary: [
    'bg-bg-brand-primary text-text-on-brand-primary',
    'hover:bg-bg-brand-primary-hover',
    'focus:bg-bg-brand-primary-focus focus:scale-95',
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
};

export const baseClasses = [
  'inline-flex items-center justify-center',
  'font-medium font-body',
  'transition-all duration-150 ease-in-out',
  'focus:outline-none focus:ring-0',
  'disabled:cursor-not-allowed',
  'active:scale-95'
].join(' ');

export const getButtonClasses = (size, variant, fullWidth, className) => {
  return [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');
}; 