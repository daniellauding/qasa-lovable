import { Check, ChevronDown, ChevronUp, Image, Trash2, X } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import HintBox from '../../../../components/ui/HintBox';
import LoadingDots from '../../../../components/ui/LoadingDots';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep13 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [images, setImages] = useState(formData.images || []);
  const [showModal, setShowModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setShowModal(urlParams.has('modal'));
  }, [location]);

  // Mock uploaded images for demo
  const demoImages = [
    'https://img.qasa.se/unsafe/1000x1000/smart/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/aef7313bcd790570c012f51a99cf49c2a8899796ce22d1387e3bc0901ebebc8c.png',
    'https://img.qasa.se/unsafe/1000x1000/smart/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/b7674a9769e1ab93ac12a6270c3ad6852a003240fd01dc18b5b29cf40b96f290.png',
    'https://img.qasa.se/unsafe/1000x1000/smart/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/839f13304ebf49b354a14583412e9db945ece67084b2fd3a444ab5927fdf1c25.png'
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    
    // Mock upload with delay
    setTimeout(() => {
      const newImages = [...images, ...demoImages.slice(0, files.length)];
      setImages(newImages);
      updateFormData({ images: newImages });
      setIsUploading(false);
    }, 2000);
  };

  const moveImage = (index, direction) => {
    const newImages = [...images];
    let newIndex;
    
    if (direction === 'up') {
      newIndex = index - 1;
    } else {
      newIndex = index + 1;
    }
    
    // Allow moving within bounds
    if (newIndex >= 0 && newIndex < newImages.length) {
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      setImages(newImages);
      updateFormData({ images: newImages });
    }
  };

  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    updateFormData({ images: newImages });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <SectionHeader 
              title={t('landlords.createListing.step13.title')} 
              description={t('landlords.createListing.step13.description')} 
            />
          </div>

          <div className="space-y-6">
            {/* Upload Area */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors min-h-[200px] flex items-center justify-center">
              <input
                type="file"
                multiple
                accept="image/png, image/jpeg"
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
                disabled={isUploading}
              />
              <label htmlFor="image-upload" className="cursor-pointer w-full h-full flex items-center justify-center">
                {isUploading ? (
                  <div className="space-y-4">
                    <LoadingDots size="lg" className="text-[var(--color-text-secondary)]" />
                    <Typography variant="body-md" color="secondary">
                      {t('landlords.createListing.step13.uploading')}
                    </Typography>
                  </div>
                ) : (
                  <div className="gap-4 flex align-center items-center justify-center">
                    <Image className="mx-auto h-12 w-12 text-[var(--color-text-secondary)]" />
                    <div className="mt-0">
                      <Typography variant="title-xxs" className="text-[var(--color-text-primary)]">
                        {t('landlords.createListing.step13.uploadButton')}
                      </Typography>
                    </div>
                  </div>
                )}
              </label>
            </div>

            <Typography variant="body-sm" className="text-gray-500">
              {t('landlords.createListing.step13.fileInfo')}
            </Typography>

            {/* Uploaded Images */}
            {images.length > 0 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Typography variant="title-sm" className="text-gray-900">
                    {t('landlords.createListing.step13.mainImageTitle')}
                  </Typography>
                  {images[0] && (
                    <div className="flex items-center gap-4 p-4 border rounded-lg">
                      <img src={images[0]} alt="Main" className="w-24 h-24 object-cover rounded" />
                      <div className="flex-1" />
                      <div className="flex flex-col gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeImage(0)}
                          iconOnly
                          icon={<Trash2 className="h-4 w-4" />}
                        />
                        <div className="flex flex-col gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveImage(0, 'up')}
                            disabled={true}
                            iconOnly
                            icon={<ChevronUp className="h-4 w-4" />}
                          />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => moveImage(0, 'down')}
                            disabled={images.length <= 1}
                            iconOnly
                            icon={<ChevronDown className="h-4 w-4" />}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {images.length > 1 && (
                  <div className="space-y-4">
                    <Typography variant="title-sm" className="text-gray-900">
                      {t('landlords.createListing.step13.otherImagesTitle')}
                    </Typography>
                    {images.slice(1).map((image, index) => (
                      <div key={index + 1} className="flex items-center gap-4 p-4 border rounded-lg">
                        <img src={image} alt={`Image ${index + 2}`} className="w-24 h-24 object-cover rounded" />
                        <div className="flex-1" />
                        <div className="flex flex-col gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeImage(index + 1)}
                            iconOnly
                            icon={<Trash2 className="h-4 w-4" />}
                          />
                          <div className="flex flex-col gap-1">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveImage(index + 1, 'up')}
                              disabled={false}
                              iconOnly
                              icon={<ChevronUp className="h-4 w-4" />}
                            />
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => moveImage(index + 1, 'down')}
                              disabled={index === images.length - 2}
                              iconOnly
                              icon={<ChevronDown className="h-4 w-4" />}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Guidelines */}
            <HintBox 
              title={t('landlords.createListing.step13.guidelinesTitle')}
              actions={[{
                label: t('landlords.createListing.step13.guidelinesButton'),
                onClick: () => {
                  setShowModal(true);
                  navigate(`${location.pathname}?modal`, { replace: true });
                },
                variant: 'tertiary',
              }]}
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <Typography variant="body-sm" className="text-[var(--color-text-primary)]">
                    {t('landlords.createListing.step13.guidelines.0') || 'Ta bilder i liggande format av alla rum i hemmet'}
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <X className="w-4 h-4" />
                  <Typography variant="body-sm" className="text-[var(--color-text-primary)]">
                    {t('landlords.createListing.step13.guidelines.1') || 'Undvik text, stående bilder, skärmdumpar och suddiga bilder'}
                  </Typography>
                </div>
              </div>
            </HintBox>
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
        />
      </div>

      {/* Modal for guidelines */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  {t('landlords.createListing.step13.modalTitle')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowModal(false);
                    navigate(location.pathname, { replace: true });
                  }}
                  iconOnly
                  icon={<span className="text-xl">×</span>}
                />
              </div>
              <Typography variant="body-md" className="text-gray-600 mb-6">
                {t('landlords.createListing.step13.modalDescription')}
              </Typography>
              
              {/* Guidelines content */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">❌</div>
                  <Typography variant="body-sm">Inkludera inte text i bilden</Typography>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">❌</div>
                  <Typography variant="body-sm">Ladda inte upp skärmdumpar</Typography>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">❌</div>
                  <Typography variant="body-sm">Ladda inte upp suddiga bilder</Typography>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">✅</div>
                  <Typography variant="body-sm">Stäng locket och håll rent</Typography>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">✅</div>
                  <Typography variant="body-sm">Använd liggande läge</Typography>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <div className="mb-2">✅</div>
                  <Typography variant="body-sm">Inkludera bild av alla rum</Typography>
                </div>
              </div>
              
              <Button variant="primary" onClick={() => {
                setShowModal(false);
                navigate(location.pathname, { replace: true });
              }} className="w-full">
                {t('landlords.createListing.step13.closeButton') || 'Stäng'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CreateListingStep13.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep13; 