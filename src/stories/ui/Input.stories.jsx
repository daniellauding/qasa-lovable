import Input from '../../components/ui/Input';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
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
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel'],
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Enter text here...',
  },
};

export const WithError = {
  args: {
    placeholder: 'Enter text here...',
    error: 'This field is required',
  },
};

export const Disabled = {
  args: {
    placeholder: 'Enter text here...',
    disabled: true,
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Input size="sm" placeholder="Small Input" />
      <Input size="md" placeholder="Medium Input" />
      <Input size="lg" placeholder="Large Input" />
    </div>
  ),
};

export const Types = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <Input type="text" placeholder="Text Input" />
      <Input type="email" placeholder="Email Input" />
      <Input type="password" placeholder="Password Input" />
      <Input type="number" placeholder="Number Input" />
      <Input type="tel" placeholder="Phone Input" />
    </div>
  ),
}; 