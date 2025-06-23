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
    color: {
      control: 'select',
      options: ['primary', 'white', 'gray'],
    },
  },
};

export const Default = {
  args: {
    size: 'md',
    color: 'primary',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-8">
      <LoadingDots size="sm" />
      <LoadingDots size="md" />
      <LoadingDots size="lg" />
    </div>
  ),
};

export const Colors = {
  render: () => (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <LoadingDots color="primary" />
        <span className="text-sm text-gray-500">Primary</span>
      </div>
      <div className="bg-gray-900 p-4 rounded flex items-center gap-4">
        <LoadingDots color="white" />
        <span className="text-sm text-white">White</span>
      </div>
      <div className="flex items-center gap-4">
        <LoadingDots color="gray" />
        <span className="text-sm text-gray-500">Gray</span>
      </div>
    </div>
  ),
}; 