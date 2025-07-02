import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Checkbox from '../../../../components/ui/Checkbox';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep11 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [amenities, setAmenities] = useState(formData.amenities || []);

  const amenityGroups = [
    {
      title: 'Kök',
      items: [
        { id: 'fridge', label: 'Kylskåp' },
        { id: 'freezer', label: 'Frys' },
        { id: 'oven', label: 'Ugn' },
        { id: 'stove', label: 'Spis' },
        { id: 'dishwasher', label: 'Diskmaskin' },
        { id: 'microwave', label: 'Mikrovågsugn' },
        { id: 'kitchenette', label: 'Kokvrå' },
      ]
    },
    {
      title: 'Badrum',
      items: [
        { id: 'shower', label: 'Egen dusch' },
        { id: 'toilet', label: 'Egen toalett' },
        { id: 'bathtub', label: 'Badkar' },
      ]
    },
    {
      title: 'Tvätt',
      items: [
        { id: 'washing_machine', label: 'Tvättmaskin' },
        { id: 'dryer', label: 'Torktumlare' },
        { id: 'laundry_room', label: 'Tvättstuga' },
        { id: 'drying_room', label: 'Torkrum' },
      ]
    },
    {
      title: 'Populära',
      items: [
        { id: 'balcony', label: 'Balkong' },
        { id: 'french_balcony', label: 'Fransk balkong' },
        { id: 'patio', label: 'Uteplats' },
        { id: 'sauna', label: 'Egen bastu' },
        { id: 'shared_sauna', label: 'Delad bastu' },
        { id: 'jacuzzi', label: 'Bubbelpool' },
        { id: 'fireplace', label: 'Eldstad inomhus' },
        { id: 'pool', label: 'Pool' },
        { id: 'ac', label: 'Luftkonditionering' },
      ]
    },
    {
      title: 'Teknik',
      items: [
        { id: 'internet', label: 'Internet' },
        { id: 'tv', label: 'TV' },
      ]
    },
    {
      title: 'Parkering och hjälpmedel',
      items: [
        { id: 'bike_room', label: 'Cykelrum' },
        { id: 'storage', label: 'Förråd' },
        { id: 'elevator', label: 'Hiss' },
        { id: 'car_charger', label: 'Laddbox till elbil' },
        { id: 'parking_included', label: 'Parkering ingår' },
        { id: 'parking_available', label: 'Parkering tillgänglig' },
        { id: 'recycling', label: 'Återvinningsrum' },
        { id: 'security_door', label: 'Säkerhetsdörr' },
        { id: 'alarm', label: 'Inbrottslarm' },
        { id: 'stroller_room', label: 'Barnvagnsrum' },
      ]
    }
  ];

  const handleAmenityChange = (amenityId, checked) => {
    let newAmenities;
    if (checked) {
      newAmenities = [...amenities, amenityId];
    } else {
      newAmenities = amenities.filter(id => id !== amenityId);
    }
    setAmenities(newAmenities);
    updateFormData({ amenities: newAmenities });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="w-full max-w-4xl mx-auto p-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Vilka bekvämligheter finns i bostaden?
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Markera allt som ingår i uthyrningen.
            </Typography>
          </div>

          <div className="space-y-8">
            {amenityGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <Typography variant="title-sm" className="text-gray-900">
                  {group.title}
                </Typography>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {group.items.map((item) => (
                    <Checkbox
                      key={item.id}
                      id={item.id}
                      label={item.label}
                      checked={amenities.includes(item.id)}
                      onCheckedChange={(checked) => handleAmenityChange(item.id, checked)}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Insurance info */}
            <div className="bg-gray-50 rounded-lg p-6 flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <circle cx="24" cy="24" r="20" fill="#E5F3FF" stroke="#3B82F6" strokeWidth="2"/>
                  <path d="M24 16v8m0 4h.01" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-2">
                <Typography variant="title-sm" className="text-gray-900">
                  Försäkrad genom Qasa
                </Typography>
                <Typography variant="body-sm" className="text-gray-600">
                  Vi står för skador på din fastighet under hela hyresperioden.
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
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

CreateListingStep11.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep11; 