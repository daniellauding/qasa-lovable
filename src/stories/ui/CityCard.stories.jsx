import React from 'react';
import CityCard from '../../components/ui/CityCard';

export default {
  title: 'ui/CityCard',
  component: CityCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    city: {
      control: 'text',
    },
    homesCount: {
      control: 'text',
    },
    ctaText: {
      control: 'text',
    },
    imageSrc: {
      control: 'text',
    },
  },
};

export const Default = {
  args: {
    city: 'Stockholm',
    homesCount: '1,522 homes',
    ctaText: 'View homes',
    imageSrc: 'https://qasa.se/_next/static/media/stockholm.65206cdd.png',
    onClick: () => console.log('City card clicked'),
  },
};

export const TertiaryBackgroundShowcase = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Tertiary Background Card Variant</h3>
        <p className="text-sm text-gray-600 mb-4">
          CityCard uses <code>bg-[var(--color-button-tertiary-bg)]</code> (off-white/cream) for brand consistency and visual hierarchy in carousels and navigation contexts.
        </p>
        <div className="flex gap-4">
          <CityCard
            city="Stockholm"
            homesCount="1,522 homes"
            imageSrc="https://qasa.se/_next/static/media/stockholm.65206cdd.png"
            onClick={() => console.log('Stockholm clicked')}
          />
          <CityCard
            city="Göteborg"
            homesCount="1,126 homes"
            imageSrc="https://qasa.se/_next/static/media/gothenburg.aa62cda1.png"
            onClick={() => console.log('Göteborg clicked')}
          />
        </div>
      </div>
      
      <div>
        <h4 className="text-md font-medium mb-2">Usage Guidelines</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Perfect for carousels and city navigation</li>
          <li>• Creates visual hierarchy against white page backgrounds</li>
          <li>• Distinguishes navigational cards from data display cards</li>
          <li>• Maintains brand consistency with tertiary color</li>
        </ul>
      </div>
    </div>
  ),
};

export const AllCities = {
  render: () => (
    <div className="flex gap-4 overflow-x-auto pb-4">
      <CityCard
        city="Stockholm"
        homesCount="1,522 homes"
        imageSrc="https://qasa.se/_next/static/media/stockholm.65206cdd.png"
        onClick={() => console.log('Stockholm')}
      />
      <CityCard
        city="Göteborg"
        homesCount="1,126 homes"
        imageSrc="https://qasa.se/_next/static/media/gothenburg.aa62cda1.png"
        onClick={() => console.log('Göteborg')}
      />
      <CityCard
        city="Malmö"
        homesCount="489 homes"
        imageSrc="https://qasa.se/_next/static/media/malmo.47b5f4fd.png"
        onClick={() => console.log('Malmö')}
      />
      <CityCard
        city="Uppsala"
        homesCount="310 homes"
        imageSrc="https://qasa.se/_next/static/media/uppsala.1ae2487e.png"
        onClick={() => console.log('Uppsala')}
      />
    </div>
  ),
};
