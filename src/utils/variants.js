// Variant Registry - Central management of all prototype variants
// This allows teams to create, manage and share different versions of prototypes

export const variantRegistry = {
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