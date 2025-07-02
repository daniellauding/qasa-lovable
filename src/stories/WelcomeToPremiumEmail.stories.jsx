import WelcomeToPremiumEmail from '../prototypes/mail-templates/WelcomeToPremiumEmail';
import { ThemeProvider } from '../contexts/ThemeContext';

export default {
  title: 'Mail Templates/Welcome to Premium Email',
  component: WelcomeToPremiumEmail,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Email template preview for welcoming users to Premium service. Supports both Qasa and Blocket themes with dynamic branding.'
      }
    }
  },
  decorators: [
    (Story, context) => {
      // Set theme based on story args
      const theme = context.args.theme || 'qasa';
      
      // Update URL parameter to trigger theme change
      if (typeof window !== 'undefined') {
        const url = new URL(window.location);
        url.searchParams.set('theme', theme);
        window.history.replaceState({}, '', url);
      }
      
      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    }
  ]
};

export const QasaTheme = {
  args: {
    theme: 'qasa'
  },
  parameters: {
    docs: {
      description: {
        story: 'Email template with Qasa branding and pink theme colors.'
      }
    }
  }
};

export const BlocketTheme = {
  args: {
    theme: 'blocket'
  },
  parameters: {
    docs: {
      description: {
        story: 'Email template with Blocket branding and red theme colors.'
      }
    }
  }
};

// For interactive testing in Storybook
export const Interactive = {
  args: {
    theme: 'qasa'
  },
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: ['qasa', 'blocket']
      },
      description: 'Theme to display'
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive version where you can switch between themes to see the differences.'
      }
    }
  }
}; 