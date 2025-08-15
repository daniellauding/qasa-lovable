import Button from '../../components/ui/Button';
import { ChevronRight, ChevronLeft, Plus, X, Heart, Share, ArrowLeft } from 'lucide-react';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'transparent', 'bordered'],
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
    iconOnly: {
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
        <Button variant="outline">Outline</Button>
      </div>
      <div className="space-x-4">
        <Button variant="ghost">Ghost</Button>
        <Button variant="transparent">Transparent</Button>
        <Button variant="bordered">Bordered</Button>
      </div>
      <div className="space-x-4">
        <Button variant="primary" disabled>Primary Disabled</Button>
        <Button variant="secondary" disabled>Secondary Disabled</Button>
        <Button variant="tertiary" disabled>Tertiary Disabled</Button>
        <Button variant="bordered" disabled>Bordered Disabled</Button>
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
        <Button icon={<ChevronLeft className="w-4 h-4" />} iconPosition="left">
          Previous
        </Button>
        <Button icon={<ChevronRight className="w-4 h-4" />} iconPosition="right">
          Next
        </Button>
        <Button icon={<Plus className="w-4 h-4" />} iconPosition="left" variant="secondary">
          Add Item
        </Button>
      </div>
    </div>
  ),
};

export const IconOnly = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Icon-Only Variants</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly icon={<Plus className="w-5 h-5" />} variant="primary" />
          <Button iconOnly icon={<X className="w-5 h-5" />} variant="secondary" />
          <Button iconOnly icon={<Heart className="w-5 h-5" />} variant="tertiary" />
          <Button iconOnly icon={<Share className="w-5 h-5" />} variant="transparent" />
          <Button iconOnly icon={<ChevronLeft className="w-5 h-5" />} variant="bordered" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Bordered Back Arrow (Navigation)</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly icon={<ChevronLeft className="w-5 h-5" />} variant="bordered" size="md" aria-label="Go back" />
          <span className="text-sm text-gray-600">Perfect for navigation back buttons</span>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Icon-Only Sizes (All Rounded Full)</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly icon={<EllipsisHorizontalIcon className="w-3 h-3" />} size="xs" variant="primary" />
          <Button iconOnly icon={<EllipsisHorizontalIcon className="w-4 h-4" />} size="sm" variant="primary" />
          <Button iconOnly icon={<EllipsisHorizontalIcon className="w-5 h-5" />} size="md" variant="primary" />
          <Button iconOnly icon={<EllipsisHorizontalIcon className="w-6 h-6" />} size="lg" variant="primary" />
          <Button iconOnly icon={<EllipsisHorizontalIcon className="w-7 h-7" />} size="xl" variant="primary" />
        </div>
        <div className="text-xs text-gray-60 mt-2">
          XS: 32×32px • SM: 40×40px • MD: 48×48px • LG: 56×56px • XL: 64×64px
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Icon-Only States</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly icon={<Plus className="w-5 h-5" />} variant="primary" />
          <Button iconOnly icon={<Plus className="w-5 h-5" />} variant="primary" disabled />
          <Button iconOnly icon={<Plus className="w-5 h-5" />} variant="primary" loading />
        </div>
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
            icon={<ChevronLeft className="w-4 h-4" />} 
            iconPosition="left"
          >
            Back
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            icon={<ChevronRight className="w-4 h-4" />} 
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
          icon={<Plus className="w-5 h-5" />} 
          iconPosition="left"
        >
          Create New Property
        </Button>
      </div>
    </div>
  ),
};

export const NavigationExamples = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Navigation Back Buttons (Bordered Variant)</h3>
        <div className="space-x-4 flex items-center">
          <Button 
            iconOnly
            variant="bordered" 
            size="md"
            icon={<ChevronLeft className="w-5 h-5" />} 
            aria-label="Go back"
          />
          <Button 
            variant="primary" 
            size="md"
          >
            Nästa
          </Button>
        </div>
        <p className="text-sm text-gray-600 mt-2">Perfect for multi-step flows like create-listing</p>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Different Sizes</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly variant="bordered" size="sm" icon={<ChevronLeft className="w-4 h-4" />} aria-label="Back" />
          <Button iconOnly variant="bordered" size="md" icon={<ChevronLeft className="w-5 h-5" />} aria-label="Back" />
          <Button iconOnly variant="bordered" size="lg" icon={<ChevronLeft className="w-6 h-6" />} aria-label="Back" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">States</h3>
        <div className="space-x-4 flex items-center">
          <Button iconOnly variant="bordered" size="md" icon={<ChevronLeft className="w-5 h-5" />} aria-label="Normal" />
          <Button iconOnly variant="bordered" size="md" icon={<ChevronLeft className="w-5 h-5" />} aria-label="Disabled" disabled />
        </div>
      </div>
    </div>
  ),
};

export const QasaThemeVariants = () => (
  <div className="space-y-6">
    <div className="space-y-3">
      <h3 className="font-medium text-gray-900">Qasa Theme Button Variants</h3>
      <div className="flex flex-wrap gap-3">
        <Button variant="primary" size="md">Primary (theme-bg-primary, #352924 text)</Button>
        <Button variant="secondary" size="md">Secondary (#322721 bg, white text)</Button>
        <Button variant="tertiary" size="md">Tertiary (#f0f0eb bg, #372d27 text)</Button>
        <Button variant="outline" size="md">Outline (#f0f0eb bg, #372d27 border)</Button>
      </div>
    </div>
    
    <div className="space-y-3">
      <h3 className="font-medium text-gray-900">Icon Only - Qasa Theme</h3>
      <div className="flex gap-3">
        <Button 
          variant="tertiary" 
          size="md" 
          iconOnly 
          icon={<ArrowLeft className="h-5 w-5" />} 
          aria-label="Back" 
        />
        <Button 
          variant="secondary" 
          size="md" 
          iconOnly 
          icon={<Plus className="h-5 w-5" />} 
          aria-label="Add" 
        />
        <Button 
          variant="outline" 
          size="md" 
          iconOnly 
          icon={<Heart className="h-5 w-5" />} 
          aria-label="Favorite" 
        />
      </div>
    </div>
  </div>
); 