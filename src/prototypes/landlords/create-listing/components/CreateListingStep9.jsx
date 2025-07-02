import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import DatePicker from '../../../../components/ui/DatePicker';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const CreateListingStep9 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [moveInType, setMoveInType] = useState(formData.moveInType || 'asap');
  const [moveInDate, setMoveInDate] = useState(formData.moveInDate || '');
  const [moveOutType, setMoveOutType] = useState(formData.moveOutType || 'indefinite');
  const [moveOutDate, setMoveOutDate] = useState(formData.moveOutDate || '');
  const [isOnlyRental, setIsOnlyRental] = useState(formData.isOnlyRental || '');

  const moveInOptions = [
    { value: 'asap', label: 'Snarast möjligt' }
  ];

  const moveOutOptions = [
    { value: 'indefinite', label: 'Tillsvidare' }
  ];

  const onlyRentalOptions = [
    { value: 'yes', label: 'Ja, det är min enda uthyrning' },
    { value: 'no', label: 'Nej, det är inte min enda uthyrning' },
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
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              När vill du hyra ut bostaden?
            </Typography>
          </div>

          <div className="space-y-8">
            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Inflytt
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
                  placeholder="Välj datum"
                />
              </div>
            </div>

            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Utflytt
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
                  placeholder="Välj datum"
                />
              </div>
            </div>

            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Är detta den enda bostad du hyr ut?
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

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="tertiary"
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

CreateListingStep9.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep9; 