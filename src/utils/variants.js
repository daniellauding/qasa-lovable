// Central variant system for prototypes
// Allows creating multiple versions of prototypes for design experimentation

export const variants = {
  'create-tenant-listing': {
    main: {
      id: 'main',
      name: 'Original',
      description: 'Complete 17-step tenant listing flow with employment management',
      component: null, // Will use default component
      isDefault: true,
    },
    simplify: {
      id: 'simplify',
      name: 'Simplified',
      description: 'Streamlined 8-step flow focusing on essentials only',
      component: null, // Would load simplified version
      experimental: true,
    },
    gamified: {
      id: 'gamified',
      name: 'Gamified',
      description: 'Version with progress rewards and quality scoring',
      component: null,
      experimental: true,
    }
  },
  'find-tenant': {
    main: {
      id: 'main',
      name: 'Original',
      description: 'Current tenant discovery interface',
      component: null,
      isDefault: true,
    },
    cards: {
      id: 'cards',
      name: 'Card Layout',
      description: 'Tinder-style swipe interface for tenant selection',
      component: null,
      experimental: true,
    }
  },
  'landlord-dashboard': {
    main: {
      id: 'main',
      name: 'Original',
      description: 'Current dashboard layout',
      component: null,
      isDefault: true,
    },
    modern: {
      id: 'modern',
      name: 'Modern',
      description: 'Redesigned with better analytics and insights',
      component: null,
      experimental: true,
    }
  },
  'tenant-profile': {
    main: {
      id: 'main',
      name: 'Original',
      description: 'Current modal-based editing system',
      component: null,
      isDefault: true,
    },
    inline: {
      id: 'inline',
      name: 'Inline Edit',
      description: 'Direct inline editing without modals',
      component: null,
      experimental: true,
    }
  }
};

// Get variant info for a prototype
export const getVariant = (prototypeId, variantId = 'main') => {
  const prototypeVariants = variants[prototypeId];
  if (!prototypeVariants) return null;
  
  return prototypeVariants[variantId] || prototypeVariants.main;
};

// Get all variants for a prototype
export const getVariants = (prototypeId) => {
  const prototypeVariants = variants[prototypeId];
  if (!prototypeVariants) return [];
  
  return Object.values(prototypeVariants);
};

// Get variant from URL params
export const getVariantFromURL = (prototypeId) => {
  if (typeof window === 'undefined') return 'main';
  
  const urlParams = new URLSearchParams(window.location.search);
  const variantParam = urlParams.get('variant');
  
  if (variantParam && variants[prototypeId]?.[variantParam]) {
    return variantParam;
  }
  
  return 'main';
};

// Generate URL with variant parameter
export const getVariantURL = (basePath, variantId) => {
  if (variantId === 'main') {
    return basePath; // No parameter for main variant
  }
  
  const url = new URL(basePath, window.location.origin);
  url.searchParams.set('variant', variantId);
  return url.pathname + url.search;
};

// Copy variant URL to clipboard
export const copyVariantURL = async (basePath, variantId) => {
  const url = getVariantURL(basePath, variantId);
  const fullURL = `${window.location.origin}${url}`;
  
  try {
    await navigator.clipboard.writeText(fullURL);
    return true;
  } catch (err) {
    console.warn('Failed to copy to clipboard:', err);
    return false;
  }
};

// Check if prototype has variants
export const hasVariants = (prototypeId) => {
  const prototypeVariants = variants[prototypeId];
  return prototypeVariants && Object.keys(prototypeVariants).length > 1;
}; 