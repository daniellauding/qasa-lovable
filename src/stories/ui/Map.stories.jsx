import React, { useState } from 'react';
import Map from '../../components/ui/Map';
import Card from '../../components/ui/Card';

// Mock property data
const mockProperties = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    ],
    location: 'Södergatan, Jönköping',
    type: 'Lägenhet',
    details: '1 rum / 45 m²',
    price: 'SEK 6,194',
    dateRange: '2025-08-01 → Tillsvidare',
    lat: 57.7826,
    lng: 14.1618,
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop',
    ],
    location: 'Östermalm, Stockholm',
    type: 'Lägenhet',
    details: '2 rum / 65 m²',
    price: 'SEK 18,500',
    dateRange: '2025-07-15 → Tillsvidare',
    lat: 59.3358,
    lng: 18.0871,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop',
    location: 'Södermalm, Stockholm',
    type: 'Lägenhet',
    details: '3 rum / 85 m²',
    price: 'SEK 25,000',
    dateRange: '2025-06-01 → Tillsvidare',
    lat: 59.3140,
    lng: 18.0700,
  },
  {
    id: 4,
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
    ],
    location: 'Vasastan, Stockholm',
    type: 'Lägenhet',
    details: '2 rum / 55 m²',
    price: 'SEK 16,500',
    dateRange: '2025-09-01 → Tillsvidare',
    lat: 59.3434,
    lng: 18.0527,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
    location: 'Norrmalm, Stockholm',
    type: 'Studio',
    details: '1 rum / 35 m²',
    price: 'SEK 14,000',
    dateRange: '2025-08-15 → Tillsvidare',
    lat: 59.3326,
    lng: 18.0649,
  },
  {
    id: 6,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop',
    ],
    location: 'Gamla Stan, Stockholm',
    type: 'Lägenhet',
    details: '1 rum / 42 m²',
    price: 'SEK 15,800',
    dateRange: '2025-07-01 → Tillsvidare',
    lat: 59.3258,
    lng: 18.0717,
  },
];

// Dense properties for grouped pins demo
const denseProperties = [
  ...mockProperties,
  {
    id: 7,
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop'],
    location: 'Kungsholmen, Stockholm',
    type: 'Lägenhet',
    details: '2 rum / 60 m²',
    price: 'SEK 17,200',
    dateRange: '2025-08-01 → Tillsvidare',
    lat: 59.3300,
    lng: 18.0500,
  },
  {
    id: 8,
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=300&fit=crop'],
    location: 'Kungsholmen, Stockholm',
    type: 'Lägenhet',
    details: '1 rum / 40 m²',
    price: 'SEK 13,500',
    dateRange: '2025-08-01 → Tillsvidare',
    lat: 59.3310,
    lng: 18.0510,
  },
  {
    id: 9,
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop'],
    location: 'Kungsholmen, Stockholm',
    type: 'Lägenhet',
    details: '3 rum / 75 m²',
    price: 'SEK 22,000',
    dateRange: '2025-08-01 → Tillsvidare',
    lat: 59.3320,
    lng: 18.0520,
  },
];

export default {
  title: 'UI/Map',
  component: Map,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Interactive map component with grouped pins and price display. Uses OpenStreetMap and supports hover interactions with property cards.',
      },
    },
  },
  argTypes: {
    center: {
      control: 'object',
      description: 'Map center coordinates [lat, lng]',
    },
    zoom: {
      control: { type: 'range', min: 8, max: 18, step: 1 },
      description: 'Initial zoom level',
    },
    showGroupedPins: {
      control: 'boolean',
      description: 'Show grouped pins when zoomed out',
    },
    onPropertyClick: {
      action: 'property-clicked',
      description: 'Callback when a property is clicked',
    },
  },
};

// Interactive wrapper for stories
const MapWrapper = ({ properties, selectedProperty, ...props }) => {
  const [selected, setSelected] = useState(selectedProperty);

  const handlePropertyClick = (property) => {
    setSelected(property);
    props.onPropertyClick?.(property);
  };

  return (
    <Map
      {...props}
      properties={properties}
      selectedProperty={selected}
      onPropertyClick={handlePropertyClick}
    />
  );
};

export const Default = {
  args: {
    properties: mockProperties,
    center: [59.3293, 18.0686],
    zoom: 11,
    showGroupedPins: true,
  },
  render: (args) => <MapWrapper {...args} />,
};

export const ZoomedIn = {
  args: {
    properties: mockProperties,
    center: [59.3293, 18.0686],
    zoom: 14,
    showGroupedPins: true,
  },
  render: (args) => <MapWrapper {...args} />,
};

export const WithGroupedPins = {
  args: {
    properties: denseProperties,
    center: [59.3293, 18.0686],
    zoom: 11,
    showGroupedPins: true,
  },
  render: (args) => <MapWrapper {...args} />,
};

export const WithoutGroupedPins = {
  args: {
    properties: denseProperties,
    center: [59.3293, 18.0686],
    zoom: 11,
    showGroupedPins: false,
  },
  render: (args) => <MapWrapper {...args} />,
};

export const WithSelectedProperty = {
  args: {
    properties: mockProperties,
    center: [59.3293, 18.0686],
    zoom: 11,
    showGroupedPins: true,
    selectedProperty: mockProperties[1],
  },
  render: (args) => <MapWrapper {...args} />,
};

export const SwedenOverview = {
  args: {
    properties: mockProperties,
    center: [62.0, 15.0], // Sweden center
    zoom: 6,
    showGroupedPins: true,
  },
  render: (args) => <MapWrapper {...args} />,
};

export const StockholmFocus = {
  args: {
    properties: mockProperties.filter(p => 
      p.lat > 59.2 && p.lat < 59.5 && p.lng > 17.8 && p.lng < 18.3
    ),
    center: [59.3293, 18.0686],
    zoom: 12,
    showGroupedPins: true,
  },
  render: (args) => <MapWrapper {...args} />,
};

// Documentation examples
export const Examples = {
  render: () => (
    <div className="space-y-8 p-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Basic Map with Properties</h3>
        <div className="h-96 border rounded-lg overflow-hidden">
          <Map
            properties={mockProperties}
            center={[59.3293, 18.0686]}
            zoom={11}
            onPropertyClick={(property) => console.log('Clicked:', property.location)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Map with Grouped Pins (Zoomed Out)</h3>
        <div className="h-96 border rounded-lg overflow-hidden">
          <Map
            properties={denseProperties}
            center={[59.3293, 18.0686]}
            zoom={10}
            showGroupedPins={true}
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Map with Individual Price Pins (Zoomed In)</h3>
        <div className="h-96 border rounded-lg overflow-hidden">
          <Map
            properties={mockProperties}
            center={[59.3293, 18.0686]}
            zoom={14}
            showGroupedPins={true}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different map states and configurations for various use cases.',
      },
    },
  },
};
