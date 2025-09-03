// Centralized styling for Button components

export const sizeClasses = {
  xs: 'h-8 px-2 text-xs rounded-full',
  sm: 'h-8 px-3 text-sm rounded-full',
  md: 'h-10 px-4 text-sm rounded-full',
  lg: 'h-12 px-6 text-base rounded-full',
  xl: 'h-14 px-8 text-lg rounded-full',
};

// Compact sizes for ghost and transparent variants
export const compactSizeClasses = {
  xs: 'h-8 px-1.5 text-xs rounded-full',
  sm: 'h-8 px-2 text-sm rounded-full',
  md: 'h-10 px-3 text-sm rounded-full',
  lg: 'h-12 px-4 text-base rounded-full',
  xl: 'h-14 px-6 text-lg rounded-full',
};

// Icon-only button sizes (square aspect ratio)
export const iconOnlySizeClasses = {
  xs: 'h-8 w-8 p-0 text-xs rounded-full',
  sm: 'h-8 w-8 p-0 text-sm rounded-full',
  md: 'h-10 w-10 p-0 text-sm rounded-full',
  lg: 'h-12 w-12 p-0 text-base rounded-full',
  xl: 'h-14 w-14 p-0 text-lg rounded-full',
};

export const buttonVariants = {
  primary: [
    'theme-bg-primary',
    'text-[var(--color-text-on-primary)]',
    'transition-colors duration-150',
    'focus:scale-95',
    'disabled:bg-loading disabled:text-white'
  ].join(' '),
  secondary: [
    'bg-[var(--color-button-secondary-bg)] text-white',
    'hover:bg-[var(--color-button-secondary-bg-hover)]',
    'focus:bg-[var(--color-button-secondary-bg-focus)]',
    'disabled:bg-gray-100 disabled:text-gray-400'
  ].join(' '),
  tertiary: [
    'bg-[var(--color-button-tertiary-bg)] text-[var(--color-button-tertiary-text)] border border-transparent',
    'hover:bg-[var(--color-button-tertiary-bg-hover)]',
    'focus:bg-[var(--color-button-tertiary-bg-focus)]',
    'disabled:bg-transparent disabled:text-gray-400'
  ].join(' '),
  destructive: [
    'bg-red-600 text-white',
    'hover:bg-red-700',
    'focus:bg-red-700',
    'disabled:bg-red-300'
  ].join(' '),
  loading: [
    'bg-loading text-white',
    'disabled:bg-loading disabled:text-white'
  ].join(' '),
  outline: [
    'bg-transparent text-[var(--color-button-outline-text)] border border-[var(--color-button-outline-border)]',
    'hover:bg-gray-50',
    'focus:bg-gray-50',
    'disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-300'
  ].join(' '),
  ghost: [
    'bg-transparent text-gray-700',
    'hover:bg-gray-100/50',
    'focus:bg-gray-100/50 focus:scale-95',
    'disabled:bg-transparent disabled:text-gray-400'
  ].join(' '),
  transparent: [
    'bg-transparent',
    'hover:bg-gray-50',
    'focus:bg-gray-50 focus:scale-95',
    'disabled:bg-transparent disabled:text-black'
  ].join(' '),
  bordered: [
    'bg-transparent border border-gray-300 text-gray-600',
    'hover:bg-gray-50',
    'focus:bg-gray-50 focus:scale-95',
    'disabled:bg-transparent disabled:text-gray-400 disabled:border-gray-300'
  ].join(' '),
  premium: [
    'bg-yellow-500 text-[var(--color-brown)]',
    'hover:bg-yellow-600',
    'focus:bg-yellow-600',
    'disabled:bg-yellow-300 disabled:text-[var(--color-brown)]',
    'font-semibold'
  ].join(' ')
};

export const buttonSizes = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-12 px-6 text-base',
};

export const baseButtonStyles = [
  'inline-flex items-center justify-center gap-2',
  'font-bold',
  'rounded-full',
  'transition-all duration-150 ease-in-out',
  'focus:outline-none focus:ring-0',
  'disabled:cursor-not-allowed',
  'active:scale-95'
].join(' ');

export const getButtonClasses = (size, variant, fullWidth, iconOnly, className) => {
  return [
    baseButtonStyles,
    iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
    buttonVariants[variant],
    fullWidth && !iconOnly ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');
}; 