import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import LoadingDots from '../../../../components/ui/LoadingDots';
import { ArrowLeft, Image, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateListingStep14 = ({ onNext, onPrev, formData, updateFormData }) => {
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
            <Typography variant="title-lg" className="text-gray-900">
              Bilder på ditt hem
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Ladda upp ljusa och tydliga bilder – ju fler desto bättre. Några bra foton gör att annonsen sticker ut och sparar dig från onödiga frågor.
            </Typography>
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
                    <LoadingDots size="lg" className="text-gray-400" />
                    <Typography variant="body-md" className="text-gray-600">
                      Laddar upp bilder...
                    </Typography>
                  </div>
                ) : (
                  <div className="gap-4 flex align-center items-center justify-center">
                    <Image className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="mt-0">
                      <Typography variant="title-xxs" className="text-gray-900">
                        Ladda upp bilder
                      </Typography>
                    </div>
                  </div>
                )}
              </label>
            </div>

            <Typography variant="body-sm" className="text-gray-500">
              Du kan ladda upp PNG och JPG. Maximal storlek per foto är 30MB.
            </Typography>

            {/* Uploaded Images */}
            {images.length > 0 && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <Typography variant="title-sm" className="text-gray-900">
                    Visningsbild
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
                      Övriga bilder
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
            <div className="bg-gray-10 rounded-lg p-4">
              <Typography variant="body-sm" className="text-gray-700 font-medium mb-2">
                Riktlinjer för bilder
              </Typography>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Typography variant="body-sm" className="text-gray-600">
                    Ta bilder i liggande format av alla rum i hemmet
                  </Typography>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <Typography variant="body-sm" className="text-gray-600">
                    Undvik text, stående bilder, skärmdumpar och suddiga bilder
                  </Typography>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setShowModal(true);
                  navigate(`${location.pathname}?modal`, { replace: true });
                }}
                className="mt-2"
              >
                Se alla riktlinjer
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tillbaka"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
          
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>

      {/* Modal for guidelines */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Riktlinjer för bilder
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
                Några fantastiska bilder kan vara skillnaden mellan en snabb matchning och veckors väntan.
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
                Stäng
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CreateListingStep14.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep14; 