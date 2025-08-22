import React from 'react';
import Typography from '../../components/ui/Typography';
import Icon from '../../components/ui/Icon';

export default {
  title: 'UI/Lists & Tables',
  parameters: {
    docs: {
      description: {
        component: 'Examples of unordered lists (ul li) with contextual icons for amenities, process lists with CheckCircle icons for steps, and basic tables for displaying rental costs.'
      }
    }
  }
};

// Unordered Lists Template
const UnorderedListTemplate = (args) => (
  <div className="space-y-6">
    <div className="bg-white border rounded-lg p-6">
      <Typography variant="title-sm" className="mb-4">Amenities</Typography>
      <ul className="grid grid-cols-2 gap-3">
        <li className="flex items-center gap-3">
          <Icon name="Home" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Patio</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Settings" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Dish washer</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="ArrowUp" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Elevator</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Wifi" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Internet</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Car" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Parking available</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Droplets" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Laundry room</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Droplets" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Shower</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Zap" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Tumble dryer</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Settings" size="sm" className="text-gray-600" />
          <Typography variant="body-sm">Washing machine</Typography>
        </li>
      </ul>
    </div>

    <div className="bg-white border rounded-lg p-6">
      <Typography variant="title-sm" className="mb-4">House Rules & Accessibility</Typography>
      <ul className="space-y-3">
        <li className="flex items-center gap-3">
          <Icon name="Check" size="sm" />
          <Typography variant="body-sm">Pets welcome</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="X" size="sm" />
          <Typography variant="body-sm">Not wheelchair accessible</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="X" size="sm" />
          <Typography variant="body-sm">No smoking</Typography>
        </li>
        <li className="flex items-center gap-3">
          <Icon name="Check" size="sm" />
          <Typography variant="body-sm">Up to 2 tenants</Typography>
        </li>
      </ul>
    </div>
  </div>
);

// Ordered Lists Template
const OrderedListTemplate = (args) => (
  <div className="bg-white border rounded-lg p-6">
    <Typography variant="title-sm" className="mb-4">How It Works</Typography>
    <ul className="space-y-4">
      <li className="flex items-start gap-4">
        <Icon name="CheckCircle" size="sm" className="stroke-2 mt-1" />
        <div>
          <Typography variant="body-md" className="font-medium">Publish your home listing</Typography>
          <Typography variant="body-sm" className="text-gray-600">Create a detailed listing with photos and information</Typography>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <Icon name="CheckCircle" size="sm" className="stroke-2 mt-1" />
        <div>
          <Typography variant="body-md" className="font-medium">Connect with tenants today</Typography>
          <Typography variant="body-sm" className="text-gray-600">Receive applications and start conversations</Typography>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <Icon name="CheckCircle" size="sm" className="stroke-2 mt-1" />
        <div>
          <Typography variant="body-md" className="font-medium">We handle the rental agreement</Typography>
          <Typography variant="body-sm" className="text-gray-600">Professional contracts and legal protection</Typography>
        </div>
      </li>
      <li className="flex items-start gap-4">
        <Icon name="CheckCircle" size="sm" className="stroke-2 mt-1" />
        <div>
          <Typography variant="body-md" className="font-medium">We handle deposit and payments</Typography>
          <Typography variant="body-sm" className="text-gray-600">Secure payment processing and deposit management</Typography>
        </div>
      </li>
    </ul>
  </div>
);

// Basic Tables Template
const BasicTableTemplate = (args) => (
  <div className="space-y-6">
    <div className="bg-white border rounded-lg p-6">
      <Typography variant="title-sm" className="mb-4">Rent Breakdown</Typography>
      <div className="space-y-4">
        <div className="flex justify-between items-center py-2 border-b">
          <Typography variant="body-md" className="font-medium">Monthly cost</Typography>
          <Typography variant="body-md" className="font-medium">SEK 12,625</Typography>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <Typography variant="body-md" className="font-medium">Rent</Typography>
              <Typography variant="body-sm" className="text-gray-600">The monthly rent for the home</Typography>
            </div>
            <Typography variant="body-md">SEK 10,000</Typography>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <Typography variant="body-md" className="font-medium">Service fee</Typography>
              <Typography variant="body-sm" className="text-gray-600">Rent safely at Qasa</Typography>
            </div>
            <Typography variant="body-md">SEK 495</Typography>
          </div>
          
          <div className="flex justify-between items-start">
            <div>
              <Typography variant="body-md" className="font-medium">Deposit</Typography>
              <Typography variant="body-sm" className="text-gray-600">Credit check required</Typography>
            </div>
            <div className="text-right">
              <Typography variant="body-md" className="line-through text-gray-400">SEK 10,000</Typography>
              <Typography variant="body-md" className="text-green-600">SEK 0</Typography>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white border rounded-lg p-6">
      <Typography variant="title-sm" className="mb-4">Additional costs</Typography>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Warm water</Typography>
          <Typography variant="body-sm" className="text-green-600">Included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Heating</Typography>
          <Typography variant="body-sm" className="text-green-600">Included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Electricity</Typography>
          <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Internet</Typography>
          <Typography variant="body-sm" className="text-green-600">Included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Cable TV</Typography>
          <Typography variant="body-sm" className="text-green-600">Included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Parking included</Typography>
          <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
        </div>
        <div className="flex justify-between items-center">
          <Typography variant="body-sm">Garage</Typography>
          <Typography variant="body-sm" className="text-gray-400">Not included</Typography>
        </div>
      </div>
    </div>
  </div>
);

export const UnorderedLists = {
  render: () => <UnorderedListTemplate />,
  parameters: {
    docs: { disable: true },
  },
};

export const OrderedLists = {
  render: () => <OrderedListTemplate />,
  parameters: {
    docs: { disable: true },
  },
};

export const BasicTables = {
  render: () => <BasicTableTemplate />,
  parameters: {
    docs: { disable: true },
  },
};

const AllVariantsTemplate = () => (
  <div className="space-y-8">
    <div>
      <h3 className="text-lg font-semibold mb-4">Unordered Lists</h3>
      <UnorderedListTemplate />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Ordered Lists</h3>
      <OrderedListTemplate />
    </div>
    
    <div>
      <h3 className="text-lg font-semibold mb-4">Basic Tables</h3>
      <BasicTableTemplate />
    </div>
  </div>
);

export const AllVariants = {
  render: AllVariantsTemplate,
  parameters: {
    docs: { disable: true },
  },
};
