import CreateTenantListingFlow from '../prototypes/tenants/create-tenant-listing/CreateTenantListingFlow';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from '../utils/translations/LanguageContext';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';

export default {
  title: 'Prototypes/Tenants/CreateTenantListingFlow',
  component: CreateTenantListingFlow,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <BrowserRouter>
              <div style={{ minHeight: '100vh' }}>
                <Story />
              </div>
            </BrowserRouter>
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Create Tenant Listing Flow - A step-by-step flow for tenants to create profile listings to attract landlords. Features location search with map integration, language selection, and benefits overview.',
      },
    },
  },
  argTypes: {
    step: {
      control: { type: 'select' },
      options: ['1', '2'],
      description: 'Current step in the flow',
    },
  },
};

export const Step1_Introduction = {
  parameters: {
    docs: {
      description: {
        story: 'Step 1: Introduction page with benefits and language selector. Shows the value proposition for creating a tenant profile listing.',
      },
    },
    reactRouter: {
      routePath: '/tenants/create-tenant-listing/step/1',
    },
  },
};

export const Step2_LocationSearch = {
  parameters: {
    docs: {
      description: {
        story: 'Step 2: Location search with map integration. Users can search for and select areas where they want to live, with autocomplete suggestions and visual map feedback.',
      },
    },
    reactRouter: {
      routePath: '/tenants/create-tenant-listing/step/2',
    },
  },
};

export const AllSteps = {
  parameters: {
    docs: {
      description: {
        story: 'Complete flow starting from step 1. Navigate through all steps to see the complete tenant listing creation experience.',
      },
    },
    reactRouter: {
      routePath: '/tenants/create-tenant-listing',
    },
  },
}; 