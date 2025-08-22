import React from 'react';
import SectionContainer from '../../components/ui/SectionContainer';
import Typography from '../../components/ui/Typography';

export default {
  title: 'ui/SectionContainer',
};

export const Plain = () => (
  <SectionContainer variant="none" padding="md">
    <Typography variant="title-md" className="mb-2">Plain Section</Typography>
    <Typography variant="body-sm" className="text-gray-600">No background, standard inner padding</Typography>
  </SectionContainer>
);

export const InsetRounded = () => (
  <SectionContainer variant="inset" roundedTop padding="md">
    <Typography variant="title-md" className="mb-2">Inset Rounded</Typography>
    <Typography variant="body-sm" className="text-gray-600">Uses bg-[var(--color-background-inset)] and rounded top</Typography>
  </SectionContainer>
);

export const Gray10Rounded = () => (
  <SectionContainer variant="gray10" roundedTop padding="lg">
    <Typography variant="title-md" className="mb-2">Gray-10 Rounded</Typography>
    <Typography variant="body-sm" className="text-gray-600">Uses bg-[var(--color-gray-10)] and large padding</Typography>
  </SectionContainer>
);

export const TertiaryRounded = () => (
  <SectionContainer variant="tertiary" roundedTop padding="md">
    <Typography variant="title-md" className="mb-2">Tertiary Background</Typography>
    <Typography variant="body-sm" className="text-gray-600">Uses bg-[var(--color-button-tertiary-bg)] perfect for FAQ sections</Typography>
  </SectionContainer>
);


