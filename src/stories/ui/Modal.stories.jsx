import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';
import Input from '../../components/ui/Input';
import TextArea from '../../components/ui/TextArea';

export default {
  title: 'UI/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
};

const ModalTemplate = ({ title, children, ...args }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        {...args}
      >
        {children}
      </Modal>
    </>
  );
};

export const Default = {
  render: () => (
    <ModalTemplate title="Example Modal">
      <Typography variant="body1">
        This is a basic modal with some content.
      </Typography>
    </ModalTemplate>
  ),
};

export const WithoutTitle = {
  render: () => (
    <ModalTemplate>
      <Typography variant="body1">
        This modal has no title but still has content.
      </Typography>
    </ModalTemplate>
  ),
};

export const WithActions = {
  render: () => (
    <ModalTemplate title="Confirm Action">
      <div className="space-y-4">
        <Typography variant="body1">
          Are you sure you want to proceed with this action?
        </Typography>
        <div className="flex gap-3 justify-end">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Confirm</Button>
        </div>
      </div>
    </ModalTemplate>
  ),
};

export const WithLongContent = {
  render: () => (
    <ModalTemplate title="Long Content">
      <div className="space-y-4">
        {Array.from({ length: 10 }).map((_, i) => (
          <Typography key={i} variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Typography>
        ))}
      </div>
    </ModalTemplate>
  ),
};

export const WithSectionHeader = {
  render: () => (
    <ModalTemplate 
      title="Create New Listing"
      description="Fill in the details below to create your new rental listing."
    >
      <div className="space-y-4">
        <Typography variant="body1">
          This modal uses SectionHeader for consistent title and description styling.
        </Typography>
      </div>
    </ModalTemplate>
  ),
};

export const WithSectionFooter = {
  render: () => (
    <ModalTemplate 
      title="Confirm Action"
      showFooter={true}
      footerProps={{
        onNext: () => console.log('Confirmed'),
        onPrev: () => console.log('Cancelled'),
        nextText: 'Confirm',
        prevText: 'Cancel',
        showPrev: true,
        showNext: true
      }}
    >
      <div className="space-y-4">
        <Typography variant="body1">
          Are you sure you want to proceed with this action? This modal uses SectionFooter for consistent button layout.
        </Typography>
      </div>
    </ModalTemplate>
  ),
};

export const FormModal = {
  render: () => (
    <ModalTemplate 
      title="Contact Information"
      description="Please provide your contact details below."
      showFooter={true}
      footerProps={{
        onNext: () => console.log('Saved'),
        onPrev: () => console.log('Cancelled'),
        nextText: 'Save',
        prevText: 'Cancel',
        showPrev: true,
        showNext: true
      }}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <Input placeholder="Enter your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <Input type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <TextArea placeholder="Enter your message" rows={4} />
        </div>
      </div>
    </ModalTemplate>
  ),
};

export const CenteredPrimaryOnly = {
  render: () => (
    <ModalTemplate 
      title="Success"
      description="Your action was completed successfully."
      showFooter={true}
      footerProps={{
        onNext: () => console.log('OK'),
        nextText: 'OK',
        showPrev: false,
        showNext: true
      }}
    >
      <div className="text-center">
        <Typography variant="body1">
          This modal shows a centered primary button only.
        </Typography>
      </div>
    </ModalTemplate>
  ),
};

export const StackedButtons = {
  render: () => (
    <ModalTemplate 
      title="Choose Action"
      description="Select one of the following options."
      showFooter={true}
      footerProps={{
        onNext: () => console.log('Primary action'),
        onPrev: () => console.log('Secondary action'),
        nextText: 'Primary Action',
        prevText: 'Secondary Action',
        showPrev: true,
        showNext: true
      }}
    >
      <div className="space-y-4">
        <Typography variant="body1">
          This modal demonstrates stacked primary and tertiary buttons.
        </Typography>
      </div>
    </ModalTemplate>
  ),
}; 