import React from 'react';
import Accordion from '../../components/ui/Accordion';

export default {
  title: 'UI/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
};

const items = [
  { title: 'How it works for landlords', content: 'List a property, review applications, select tenant, sign secure contract.' },
  { title: 'How it works for tenants', content: 'Create profile, search & apply, get matched, move in without deposit.' },
  { title: 'What can I rent out?', content: 'Apartments, houses, rooms, and more in accordance with local regulations.' },
];

const itemsWithDescriptions = [
  { 
    title: 'Personal', 
    description: 'Your personal information and how we can contact you',
    content: 'Name, email, phone number, and birth date information.' 
  },
  { 
    title: 'Account', 
    description: 'Set your account type',
    content: 'Role, account type, and Qasa Premium settings.' 
  },
  { 
    title: 'Notifications', 
    description: 'Your notification preferences',
    content: 'Frequency, contact requests, and SMS notification settings.' 
  },
];

export const Default = {
  args: {
    items,
    allowMultiple: false,
    defaultOpenIndices: [0],
  },
};

export const MultipleOpen = {
  args: {
    items,
    allowMultiple: true,
    defaultOpenIndices: [0, 2],
  },
};

export const WithDescriptions = {
  args: {
    items: itemsWithDescriptions,
    allowMultiple: false,
    defaultOpenIndices: [0],
  },
  parameters: {
    docs: {
      description: {
        story: 'Accordion items with descriptions in the header, matching the Settings page design.',
      },
    },
  },
};


