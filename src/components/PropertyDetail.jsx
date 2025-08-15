import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import ImageGallery from './ImageGallery';
import PropertyInfo from './PropertyInfo';
import ContactForm from './ContactForm';

const PropertyDetail = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const propertyData = {
    title: 'Snödroppsgränd, Hässelby',
    type: 'Lägenhet',
    rooms: '1 rum',
    size: '24 m²',
    floor: 'Våning 2 av 4',
    furnished: true,
    price: '10 065 kr',
    description: 'En etta på 23 kvd nyproducerad egen entré med balkong på 18 kvd. Lägenheten ligger 2 min från buss som tar dig 10 minuter till Barkarby station eller 15 min till Hässelby gård. Finns även parkering i källaren också. Hyran ligger på 9500kr i månaden inklusive allt. En månad deposition tas på 9500kr och 3 månaders uppsägningstid gäller från dig och 3 månader från mig och lägenheten. Jag vill gärna veta lite mer om du är skötsam för att vi söker dig som hyresgäst.',
    images: [
      '/images/apartment1.jpg',
      '/images/apartment2.jpg',
      '/images/apartment3.jpg',
      // Add more images as needed
    ]
  };

  return (
    <div className="mt-20 lg:mt-24">
      <ImageGallery images={propertyData.images} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <PropertyInfo data={propertyData} />
        </div>
        
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Kontakta hyresvärd</h2>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="w-full bg-qasa-pink text-white py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Kontakta
            </button>
          </div>
        </div>
      </div>

      <Dialog
        open={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6">
            <div className="flex justify-between items-center mb-4">
              <Dialog.Title className="text-lg font-medium">
                Kontakta Laleh
              </Dialog.Title>
              <button
                onClick={() => setIsContactModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ContactForm propertyData={propertyData} />
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default PropertyDetail; 