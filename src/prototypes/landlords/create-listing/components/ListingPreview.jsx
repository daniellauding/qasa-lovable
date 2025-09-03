import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ArrowLeft, Edit, Share } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import DynamicHeader from '../../../../components/DynamicHeader';
import Footer from '../../../../components/Footer';
import Button from '../../../../components/ui/Button';
import Card from '../../../../components/ui/Card';
import ContentBlock from '../../../../components/ui/ContentBlock';
import Icon from '../../../../components/ui/Icon';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// eslint-disable-next-line no-unused-vars
function ListingPreview({ formData, onEdit, onPublish }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
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
    { icon: 'Bath', label: t('propertyDetails.amenities.bathtub') },
    { icon: 'CarFront', label: t('propertyDetails.amenities.parking') },
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
    navigate('/landlords/create-listing/step/13');
  };

  const handleEditRent = () => {
    navigate('/landlords/create-listing/step/16');
  };

  const handleEditListing = () => {
    navigate('/landlords/edit-listing');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <DynamicHeader isFluid={true} />
      
      <main className="flex-grow">
        {/* Preview Header */}
        <div className="bg-gray-20 sticky top-[64px] z-50 flex h-12 w-full items-center justify-center px-4 shadow-sm">
          <Typography variant="body-sm" className="text-center">
            {t('listingPreview.headerText') || 'Förhandsvisning på hur din annons kommer ses av hyresgäster'}
          </Typography>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

            {/* Navigation arrows in corners */}
            <button className="absolute left-4 top-4 bg-white/80 p-2 rounded-full">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button className="absolute right-4 top-4 bg-white/80 p-2 rounded-full">
              <Share className="h-5 w-5" />
            </button>

            {/* Show all images button */}
            <button className="absolute bottom-4 left-4 bg-white/90 px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
              <Icon name="Image" size="sm" />
              {t('propertyDetails.allImages') || 'Visa alla bilder'}
            </button>

            {/* Edit images button */}
            <button onClick={handleEditImages} className="absolute bottom-4 right-4 bg-white/90 p-2 rounded-full">
              <Edit className="h-5 w-5" />
            </button>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-2 rounded-3xl overflow-hidden">
            <div className="col-span-2 row-span-2 aspect-[4/3] cursor-pointer relative" onClick={() => setSelectedImage(propertyImages[0])}>
              <img 
                src={propertyImages[0]} 
                alt="Property main" 
                className="w-full h-full object-cover hover:opacity-90 transition-opacity"
              />
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
                  className="w-full h-full object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Info */}
        <div className="flex gap-8 pb-8">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="title-lg" className="mb-4">
                {address}
              </Typography>
              <button onClick={handleEditListing} className="p-2 rounded-full hover:bg-gray-100">
                <Edit className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center gap-1 mb-8">
              <Typography variant="body-md">{formData.propertyType || 'Övrigt'}</Typography>
              <Typography variant="body-md">/</Typography>
              <Typography variant="body-md">{rooms} {t('propertyDetails.rooms') || 'rum'}</Typography>
              <Typography variant="body-md">/</Typography>
              <Typography variant="body-md">{bedrooms} sovrum</Typography>
              <Typography variant="body-md">/</Typography>
              <Typography variant="body-md">{area} {t('propertyDetails.sqm') || 'm²'}</Typography>
            </div>

            {/* Description */}
            <div className="mb-8 flex gap-3 flex-col">
              <Typography variant="body-md">
                {formData.description || t('propertyDetails.description.modernApartment') || 'Modern lägenhet med öppen planlösning och gott om naturligt ljus.'}
              </Typography>

              <Typography variant="body-sm" color="secondary">
                {t('propertyDetails.description.autoTranslated') || 'Automatiskt översatt'}
              </Typography>
            </div>

            <div className="text-center">
              <Button variant="tertiary" size="lg">
                {t('propertyDetails.readMore') || 'Läs mer'}
              </Button>
            </div>

            {/* Amenities */}
            <div className="mb-8">
              <Typography variant="title-md" className="mb-4">{t('propertyDetails.amenitiesTitle') || 'Bekvämligheter'}</Typography>
              <div className="grid grid-cols-3 gap-4">
                {amenities.slice(0, 10).map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Icon name={amenity.icon} size="sm" />
                    <Typography variant="body-md">{amenity.label}</Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules and Accessibility */}
            <div className="mb-8">
              <Typography variant="title-md" className="mb-4">{t('propertyDetails.houseRulesTitle') || 'Husregler och tillgänglighet'}</Typography>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Check" size="sm" />
                  <Typography variant="body-md">
                    {t('propertyDetails.houseRules.upToTenants', { count: formData.maxOccupants || '3' }) || `Upp till ${formData.maxOccupants || '3'} hyresgäster`}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="X" size="sm" />
                  <Typography variant="body-md">
                    {formData.petsAllowed === 'yes' ? t('propertyDetails.houseRules.petsAllowed') || 'Husdjur tillåtna' : t('propertyDetails.houseRules.noPets') || 'Inga husdjur'}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="X" size="sm" />
                  <Typography variant="body-md">
                    {formData.wheelchairAccessible === 'yes' ? t('propertyDetails.houseRules.wheelchairAccessible') || 'Tillgänglig med rullstol' : t('propertyDetails.houseRules.notWheelchairAccessible') || 'Ej tillgänglig med rullstol'}
                  </Typography>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="X" size="sm" />
                  <Typography variant="body-md">
                    {formData.smokingAllowed === 'yes' ? t('propertyDetails.houseRules.smokingAllowed') || 'Rökning tillåten' : t('propertyDetails.houseRules.noSmoking') || 'Rökfritt'}
                  </Typography>
                </div>
              </div>
            </div>

            {/* Rental Period */}
            <div className="mb-8">
              <Typography variant="title-sm" className="mb-6">{t('propertyDetails.datesTitle') || 'Hyresperiod'}</Typography>
              <div className="flex items-center gap-2">
                <Typography variant="body-lg" className="font-medium">{formData.moveInType === 'asap' ? 'Nu' : formData.moveInDate || '2025-07-01'}</Typography>
                <Icon name="ArrowRight" size="sm" />
                <Typography variant="body-lg" className="font-medium">{formData.moveOutType === 'indefinite' ? t('propertyDetails.duration') || 'Tillsvidare' : formData.moveOutDate || 'Välj datum'}</Typography>
              </div>
            </div>

            {/* Rent */}
            <div className="mb-8">
              <Typography variant="title-sm" className="mb-4">{t('propertyDetails.rentTitle') || 'Hyra'}</Typography>
              <div className="space-y-0">
                <div className="flex justify-between items-center py-3">
                  <Typography variant="title-xs">{t('propertyDetails.rentDetails.monthlyCost') || 'Månadskostnad'}</Typography>
                  <Typography variant="title-xs">SEK {parseInt(rent) + Math.round(parseInt(rent) * 0.0595)}</Typography>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md">{t('propertyDetails.rentDetails.rent') || 'Hyra'}</Typography>
                    <Typography variant="body-md">SEK {rent}</Typography>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Typography variant="body-md">{t('propertyDetails.rentDetails.serviceFee') || 'Serviceavgift'}</Typography>
                    <Typography variant="body-md">SEK {Math.round(parseInt(rent) * 0.0595)}</Typography>
                  </div>
                  
                  <div className="py-3">
                    <Typography variant="title-xs" className="mb-3">{t('propertyDetails.rentDetails.additionalCosts') || 'Övriga kostnader'}</Typography>
                    <div className="flex justify-between items-center">
                      <Typography variant="body-sm">{t('propertyDetails.rentDetails.electricityFee') || 'Elkostnad'}</Typography>
                      <Typography variant="body-sm">{formData.electricityCost === 'included_in_rent' ? t('propertyDetails.rentDetails.included') || 'Detta ingår' : `SEK ${formData.electricityAmount || '0'}`}</Typography>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <Button variant="tertiary" size="lg">
                    {t('propertyDetails.showMore') || 'Visa mer'}
                  </Button>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <Typography variant="title-md" className="mb-6">
                {t('propertyDetails.location') || 'Plats'}
              </Typography>
              <div className="w-full h-96 rounded-lg overflow-hidden">
                <MapContainer
                  center={[formData.latitude || 59.3293, formData.longitude || 18.0686]} // Use form data or default to Stockholm
                  zoom={15}
                  className="w-full h-full"
                  zoomControl={true}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  
                  {/* Property location marker */}
                  <Marker position={[formData.latitude || 59.3293, formData.longitude || 18.0686]} />
                </MapContainer>
              </div>
            </div>

            {/* All Images Grid */}
            <div className="mt-8">
              <Typography variant="title-sm" className="mb-4">{t('propertyDetails.allImages') || 'Alla bilder'}</Typography>
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
              title={t('propertyDetails.landlord.meetYourLandlord') || 'Din hyresvärd'}
              background="white"
              rounded="none"
              imagePosition="center"
              padding="p-0"
              className="mt-16"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gray-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Typography variant="title-md" className="text-gray-600">D</Typography>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Typography variant="title-sm">{t('propertyDetails.landlord.landlordName') || 'Daniel'}</Typography>
                    <Icon name="BadgeCheck" size="sm" />
                  </div>
                  <Typography variant="body-sm" color="secondary" className="mb-3">
                    {t('propertyDetails.landlord.landlordType') || 'Hyresvärd'}
                  </Typography>
                </div>
              </div>
              <Typography variant="body-md" className="mt-4">
                {t('propertyDetails.landlord.landlordDescription') || 'Hej'}
              </Typography>
            </ContentBlock>

            {/* More homes you might like */}
            <ContentBlock
              title={t('propertyDetails.moreHomes.title') || 'Andra bostäder som kan passa dig'}
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
                  onClick={() => console.log("All homes in Stockholm clicked")}
                >
                  {t('propertyDetails.moreHomes.allHomesIn', { location: 'Stockholm' }) || 'Alla bostäder i Stockholm'}
                </Button>
                <Button 
                  variant="tertiary" 
                  size="lg" 
                  onClick={() => console.log("All apartments in Stockholm clicked")}
                >
                  {t('propertyDetails.moreHomes.allApartmentsIn', { location: 'Stockholm' }) || 'Alla lägenheter i Stockholm'}
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
                      <Typography variant="body-sm">{formData.moveInType === 'asap' ? 'Nu' : formData.moveInDate || '2025-07-01'}</Typography>
                      <Icon name="ArrowRight" size="sm" />
                      <Typography variant="body-sm">{formData.moveOutType === 'indefinite' ? t('propertyDetails.duration') || 'Tillsvidare' : formData.moveOutDate || 'Välj datum'}</Typography>
                    </div>
                  </div>
                  <button onClick={handleEditRent} className="p-2 rounded-full hover:bg-gray-100">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
                <div className="mb-6 flex items-center gap-2">
                  <Typography variant="title-xs" className="font-bold">SEK {parseInt(rent) + Math.round(parseInt(rent) * 0.0595)}</Typography>
                  <Icon name="Info" size="xs" />
                </div>
                <Button variant="tertiary" size="lg" fullWidth className="mt-2">
                  Redigera visningar
                </Button>
              </Card>

              {/* Rent Better Card */}
              <Card variant="sidebar-inset">
                <Typography variant="title-md" className="mb-3">{t('propertyDetails.rentBetter') || 'Hyr bättre och tryggare med Qasa'}</Typography>
                <Typography variant="body-sm" color="secondary" className="mb-4">
                  {t('propertyDetails.rentBetterDescription') || 'Detta hem har en verifierad hyresvärd, ett tryggt hyresavtal och dedikerad support 7 dagar i veckan. Alla betalningar hanteras genom oss.'}
                </Typography>
                <Button variant="tertiary" size="lg" className="w-max">{t('propertyDetails.readMore') || 'Läs mer'}</Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Actions - Fixed */}
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 z-40 border-t border-gray-30">
          <div className="max-w-7xl mx-auto justify-center flex flex-col md:flex-row gap-4">
            <Button variant="tertiary" size="lg" onClick={handleEditListing}>
              Redigera annons
            </Button>
            <Button variant="primary" size="lg" onClick={onPublish}>
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
        </div>
      </main>
      
      <Footer isFluid={true} />
    </div>
  );
}

ListingPreview.propTypes = {
  formData: PropTypes.object.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPublish: PropTypes.func.isRequired,
};

export default ListingPreview; 