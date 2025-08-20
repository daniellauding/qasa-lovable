import React from 'react';
import Dropdown, { DropdownItem } from '../../components/ui/Dropdown';
import { ChevronDown } from 'lucide-react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  subcomponents: { DropdownItem },
};

const menuItems = [
  { icon: "📋", label: "Documents" },
  { icon: "👤", label: "Profile" },
  { icon: "⚙️", label: "Settings" },
  { icon: "❓", label: "Help" },
];

export const Default = {
  render: () => (
    <Dropdown
      trigger={
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)]">
          Menu
          <ChevronDown className="w-5 h-5" />
        </button>
      }
    >
      {menuItems.map((item) => (
        <DropdownItem
          key={item.label}
          icon={item.icon}
        >
          {item.label}
        </DropdownItem>
      ))}
    </Dropdown>
  ),
};

export const WithSeparators = {
  render: () => (
    <Dropdown
      trigger={
        <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)]">
          Menu with Separators
          <ChevronDown className="w-5 h-5" />
        </button>
      }
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.label}>
          <DropdownItem icon={item.icon}>
            {item.label}
          </DropdownItem>
          {index === 1 && (
            <div className="my-2 border-t border-gray-200" />
          )}
        </React.Fragment>
      ))}
    </Dropdown>
  ),
};

export const Alignment = {
  render: () => (
    <div className="flex gap-4">
      <Dropdown
        trigger={
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)]">
            Align Start
            <ChevronDown className="w-5 h-5" />
          </button>
        }
        align="start"
      >
        {menuItems.map((item) => (
          <DropdownItem key={item.label} icon={item.icon}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>

      <Dropdown
        trigger={
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)]">
            Align Center
            <ChevronDown className="w-5 h-5" />
          </button>
        }
        align="center"
      >
        {menuItems.map((item) => (
          <DropdownItem key={item.label} icon={item.icon}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>

      <Dropdown
        trigger={
          <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-[var(--color-background-inset)]">
            Align End
            <ChevronDown className="w-5 h-5" />
          </button>
        }
        align="end"
      >
        {menuItems.map((item) => (
          <DropdownItem key={item.label} icon={item.icon}>
            {item.label}
          </DropdownItem>
        ))}
      </Dropdown>
    </div>
  ),
};

// Stories for individual DropdownItem examples
const DropdownItemExample = ({ children }) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger>
      <button className="hidden">Trigger</button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content className="bg-white rounded-lg shadow-lg py-2 min-w-[200px]">
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export const ItemExamples = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2">With Icon</h3>
        <DropdownItemExample>
          <DropdownItem icon="📋">Documents</DropdownItem>
        </DropdownItemExample>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Without Icon</h3>
        <DropdownItemExample>
          <DropdownItem>Simple Item</DropdownItem>
        </DropdownItemExample>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Custom Styled</h3>
        <DropdownItemExample>
          <DropdownItem
            icon={<span className="text-blue-500">🔗</span>}
            className="text-blue-500"
          >
            Custom Styled Item
          </DropdownItem>
        </DropdownItemExample>
      </div>

      <div>
        <h3 className="text-sm font-medium mb-2">Different States</h3>
        <DropdownItemExample>
          <DropdownItem>Regular Item</DropdownItem>
          <DropdownItem className="text-red-500 hover:bg-red-50">
            Danger Action
          </DropdownItem>
          <DropdownItem className="text-gray-400 cursor-not-allowed hover:bg-transparent">
            Disabled Item
          </DropdownItem>
          <DropdownItem className="font-medium">
            Bold Item
          </DropdownItem>
        </DropdownItemExample>
      </div>
    </div>
  ),
}; 