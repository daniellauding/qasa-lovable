import React from 'react';
import PropTypes from 'prop-types';
import * as Dialog from '@radix-ui/react-dialog';
import Icon from './Icon';
import Typography from './Typography';

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  className = '',
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay 
          className="fixed inset-0 bg-black/50 cursor-pointer z-[60]" 
          onClick={onClose} 
        />
        <Dialog.Content 
          className={`
            fixed z-[70] bg-white p-6 
            md:top-[50%] md:left-[50%] md:translate-x-[-50%] md:translate-y-[-50%] md:w-full md:max-w-[500px] md:rounded-xl
            bottom-0 left-0 right-0 rounded-t-xl translate-y-0 sm:max-h-[95vh] overflow-y-auto
            ${className}
          `}
        >
          {title && (
            <Dialog.Title asChild>
              <Typography variant="h2" className="mb-6">
                {title}
              </Typography>
            </Dialog.Title>
          )}
          
          {children}

          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
            >
              <Icon name="XMarkIcon" size="md" />
            </button>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal; 