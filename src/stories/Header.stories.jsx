import React from 'react';
import Header from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['logged-out', 'landlord', 'tenant', 'creation-flow'],
    },
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  variant: 'logged-out',
  onLogin: () => alert('Login clicked'),
  onSignup: () => alert('Signup clicked'),
};

export const Landlord = Template.bind({});
Landlord.args = {
  variant: 'landlord',
  user: {
    name: 'Daniel Mattias',
    avatar: 'https://img.qasa.se/unsafe/fit-in/252x252/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/300180786a1905883faa0ffd0b5612fd8a0cb04e2e97b5646e40d10f8ed2e45a.jpg'
  },
  messageCount: 9,
  notificationCount: 1,
};

export const Tenant = Template.bind({});
Tenant.args = {
  variant: 'tenant',
  user: {
    name: 'Tenant User',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  messageCount: 0,
  notificationCount: 0,
};

export const CreationFlow = Template.bind({});
CreationFlow.args = {
  variant: 'creation-flow',
  onDismiss: () => alert('Dismiss clicked'),
  showDismiss: true,
};