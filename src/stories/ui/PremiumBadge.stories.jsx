import React from 'react';
import PremiumBadge from '../../components/ui/PremiumBadge';

export default {
  title: 'UI/PremiumBadge',
  component: PremiumBadge,
  parameters: {
    docs: {
      description: {
        component: 'Premium badge component for Qasa Premium features. Uses brand colors and premium icons.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the badge'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'pill', 'outline', 'subtle'],
      description: 'Visual variant of the badge'
    },
    icon: {
      control: { type: 'select' },
      options: ['star', 'crown', 'award', 'sparkles'],
      description: 'Icon to display in the badge'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Default = {
  args: {
    text: 'Premium',
    variant: 'default',
    icon: 'star'
  }
};

export const Compact = {
  args: {
    text: 'Premium',
    variant: 'compact',
    icon: 'star'
  }
};

export const Pill = {
  args: {
    text: 'Premium Member',
    variant: 'pill',
    icon: 'crown'
  }
};

export const Outline = {
  args: {
    text: 'Premium',
    variant: 'outline',
    icon: 'award'
  }
};

export const Subtle = {
  args: {
    text: 'Premium',
    variant: 'subtle',
    icon: 'sparkles'
  }
};

export const IconVariants = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PremiumBadge text="Premium" icon="star" />
      <PremiumBadge text="Premium" icon="crown" />
      <PremiumBadge text="Premium" icon="award" />
      <PremiumBadge text="Premium" icon="sparkles" />
    </div>
  )
};

export const VariantShowcase = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <PremiumBadge text="Premium" variant="default" />
      <PremiumBadge text="Premium" variant="compact" />
      <PremiumBadge text="Premium" variant="pill" />
      <PremiumBadge text="Premium" variant="outline" />
      <PremiumBadge text="Premium" variant="subtle" />
    </div>
  )
};

export const PremiumFeatures = {
  render: () => (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <PremiumBadge text="Super Apply" icon="star" />
        <PremiumBadge text="Early Access" icon="crown" />
        <PremiumBadge text="Priority Support" icon="award" />
      </div>
      <div className="flex flex-wrap gap-2">
        <PremiumBadge text="Highlighted Profile" variant="outline" icon="sparkles" />
        <PremiumBadge text="Exclusive Insights" variant="subtle" icon="star" />
      </div>
    </div>
  )
};

export const InContext = {
  render: () => (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Premium Features</h3>
      <div className="flex flex-wrap gap-2">
        <PremiumBadge text="Super Apply" icon="star" />
        <PremiumBadge text="Early Access" icon="crown" />
        <PremiumBadge text="Priority Support" icon="award" />
        <PremiumBadge text="Highlighted Profile" variant="outline" icon="sparkles" />
      </div>
    </div>
  )
};
