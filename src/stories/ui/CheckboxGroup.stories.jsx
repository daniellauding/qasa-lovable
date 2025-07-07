import React, { useState } from 'react';
import CheckboxGroup from '../../components/ui/CheckboxGroup';
import { LanguageProvider } from '../../utils/translations/LanguageContext';

export default {
  title: 'UI/CheckboxGroup',
  component: CheckboxGroup,
  decorators: [
    (Story) => (
      <LanguageProvider>
        <div className="p-6 max-w-md">
          <Story />
        </div>
      </LanguageProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'card'],
    },
    value: {
      control: { type: 'object' },
    },
  },
};

const InteractiveTemplate = (args) => {
  const [value, setValue] = useState(args.value || []);
  
  return (
    <CheckboxGroup 
      {...args} 
      value={value} 
      onValueChange={setValue}
    />
  );
};

export const Default = InteractiveTemplate.bind({});
Default.args = {
  label: 'Select your preferences',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  value: [],
  variant: 'default',
};

export const CardVariant = InteractiveTemplate.bind({});
CardVariant.args = {
  label: 'Select property types',
  options: [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'townhouse', label: 'Townhouse' },
    { 
      value: 'other', 
      label: 'Other',
      description: 'Other can be other types of accommodations not shown here, for example houseboat.'
    },
  ],
  value: ['apartment'],
  variant: 'card',
};

export const WithHelperText = InteractiveTemplate.bind({});
WithHelperText.args = {
  label: 'Requirements',
  helperText: 'Select all that apply to your needs',
  options: [
    { value: 'wheelchair', label: 'Wheelchair accessible' },
    { value: 'pets', label: 'Pets allowed' },
    { value: 'smoking', label: 'Smoking allowed' },
  ],
  value: [],
  variant: 'card',
}; 