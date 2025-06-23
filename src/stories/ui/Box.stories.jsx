import Box from '../../components/ui/Box';

export default {
  title: 'UI/Box',
  component: Box,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'gray'],
    },
    shadow: {
      control: 'boolean',
    },
    rounded: {
      control: 'boolean',
    },
    padding: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    children: 'Default Box Content',
    variant: 'default',
    shadow: true,
    rounded: true,
  },
};

export const Gray = {
  args: {
    children: 'Gray Box Content',
    variant: 'gray',
    shadow: false,
    rounded: true,
  },
};

export const CustomPadding = {
  args: {
    children: 'Box with Custom Padding',
    padding: 'p-8',
    shadow: true,
  },
};

export const Variants = {
  render: () => (
    <div className="flex flex-col gap-4 w-[300px]">
      <Box shadow>Default Box with Shadow</Box>
      <Box variant="gray">Gray Box</Box>
      <Box shadow rounded={false}>Box without Rounded Corners</Box>
      <Box padding="p-8">Box with Large Padding</Box>
    </div>
  ),
}; 