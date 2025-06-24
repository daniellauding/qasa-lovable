import React, { useState } from 'react';
import DatePicker from '../../components/ui/DatePicker';

export default {
  title: 'UI/DatePicker',
  component: DatePicker,
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
  },
};

export const Default = {
  render: () => {
    const [date, setDate] = useState('');
    
    return (
      <div className="w-[300px]">
        <DatePicker
          label="Select Date"
          value={date}
          onChange={setDate}
          placeholder="Select date"
        />
      </div>
    );
  },
};

export const WithHelperText = {
  render: () => {
    const [date, setDate] = useState('');
    
    return (
      <div className="w-[300px]">
        <DatePicker
          label="Move in Date"
          value={date}
          onChange={setDate}
          placeholder="Select move in date"
          helperText="Choose your preferred move in date"
        />
      </div>
    );
  },
};

export const WithError = {
  render: () => {
    const [date, setDate] = useState('');
    
    return (
      <div className="w-[300px]">
        <DatePicker
          label="Required Date"
          value={date}
          onChange={setDate}
          placeholder="Select date"
          error="Please select a date"
        />
      </div>
    );
  },
};

export const PreSelected = {
  render: () => {
    const [date, setDate] = useState('2025-06-15');
    
    return (
      <div className="w-[300px]">
        <DatePicker
          label="Booking Date"
          value={date}
          onChange={setDate}
          placeholder="Select date"
          helperText="Date is pre-selected"
        />
      </div>
    );
  },
};

export const States = {
  render: () => {
    const [date1, setDate1] = useState('');
    const [date2, setDate2] = useState('2025-06-20');
    
    return (
      <div className="space-y-6 w-[300px]">
        <DatePicker
          label="Empty State"
          value={date1}
          onChange={setDate1}
          placeholder="Select date"
          helperText="No date selected"
        />
        
        <DatePicker
          label="Selected State"
          value={date2}
          onChange={setDate2}
          placeholder="Select date"
          helperText="Date is selected"
        />
        
        <DatePicker
          label="Error State"
          value=""
          onChange={() => {}}
          placeholder="Select date"
          error="This field is required"
        />
        
        <DatePicker
          label="Disabled State"
          value=""
          onChange={() => {}}
          placeholder="Disabled"
          disabled
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
            <li>• Input: rounded-xl border with calendar icon</li>
            <li>• Calendar popup: white background with shadow</li>
            <li>• Selected date: black background with white text</li>
            <li>• Today: gray background with bold text</li>
            <li>• Navigation: arrow buttons for month navigation</li>
            <li>• Date format: YYYY-MM-DD</li>
          </ul>
        </div>
      </div>
      
      <div className="w-[300px]">
        <DatePicker
          label="Example DatePicker"
          value="2025-06-15"
          onChange={() => {}}
          placeholder="Select date"
          helperText="Click to see calendar popup"
        />
      </div>
    </div>
  ),
}; 