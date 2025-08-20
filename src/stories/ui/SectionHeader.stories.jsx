import React from 'react';
import SectionHeader from '../../components/ui/SectionHeader';

export default {
  title: 'UI/SectionHeader',
  component: SectionHeader,
  parameters: {
    docs: {
      description: {
        component: 'Consistent header layout for forms and sections with title and description.'
      }
    }
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title text to display'
    },
    description: {
      control: 'text',
      description: 'Description text to display below title'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const Default = {
  args: {
    title: 'Section Title',
    description: 'This is a description of the section that provides additional context.'
  }
};

export const TitleOnly = {
  args: {
    title: 'Section Title Only'
  }
};

export const DescriptionOnly = {
  args: {
    description: 'This section only has a description, no title.'
  }
};

export const LongContent = {
  args: {
    title: 'This is a very long title that might wrap to multiple lines in some cases',
    description: 'This is a longer description that provides more detailed information about what this section contains and what the user should expect to find here.'
  }
};

export const InContext = {
  render: () => (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <SectionHeader
            title="Vilken adress har bostaden?"
            description="Vi behöver din fullständiga adress för att kunna visa ditt hem på en karta. Endast gatunamnet syns i annonsen."
          />
          
          <div className="space-y-4">
            <p className="text-gray-600">Form content would go here...</p>
          </div>
        </div>
      </div>
    </div>
  )
};
