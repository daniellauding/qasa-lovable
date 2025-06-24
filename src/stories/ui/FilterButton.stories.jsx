import React, { useState } from 'react';
import FilterButton from '../../components/ui/FilterButton';
import FilterModal from '../../components/ui/FilterModal';

export default {
  title: 'UI/FilterButton',
  component: FilterButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    children: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    children: 'Filters',
    onClick: () => console.log('Filter clicked'),
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <FilterButton size="sm">Small Filters</FilterButton>
      <FilterButton size="md">Medium Filters</FilterButton>
      <FilterButton size="lg">Large Filters</FilterButton>
    </div>
  ),
};

export const WithModal = {
  render: () => {
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState(null);

    return (
      <div className="space-y-4">
        <FilterButton onClick={() => setIsFilterOpen(true)} />
        
        {appliedFilters && (
          <div className="p-4 bg-gray-10 rounded-lg max-w-md">
            <h4 className="text-sm font-medium mb-2">Applied Filters:</h4>
            <pre className="text-xs text-gray-60 overflow-auto">
              {JSON.stringify(appliedFilters, null, 2)}
            </pre>
          </div>
        )}

        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={(filters) => {
            setAppliedFilters(filters);
            console.log('Applied filters:', filters);
          }}
        />
      </div>
    );
  },
};

export const States = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <div>
        <h3 className="text-sm font-medium mb-2">Default</h3>
        <FilterButton>Filters</FilterButton>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Hover State</h3>
        <FilterButton className="hover:bg-gray-20">Filters (Hover)</FilterButton>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">Active/Pressed State</h3>
        <FilterButton className="bg-gray-30 border-gray-50">Filters (Active)</FilterButton>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2">With Badge</h3>
        <div className="relative">
          <FilterButton>Filters</FilterButton>
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </div>
        </div>
      </div>
    </div>
  ),
};

export const CustomText = {
  render: () => (
    <div className="flex flex-col gap-4 items-start">
      <FilterButton>Filter Properties</FilterButton>
      <FilterButton>Advanced Search</FilterButton>
      <FilterButton>Refine Results</FilterButton>
      <FilterButton>Search Options</FilterButton>
    </div>
  ),
}; 