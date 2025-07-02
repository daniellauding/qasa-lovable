import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep4 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Är markören på rätt ställe?
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Justera markörens position så den visar var din bostad ligger.
            </Typography>
          </div>

          {/* Map Container */}
          <div className="relative">
            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
              {/* Simple map placeholder with pin */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50"></div>
              
              {/* Mock street pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300">
                <path d="M0,150 L400,150" stroke="#666" strokeWidth="2"/>
                <path d="M200,0 L200,300" stroke="#666" strokeWidth="2"/>
                <path d="M0,75 L400,75" stroke="#999" strokeWidth="1"/>
                <path d="M0,225 L400,225" stroke="#999" strokeWidth="1"/>
                <path d="M100,0 L100,300" stroke="#999" strokeWidth="1"/>
                <path d="M300,0 L300,300" stroke="#999" strokeWidth="1"/>
              </svg>

              {/* Location pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <svg height="48" viewBox="0 0 42 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40 21.2857C40 33.4908 27.6872 42.7094 22.8855 45.8404C21.7281 46.5951 20.2719 46.5951 19.1145 45.8404C14.3128 42.7094 2 33.4908 2 21.2857C2 10.6345 10.5066 2 21 2C31.4934 2 40 10.6345 40 21.2857Z" fill="#342620"></path>
                    <path d="M34.7513 38.2797C30.9033 42.6959 26.4562 45.8997 23.9779 47.5157C22.1565 48.7033 19.8435 48.7033 18.0221 47.5157C15.5438 45.8997 11.0967 42.6959 7.24873 38.2797C3.41611 33.8811 0 28.0722 0 21.2857C0 9.55819 9.37398 0 21 0C32.626 0 42 9.55819 42 21.2857C42 28.0722 38.5839 33.8811 34.7513 38.2797ZM22.8855 45.8404C27.6872 42.7094 40 33.4908 40 21.2857C40 10.6345 31.4934 2 21 2C10.5066 2 2 10.6345 2 21.2857C2 33.4908 14.3128 42.7094 19.1145 45.8404C20.2719 46.5951 21.7281 46.5951 22.8855 45.8404Z" fill="white"></path>
                    <path d="M29 21C29 16.5817 25.4183 13 21 13C16.5817 13 13 16.5817 13 21C13 25.4183 16.5817 29 21 29C25.4183 29 29 25.4183 29 21Z" fill="white"></path>
                  </svg>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap">
                    Åsdammsvägen
                  </div>
                </div>
              </div>

              {/* Map controls */}
              <div className="absolute top-4 right-4 flex flex-col gap-1">
                <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-sm font-bold hover:bg-gray-50">
                  +
                </button>
                <button className="w-8 h-8 bg-white border border-gray-300 rounded flex items-center justify-center text-sm font-bold hover:bg-gray-50">
                  −
                </button>
              </div>

              {/* Attribution */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-500 bg-white bg-opacity-75 px-2 py-1 rounded">
                MapLibre | © LocationIQ © OpenStreetMap contributors
              </div>
            </div>

            {/* Info box */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <Typography variant="body-sm" className="text-gray-600">
                För att justera markören flyttar du kartans position. Markören är fäst mitt på kartan
              </Typography>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="transparent"
            size="md"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeftIcon className="h-5 w-5" />}
            aria-label="Tillbaka"
          />
          
          <Button
            variant="primary"
            size="md"
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep4; 