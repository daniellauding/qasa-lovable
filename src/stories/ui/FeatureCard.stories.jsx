import React from 'react';
import FeatureCard from '../../components/ui/FeatureCard';

export default {
  title: 'ui/FeatureCard',
  component: FeatureCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['standard', 'compact'],
    },
    illustrationSrc: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    title: 'No Deposit',
    description: 'Keep your money — we handle the deposit.',
    illustrationSrc: 'https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=256&q=75',
    variant: 'standard',
  },
};

export const TertiaryBackgroundShowcase = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Tertiary Background Card Variant</h3>
        <p className="text-sm text-gray-600 mb-4">
          FeatureCard uses <code>bg-[var(--color-button-tertiary-bg)]</code> (off-white/cream) for brand consistency and visual hierarchy in feature sections.
        </p>
        <div className="flex gap-4">
          <FeatureCard
            title="No Deposit"
            description="Keep your money — we handle the deposit."
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=256&q=75"
            variant="standard"
            className="max-w-96"
          />
          <FeatureCard
            title="Move in first, pay later"
            description="Flexibility when life happens."
            illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flamp.cc993942.png&w=256&q=75"
            variant="standard"
            className="max-w-96"
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-md font-medium mb-2">Usage Guidelines</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Perfect for feature highlights and benefit showcases</li>
          <li>• Creates visual hierarchy against white page backgrounds</li>
          <li>• Distinguishes promotional cards from data display cards</li>
          <li>• Maintains brand consistency with tertiary color</li>
        </ul>
      </div>
    </div>
  ),
};

export const CompactVariant = {
  args: {
    title: 'Compact Feature',
    description: 'Smaller version for tight spaces.',
    illustrationSrc: 'https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpen.9f05b931.png&w=256&q=75',
    variant: 'compact',
  },
};

export const AllFeatures = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <FeatureCard
        title="No Deposit"
        description="Keep your money — we handle the deposit."
        illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhand.1e433989.png&w=256&q=75"
        variant="standard"
      />
      <FeatureCard
        title="Move in first, pay later"
        description="Flexibility when life happens."
        illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flamp.cc993942.png&w=256&q=75"
        variant="standard"
      />
      <FeatureCard
        title="Protection & expertise"
        description="Trusted contracts and personal support."
        illustrationSrc="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpen.9f05b931.png&w=256&q=75"
        variant="standard"
      />
    </div>
  ),
};
