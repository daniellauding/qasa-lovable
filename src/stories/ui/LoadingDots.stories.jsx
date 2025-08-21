import React from 'react';
import LoadingDots from '../../components/ui/LoadingDots';

export default {
  title: 'UI/LoadingDots',
  component: LoadingDots,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export const Default = {
  args: {
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="flex items-center gap-4">
        <LoadingDots size="sm" />
        <span className="text-sm text-[var(--color-text-secondary)]">Small</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingDots size="md" />
        <span className="text-sm text-[var(--color-text-secondary)]">Medium</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingDots size="lg" />
        <span className="text-sm text-[var(--color-text-secondary)]">Large</span>
      </div>
    </div>
  ),
};

export const OnDarkBackground = {
  render: () => (
    <div className="bg-[var(--color-brown)] p-8 rounded-lg">
      <div className="flex items-center gap-4">
        <LoadingDots size="md" />
        <span className="text-sm text-white">Loading...</span>
      </div>
    </div>
  ),
};

export const InContext = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <LoadingDots size="sm" />
        <span className="text-sm text-[var(--color-text-secondary)]">Loading search results...</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingDots size="md" />
        <span className="text-sm text-[var(--color-text-secondary)]">Processing your application...</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingDots size="lg" />
        <span className="text-sm text-[var(--color-text-secondary)]">Saving your profile...</span>
      </div>
    </div>
  ),
}; 