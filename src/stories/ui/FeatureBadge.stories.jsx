import React from 'react';
import FeatureBadge from '../../components/ui/FeatureBadge';
import { CheckCircle, Star, Heart, Shield } from 'lucide-react';

export default {
  title: 'UI/FeatureBadge',
  component: FeatureBadge,
  parameters: {
    docs: {
      description: {
        component: 'Inline feature indicator with icon and text. Icons use transparent backgrounds with proper color tokens.'
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
      options: ['default', 'compact', 'pill'],
      description: 'Visual variant of the badge'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Default = {
  args: {
    text: 'Feature included',
    variant: 'default'
  }
};

export const Compact = {
  args: {
    text: 'Compact badge',
    variant: 'compact'
  }
};

export const Pill = {
  args: {
    text: 'Pill style badge',
    variant: 'pill'
  }
};

export const WithCustomIcon = {
  args: {
    text: 'Premium feature',
    icon: <Star className="w-4 h-4" />,
    variant: 'default'
  }
};

export const MultipleBadges = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <FeatureBadge text="No deposit" icon={<Shield className="w-4 h-4" />} />
      <FeatureBadge text="Verified" icon={<CheckCircle className="w-4 h-4" />} />
      <FeatureBadge text="Loved by users" icon={<Heart className="w-4 h-4" />} />
    </div>
  )
};

export const InContext = {
  render: () => (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Property Features</h3>
      <div className="flex flex-wrap gap-2">
        <FeatureBadge text="Balkong" />
        <FeatureBadge text="Diskmaskin" />
        <FeatureBadge text="Nära tunnelbana" />
        <FeatureBadge text="Verifierad hyresvärd" icon={<CheckCircle className="w-4 h-4" />} />
      </div>
    </div>
  )
};
