import Icon from '../../components/ui/Icon';
import * as HeroIcons from '@heroicons/react/24/outline';

export default {
  title: 'UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(HeroIcons),
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export const Default = {
  args: {
    name: 'ChevronDownIcon',
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="ChevronDownIcon" size="xs" />
      <Icon name="ChevronDownIcon" size="sm" />
      <Icon name="ChevronDownIcon" size="md" />
      <Icon name="ChevronDownIcon" size="lg" />
      <Icon name="ChevronDownIcon" size="xl" />
    </div>
  ),
};

// Common icons used in the app
const commonIcons = [
  'ChevronDownIcon',
  'ChevronRightIcon',
  'XMarkIcon',
  'HeartIcon',
  'ChatBubbleLeftIcon',
  'UserIcon',
  'CogIcon',
  'QuestionMarkCircleIcon',
  'ArrowRightIcon',
  'ArrowLeftIcon',
  'Bars3Icon',
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
      {Object.keys(HeroIcons).map((iconName) => (
        <div key={iconName} className="flex flex-col items-center gap-2 p-4 border rounded">
          <Icon name={iconName} size="md" />
          <span className="text-xs text-gray-600">{iconName}</span>
        </div>
      ))}
    </div>
  ),
}; 