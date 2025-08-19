import React from 'react';
import HintBox from '../../components/ui/HintBox';
import { Info } from 'lucide-react';
import Icon from '../../components/ui/Icon';

export default {
  title: 'UI/HintBox',
  component: HintBox,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Why do we need your phone number?',
    description: 'Your phone number helps us quickly reach out if any issues arise during the rental.',
  },
};

export const WithIconAndActions = {
  args: {
    title: 'Need help?',
    description: 'Contact support or read more about secure rentals.',
    icon: <Info className="w-5 h-5 text-[var(--color-text-primary)]" />,
    actions: [
      { label: 'Read more', variant: 'tertiary' },
      { label: 'Contact', variant: 'primary' },
    ],
  },
};

export const TitleOnly = {
  args: {
    title: 'Why do we need your phone number?',
  },
};

export const TextOnly = {
  args: {
    description: 'Your phone number helps us quickly reach out if any issues arise during the rental.',
  },
};

export const IconOnlyActions = {
  args: {
    title: 'Refresh data',
    description: 'Press the circular arrow to reload.',
    actions: [
      { label: 'Refresh', variant: 'tertiary', icon: <Icon name="RefreshCw" />, iconOnly: true },
    ],
  },
};