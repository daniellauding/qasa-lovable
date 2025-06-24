import React from 'react';
import Checkbox from '../../components/ui/Checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    checked: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    error: {
      control: 'boolean',
    },
  },
};

export const Default = {
  args: {
    id: 'default-checkbox',
    label: 'I agree to the terms and conditions',
  },
};

export const WithHelperText = {
  args: {
    id: 'helper-checkbox',
    label: 'Email notifications',
    helperText: 'Receive all account notifications via email.',
  },
};

export const WithError = {
  args: {
    id: 'error-checkbox',
    label: 'Required field',
    helperText: 'This field is required',
    error: true,
  },
};

export const Disabled = {
  args: {
    id: 'disabled-checkbox',
    label: 'Disabled option',
    helperText: 'This option is not available',
    disabled: true,
  },
};

export const States = {
  render: () => {
    const [checked1, setChecked1] = React.useState(false);
    const [checked2, setChecked2] = React.useState(true);
    const [checked3, setChecked3] = React.useState(false);
    
    return (
      <div className="space-y-4">
        <Checkbox
          id="interactive-unchecked"
          label="Interactive Unchecked"
          helperText="Click to check - white background with gray border"
          checked={checked1}
          onCheckedChange={setChecked1}
        />
        <Checkbox
          id="interactive-checked"
          label="Interactive Checked"
          helperText="Click to uncheck - gray background with brown check icon"
          checked={checked2}
          onCheckedChange={setChecked2}
        />
        <Checkbox
          id="interactive-error"
          label="Interactive with Error"
          helperText="This field has an error but is still functional"
          error
          checked={checked3}
          onCheckedChange={setChecked3}
        />
        <Checkbox
          id="disabled"
          label="Disabled Unchecked"
          disabled
        />
        <Checkbox
          id="disabled-checked"
          label="Disabled Checked"
          disabled
          checked
        />
      </div>
    );
  },
};

export const Sizes = {
  render: () => (
    <div className="space-y-4">
      <Checkbox
        id="small"
        label="Small Checkbox"
        helperText="16px × 16px size"
        size="sm"
      />
      <Checkbox
        id="medium"
        label="Medium Checkbox"
        helperText="20px × 20px size (default)"
        size="md"
        checked
      />
      <Checkbox
        id="large"
        label="Large Checkbox"
        helperText="24px × 24px size"
        size="lg"
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
            <li>• Small: 16px × 16px, Medium: 20px × 20px, Large: 24px × 24px</li>
            <li>• Border: 2px solid #d6d6ce</li>
            <li>• Border radius: rounded-md (6px)</li>
            <li>• Default background: white</li>
            <li>• Active background: #d6d6ce</li>
            <li>• Check icon: solid brown (#322721)</li>
            <li>• Smooth transition animations</li>
          </ul>
        </div>
      </div>
      <div className="space-y-4">
        <Checkbox
          id="spec-unchecked"
          label="Unchecked State"
          helperText="White background, gray border, no icon"
        />
        <Checkbox
          id="spec-checked"
          label="Checked State"
          helperText="Gray background, brown check icon"
          checked
        />
      </div>
    </div>
  ),
}; 