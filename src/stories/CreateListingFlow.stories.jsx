import CreateListingFlow from '../prototypes/landlords/create-listing/CreateListingFlow';
export default {
  title: 'Prototypes/Create Listing Flow',
  component: CreateListingFlow,
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