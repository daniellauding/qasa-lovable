import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ChevronDown, ArrowLeft, Share, Edit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import HintBox from '../../../../components/ui/HintBox';
import Icon from '../../../../components/ui/Icon';

function ListingPreview({ formData, onEdit, onPublish }) {
  const navigate = useNavigate();
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Mock images for the preview
  const propertyImages = formData.images || [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];

  const allImages = [...propertyImages];

  const amenities = [
    { icon: '🛋️', label: 'Fransk balkong' },
    { icon: '🚲', label: 'Cykelrum' },
    { icon: '❄️', label: 'Frys' },
    { icon: '🛁', label: 'Bubbelpool' },
    { icon: '📺', label: 'TV' },
    { icon: '🚽', label: 'Egen toalett' },
    { icon: '🌀', label: 'Torktumlare' },
    { icon: '🚪', label: 'Säkerhetsdörr' },
    { icon: '🚨', label: 'Inbrottslarm' },
    { icon: '🏠', label: 'Kokvrå' },
  ];

  const accordionSections = [
    {
      title: 'Beskrivning',
      content: formData.description || 'Modern lägenhet med öppen planlösning och gott om naturligt ljus. Lägenheten ligger i ett lugnt område med närhet till kommunikationer och service. Parkering ingår och fiber finns indraget.'
    },
    {
      title: 'Snabba insikter',
      content: (
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-[var(--color-background-inset)] rounded-lg">
            <div className="text-sm text-gray-500">Publicerad</div>
            <div className="font-medium">Idag</div>
          </div>
          <div className="p-4 bg-[var(--color-background-inset)] rounded-lg">
            <div className="text-sm text-gray-500">Visningar</div>
            <div className="font-medium">6</div>
          </div>
          <div className="p-4 bg-[var(--color-background-inset)] rounded-lg">
            <div className="text-sm text-gray-500">Antal sökande</div>
            <div className="font-medium">4</div>
          </div>
          <div className="p-4 bg-[var(--color-background-inset)] rounded-lg">
            <div className="text-sm text-gray-500">Svarstid</div>
            <div className="font-medium">&lt; 24h</div>
          </div>
        </div>
      )
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % propertyImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + propertyImages.length) % propertyImages.length);
  };

  const address = `${formData.street || 'Åsdammsvägen'}, ${formData.city || 'Stråvalla'}`;
  const rooms = formData.rooms || '2.5';
  const bedrooms = formData.bedrooms || '3';
  const area = formData.area || '2';
  const rent = formData.rent || '1000';

  const handleEditImages = () => {
    navigate('/landlords/create-listing/step/14');
  };

  const handleEditRent = () => {
    navigate('/landlords/edit-rent');
  };

  const handleEditListing = () => {
    navigate('/landlords/edit-listing');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Preview Header */}
      <div className="bg-gray-100 sticky top-0 z-50 flex h-12 w-full items-center justify-center px-4 shadow-sm">
        <Typography variant="body-sm" className="text-center">
          Förhandsvisning på hur din annons kommer ses av hyresgäster
        </Typography>
      </div>

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
              <Icon name="ChevronLeftIcon" size="lg" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <Icon name="ChevronRightIcon" size="lg" />
            </button>

            {/* Navigation arrows in corners */}
            <button className="absolute left-4 top-4 bg-white/80 p-2 rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="absolute right-4 top-4 bg-white/80 p-2 rounded-full">
              <Share className="h-5 w-5" />
            </button>

            {/* Show all images button */}
            <button className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <Icon name="PhotoIcon" size="sm" />
              Visa alla bilder
            </button>

            {/* Edit images button */}
            <button onClick={handleEditImages} className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full">
              <Edit className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2 aspect-[4/3] cursor-pointer relative" onClick={() => setSelectedImage(propertyImages[0])}>
              <img 
                src={propertyImages[0]} 
                alt="Property main" 
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
              {/* Navigation arrows in corners */}
              <button className="absolute left-4 top-4 bg-white/80 p-2 rounded-full">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button className="absolute right-4 top-4 bg-white/80 p-2 rounded-full">
                <Share className="h-5 w-5" />
              </button>

              {/* Show all images button */}
              <button className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                <Icon name="PhotoIcon" size="sm" />
                Visa alla bilder
              </button>

              {/* Edit images button */}
              <button onClick={handleEditImages} className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full">
                <Edit className="h-5 w-5" />
              </button>
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
            <div className="flex items-center justify-between mb-4">
              <Typography variant="h1">
                {address}
              </Typography>
              <button onClick={handleEditListing} className="p-2 rounded-full hover:bg-gray-100">
                <Edit className="h-5 w-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-4 text-[var(--color-text-secondary)] mb-2">
              <span>{formData.propertyType || 'Övrigt'}</span>
              <span>•</span>
              <span>{rooms} rum</span>
              <span>•</span>
              <span>{bedrooms} sovrum</span>
              <span>•</span>
              <span>{area} m²</span>
            </div>

            <div className="flex items-center gap-4 text-[var(--color-text-secondary)] mb-8">
              <span>Möblerat</span>
            </div>

            {/* Landlord Info */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="https://img.qasa.se/unsafe/64x64/smart/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/9803b02d784000078cedf6b3cb61973c6b171c0c938520cc819dc2298894512f.png" 
                  alt="Daniel" 
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
              <div>
                <Typography variant="h3">Daniel</Typography>
                <Typography variant="body2" color="secondary">Hyresvärd</Typography>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <Typography variant="body1" color="secondary">
                {formData.description || 'Byggnaden byggdes år 1.'}
              </Typography>
              <Typography variant="body1" color="secondary">
                Byggnaden har energiklass B.
              </Typography>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <Typography variant="h2" className="mb-4">Bekvämligheter</Typography>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {amenities.slice(0, 10).map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xl">{amenity.icon}</span>
                    <Typography variant="body2" color="secondary">{amenity.label}</Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules and Accessibility */}
            <div className="mb-8">
              <Typography variant="h2" className="mb-4">Husregler och tillgänglighet</Typography>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" className="text-[var(--color-success)]" />
                  <Typography variant="body2">Upp till {formData.maxOccupants || '3'} hyresgäster</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="XMarkIcon" size="sm" className="text-[var(--color-danger)]" />
                  <Typography variant="body2">{formData.pets === 'yes' ? 'Husdjur tillåtna' : 'Inga husdjur'}</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="XMarkIcon" size="sm" className="text-[var(--color-danger)]" />
                  <Typography variant="body2">{formData.wheelchairAccessible === 'yes' ? 'Tillgänglig med rullstol' : 'Ej tillgänglig med rullstol'}</Typography>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="XMarkIcon" size="sm" className="text-[var(--color-danger)]" />
                  <Typography variant="body2">{formData.smoking === 'yes' ? 'Rökning tillåten' : 'Rökfritt'}</Typography>
                </div>
              </div>
            </div>

            {/* Rental Period */}
            <div className="mb-8">
              <Typography variant="h2" className="mb-4">Hyresperiod</Typography>
              <div className="flex items-center gap-2">
                <span>{formData.moveInType === 'asap' ? 'Nu' : 'Välj datum'}</span>
                <Icon name="ArrowRightIcon" size="sm" />
                <span>{formData.moveOutType === 'indefinite' ? 'Tillsvidare' : 'Välj datum'}</span>
              </div>
            </div>

            {/* Rent */}
            <div className="mb-8">
              <Typography variant="h2" className="mb-4">Hyra</Typography>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <Typography variant="h3">Månadskostnad</Typography>
                  <Typography variant="h3">{parseInt(rent) + 49} kr</Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="body2">Hyra</Typography>
                  <Typography variant="body2">{rent} kr</Typography>
                </div>
                <div className="flex justify-between">
                  <Typography variant="body2">Serviceavgift</Typography>
                  <Typography variant="body2">49 kr</Typography>
                </div>
              </div>
              
              <div className="mt-6">
                <Typography variant="h3" className="mb-2">Övriga kostnader</Typography>
                <div className="flex justify-between">
                  <Typography variant="body2">Elkostnad</Typography>
                  <Typography variant="body2" className="text-[var(--color-success)]">
                    {formData.electricityCost === 'included' ? 'Detta ingår' : `${formData.electricityAmount || '0'} kr`}
                  </Typography>
                </div>
              </div>
            </div>

            {/* All Images Grid */}
            <div className="mt-8">
              <Typography variant="h2" className="mb-4">Alla bilder</Typography>
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
              <HintBox className="mb-4" title={`${parseInt(rent) + 49} kr`} description={formData.moveInType === 'asap' ? 'Nu' : 'Välj datum'}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span>{formData.moveInType === 'asap' ? 'Nu' : '2025-07-01'}</span>
                      <Icon name="ArrowRightIcon" size="sm" />
                      <span>{formData.moveOutType === 'indefinite' ? 'Tillsvidare' : 'Välj datum'}</span>
                    </div>
                  </div>
                  <button onClick={handleEditRent} className="p-2 rounded-full hover:bg-gray-100">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
                <div className="flex gap-2 mb-4">
                  <Button variant="secondary" fullWidth>Superansök</Button>
                  <Button variant="primary" fullWidth>
                    Kontakta
                  </Button>
                </div>
                <Button variant="outline" fullWidth className="mt-2">
                  Redigera visningar
                </Button>
              </HintBox>

              <HintBox
                title="Hyr bättre och tryggare med Qasa"
                description="Detta hem har en verifierad hyresvärd, ett tryggt hyresavtal och dedikerad support 7 dagar i veckan. Alla betalningar hanteras genom oss."
                actions={[{ label: 'Läs mer', variant: 'tertiary' }]}
              />
            </div>
          </div>
        </div>

        {/* Bottom Actions - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 z-40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
            <Button variant="outline" size="lg" onClick={handleEditListing} className="flex-1">
              Redigera annons
            </Button>
            <Button variant="primary" size="lg" onClick={onPublish} className="flex-1">
              Fortsätt
            </Button>
          </div>
        </div>

        {/* Bottom padding to account for fixed buttons */}
        <div className="h-24"></div>

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

ListingPreview.propTypes = {
  formData: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
};

export default ListingPreview; 