import CreateTenantListingStep1 from '../../prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep1';
import { LanguageProvider } from '../../utils/translations/LanguageContext';
import { ThemeProvider } from '../../contexts/ThemeContext';

export default {
  title: 'Prototypes/Tenants/CreateTenantListingSteps/Step1',
  component: CreateTenantListingStep1,
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
        component: 'Step 1 of the Create Tenant Listing flow - Introduction page with benefits overview and language selection.',
      },
    },
  },
  argTypes: {
    onNext: { action: 'next clicked' },
    formData: {
      control: 'object',
      description: 'Current form data state',
    },
    updateFormData: { action: 'form data updated' },
  },
};

export const Default = {
  args: {
    formData: {
      language: 'sv',
      searchLocations: [],
    },
    onNext: () => console.log('Next clicked'),
    updateFormData: (data) => console.log('Form data updated:', data),
  },
  parameters: {
    docs: {
      description: {
        story: 'Default state showing the introduction page with Swedish language selected.',
      },
    },
  },
};

export const EnglishLanguage = {
  args: {
    ...Default.args,
    formData: {
      language: 'en',
      searchLocations: [],
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Introduction page with English language selected.',
      },
    },
  },
}; 