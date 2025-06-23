import React from 'react';
import RadioGroup from '../../components/ui/RadioGroup';

export default {
  title: 'UI/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
};

const houseOptions = [
  { value: 'house', label: 'House' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'terrace', label: 'Terrace House' },
];

export const Default = {
  args: {
    label: 'Property type',
    options: houseOptions,
  },
};

export const CardVariant = {
  render: () => (
    <div className="w-[400px]">
      <RadioGroup
        label="Property type"
        options={houseOptions}
        variant="card"
        defaultValue="house"
      />
    </div>
  ),
};

export const WithDescriptions = {
  render: () => (
    <div className="w-[400px]">
      <RadioGroup
        label="Property type"
        options={[
          { value: 'house', label: 'House', description: 'Single-family home' },
          { value: 'apartment', label: 'Apartment', description: 'Multi-unit residential building' },
          { value: 'terrace', label: 'Terrace House', description: 'Row of identical houses' },
        ]}
        variant="card"
        defaultValue="house"
      />
    </div>
  ),
};

export const WithoutDescriptions = {
  args: {
    label: 'Select an option',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export const Disabled = {
  render: () => (
    <div className="space-y-8">
      <RadioGroup
        label="Default Variant"
        options={houseOptions}
        defaultValue="apartment"
        disabled
      />
      
      <RadioGroup
        label="Card Variant"
        options={houseOptions}
        variant="card"
        defaultValue="apartment"
        disabled
      />
    </div>
  ),
}; 

export const DesignSpecs = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Design Specifications</h3>
        <div className="bg-gray-10 p-4 rounded-lg">
          <ul className="text-sm space-y-1">
            <li>• Radio size: 16px × 16px (h-4 w-4)</li>
            <li>• Border radius: 6px (rounded-md, not fully rounded)</li>
            <li>• Border: 2px solid #d6d6ce (gray-40)</li>
            <li>• Background: white</li>
            <li>• Active border: thick brown (#322721) border</li>
            <li>• Hover: light gray background (#f9f9f6)</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <RadioGroup
          label="Updated Radio Design"
          options={[
            { value: 'option1', label: 'Unselected Option', description: '16px × 16px with 6px border radius' },
            { value: 'option2', label: 'Selected Option', description: 'Shows thick brown border when active' },
          ]}
          defaultValue="option2"
        />
      </div>
    </div>
  ),
}; 