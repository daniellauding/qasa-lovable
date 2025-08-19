import React from 'react';
import Tabs from '../../components/ui/Tabs';
import Typography from '../../components/ui/Typography';
import Icon from '../../components/ui/Icon';

export default {
  title: 'UI/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    controls: { expanded: true },
  },
};

const sampleTabs = [
  { value: 'tenants', label: 'For Tenants', content: () => (
    <Typography variant="body-md">Tenant content</Typography>
  ) },
  { value: 'landlords', label: 'For Landlords', content: () => (
    <Typography variant="body-md">Landlord content</Typography>
  ) },
  { value: 'icon', label: 'Icon Tab', icon: <Icon name="Home" className="text-[var(--color-brown)]" />, content: () => (
    <Typography variant="body-md">Icon-only capable tab</Typography>
  ), iconOnly: true },
];

export const Pill = {
  args: {
    tabs: sampleTabs,
    variant: 'default',
    defaultValue: 'tenants',
  },
};

export const Underline = {
  args: {
    tabs: sampleTabs,
    variant: 'simple',
    defaultValue: 'tenants',
  },
};

export const Sizes = {
  render: () => (
    <div className="space-y-6">
      <Tabs tabs={sampleTabs} variant="simple" size="sm" defaultValue="tenants" />
      <Tabs tabs={sampleTabs} variant="simple" size="md" defaultValue="tenants" />
      <Tabs tabs={sampleTabs} variant="simple" size="lg" defaultValue="tenants" />
      <Tabs tabs={sampleTabs} variant="simple" size="xl" defaultValue="tenants" />
    </div>
  ),
};


