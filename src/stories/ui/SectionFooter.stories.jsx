import React from 'react';
import SectionFooter from '../../components/ui/SectionFooter';
import Button from '../../components/ui/Button';

export default {
  title: 'UI/SectionFooter',
  component: SectionFooter,
  parameters: {
    docs: {
      description: {
        component: 'Consistent footer layout for forms and flows with navigation buttons.'
      }
    }
  },
  argTypes: {
    nextText: {
      control: 'text',
      description: 'Text for the next button'
    },
    prevText: {
      control: 'text',
      description: 'Text for the previous button (aria-label)'
    },
    nextDisabled: {
      control: 'boolean',
      description: 'Whether the next button is disabled'
    },
    showPrev: {
      control: 'boolean',
      description: 'Whether to show the previous button'
    },
    showNext: {
      control: 'boolean',
      description: 'Whether to show the next button'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  }
};

export const MultiStep = {
  args: {
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Prev clicked'),
    nextText: 'Nästa',
    prevText: 'Tillbaka'
  }
};

export const LeftTertiaryRightPrimary = {
  args: {
    onNext: () => console.log('Primary clicked'),
    onPrev: () => console.log('Tertiary clicked'),
    nextText: 'Continue',
    prevText: 'No, thanks'
  }
};

export const CenteredPrimaryOnly = {
  args: {
    onNext: () => console.log('Primary clicked'),
    nextText: 'Continue',
    showPrev: false,
    showNext: true
  }
};

export const CenteredWidePrimaryOnly = {
  args: {
    onNext: () => console.log('Primary clicked'),
    nextText: 'Continue',
    showPrev: false,
    showNext: true,
    className: 'justify-center'
  }
};

export const CenteredTertiaryAndPrimary = {
  args: {
    onNext: () => console.log('Primary clicked'),
    onPrev: () => console.log('Tertiary clicked'),
    nextText: 'Continue',
    prevText: 'Cancel',
    showPrev: true,
    showNext: true,
    className: 'justify-center gap-4'
  }
};

export const StackedPrimaryAndTertiary = {
  render: () => (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <h2 className="text-2xl font-bold">Form Content</h2>
          <p className="text-gray-600">This is where the form content would go...</p>
        </div>
        
        <div className="px-8 py-6 bg-white flex flex-col gap-3">
          <Button
            variant="primary"
            size="lg"
            onClick={() => console.log('Primary clicked')}
            className="w-full"
          >
            Continue
          </Button>
          <Button
            variant="tertiary"
            size="lg"
            onClick={() => console.log('Tertiary clicked')}
            className="w-full"
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  )
};

export const OnlyRightPrimary = {
  args: {
    onNext: () => console.log('Primary clicked'),
    nextText: 'Continue',
    showPrev: false,
    showNext: true,
    className: 'justify-end'
  }
};

export const DisabledNext = {
  args: {
    onNext: () => console.log('Next clicked'),
    onPrev: () => console.log('Prev clicked'),
    nextText: 'Nästa',
    prevText: 'Tillbaka',
    nextDisabled: true
  }
};

export const InContext = {
  render: () => (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <h2 className="text-2xl font-bold">Form Content</h2>
          <p className="text-gray-600">This is where the form content would go...</p>
        </div>
        
        <SectionFooter
          onNext={() => console.log('Next clicked')}
          onPrev={() => console.log('Prev clicked')}
          nextText="Nästa"
          prevText="Tillbaka"
        />
      </div>
    </div>
  )
};
