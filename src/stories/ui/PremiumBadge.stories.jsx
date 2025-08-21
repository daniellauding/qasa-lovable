import React from 'react';
import PremiumBadge from '../../components/ui/PremiumBadge';

export default {
  title: 'UI/PremiumBadge',
  component: PremiumBadge,
  parameters: {
    docs: {
      description: {
        component: 'Premium badge component for Qasa Premium features. Uses brand colors and premium icons with yellow premium feature icons.'
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
      options: ['default', 'compact', 'pill', 'outline', 'subtle', 'premium', 'premium-outline', 'premium-subtle'],
      description: 'Visual variant of the badge'
    },
    icon: {
      control: { type: 'select' },
      options: ['star', 'crown', 'award', 'sparkles', 'megaphone', 'bulb', 'flashlight', 'chicken', 'plane'],
      description: 'Icon to display in the badge'
    },
    premiumFeature: {
      control: { type: 'select' },
      options: ['super-apply', 'exclusive-insights', 'highlighted-profile', 'apply-earlier', 'more-applications'],
      description: 'Premium feature to display (overrides text and icon)'
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

export const PremiumVariants = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Premium Variants</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Premium" variant="premium" />
          <PremiumBadge text="Premium" variant="premium-outline" />
          <PremiumBadge text="Premium" variant="premium-subtle" />
        </div>
      </div>
    </div>
  )
};

export const PremiumFeatureIcons = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Premium Feature Icons (Yellow)</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Super Apply" icon="megaphone" variant="premium" />
          <PremiumBadge text="Exclusive Insights" icon="bulb" variant="premium" />
          <PremiumBadge text="Highlighted Profile" icon="flashlight" variant="premium" />
          <PremiumBadge text="Apply Earlier" icon="chicken" variant="premium" />
          <PremiumBadge text="More Applications" icon="plane" variant="premium" />
        </div>
      </div>
    </div>
  )
};

export const PremiumFeatures = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Premium Features (Auto-configured)</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge premiumFeature="super-apply" variant="premium" />
          <PremiumBadge premiumFeature="exclusive-insights" variant="premium" />
          <PremiumBadge premiumFeature="highlighted-profile" variant="premium" />
          <PremiumBadge premiumFeature="apply-earlier" variant="premium" />
          <PremiumBadge premiumFeature="more-applications" variant="premium" />
        </div>
      </div>
    </div>
  )
};

export const IconVariants = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Standard Icons</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Premium" icon="star" />
          <PremiumBadge text="Premium" icon="crown" />
          <PremiumBadge text="Premium" icon="award" />
          <PremiumBadge text="Premium" icon="sparkles" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Premium Feature Icons</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Premium" icon="megaphone" />
          <PremiumBadge text="Premium" icon="bulb" />
          <PremiumBadge text="Premium" icon="flashlight" />
          <PremiumBadge text="Premium" icon="chicken" />
          <PremiumBadge text="Premium" icon="plane" />
        </div>
      </div>
    </div>
  )
};

export const VariantShowcase = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-2">Standard Variants</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Premium" variant="default" />
          <PremiumBadge text="Premium" variant="compact" />
          <PremiumBadge text="Premium" variant="pill" />
          <PremiumBadge text="Premium" variant="outline" />
          <PremiumBadge text="Premium" variant="subtle" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Premium Variants</h3>
        <div className="flex flex-wrap gap-2">
          <PremiumBadge text="Premium" variant="premium" />
          <PremiumBadge text="Premium" variant="premium-outline" />
          <PremiumBadge text="Premium" variant="premium-subtle" />
        </div>
      </div>
    </div>
  )
};

export const PremiumFeatureShowcase = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Premium Feature Cards</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg">
            <PremiumBadge premiumFeature="super-apply" variant="premium" className="mb-2" />
            <h4 className="font-semibold mb-1">Super apply</h4>
            <p className="text-sm text-gray-600">Give your application an extra boost. Stay at the top of the landlord's inbox.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <PremiumBadge premiumFeature="exclusive-insights" variant="premium" className="mb-2" />
            <h4 className="font-semibold mb-1">Exclusive insights</h4>
            <p className="text-sm text-gray-600">See how the rent compares to similar homes, number of applicants, and your queue position.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <PremiumBadge premiumFeature="highlighted-profile" variant="premium" className="mb-2" />
            <h4 className="font-semibold mb-1">Highlighted profile</h4>
            <p className="text-sm text-gray-600">Get a premium badge on your profile, increasing your visibility in the landlord's inbox.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <PremiumBadge premiumFeature="apply-earlier" variant="premium" className="mb-2" />
            <h4 className="font-semibold mb-1">Apply earlier</h4>
            <p className="text-sm text-gray-600">Apply before everyone else, with priority access to selected first-hand homes.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <PremiumBadge premiumFeature="more-applications" variant="premium" className="mb-2" />
            <h4 className="font-semibold mb-1">More applications</h4>
            <p className="text-sm text-gray-600">Apply to 10 first-hand homes simultaneously, and unlimited applications to all other homes.</p>
          </div>
        </div>
      </div>
    </div>
  )
};
