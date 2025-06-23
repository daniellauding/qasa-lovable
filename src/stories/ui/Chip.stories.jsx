import React from 'react';
import Chip from '../../components/ui/Chip';

export default {
  title: 'UI/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    active: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    children: 'Chip',
    size: 'md',
  },
};

export const Sizes = {
  render: () => (
    <div className="space-y-4">
      <div className="space-x-4 flex items-center">
        <Chip size="xs">Extra Small</Chip>
        <Chip size="sm">Small</Chip>
        <Chip size="md">Medium</Chip>
        <Chip size="lg">Large</Chip>
        <Chip size="xl">Extra Large</Chip>
      </div>
      <div className="text-xs text-gray-60 space-y-1">
        <div>XS: 32px height • SM: 40px height • MD: 48px height • LG: 56px height • XL: 64px height</div>
        <div>Same sizing as buttons with rounded-full borders</div>
      </div>
    </div>
  ),
};

export const States = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium mb-3">Normal State</h3>
        <div className="space-x-4">
          <Chip>Default Chip</Chip>
          <Chip>Another Chip</Chip>
          <Chip>Third Chip</Chip>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Active State</h3>
        <div className="space-x-4">
          <Chip active>Active Chip</Chip>
          <Chip active>Selected</Chip>
          <Chip active>Chosen</Chip>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Disabled State</h3>
        <div className="space-x-4">
          <Chip disabled>Disabled Chip</Chip>
          <Chip disabled active>Disabled Active</Chip>
        </div>
      </div>
    </div>
  ),
};

export const Interactive = {
  render: () => {
    const handleClick = (label) => {
      alert(`${label} clicked!`);
    };

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium mb-3">Clickable Chips</h3>
          <div className="space-x-4">
            <Chip onClick={() => handleClick('Technology')}>Technology</Chip>
            <Chip onClick={() => handleClick('Design')}>Design</Chip>
            <Chip onClick={() => handleClick('Marketing')}>Marketing</Chip>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium mb-3">Filter Chips (Toggle)</h3>
          <FilterChipsExample />
        </div>
      </div>
    );
  },
};

// Helper component for interactive example
const FilterChipsExample = () => {
  const [activeFilters, setActiveFilters] = React.useState(['Technology']);
  
  const filters = ['Technology', 'Design', 'Marketing', 'Sales', 'Support'];
  
  const toggleFilter = (filter) => {
    setActiveFilters(prev => 
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="space-x-2">
      {filters.map(filter => (
        <Chip
          key={filter}
          active={activeFilters.includes(filter)}
          onClick={() => toggleFilter(filter)}
        >
          {filter}
        </Chip>
      ))}
    </div>
  );
};

export const RealWorldExamples = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Property Tags</h3>
        <div className="space-x-2 space-y-2">
          <Chip size="sm">2 Bedrooms</Chip>
          <Chip size="sm">Balcony</Chip>
          <Chip size="sm">Pet Friendly</Chip>
          <Chip size="sm">Furnished</Chip>
          <Chip size="sm">Parking</Chip>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Filter Categories</h3>
        <div className="space-x-2 space-y-2">
          <Chip active>Apartment</Chip>
          <Chip>House</Chip>
          <Chip>Studio</Chip>
          <Chip active>1-2 Rooms</Chip>
          <Chip>3+ Rooms</Chip>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Status Indicators</h3>
        <div className="space-x-2 space-y-2">
          <Chip size="xs" active>Available</Chip>
          <Chip size="xs" disabled>Rented</Chip>
          <Chip size="xs">Pending</Chip>
        </div>
      </div>
    </div>
  ),
}; 