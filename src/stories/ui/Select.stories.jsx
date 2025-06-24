import React, { useState } from 'react';
import Select from '../../components/ui/Select';

export default {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: { type: 'text' },
    },
    error: {
      control: { type: 'text' },
    },
    helperText: {
      control: { type: 'text' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

const rentalLengthOptions = [
  { value: 'show-all', label: 'Show all' },
  { value: '1-month', label: '1 month' },
  { value: '2-months', label: '2 months' },
  { value: '3-months', label: '3 months' },
  { value: '4-months', label: '4 months' },
  { value: '5-months', label: '5 months' },
  { value: '6-months', label: '6 months' },
  { value: '7-months', label: '7 months' },
  { value: '8-months', label: '8 months' },
  { value: '9-months', label: '9 months' },
  { value: '10-months', label: '10 months' },
  { value: '11-months', label: '11 months' },
  { value: '1-year', label: 'At least 1 year' },
];

const categoryOptions = [
  { value: 'all-homes', label: 'All homes' },
  { value: 'first-hand', label: 'First hand' },
  { value: 'student-housing', label: 'Student housing' },
];

export const Default = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[300px]">
        <Select
          label="Min rental length"
          options={rentalLengthOptions}
          value={value}
          onChange={setValue}
          placeholder="Select rental length"
        />
      </div>
    );
  },
};

export const PreSelected = {
  render: () => {
    const [value, setValue] = useState('show-all');
    
    return (
      <div className="w-[300px]">
        <Select
          label="Min rental length"
          options={rentalLengthOptions}
          value={value}
          onChange={setValue}
          placeholder="Select rental length"
        />
      </div>
    );
  },
};

export const WithHelperText = {
  render: () => {
    const [value, setValue] = useState('all-homes');
    
    return (
      <div className="w-[300px]">
        <Select
          label="Category"
          options={categoryOptions}
          value={value}
          onChange={setValue}
          placeholder="Select category"
          helperText="Choose the type of housing you're looking for"
        />
      </div>
    );
  },
};

export const WithError = {
  render: () => {
    const [value, setValue] = useState('');
    
    return (
      <div className="w-[300px]">
        <Select
          label="Required Selection"
          options={categoryOptions}
          value={value}
          onChange={setValue}
          placeholder="Select an option"
          error="Please make a selection"
        />
      </div>
    );
  },
};

export const States = {
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('3-months');
    
    return (
      <div className="space-y-6 w-[300px]">
        <Select
          label="Empty State"
          options={rentalLengthOptions}
          value={value1}
          onChange={setValue1}
          placeholder="Nothing selected"
          helperText="No option selected"
        />
        
        <Select
          label="Selected State"
          options={rentalLengthOptions}
          value={value2}
          onChange={setValue2}
          placeholder="Select option"
          helperText="Option is selected"
        />
        
        <Select
          label="Error State"
          options={rentalLengthOptions}
          value=""
          onChange={() => {}}
          placeholder="Select option"
          error="This field is required"
        />
        
        <Select
          label="Disabled State"
          options={rentalLengthOptions}
          value="6-months"
          onChange={() => {}}
          placeholder="Disabled"
          disabled
        />
      </div>
    );
  },
};

export const LongOptions = {
  render: () => {
    const [value, setValue] = useState('');
    
    const longOptions = [
      { value: 'option1', label: 'This is a very long option text that might wrap' },
      { value: 'option2', label: 'Another lengthy option with lots of text' },
      { value: 'option3', label: 'Short option' },
      { value: 'option4', label: 'Medium length option text' },
    ];
    
    return (
      <div className="w-[300px]">
        <Select
          label="Options with long text"
          options={longOptions}
          value={value}
          onChange={setValue}
          placeholder="Select an option"
          helperText="Some options have longer text"
        />
      </div>
    );
  },
};

export const DesignSpecs = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-3">Design Specifications</h3>
        <div className="bg-gray-10 p-4 rounded-lg">
          <ul className="text-sm space-y-1">
            <li>• Button: rounded-xl border with chevron icon</li>
            <li>• Dropdown: white background with shadow</li>
            <li>• Selected option: checkmark icon on right</li>
            <li>• Hover: light gray background</li>
            <li>• Keyboard navigation support</li>
            <li>• Smooth open/close animation</li>
          </ul>
        </div>
      </div>
      
      <div className="w-[300px]">
        <Select
          label="Example Select"
          options={categoryOptions}
          value="first-hand"
          onChange={() => {}}
          placeholder="Select option"
          helperText="Click to see dropdown options"
        />
      </div>
    </div>
  ),
}; 