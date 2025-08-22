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
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Default = {
  args: {
    className: ''
  }
};