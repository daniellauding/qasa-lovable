import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import HintBox from '../../../../components/ui/HintBox';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

// Fix for default markers in react-leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const CreateListingStep4 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [markerPosition, setMarkerPosition] = useState([59.3293, 18.0686]); // Default to Stockholm center

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <SectionHeader title="Är markören på rätt ställe?" description="Justera markörens position så den visar var din bostad ligger." />

          {/* Map Container */}
          <div className="relative">
            <div className="w-full h-96 rounded-lg overflow-hidden">
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

CreateListingStep4.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep4; 