import { BrowserRouter } from 'react-router-dom';
import ContactModal from '../components/ContactModal';

export default {
  title: 'Components/ContactModal',
  component: ContactModal,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpen: { control: 'boolean' },
    onClose: { action: 'closed' },
  },
};

const mockPropertyData = {
  image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
  title: 'Billingevägen, Röstånga',
  type: 'Lägenhet',
  rooms: '3',
  area: '95',
  moveInDate: '2025-07-01',
  duration: 'Tillsvidare',
  price: '9 104',
};

export const Default = {
  args: {
    isOpen: true,
    onClose: () => {},
    propertyData: mockPropertyData,
  },
}; 