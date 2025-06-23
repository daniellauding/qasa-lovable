import Button from '../../components/ui/Button';
import { ChevronRightIcon, ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
    loading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Variants = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </div>
      <div className="space-x-4">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="tertiary" disabled>Tertiary Disabled</Button>
      </div>
    </div>
  ),
};

export const Sizes = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4 flex items-center">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
      <div className="text-xs text-gray-60 space-y-1">
        <div>XS: 32px height • SM: 40px height • MD: 48px height • LG: 56px height • XL: 64px height</div>
        <div>All buttons use rounded-full (9999px border radius)</div>
      </div>
    </div>
  ),
};

export const WithIcons = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button icon={<ChevronLeftIcon className="w-4 h-4" />} iconPosition="left">
          Previous
        </Button>
        <Button icon={<ChevronRightIcon className="w-4 h-4" />} iconPosition="right">
          Next
        </Button>
        <Button icon={<PlusIcon className="w-4 h-4" />} iconPosition="left" variant="secondary">
          Add Item
        </Button>
      </div>
    </div>
  ),
};

export const LoadingStates = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4">
        <Button loading variant="primary">Loading Primary</Button>
        <Button loading variant="secondary">Loading Secondary</Button>
        <Button loading variant="tertiary">Loading Tertiary</Button>
      </div>
      <div className="space-x-4">
        <Button loading size="xs">XS Loading</Button>
        <Button loading size="sm">SM Loading</Button>
        <Button loading size="md">MD Loading</Button>
        <Button loading size="lg">LG Loading</Button>
        <Button loading size="xl">XL Loading</Button>
      </div>
    </div>
  ),
};

export const InteractiveStates = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Hover over buttons to see hover states</h3>
        <div className="space-x-4">
          <Button variant="primary">Hover Primary</Button>
          <Button variant="secondary">Hover Secondary</Button>
          <Button variant="tertiary">Hover Tertiary</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Click and hold to see focus states (scale: 0.97)</h3>
        <div className="space-x-4">
          <Button variant="primary">Focus Primary</Button>
          <Button variant="secondary">Focus Secondary</Button>
          <Button variant="tertiary">Focus Tertiary</Button>
        </div>
      </div>
    </div>
  ),
};

export const FullWidth = {
  render: () => (
    <div className="w-80 space-y-4">
      <Button fullWidth variant="primary">Full Width Primary</Button>
      <Button fullWidth variant="secondary">Full Width Secondary</Button>
      <Button fullWidth variant="tertiary">Full Width Tertiary</Button>
    </div>
  ),
};

export const RealWorldExamples = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Form Actions</h3>
        <div className="space-x-4">
          <Button variant="primary" size="md">Save Changes</Button>
          <Button variant="tertiary" size="md">Cancel</Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Navigation</h3>
        <div className="space-x-4">
          <Button 
            variant="secondary" 
            size="sm"
            icon={<ChevronLeftIcon className="w-4 h-4" />} 
            iconPosition="left"
          >
            Back
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            icon={<ChevronRightIcon className="w-4 h-4" />} 
            iconPosition="right"
          >
            Continue
          </Button>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Call to Action</h3>
        <Button 
          variant="primary" 
          size="lg"
          icon={<PlusIcon className="w-5 h-5" />} 
          iconPosition="left"
        >
          Create New Property
        </Button>
      </div>
    </div>
  ),
}; 