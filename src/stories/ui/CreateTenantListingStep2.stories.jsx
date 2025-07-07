import CreateTenantListingStep2 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep2';
import { LanguageProvider } from '../../utils/translations/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

export default {
  title: 'Prototypes/Tenants/CreateTenantListingSteps/Step2',
  component: CreateTenantListingStep2,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <LanguageProvider>
          <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
            <Story />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Step 2 of the Create Tenant Listing flow - Location search with map integration and autocomplete.',
      },
    },
  },
  argTypes: {
    onNext: { action: 'next clicked' },
    onPrev: { action: 'previous clicked' },
    formData: {
      control: 'object',
      description: 'Current form data state',
    },
    updateFormData: { action: 'form data updated' },
  },
};

export const EmptyState = {
  args: {
    formData: {
      searchLocations: [],
      language: 'sv',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with no locations selected. Shows the search input and map in default state.',
      },
    },
  },
};

export const WithSelectedLocation = {
  args: {
    formData: {
      searchLocations: ['Lund'],
      language: 'sv',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
  parameters: {
    docs: {
      description: {
        story: 'State with Lund selected as a search location. Shows how selected locations appear as tags and affect the map display.',
      },
    },
  },
};

export const MultipleLocations = {
  args: {
    formData: {
      searchLocations: ['Lund', 'Luleå', 'Ludvika'],
      language: 'sv',
    },
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Previous clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
  parameters: {
    docs: {
      description: {
        story: 'State with multiple locations selected. Demonstrates how multiple location tags are displayed and managed.',
      },
    },
  },
}; 