import CreateListingFlow from '../prototypes/landlords/create-listing/CreateListingFlow';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Prototypes/Create Listing Flow',
  component: CreateListingFlow,
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