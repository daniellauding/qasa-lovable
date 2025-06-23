// Typography variant classes
export const variantClasses = {
  // Display variants - using Bold (700)
  'display-lg': 'text-6xl font-bold font-title', // 60px
  'display-md': 'text-5xl font-bold font-title', // 48px
  'display-sm': 'text-4xl font-bold font-title', // 36px
  
  // Title variants - using Bold (700) 
  'title-lg': 'text-4xl font-bold font-title', // 36px
  'title-md': 'text-3xl font-bold font-title', // 30px
  'title-sm': 'text-2xl font-bold font-title', // 24px
  'title-xs': 'text-xl font-bold font-title', // 20px
  'title-2xs': 'text-base font-bold font-title', // 16px
  
  // Label variants - using Medium (500)
  'label-md': 'text-base font-medium font-body', // 16px
  'label-sm': 'text-sm font-medium font-body', // 14px
  
  // Body variants - using Regular (400)
  'body-xl': 'text-xl font-normal font-body', // 20px
  'body-lg': 'text-lg font-normal font-body', // 18px
  'body-md': 'text-base font-normal font-body', // 16px
  'body-sm': 'text-sm font-normal font-body', // 14px
  
  // Mono variants - using Diatype Rounded Semi-Mono
  'mono-md': 'text-base font-normal font-mono', // 16px
  'mono-sm': 'text-sm font-normal font-mono', // 14px
  'mono-bold': 'text-base font-bold font-mono', // 16px bold
  
  // Legacy variants for backward compatibility
  h1: 'text-4xl font-bold font-title',
  h2: 'text-3xl font-bold font-title',
  h3: 'text-2xl font-bold font-title',
  h4: 'text-xl font-bold font-title',
  body1: 'text-base font-normal font-body',
  body2: 'text-sm font-normal font-body',
  caption: 'text-xs font-normal font-body',
};

// Typography color classes
export const colorClasses = {
  default: 'text-gray-900',
  secondary: 'text-gray-600',
  primary: 'text-[#FF4B75]',
  white: 'text-white',
};

// Typography weight classes
export const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

// Available typography variants
export const typographyVariants = [
  // Display variants
  'display-lg', 'display-md', 'display-sm',
  // Title variants  
  'title-lg', 'title-md', 'title-sm', 'title-xs', 'title-2xs',
  // Label variants
  'label-md', 'label-sm',
  // Body variants
  'body-xl', 'body-lg', 'body-md', 'body-sm',
  // Mono variants
  'mono-md', 'mono-sm', 'mono-bold',
  // Legacy variants
  'h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'caption'
];

// Available typography colors
export const typographyColors = ['default', 'secondary', 'primary', 'white'];

// Available typography weights
export const typographyWeights = ['normal', 'medium', 'semibold', 'bold']; 