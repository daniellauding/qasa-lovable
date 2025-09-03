import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import HintBox from '../../../../components/ui/HintBox';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

// Create custom brown pin marker
const createCustomMarkerIcon = () => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        position: relative;
        width: 30px;
        height: 40px;
        transform: translate(-50%, -100%);
        cursor: grab;
      ">
        <div style="
          width: 30px;
          height: 30px;
          background-color: #322721;
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: absolute;
          top: 0;
          left: 0;
        "></div>
        <div style="
          width: 12px;
          height: 12px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: 6px;
          left: 6px;
          transform: rotate(45deg);
        "></div>
      </div>
      <style>
        .custom-marker {
          background: none !important;
          border: none !important;
          box-shadow: none !important;
        }
      </style>
    `,
    iconSize: [30, 40],
    iconAnchor: [15, 40],
  });
};

// eslint-disable-next-line no-unused-vars
const CreateListingStep3 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [markerPosition, setMarkerPosition] = useState([59.3293, 18.0686]); // Default to Stockholm center

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <SectionHeader
            title={t('landlords.createListing.step3.title')}
            description={t('landlords.createListing.step3.description')}
          />

          {/* Map Container */}
          <div className="relative">
            <div className="h-[800px] rounded-2xl overflow-hidden">
              <MapContainer
                center={markerPosition}
                zoom={15}
                className="w-full h-full"
                zoomControl={true}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Draggable marker for property location */}
                <Marker
                  position={markerPosition}
                  draggable={true}
                  icon={createCustomMarkerIcon()}
                  eventHandlers={{
                    dragend: (e) => {
                      const marker = e.target;
                      const position = marker.getLatLng();
                      setMarkerPosition([position.lat, position.lng]);
                      updateFormData({ 
                        latitude: position.lat, 
                        longitude: position.lng 
                      });
                    }
                  }}
                />
              </MapContainer>
            </div>

            {/* Info box */}
            <HintBox className="mt-4">
              Dra markören till rätt position för att visa var din bostad ligger. Du kan zooma och panorera kartan för att hitta rätt plats.
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
    </div>
  );
};

CreateListingStep3.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep3; 
