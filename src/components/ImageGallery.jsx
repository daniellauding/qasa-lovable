import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const ImageGallery = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 h-96">
        <div className="col-span-2 row-span-2 relative">
          <img
            src={images[0]}
            alt="Property main"
            className="w-full h-full object-cover rounded-l-lg cursor-pointer"
            onClick={() => {
              setCurrentImageIndex(0);
              setIsOpen(true);
            }}
          />
        </div>
        {images.slice(1, 5).map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className={`w-full h-full object-cover cursor-pointer ${
                index === 3 ? 'rounded-tr-lg' : ''
              }`}
              onClick={() => {
                setCurrentImageIndex(index + 1);
                setIsOpen(true);
              }}
            />
            {index === 3 && images.length > 5 && (
              <div
                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center cursor-pointer rounded-tr-lg"
                onClick={() => {
                  setCurrentImageIndex(4);
                  setIsOpen(true);
                }}
              >
                <span className="text-white text-xl font-medium">
                  +{images.length - 5} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/90" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <div className="relative">
              <img
                src={images[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronLeftIcon className="h-8 w-8" />
              </button>
              
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300"
              >
                <ChevronRightIcon className="h-8 w-8" />
              </button>
            </div>
            
            <div className="text-center text-white mt-4">
              {currentImageIndex + 1} / {images.length}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default ImageGallery; 