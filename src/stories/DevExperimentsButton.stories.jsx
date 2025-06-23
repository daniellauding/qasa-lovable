import DevExperimentsButton from '../components/DevExperimentsButton';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Components/DevExperimentsButton',
  component: DevExperimentsButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
}; 