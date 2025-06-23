import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/Footer';

export default {
  title: 'Components/Footer',
  component: Footer,
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