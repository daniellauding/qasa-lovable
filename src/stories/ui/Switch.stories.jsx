import React from 'react';
import Switch from '../../components/ui/Switch';

export default {
  title: 'UI/Switch',
  component: Switch,
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
  },
};

export const Default = {
  args: {
    id: 'default-switch',
    label: 'Email notifications',
  },
};

export const WithDescription = {
  args: {
    id: 'description-switch',
    label: 'Email notifications',
    description: 'Receive all account notifications via email.',
  },
};

export const Disabled = {
  render: () => (
    <div className="space-y-4">
      <Switch
        id="disabled-unchecked"
        label="Notifications disabled"
        description="This setting cannot be changed"
        disabled
      />
      <Switch
        id="disabled-checked"
        label="Always enabled"
        description="This setting is always on"
        disabled
        defaultChecked
      />
    </div>
  ),
};

export const States = {
  render: () => (
    <div className="space-y-4">
      <Switch
        id="unchecked"
        label="Unchecked"
        description="Background: #d6d6ce (gray-40)"
      />
      <Switch
        id="checked"
        label="Checked"
        description="Background: #322721 (brown) with check icon"
        defaultChecked
      />
      <Switch
        id="disabled"
        label="Disabled"
        disabled
      />
      <Switch
        id="disabled-checked"
        label="Disabled & Checked"
        disabled
        defaultChecked
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
             <li>• Switch size: 32px height × 56px width</li>
             <li>• Thumb size: 24px × 24px with white background</li>
             <li>• Check icon: 12px × 12px (transparent when off, brown when on)</li>
             <li>• Normal background: #d6d6ce (gray-40)</li>
             <li>• Active background: #322721 (brown) - no border</li>
             <li>• Subtle shadow on thumb</li>
           </ul>
        </div>
      </div>
      <div className="space-y-4">
        <Switch
          id="spec-off"
          label="Switch OFF"
          description="Shows gray background with transparent icon"
        />
        <Switch
          id="spec-on"
          label="Switch ON"
          description="Shows brown background with brown check icon"
          defaultChecked
        />
      </div>
    </div>
  ),
}; 