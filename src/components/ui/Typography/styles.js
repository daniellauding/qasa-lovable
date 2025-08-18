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
  // Title scale variants aligned with Tailwind text sizes
  'title-xl': 'text-xl font-bold font-title',
  'title-2xl': 'text-2xl font-bold font-title',
  'title-3xl': 'text-3xl font-bold font-title',
  'title-4xl': 'text-4xl font-bold font-title',
  'title-5xl': 'text-5xl font-bold font-title',
  'title-6xl': 'text-6xl font-bold font-title',
  'title-7xl': 'text-7xl font-bold font-title',
  'title-8xl': 'text-8xl font-bold font-title',
  'title-9xl': 'text-9xl font-bold font-title',
  
  // Label variants - using Medium (500)
  'label-md': 'text-base font-medium font-body', // 16px
  'label-sm': 'text-sm font-medium font-body', // 14px
  
  // Body variants - using Regular (400)
  'body-xl': 'text-xl font-normal font-body', // 20px
  'body-lg': 'text-lg font-normal font-body', // 18px
  'body-md': 'text-base font-normal font-body', // 16px
  'body-sm': 'text-sm font-normal font-body', // 14px
  'body-xs': 'text-[10px] font-normal font-body', // 10px
  
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
  default: 'text-[var(--color-text-primary)]',
  secondary: 'text-[var(--color-text-secondary)]',
  primary: 'text-[var(--color-primary)]',
  white: 'text-white',
  theme: '', // No default color class - allows theme classes to take precedence
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
  'title-xl', 'title-2xl', 'title-3xl', 'title-4xl', 'title-5xl', 'title-6xl', 'title-7xl', 'title-8xl', 'title-9xl',
  // Label variants
  'label-md', 'label-sm',
  // Body variants
  'body-xl', 'body-lg', 'body-md', 'body-sm', 'body-xs',
  // Mono variants
  'mono-md', 'mono-sm', 'mono-bold',
  // Legacy variants
  'h1', 'h2', 'h3', 'h4', 'body1', 'body2', 'caption'
];

// Available typography colors
export const typographyColors = ['default', 'secondary', 'primary', 'white', 'theme'];

// Available typography weights
export const typographyWeights = ['normal', 'medium', 'semibold', 'bold']; 