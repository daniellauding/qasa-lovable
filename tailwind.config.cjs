/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors (keep for backward compatibility)
        'qasa-pink': '#E75D95',
        'qasa-dark': '#2D2D2D',
        'qasa-gray': '#F5F5F5',
        
        // Brand colors
        'ui-pink': '#f19ec1',
        'ui-pink-dark': '#ef8ab5',
        'ui-pink-light': '#f2a7c7',
        'brown': '#322721',
        'brown-light': '#3a2f2a',
        'brown-dark': '#281e1b',
        'off-white': '#f0f0eb',
        'off-white-light': '#f6f6f3',
        'off-white-dark': '#e0e0d7',
        'soft-yellow': '#fef8d1',
        'warm-yellow': '#f8d87c',
        'soft-pink': '#fbe9f0',
        'pink': '#ef8ab5',
        
        // Gray scale
        'gray': {
          10: '#f9f9f6',
          20: '#f0f0eb',
          30: '#e5e5df',
          40: '#d6d6ce',
          50: '#a3a397',
          60: '#78786d',
          70: '#545449',
          80: '#424237',
          90: '#26261e',
        },
        
        // Additional semantic colors
        'loading': '#ada9a6',
        'chip-border': '#e5e5e0',
        'chip-border-active': '#382d28',
        
        // Text colors (semantic)
        'text': {
          'strong': '#000000',
          'default': '#322721',
          'subtle': '#78786d',
          'disabled': '#a3a397',
          'on-brand-primary': '#453231',
          'on-brand-secondary': '#f0f0eb',
          'on-brand-tertiary': '#322721',
        },
        
        // Background colors (semantic)
        'bg': {
          'brand-primary': '#f19ec1',
          'brand-primary-hover': '#f2a7c7',
          'brand-primary-focus': '#ef8bb5',
          'brand-secondary': '#322721',
          'brand-secondary-hover': '#3a2f2a',
          'brand-secondary-focus': '#281e1b',
          'brand-tertiary': '#f0f0eb',
          'brand-tertiary-hover': '#f6f6f3',
          'brand-tertiary-focus': '#e0e0d7',
        },
      },
      fontFamily: {
        'title': ['DiatypeRounded', 'system-ui', 'sans-serif'],
        'body': ['DiatypeRounded', 'system-ui', 'sans-serif'],
        'mono': ['DiatypeRoundedMono', 'monospace'],
      },
      spacing: {
        '128': '32rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
} 