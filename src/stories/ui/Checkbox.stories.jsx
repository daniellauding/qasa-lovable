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
  render: () => (
    <div className="space-y-4">
      <Checkbox
        id="unchecked"
        label="Unchecked"
        helperText="White background with gray border"
      />
      <Checkbox
        id="checked"
        label="Checked"
        helperText="Gray background with brown check icon"
        checked
      />
      <Checkbox
        id="disabled"
        label="Disabled"
        disabled
      />
      <Checkbox
        id="disabled-checked"
        label="Disabled & Checked"
        disabled
        checked
      />
      <Checkbox
        id="error"
        label="Error"
        error
        helperText="This field has an error"
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
            <li>• Checkbox size: 12px × 12px</li>
            <li>• Border: 2px solid #d6d6ce (gray-40)</li>
            <li>• Border radius: rounded-md (6px)</li>
            <li>• Default background: white</li>
            <li>• Active background: #d6d6ce (gray-40)</li>
            <li>• Check icon: 8px × 8px brown (#322721)</li>
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