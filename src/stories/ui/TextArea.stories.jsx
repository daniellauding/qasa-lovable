import React from 'react';
import TextArea from '../../components/ui/TextArea';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    placeholder: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
    helperText: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message here...',
  },
};

export const WithHelperText = {
  args: {
    label: 'Additional Comments',
    placeholder: 'Please provide any additional details...',
    helperText: 'This information will help us better understand your request.',
  },
};

export const WithError = {
  args: {
    label: 'Required Message',
    placeholder: 'Enter your message here...',
    error: 'This field is required',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <TextArea 
        label="Small TextArea" 
        size="sm" 
        placeholder="Small TextArea (80px min height)" 
      />
      <TextArea 
        label="Medium TextArea" 
        size="md" 
        placeholder="Medium TextArea (120px min height)" 
      />
      <TextArea 
        label="Large TextArea" 
        size="lg" 
        placeholder="Large TextArea (160px min height)" 
      />
    </div>
  ),
};

export const States = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <TextArea
        label="Normal State"
        placeholder="Enter text here..."
        helperText="This is a normal textarea"
      />
      <TextArea
        label="With Error"
        placeholder="Enter text here..."
        error="This field contains an error"
      />
      <TextArea
        label="Disabled State"
        placeholder="This is disabled"
        disabled
        helperText="This textarea is disabled"
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
            <li>• Label: font-medium, gray-90 color</li>
            <li>• Border: gray-30, focus gray-50, error red-500</li>
            <li>• Border radius: rounded-xl (12px)</li>
            <li>• Padding: 12px (p-3)</li>
            <li>• Sizes: sm (80px), md (120px), lg (160px)</li>
            <li>• Helper text: gray-60 color</li>
          </ul>
        </div>
      </div>
      
      <div className="w-[400px]">
        <TextArea
          label="Example TextArea"
          placeholder="Type your message here..."
          helperText="This shows the complete textarea styling"
        />
      </div>
    </div>
  ),
}; 