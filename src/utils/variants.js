// Variant Registry - Central management of all prototype variants
// This allows teams to create, manage and share different versions of prototypes

export const variantRegistry = {
  'register': {
    name: 'Register Flow',
    description: 'User registration and onboarding flow with profile completion experiments',
    variants: [
      {
        id: 'default',
        name: 'Default',
        description: 'Standard 3-step registration: account creation, email verification, basic profile',
        component: () => import('../prototypes/auth/register/RegisterFlow'),
        tags: ['standard', 'baseline']
      },
      {
        id: 'enhanced-profile',
        name: 'Enhanced Profile Completion',
        description: 'Extended step 2 with optional profile fields and real-time preview',
        component: () => import('../prototypes/auth/register/variants/RegisterFlowEnhanced'),
        tags: ['profile', 'completion', 'preview'],
        status: 'draft'
      },
      {
        id: 'gamified',
        name: 'Gamified Completion',
        description: 'Profile completion with progress gamification and incentives',
        component: () => import('../prototypes/auth/register/variants/RegisterFlowGamified'),
        tags: ['gamification', 'engagement'],
        status: 'draft'
      },
      {
        id: 'step-by-step',
        name: 'Step-by-Step Profile',
        description: 'Additional micro-steps for each profile field with focused completion',
        component: () => import('../prototypes/auth/register/variants/RegisterFlowStepByStep'),
        tags: ['micro-steps', 'focused'],
        status: 'draft'
      },
      {
        id: 'real-time-preview',
        name: 'Real-Time Preview',
        description: 'Live tenant card preview that updates as user fills out profile information',
        component: () => import('../prototypes/auth/register/variants/RegisterFlowRealTimePreview'),
        tags: ['real-time', 'preview', 'live-update'],
        status: 'draft'
      }
    ]
  },
  'create-tenant-listing': {
    name: 'Create Tenant Listing',
    description: 'Step-by-step flow for tenants to create profile listings',
    variants: [
      {
        id: 'default',
        name: 'Default',
        description: 'Standard 17-step flow with comprehensive forms',
        component: () => import('../prototypes/tenants/create-tenant-listing/CreateTenantListingFlow'),
        tags: ['complete', 'thorough']
      },
      {
        id: 'simplify',
        name: 'Simplified',
        description: 'Streamlined version with fewer steps and simplified forms',
        component: () => import('../prototypes/tenants/create-tenant-listing/variants/CreateTenantListingSimplify'),
        tags: ['quick', 'minimal'],
        status: 'draft'
      }
    ]
  },
  'create-listing': {
    name: 'Create Listing',
    description: 'Step-by-step flow for landlords to create property listings',
    variants: [
      {
        id: 'default',
        name: 'Default',
        description: 'Standard property listing creation flow',
        component: () => import('../prototypes/landlords/create-listing/CreateListingFlow'),
        tags: ['complete']
      }
    ]
  },
  'find-tenant': {
    name: 'Find Tenant',
    description: 'Browse verified tenant profiles and connect with quality renters',
    variants: [
      {
        id: 'default',
        name: 'Default',
        description: 'Standard tenant discovery interface',
        component: () => import('../prototypes/landlords/find-tenant/FindTenant'),
        tags: ['matching']
      },
      {
        id: 'with-filters',
        name: 'With Advanced Filters',
        description: 'Enhanced tenant discovery with comprehensive filtering, search modals, and save functionality',
        component: () => import('../prototypes/landlords/find-tenant/variants/FindTenantWithFilters'),
        tags: ['filtering', 'search', 'advanced', 'modal'],
        status: 'draft'
      }
    ]
  },
  'homes': {
    name: 'Homes',
    description: 'Property search and discovery with map integration',
    variants: [
      {
        id: 'default',
        name: 'Default',
        description: 'Standard property search with listings and map',
        component: () => import('../prototypes/homes/HomesPage'),
        tags: ['search', 'map']
      },
      {
        id: 'discover',
        name: 'Discover',
        description: 'Combined homes and tenants discovery with toggle interface and unified map view',
        component: () => import('../prototypes/homes/variants/HomesPageDiscover'),
        tags: ['toggle', 'homes', 'tenants', 'unified', 'map'],
        status: 'draft'
      }
    ]
  }
};

// Helper functions for working with variants
export const getPrototypeVariants = (prototypeId) => {
  return variantRegistry[prototypeId]?.variants || [];
};

export const getVariant = (prototypeId, variantId = 'default') => {
  const prototype = variantRegistry[prototypeId];
  if (!prototype) return null;
  
  return prototype.variants.find(v => v.id === variantId) || prototype.variants[0];
};

export const getAllPrototypesWithVariants = () => {
  return Object.keys(variantRegistry).map(id => ({
    id,
    ...variantRegistry[id],
    hasMultipleVariants: variantRegistry[id].variants.length > 1
  }));
};

export const getVariantUrl = (basePath, variantId) => {
  if (variantId === 'default') return basePath;
  return `${basePath}?variant=${variantId}`;
};

export const parseVariantFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('variant') || 'default';
};

// Status indicators for variants
export const variantStatusConfig = {
  active: { label: 'Active', color: 'green' },
  draft: { label: 'Draft', color: 'yellow' },
  archived: { label: 'Archived', color: 'gray' }
}; 