import DevExperimentsButton from '../components/DevExperimentsButton';
export default {
  title: 'Components/DevExperimentsButton',
  component: DevExperimentsButton,
  decorators: [
    (Story) => (
      <Story />
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
}; 