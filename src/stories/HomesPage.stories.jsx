import React from 'react';
import HomesPage from '../prototypes/homes/HomesPage';

export default {
  title: 'Tenants/FindHome',
  component: HomesPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Home search page for tenants to find rental properties. Includes search, filters, map view, and property listings.'
      }
    }
  }
};

export const Default = {
  render: () => <HomesPage />
};

export const WithSearch = {
  render: () => <HomesPage />,
  parameters: {
    docs: {
      description: {
        story: 'Home search with location-based search functionality'
      }
    }
  }
};

export const WithFilters = {
  render: () => <HomesPage />,
  parameters: {
    docs: {
      description: {
        story: 'Home search with advanced filtering options'
      }
    }
  }
};

export const MapView = {
  render: () => <HomesPage />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive map view showing property locations'
      }
    }
  }
};

export const PropertyListings = {
  render: () => <HomesPage />,
  parameters: {
    docs: {
      description: {
        story: 'Grid view of available rental properties'
      }
    }
  }
};
