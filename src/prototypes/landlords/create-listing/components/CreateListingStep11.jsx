import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import Checkbox from '../../../../components/ui/Checkbox';
import HintBox from '../../../../components/ui/HintBox';

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
          <SectionHeader title="Vilka bekvämligheter finns i bostaden?" description="Markera allt som ingår i uthyrningen." />

          <div className="space-y-8">
            {amenityGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <Typography variant="title-sm" className="text-[var(--color-text-primary)]">
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
            <HintBox className="flex items-start gap-4">
              <div className="w-12 h-12 flex-shrink-0">
                <svg viewBox="0 0 48 48" className="w-full h-full">
                  <circle cx="24" cy="24" r="20" fill="var(--color-info-bg,#E5F3FF)" stroke="var(--color-info,#3B82F6)" strokeWidth="2"/>
                  <path d="M24 16v8m0 4h.01" stroke="var(--color-info,#3B82F6)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="space-y-2">
                <Typography variant="title-sm" className="text-[var(--color-text-primary,#362b25)]">
                  Försäkrad genom Qasa
                </Typography>
                <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                  Vi står för skador på din fastighet under hela hyresperioden.
                </Typography>
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