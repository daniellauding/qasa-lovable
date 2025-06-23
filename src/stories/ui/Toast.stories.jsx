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
          title="Saved to favorites"
          description="You can edit your preferences at any time in your profile."
          variant="success"
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
        title="Saved to favorites"
        description="You can edit your preferences at any time in your profile."
        variant="success"
      />
      <Toast
        open={true}
        title="Error occurred"
        description="There was a problem saving your preferences."
        variant="error"
      />
      <Toast
        open={true}
        title="Information"
        description="Your preferences have been updated."
        variant="info"
      />
    </div>
  ),
}; 