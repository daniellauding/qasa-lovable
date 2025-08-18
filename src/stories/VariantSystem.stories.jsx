import React from 'react';
import VariantSelector from '../components/ui/VariantSelector';
import VariantCard from '../components/ui/VariantCard';
import { getAllPrototypesWithVariants } from '../utils/variants';

export default {
  title: 'System/Developer Tools/Variant System',
  component: VariantSelector,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'The variant system allows creating and managing different versions of prototypes for A/B testing and design iteration.',
      },
    },
  },
};

// Mock data for stories
const mockPrototype = {
  id: 'create-tenant-listing',
  name: 'Create Tenant Listing',
  description: 'Step-by-step flow for tenants to create profile listings to attract landlords',
  category: 'tenants',
  path: '/tenants/create-tenant-listing',
  tags: ['stepper', 'forms', 'profile'],
  hasMultipleVariants: true,
  variants: [
    {
      id: 'default',
      name: 'Default',
      description: 'Standard 17-step flow with comprehensive forms',
      tags: ['complete', 'thorough'],
      status: 'active'
    },
    {
      id: 'simplify',
      name: 'Simplified',
      description: 'Streamlined version with fewer steps and simplified forms',
      tags: ['quick', 'minimal'],
      status: 'draft'
    },
    {
      id: 'experimental',
      name: 'Experimental',
      description: 'Testing new approaches with different UX patterns',
      tags: ['testing', 'innovative'],
      status: 'draft'
    }
  ]
};

export const VariantSelectorDefault = {
  args: {
    prototypeId: 'create-tenant-listing',
    currentVariant: 'default',
    basePath: '/tenants/create-tenant-listing',
  },
  parameters: {
    docs: {
      description: {
        story: 'The variant selector allows users to switch between different versions of a prototype. Shows current variant and available alternatives.',
      },
    },
  },
};

export const VariantSelectorWithDraftVariant = {
  args: {
    prototypeId: 'create-tenant-listing',
    currentVariant: 'simplify',
    basePath: '/tenants/create-tenant-listing',
  },
  parameters: {
    docs: {
      description: {
        story: 'When a draft variant is selected, it shows the draft status badge and allows quick switching between variants.',
      },
    },
  },
};

export const VariantCardWithMultipleVariants = {
  render: () => <VariantCard prototype={mockPrototype} />,
  parameters: {
    docs: {
      description: {
        story: 'The variant card shows a prototype with multiple variants. Users can select different variants and open them directly.',
      },
    },
  },
};

export const VariantCardSingleVariant = {
  render: () => (
    <VariantCard 
      prototype={{
        ...mockPrototype,
        hasMultipleVariants: false,
        variants: [mockPrototype.variants[0]]
      }} 
    />
  ),
  parameters: {
    docs: {
      description: {
        story: 'For prototypes with only one variant, the card shows a simple "Open Prototype" button without variant selection.',
      },
    },
  },
};

export const ExperimentsDashboardPreview = {
  render: () => {
    const prototypes = getAllPrototypesWithVariants();
    
    return (
      <div className="space-y-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Prototypes with Variants 
            <span className="ml-2 text-sm font-normal text-gray-500">
              ({prototypes.length})
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prototypes.slice(0, 3).map((prototype) => (
              <VariantCard key={prototype.id} prototype={{
                ...prototype,
                path: '/tenants/create-tenant-listing', // Mock path
                category: 'tenants',
                tags: prototype.variants[0]?.tags || []
              }} />
            ))}
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">How to use variants:</h3>
          <ul className="text-blue-800 text-sm space-y-1">
            <li>• Use the dropdown to select different versions</li>
            <li>• Copy variant links to share specific versions</li>
            <li>• Draft variants are marked with yellow badges</li>
            <li>• URLs automatically include variant parameter: ?variant=name</li>
            <li>• Compare different approaches side by side in separate tabs</li>
          </ul>
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Preview of how the experiments dashboard looks with multiple prototypes and their variants.',
      },
    },
  },
}; 