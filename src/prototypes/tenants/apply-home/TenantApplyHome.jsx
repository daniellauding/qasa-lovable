import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import ContactModal from '../../../components/ContactModal';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import Box from '../../../components/ui/Box';
import Icon from '../../../components/ui/Icon';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function TenantApplyHome() {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const propertyImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ];

  const allImages = [
    ...propertyImages,
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  ];

  const amenities = [
    { icon: '🛋️', label: 'Balkong' },
    { icon: '🌐', label: 'Internet' },
    { icon: '🚿', label: 'Egen dusch' },
    { icon: '🍽️', label: 'Diskmaskin' },
    { icon: '🔥', label: 'Ugn' },
    { icon: '🗄️', label: 'Förråd' },
  ];

  const accordionSections = [
    {
      title: 'Beskrivning',
      content: 'Modern lägenhet med öppen planlösning och gott om naturligt ljus. Lägenheten ligger i ett lugnt område med närhet till kommunikationer och service. Parkering ingår och fiber finns indraget.'
    },
    {
      title: 'Snabba insikter',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Publicerad</div>
            <div className="font-medium">Idag</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Visningar</div>
            <div className="font-medium">6</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Antal sökande</div>
            <div className="font-medium">4</div>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-500">Svarstid</div>
            <div className="font-medium">&lt; 24h</div>
          </div>
        </div>
      )
    },
  ];

  const propertyData = {
    image: propertyImages[0],
    title: 'Billingevägen, Röstånga',
    type: 'Lägenhet',
    rooms: '3',
    area: '95',
    moveInDate: '2025-07-01',
    duration: 'Tillsvidare',
    price: '9 104',
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Image Grid/Carousel */}
        <div className="mb-8">
          {/* Mobile Carousel */}
          <div className="block md:hidden relative">
            <img 
              src={propertyImages[currentImageIndex]} 
              alt={`Property view ${currentImageIndex + 1}`} 
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <Icon name="ChevronLeftIcon" size="md" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <Icon name="ChevronRightIcon" size="md" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {propertyImages.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`w-2 h-2 rounded-full ${
                    idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
          <div className="col-span-2 row-span-2 aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(propertyImages[0])}>
            <img 
              src={propertyImages[0]} 
              alt="Property main" 
              className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          {propertyImages.slice(1).map((img, idx) => (
            <div key={idx} className="aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(img)}>
              <img 
                src={img} 
                alt={`Property view ${idx + 1}`} 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
          </div>
        </div>

        {/* Property Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Typography variant="h1" className="mb-4">
              Billingevägen, Röstånga
            </Typography>
            <div className="flex items-center gap-4 text-gray-500 mb-8">
              <span>3 rum</span>
              <span>•</span>
              <span>95 m²</span>
              <span>•</span>
              <span>9 104 kr/mån</span>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xl">{amenity.icon}</span>
                  <span className="text-sm text-gray-600">{amenity.label}</span>
                </div>
              ))}
            </div>

            {/* Accordion */}
            <div className="space-y-4">
              {accordionSections.map((section, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    className="w-full px-4 py-3 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                  >
                    <span className="font-medium">{section.title}</span>
                    <ChevronDown 
                      className={`w-5 h-5 transform transition-transform ${
                        activeAccordion === idx ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {activeAccordion === idx && (
                    <div className="px-4 py-3 bg-white">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* All Images Grid */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Alla bilder</h2>
              <div className="grid grid-cols-3 gap-4">
                {allImages.map((img, idx) => (
                  <div key={idx} className="aspect-square cursor-pointer" onClick={() => setSelectedImage(img)}>
                    <img 
                      src={img} 
                      alt={`Property view ${idx + 1}`} 
                      className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {/* Sticky Box */}
            <div className="sticky top-24">
              <Box shadow className="mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>2025-07-01</span>
                      <Icon name="ArrowRightIcon" size="sm" />
                      <span>Tillsvidare</span>
                    </div>
                    <Typography variant="h3" className="mt-1">9 104 kr</Typography>
                  </div>
                  <Button variant="tertiary" icon={<Icon name="InformationCircleIcon" size="sm" />} />
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" fullWidth>Superansök</Button>
                  <Button variant="primary" fullWidth onClick={() => setShowContactModal(true)}>
                    Kontakta
                  </Button>
                </div>
              </Box>

              <Box variant="gray">
                <Typography variant="h3" className="mb-2">
                  Hyr bättre och tryggare med Qasa
                </Typography>
                <Typography variant="body2" color="secondary" className="mb-4">
                  Detta hem har en verifierad hyresvärd, ett tryggt hyresavtal och dedikerad support 7 dagar i veckan. Alla betalningar hanteras genom oss.
                </Typography>
                <Button variant="tertiary">Läs mer</Button>
              </Box>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Typography variant="h2" className="mb-6">
            Plats
          </Typography>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <MapContainer
              center={[55.9233, 13.2133]} // Billingevägen, Röstånga approximate location
              zoom={15}
              className="w-full h-full"
              zoomControl={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Property location marker */}
              <Marker position={[55.9233, 13.2133]} />
            </MapContainer>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Icon name="MapPinIcon" size="sm" />
              <span>Billingevägen, Röstånga</span>
            </div>
            <div className="mt-2">
              <span>• 2 min till busshållplats</span>
            </div>
            <div>
              <span>• 15 min till centrum</span>
            </div>
          </div>
        </div>

        {/* Contact Modal */}
        <ContactModal 
          isOpen={showContactModal}
          onClose={() => setShowContactModal(false)}
          propertyData={propertyData}
        />

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedImage(null)}
              >
              <img 
                src={selectedImage} 
              alt="Property view" 
              className="max-w-full max-h-[90vh] object-contain"
              />
        </div>
      )}
      </main>
    </div>
  );
}

export default TenantApplyHome; 