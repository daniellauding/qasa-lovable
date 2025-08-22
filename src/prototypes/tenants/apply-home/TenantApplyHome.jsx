import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from '../../../utils/translations/LanguageContext';
import ContactModal from '../../../components/ContactModal';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import HintBox from '../../../components/ui/HintBox';
import Icon from '../../../components/ui/Icon';
import Modal from '../../../components/ui/Modal';
import Card from '../../../components/ui/Card';
import PremiumBadge from '../../../components/ui/PremiumBadge';
import ContentBlock from '../../../components/ui/ContentBlock';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function TenantApplyHome() {
  const { t } = useTranslation();
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
    { icon: 'Home', label: t('propertyDetails.amenities.balcony') },
    { icon: 'Globe', label: t('propertyDetails.amenities.internet') },
    { icon: 'Settings', label: t('propertyDetails.amenities.ownShower') },
    { icon: 'Settings', label: t('propertyDetails.amenities.dishwasher') },
    { icon: 'Settings', label: t('propertyDetails.amenities.oven') },
    { icon: 'Settings', label: t('propertyDetails.amenities.storage') },
  ];

  const houseRules = [
    { icon: 'Check', labelKey: 'upToTenants', params: { count: 3 }, allowed: true },
    { icon: 'X', labelKey: 'noPets', allowed: false },
    { icon: 'X', labelKey: 'notWheelchairAccessible', allowed: false },
    { icon: 'X', labelKey: 'noSmoking', allowed: false },
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
              <Icon name="ChevronLeft" size="md" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full"
            >
              <Icon name="ChevronRight" size="md" />
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
          <div className="hidden md:grid grid-cols-4 gap-2 rounded-3xl overflow-hidden">
          <div className="col-span-2 row-span-2 aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(propertyImages[0])}>
            <img 
              src={propertyImages[0]} 
              alt="Property main" 
              className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            />
          </div>
          {propertyImages.slice(1).map((img, idx) => (
            <div key={idx} className="aspect-[4/3] cursor-pointer" onClick={() => setSelectedImage(img)}>
              <img 
                src={img} 
                alt={`Property view ${idx + 1}`} 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
            </div>
          ))}
          </div>
        </div>

        {/* Property Info */}
        <div className="flex gap-8 pb-8">
          <div className="flex-1">
            <Typography variant="title-lg" className="mb-4">
              {t('propertyDetails.title')}
            </Typography>
            <div className="flex items-center gap-1 mb-8">
              <Typography variant="body-md">3 {t('propertyDetails.rooms')}</Typography>
              <Typography variant="body-md">/</Typography>
              <Typography variant="body-md">95 {t('propertyDetails.sqm')}</Typography>
              <Typography variant="body-md">/</Typography>
              <Typography variant="body-md">9 104 {t('propertyDetails.price')}</Typography>
            </div>

            {/* Description */}
            <div className="mb-8 flex gap-3 flex-col">
              <Typography variant="body-md">
                {t('propertyDetails.description.modernApartment')}
              </Typography>

              <Typography variant="body-sm" color="secondary">
                {t('propertyDetails.description.autoTranslated')}
              </Typography>
            </div>

            <div className="text-center">
              <Button variant="tertiary" size="lg">
                {t('propertyDetails.readMore')}
              </Button>
            </div>

            {/* Insights */}
            <div className="mb-8">
              <Typography variant="title-md" className="mb-6">{t('propertyDetails.landlord.insights')}</Typography>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Icon name="Home" size="sm" />
                  <Typography variant="body-md">{t('propertyDetails.landlord.publishedDaysAgo', { days: 0 })} / {t('propertyDetails.landlord.views', { views: 8 })}</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Users" size="sm" />
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full blur-sm"></div>
                    <Typography variant="body-md">{t('propertyDetails.landlord.applicantsCount', { count: '?' })} /</Typography>
                    <div className="w-4 h-4 bg-gray-300 rounded-full blur-sm"></div>
                    <Typography variant="body-md">{t('propertyDetails.landlord.conversations', { count: '?' })}</Typography>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Settings" size="sm" />
                  <Typography variant="body-md">{t('propertyDetails.landlord.similarRent')}</Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="MessageCircle" size="sm" />
                  <div className="flex items-center gap-2">
                    <Typography variant="body-md">{t('propertyDetails.landlord.responseTime', { time: '?' })}</Typography>
                    <div className="w-12 h-4 bg-gray-300 rounded blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* Qasa Premium Section */}
              <HintBox className="mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Typography variant="title-xs">{t('propertyDetails.landlord.unlockInsights')}</Typography>
                    <PremiumBadge size="xs" className="-ml-16" />
                  </div>
                  <Button 
                    variant="secondary" 
                    className="rounded-full px-6"
                    onClick={() => console.log("Get Qasa Premium clicked")}
                  >
                    {t('propertyDetails.landlord.getPremium')}
                  </Button>
                </div>
              </HintBox>

              {/* Read More Button */}
              <div className="text-center">
                <Button variant="tertiary" size="lg">
                  {t('propertyDetails.landlord.readMore')}
                </Button>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <Typography variant="title-md" className="mb-6">{t('propertyDetails.amenitiesTitle')}</Typography>
              <div className="grid grid-cols-3 gap-4">
                {amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={amenity.icon} size="sm" />
                    <Typography variant="body-md">{amenity.label}</Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* House Rules and Accessibility */}
            <div className="mb-8">
              <Typography variant="title-md" className="mb-6">{t('propertyDetails.houseRulesTitle')}</Typography>
              <div className="grid grid-cols-4 gap-4">
                {houseRules.map((rule, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={rule.icon} size="sm" />
                    <Typography variant="body-md">
                      {rule.params 
                        ? t(`propertyDetails.houseRules.${rule.labelKey}`, rule.params)
                        : t(`propertyDetails.houseRules.${rule.labelKey}`)
                      }
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="mb-8">
              <Typography variant="title-sm" className="mb-6">{t('propertyDetails.datesTitle')}</Typography>
              <div className="flex items-center gap-2">
                <Typography variant="body-lg" className="font-medium">2025-10-01</Typography>
                <Icon name="ArrowRight" size="sm" />
                <Typography variant="body-lg" className="font-medium">2026-10-01</Typography>
              </div>
            </div>

            {/* Rent */}
            <div className="mb-8">
              <Typography variant="title-sm" className="mb-4">{t('propertyDetails.rentTitle')}</Typography>
              <div className="space-y-0">
                <div className="flex justify-between items-center py-3">
                  <Typography variant="title-xs">{t('propertyDetails.rentDetails.monthlyCost')}</Typography>
                  <Typography variant="title-xs">SEK 15,524</Typography>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md">{t('propertyDetails.rentDetails.rent')}</Typography>
                    <Typography variant="body-md">SEK 14,653</Typography>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md">{t('propertyDetails.rentDetails.serviceFee')}</Typography>
                    <Typography variant="body-md">SEK 871</Typography>
                  </div>
                  
                  <div className="py-3">
                    <Typography variant="title-xs" className="mb-3">{t('propertyDetails.rentDetails.additionalCosts')}</Typography>
                    <div className="flex justify-between items-center">
                      <Typography variant="body-sm">{t('propertyDetails.rentDetails.electricityFee')}</Typography>
                      <Typography variant="body-sm">{t('propertyDetails.rentDetails.included')}</Typography>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <div>
                      <Typography variant="title-xs" className="font-medium">{t('propertyDetails.rentDetails.deposit')}</Typography>
                    </div>
                    <div className="text-right">
                      <Typography variant="body-md" className="line-through text-gray-400">SEK 14,653</Typography>
                      <Typography variant="title-xs">SEK 0</Typography>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button variant="tertiary" size="lg">
                    {t('propertyDetails.showMore')}
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <Typography variant="title-md" className="mb-6">
                {t('propertyDetails.location')}
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
              {/* <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="MapPin" size="sm" />
                  <Typography variant="body-sm" color="secondary">{t('propertyDetails.title')}</Typography>
                </div>
                <div className="space-y-1">
                  <Typography variant="body-sm" color="secondary">• 2 {t('propertyDetails.busStop')}</Typography>
                  <Typography variant="body-sm" color="secondary">• 15 {t('propertyDetails.toCenter')}</Typography>
                </div>
              </div> */}
            </div>

            {/* All Images Grid */}
            <div className="mt-8">
              <Typography variant="title-sm" className="mb-4">{t('propertyDetails.allImages')}</Typography>
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

            {/* Meet your landlord */}
            <ContentBlock
              title={t('propertyDetails.landlord.meetYourLandlord')}
              background="white"
              rounded="none"
              imagePosition="center"
              padding="p-0"
              className="mt-16"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="title-md" className="text-gray-600">S</Typography>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Typography variant="title-sm">{t('propertyDetails.landlord.landlordName')}</Typography>
                    <Icon name="BadgeCheck" size="sm" />
                  </div>
                  <Typography variant="body-sm" color="secondary" className="mb-3">
                    {t('propertyDetails.landlord.landlordType')}
                  </Typography>
                </div>
              </div>
                             <Typography variant="body-md" className="mt-4">
                 {t('propertyDetails.landlord.landlordDescription')}
               </Typography>
              </ContentBlock>

            {/* More homes you might like */}
            <ContentBlock
              title={t('propertyDetails.moreHomes.title')}
              background="white"
              rounded="none"
              imagePosition="center"
              padding="p-0"
              className="mt-8 mb-8"
            >
              <div className="flex gap-4">
                <Button 
                  variant="tertiary" 
                  size="lg" 
                  onClick={() => console.log("All homes in Farsta clicked")}
                >
                  {t('propertyDetails.moreHomes.allHomesIn', { location: 'Farsta' })}
                </Button>
                <Button 
                  variant="tertiary" 
                  size="lg" 
                  onClick={() => console.log("All apartments in Farsta clicked")}
                >
                  {t('propertyDetails.moreHomes.allApartmentsIn', { location: 'Farsta' })}
                </Button>
              </div>
            </ContentBlock>

          </div>

          <div className="w-80 flex-shrink-0">
            {/* Sticky Sidebar */}
            <div className="sticky top-24 space-y-4">
              {/* Price and Contact Card */}
              <Card variant="sidebar">
                <div className="flex items-center justify-between mb-0">
                  <div>
                    <div className="flex items-center gap-2">
                      <Typography variant="body-sm">2025-07-01</Typography>
                      <Icon name="ArrowRight" size="sm" />
                      <Typography variant="body-sm">{t('propertyDetails.duration')}</Typography>
                    </div>
                  </div>
                </div>
                <div className="mb-6 flex items-center gap-2">
                  <Typography variant="title-xs" className="font-bold">SEK 15,524</Typography>
                  <Icon name="Info" size="xs" />
                </div>
                <div className="flex gap-2 border-t p-4 pb-0 -mx-6 -mb-1">
                  <Button variant="tertiary" size="lg" fullWidth>{t('propertyDetails.superApply')}</Button>
                  <Button variant="primary" size="lg" fullWidth onClick={() => setShowContactModal(true)}>
                    {t('propertyDetails.contact')}
                  </Button>
                </div>
              </Card>

              {/* Rent Better Card */}
              <Card variant="sidebar-inset">
                <Typography variant="title-md" className="mb-3">{t('propertyDetails.rentBetter')}</Typography>
                <Typography variant="body-sm" color="secondary" className="mb-4">
                  {t('propertyDetails.rentBetterDescription')}
                </Typography>
                <Button variant="tertiary" size="lg" className="w-max">{t('propertyDetails.readMore')}</Button>
              </Card>
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
          <Modal
            isOpen={selectedImage !== null}
            onClose={() => setSelectedImage(null)}
            size="xl"
            showCloseButton={true}
          >
            <img 
              src={selectedImage} 
              alt="Property view" 
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default TenantApplyHome; 