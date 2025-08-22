import React from 'react';
import PremiumBadge from '../../components/ui/PremiumBadge';

export default {
  title: 'UI/PremiumBadge',
  component: PremiumBadge,
  parameters: {
    docs: {
      description: {
        component: 'Official Qasa Premium badge with brand-specific styling. Features responsive design with different sizes for mobile and desktop.'
      }
    }
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the premium badge'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Default = {
  args: {
    size: 'md',
    className: ''
  }
};

export const Sizes = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">XS:</span>
        <PremiumBadge size="xs" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">SM:</span>
        <PremiumBadge size="sm" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">MD:</span>
        <PremiumBadge size="md" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">LG:</span>
        <PremiumBadge size="lg" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-12 text-sm">XL:</span>
        <PremiumBadge size="xl" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different sizes available for the PremiumBadge component.'
      }
    }
  }
};