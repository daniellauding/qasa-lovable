import ApplicationForm from './ApplicationForm';

export default {
  title: 'Tenants/Bet Increase Quality/ApplicationForm',
  component: ApplicationForm,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export const Empty = {
  args: {
    onChange: (data) => console.log('Form data:', data),
  },
};

export const Filled = {
  args: {
    onChange: (data) => console.log('Form data:', data),
  },
  play: async ({ canvasElement }) => {
    // You can add interaction tests here using @storybook/testing-library
  },
}; 