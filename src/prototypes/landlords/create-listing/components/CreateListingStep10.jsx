import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Chip from '../../../../components/ui/Chip';
import HintBox from '../../../../components/ui/HintBox';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep10 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [amenities, setAmenities] = useState(formData.amenities || []);

  const amenityGroups = [
    {
      title: t('landlords.createListing.step10.categories.kitchen'),
      items: [
        { id: 'fridge', label: t('landlords.createListing.step10.amenities.fridge') },
        { id: 'freezer', label: t('landlords.createListing.step10.amenities.freezer') },
        { id: 'oven', label: t('landlords.createListing.step10.amenities.oven') },
        { id: 'stove', label: t('landlords.createListing.step10.amenities.stove') },
        { id: 'dishwasher', label: t('landlords.createListing.step10.amenities.dishwasher') },
        { id: 'microwave', label: t('landlords.createListing.step10.amenities.microwave') },
        { id: 'kitchenette', label: t('landlords.createListing.step10.amenities.kitchenette') },
      ]
    },
    {
      title: t('landlords.createListing.step10.categories.bathroom'),
      items: [
        { id: 'shower', label: t('landlords.createListing.step10.amenities.shower') },
        { id: 'toilet', label: t('landlords.createListing.step10.amenities.toilet') },
        { id: 'bathtub', label: t('landlords.createListing.step10.amenities.bathtub') },
      ]
    },
    {
      title: t('landlords.createListing.step10.categories.laundry'),
      items: [
        { id: 'washing_machine', label: t('landlords.createListing.step10.amenities.washing_machine') },
        { id: 'dryer', label: t('landlords.createListing.step10.amenities.dryer') },
        { id: 'laundry_room', label: t('landlords.createListing.step10.amenities.laundry_room') },
        { id: 'drying_room', label: t('landlords.createListing.step10.amenities.drying_room') },
      ]
    },
    {
      title: t('landlords.createListing.step10.categories.popular'),
      items: [
        { id: 'balcony', label: t('landlords.createListing.step10.amenities.balcony') },
        { id: 'french_balcony', label: t('landlords.createListing.step10.amenities.french_balcony') },
        { id: 'patio', label: t('landlords.createListing.step10.amenities.patio') },
        { id: 'sauna', label: t('landlords.createListing.step10.amenities.sauna') },
        { id: 'shared_sauna', label: t('landlords.createListing.step10.amenities.shared_sauna') },
        { id: 'jacuzzi', label: t('landlords.createListing.step10.amenities.jacuzzi') },
        { id: 'fireplace', label: t('landlords.createListing.step10.amenities.fireplace') },
        { id: 'pool', label: t('landlords.createListing.step10.amenities.pool') },
        { id: 'ac', label: t('landlords.createListing.step10.amenities.ac') },
      ]
    },
    {
      title: t('landlords.createListing.step10.categories.technology'),
      items: [
        { id: 'internet', label: t('landlords.createListing.step10.amenities.internet') },
        { id: 'tv', label: t('landlords.createListing.step10.amenities.tv') },
      ]
    },
    {
      title: t('landlords.createListing.step10.categories.parkingAndStorage'),
      items: [
        { id: 'bike_room', label: t('landlords.createListing.step10.amenities.bike_room') },
        { id: 'storage', label: t('landlords.createListing.step10.amenities.storage') },
        { id: 'elevator', label: t('landlords.createListing.step10.amenities.elevator') },
        { id: 'car_charger', label: t('landlords.createListing.step10.amenities.car_charger') },
        { id: 'parking_included', label: t('landlords.createListing.step10.amenities.parking_included') },
        { id: 'parking_available', label: t('landlords.createListing.step10.amenities.parking_available') },
        { id: 'recycling', label: t('landlords.createListing.step10.amenities.recycling') },
        { id: 'security_door', label: t('landlords.createListing.step10.amenities.security_door') },
        { id: 'alarm', label: t('landlords.createListing.step10.amenities.alarm') },
        { id: 'stroller_room', label: t('landlords.createListing.step10.amenities.stroller_room') },
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
          <SectionHeader 
            title={t('landlords.createListing.step10.title')} 
            description={t('landlords.createListing.step10.description')} 
          />

          <div className="space-y-8">
            {amenityGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <Typography variant="title-sm" className="text-[var(--color-text-primary)]">
                  {group.title}
                </Typography>
                <div className="flex gap-2 flex-wrap">
                  {group.items.map((item) => (
                    <Chip
                      key={item.id}
                      size="sm"
                      active={amenities.includes(item.id)}
                      onClick={() => handleAmenityChange(item.id, !amenities.includes(item.id))}
                    >
                      {item.label}
                    </Chip>
                  ))}
                </div>
              </div>
            ))}

            {/* Insurance info */}
            <HintBox className="flex items-start gap-4">
              <div className="flex gap-2">
                <img
                  src="https://qasa.se/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fumbrella.1d60b205.png&amp;w=96&amp;q=75&amp;dpl=dpl_66JpsRs53BHF6VqhrkzSFP3c1duK"
                  alt="Create listing illustration"
                  className="w-10 h-10"
                />
                <div className="space-y-2">
                  <Typography variant="title-xs" className="text-[var(--color-text-primary,#362b25)]">
                    {t('landlords.createListing.step10.insuranceTitle')}
                  </Typography>
                  <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                    {t('landlords.createListing.step10.insuranceDescription')}
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
    </div>
  );
};

CreateListingStep10.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep10; 