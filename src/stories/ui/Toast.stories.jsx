import React from 'react';
import Toast, { ToastProvider, ToastViewport } from '../../components/ui/Toast';
import Button from '../../components/ui/Button';

export default {
  title: 'UI/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
        <ToastViewport className="fixed bottom-0 right-0 p-6 z-50" />
      </ToastProvider>
    ),
  ],
};

export const SavedToFavorites = {
  render: () => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <Button onClick={() => setOpen(true)}>
          Show Toast
        </Button>
        <Toast
          open={open}
          onOpenChange={setOpen}
          title="Premium Feature Unlocked"
          description="You now have access to exclusive premium features."
          variant="black"
        />
      </div>
    );
  },
};

export const AllVariants = {
  render: () => (
    <div className="space-y-4 w-[380px]">
      <Toast
        open={true}
        title="Premium Feature Unlocked"
        description="You now have access to exclusive premium features."
        variant="black"
      />
      <Toast
        open={true}
        title="Action Required"
        description="Please complete your profile to continue."
        variant="negative"
      />
    </div>
  ),
};

export const BlackVariant = {
  render: () => (
    <div className="space-y-4 w-[380px]">
      <Toast
        open={true}
        title="Premium Feature Unlocked"
        description="You now have access to exclusive premium features including Super Apply and Early Access."
        variant="black"
      />
      <Toast
        open={true}
        title="Welcome to Qasa Premium"
        description="Enjoy 2.5x better chances to find your dream home."
        variant="black"
        showIcon={false}
      />
    </div>
  ),
};

export const NegativeVariant = {
  render: () => (
    <div className="space-y-4 w-[380px]">
      <Toast
        open={true}
        title="Action Required"
        description="Please complete your profile verification to continue."
        variant="negative"
      />
      <Toast
        open={true}
        title="Payment Failed"
        description="Your premium subscription payment could not be processed."
        variant="negative"
      />
    </div>
  ),
};

export const WithoutIcons = {
  render: () => (
    <div className="space-y-4 w-[380px]">
      <Toast
        open={true}
        title="Simple Notification"
        description="This toast doesn't have an icon."
        variant="info"
        showIcon={false}
      />
      <Toast
        open={true}
        title="Clean Message"
        description="Sometimes less is more."
        variant="black"
        showIcon={false}
      />
    </div>
  ),
}; 