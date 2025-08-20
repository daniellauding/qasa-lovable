import React from 'react';
import TrustIndicator from '../../components/ui/TrustIndicator';

export default {
  title: 'UI/TrustIndicator',
  component: TrustIndicator,
  parameters: {
    docs: {
      description: {
        component: 'Trust and safety indicators with semantic icons. Icons use transparent backgrounds with proper color tokens.'
      }
    }
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'Text to display in the indicator'
    },
    type: {
      control: { type: 'select' },
      options: ['verified', 'secure', 'trusted', 'premium'],
      description: 'Type of trust indicator'
    },
    variant: {
      control: { type: 'select' },
      options: ['default', 'compact', 'pill'],
      description: 'Visual variant of the indicator'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Verified = {
  args: {
    text: 'ID Verified',
    type: 'verified',
    variant: 'default'
  }
};

export const Secure = {
  args: {
    text: 'Secure payment',
    type: 'secure',
    variant: 'default'
  }
};

export const Trusted = {
  args: {
    text: 'Trusted landlord',
    type: 'trusted',
    variant: 'default'
  }
};

export const Premium = {
  args: {
    text: 'Premium member',
    type: 'premium',
    variant: 'default'
  }
};

export const Compact = {
  args: {
    text: 'Verified',
    type: 'verified',
    variant: 'compact'
  }
};

export const Pill = {
  args: {
    text: 'Premium verified',
    type: 'premium',
    variant: 'pill'
  }
};

export const MultipleIndicators = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <TrustIndicator text="ID Verified" type="verified" />
      <TrustIndicator text="Secure payment" type="secure" />
      <TrustIndicator text="Trusted landlord" type="trusted" />
      <TrustIndicator text="Premium member" type="premium" />
    </div>
  )
};

export const InContext = {
  render: () => (
    <div className="p-6 bg-white rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Safety & Trust</h3>
      <div className="flex flex-wrap gap-2">
        <TrustIndicator text="Verifierad hyresvärd" type="verified" />
        <TrustIndicator text="Säker betalning" type="secure" />
        <TrustIndicator text="Trygg och säker" type="trusted" />
      </div>
    </div>
  )
};
