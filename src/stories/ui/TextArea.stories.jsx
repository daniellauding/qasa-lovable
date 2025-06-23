import TextArea from '../../components/ui/TextArea';

export default {
  title: 'UI/TextArea',
  component: TextArea,
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
  },
};

export const Default = {
  args: {
    placeholder: 'Enter your message here...',
  },
};

export const WithError = {
  args: {
    placeholder: 'Enter your message here...',
    error: 'This field is required',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-4 w-[400px]">
      <TextArea size="sm" placeholder="Small TextArea" />
      <TextArea size="md" placeholder="Medium TextArea" />
      <TextArea size="lg" placeholder="Large TextArea" />
    </div>
  ),
}; 