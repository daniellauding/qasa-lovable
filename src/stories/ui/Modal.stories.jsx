import React, { useState } from 'react';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';
import Typography from '../../components/ui/Typography';

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