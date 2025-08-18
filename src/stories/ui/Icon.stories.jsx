import Icon from '../../components/ui/Icon';
import * as LucideIcons from 'lucide-react';

export default {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(LucideIcons),
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Default = {
  args: {
    name: 'ChevronDown',
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="ChevronDown" size="xs" />
      <Icon name="ChevronDown" size="sm" />
      <Icon name="ChevronDown" size="md" />
      <Icon name="ChevronDown" size="lg" />
      <Icon name="ChevronDown" size="xl" />
    </div>
  ),
};

// Common icons used in the app
const commonIcons = [
  'ChevronDown',
  'ChevronRight',
  'X',
  'Heart',
  'MessageCircle',
  'User',
  'Settings',
  'HelpCircle',
  'ArrowRight',
  'ArrowLeft',
  'Menu',
];

export const CommonIcons = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      {commonIcons.map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded">
          <Icon name={iconName} size="md" />
          <span className="text-sm text-gray-600">{iconName}</span>
        </div>
      ))}
    </div>
  ),
};

export const AllIcons = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      {Object.keys(LucideIcons).map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded">
          <Icon name={iconName} size="md" />
          <span className="text-xs text-gray-600">{iconName}</span>
        </div>
      ))}
    </div>
  ),
}; 