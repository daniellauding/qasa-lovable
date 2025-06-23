import React from 'react';
import Skeleton from '../../components/ui/Skeleton';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['rectangular', 'circular', 'text'],
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    width: 200,
    height: 100,
  },
};

export const Circular = {
  args: {
    variant: 'circular',
    width: 64,
    height: 64,
  },
};

export const Text = {
  args: {
    variant: 'text',
    width: 200,
    height: 20,
  },
};

export const LoadingCard = {
  render: () => (
    <div className="w-[300px] space-y-4 p-4 border rounded-lg">
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Skeleton variant="text" width="80%" height={24} />
      <Skeleton variant="text" width="60%" height={16} />
      <div className="flex gap-4 items-center">
        <Skeleton variant="circular" width={40} height={40} />
        <div className="flex-1">
          <Skeleton variant="text" width="100%" height={16} className="mb-2" />
          <Skeleton variant="text" width="70%" height={16} />
        </div>
      </div>
    </div>
  ),
};

export const LoadingList = {
  render: () => (
    <div className="w-[300px] space-y-4">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3 items-center">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1">
            <Skeleton variant="text" width="80%" height={16} className="mb-2" />
            <Skeleton variant="text" width="60%" height={16} />
          </div>
        </div>
      ))}
    </div>
  ),
}; 