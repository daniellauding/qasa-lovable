import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DatePicker from '../../../../components/ui/DatePicker';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep8 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [moveInType, setMoveInType] = useState(formData.moveInType || 'asap');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');
  const [moveOutType, setMoveOutType] = useState(formData.moveOutType || 'indefinite');
  const [moveOutDate, setMoveOutDate] = useState(formData.moveOutDate || '');
  const [isOnlyRental, setIsOnlyRental] = useState(formData.isOnlyRental || '');

  const moveInOptions = [
    { value: 'asap', label: t('landlords.createListing.step8.moveInASAP') }
  ];

  const moveOutOptions = [
    { value: 'indefinite', label: t('landlords.createListing.step8.moveOutIndefinite') }
  ];

  const onlyRentalOptions = [
    { value: 'yes', label: t('landlords.createListing.step8.onlyRentalYes') },
    { value: 'no', label: t('landlords.createListing.step8.onlyRentalNo') },
  ];

  const handleMoveInTypeChange = (value) => {
    setMoveInType(value);
    if (value === 'date') {
      setMoveInDate('');
    }
    updateFormData({ moveInType: value, moveInDate: value === 'asap' ? '' : moveInDate });
  };

  const handleMoveOutTypeChange = (value) => {
    setMoveOutType(value);
    if (value === 'date') {
      setMoveOutDate('');
    }
    updateFormData({ moveOutType: value, moveOutDate: value === 'indefinite' ? '' : moveOutDate });
  };

  const handleOnlyRentalChange = (value) => {
    setIsOnlyRental(value);
    updateFormData({ isOnlyRental: value });
  };

  const handleMoveInDateChange = (date) => {
    setMoveInDate(date);
    setMoveInType('date');
    updateFormData({ moveInDate: date, moveInType: 'date' });
  };

  const handleMoveOutDateChange = (date) => {
    setMoveOutDate(date);
    setMoveOutType('date');
    updateFormData({ moveOutDate: date, moveOutType: 'date' });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="p-8 space-y-8">
          <SectionHeader title={t('landlords.createListing.step8.title')} />

          <div className="space-y-8">
            <div>
              <Typography variant="body-md" color="secondary" className="mb-4">
                {t('landlords.createListing.step8.moveInLabel')}
              </Typography>
              <div className="space-y-4">
                <RadioGroup
                  label=""
                  options={moveInOptions}
                  variant="card"
                  value={moveInType === 'asap' ? 'asap' : ''}
                  onValueChange={handleMoveInTypeChange}
                />
                <DatePicker
                  value={moveInDate}
                  onChange={handleMoveInDateChange}
                  placeholder={t('landlords.createListing.step8.selectDate')}
                  variant="radio" 
                />
              </div>
            </div>

            <div>
              <Typography variant="body-md" color="secondary" className="mb-4">
                {t('landlords.createListing.step8.moveOutLabel')}
              </Typography>
              <div className="space-y-4">
                <RadioGroup
                  label=""
                  options={moveOutOptions}
                  variant="card"
                  value={moveOutType === 'indefinite' ? 'indefinite' : ''}
                  onValueChange={handleMoveOutTypeChange}
                />
                <DatePicker
                  value={moveOutDate}
                  onChange={handleMoveOutDateChange}
                  placeholder={t('landlords.createListing.step8.selectDate')}
                />
              </div>
            </div>

            <div>
              <Typography variant="body-md" color="secondary" className="mb-4">
                {t('landlords.createListing.step8.onlyRentalQuestion')}
              </Typography>
              <RadioGroup
                label=""
                options={onlyRentalOptions}
                variant="card"
                value={isOnlyRental}
                onValueChange={handleOnlyRentalChange}
              />
            </div>
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

CreateListingStep8.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep8; 