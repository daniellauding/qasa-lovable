import React from 'react';
import Avatar from '../../components/ui/Avatar';

export default {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'],
    },
  },
};

const sampleImage = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop';

export const Default = {
  args: {
    src: sampleImage,
    alt: 'Jane Doe',
  },
};

export const Sizes = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Avatar size="xs" src={sampleImage} alt="XS" />
        <Avatar size="sm" src={sampleImage} alt="SM" />
        <Avatar size="md" src={sampleImage} alt="MD" />
        <Avatar size="lg" src={sampleImage} alt="LG" />
        <Avatar size="xl" src={sampleImage} alt="XL" />
        <Avatar size="2xl" src={sampleImage} alt="2XL" />
      </div>
      <div className="text-center">
        <Avatar size="3xl" src={sampleImage} alt="3XL (128px - for tenant cards)" />
        <p className="text-sm text-gray-60 mt-2">3XL (128px) - Perfect for tenant profile cards</p>
      </div>
    </div>
  ),
};

export const Fallback = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar alt="John Doe" />
      <Avatar alt="Jane Smith" />
      <Avatar alt="No Name" />
      <Avatar />
    </div>
  ),
};

export const Group = {
  render: () => (
    <div className="flex items-center -space-x-2">
      <Avatar src={sampleImage} alt="User 1" className="border-2 border-white" />
      <Avatar src={sampleImage} alt="User 2" className="border-2 border-white" />
      <Avatar src={sampleImage} alt="User 3" className="border-2 border-white" />
      <Avatar alt="More users" className="border-2 border-white" />
    </div>
  ),
}; 