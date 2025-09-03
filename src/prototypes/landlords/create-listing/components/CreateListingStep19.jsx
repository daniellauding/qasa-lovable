import { Calendar, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import DatePicker from '../../../../components/ui/DatePicker';
import HintBox from '../../../../components/ui/HintBox';
import Modal from '../../../../components/ui/Modal';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import Select from '../../../../components/ui/Select';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep19 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '+46739184410');
  const [practicalInfo, setPracticalInfo] = useState(formData.practicalInfo || '');
  const [showModal, setShowModal] = useState(false);
  const [viewingType, setViewingType] = useState('multiple');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTimeFrom, setSelectedTimeFrom] = useState('');
  const [selectedTimeTo, setSelectedTimeTo] = useState('');
  const [viewings, setViewings] = useState(formData.viewings || []);

  // Time options from 07:00 to 18:00
  const timeOptions = [
    { value: '', label: t('landlords.createListing.step18.selectTime') },
    ...Array.from({ length: 23 }, (_, i) => {
      const hour = 7 + Math.floor(i / 2);
      const minute = (i % 2) * 30;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      return { value: timeString, label: timeString };
    })
  ];

  const viewingTypeOptions = [
    { value: 'multiple', label: t('landlords.createListing.step18.viewingTypes.multiple') },
    { value: 'single', label: t('landlords.createListing.step18.viewingTypes.single') },
  ];

  const handleCreateViewing = () => {
    if (selectedDate && selectedTimeFrom) {
      let newViewings = [];
      
      if (viewingType === 'multiple' && selectedTimeTo) {
        // Generate multiple 20-minute viewing slots between from and to time
        const fromTime = selectedTimeFrom.split(':');
        const toTime = selectedTimeTo.split(':');
        const fromMinutes = parseInt(fromTime[0]) * 60 + parseInt(fromTime[1]);
        const toMinutes = parseInt(toTime[0]) * 60 + parseInt(toTime[1]);
        
        let currentMinutes = fromMinutes;
        while (currentMinutes + 20 <= toMinutes) {
          const startHour = Math.floor(currentMinutes / 60).toString().padStart(2, '0');
          const startMinute = (currentMinutes % 60).toString().padStart(2, '0');
          const endMinutes = currentMinutes + 20;
          const endHour = Math.floor(endMinutes / 60).toString().padStart(2, '0');
          const endMinuteStr = (endMinutes % 60).toString().padStart(2, '0');
          
          newViewings.push({
            id: Date.now() + currentMinutes,
            date: selectedDate,
            timeFrom: `${startHour}:${startMinute}`,
            timeTo: `${endHour}:${endMinuteStr}`,
            type: viewingType
          });
          
          currentMinutes += 20;
        }
      } else {
        // Single viewing
        newViewings.push({
          id: Date.now(),
          date: selectedDate,
          timeFrom: selectedTimeFrom,
          timeTo: null,
          type: viewingType
        });
      }
      
      const updatedViewings = [...viewings, ...newViewings];
      setViewings(updatedViewings);
      updateFormData({ viewings: updatedViewings });
      setShowModal(false);
      setSelectedDate('');
      setSelectedTimeFrom('');
      setSelectedTimeTo('');
    }
  };

  const handleDeleteViewing = (id) => {
    const updatedViewings = viewings.filter(v => v.id !== id);
    setViewings(updatedViewings);
    updateFormData({ viewings: updatedViewings });
  };

  const handleDeleteAllViewings = () => {
    setViewings([]);
    updateFormData({ viewings: [] });
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const days = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
    const months = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
    return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              {t('landlords.createListing.step19.title')}
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              {t('landlords.createListing.step19.description')}
            </Typography>
          </div>

          <div className="space-y-8">
            {/* Add Viewing Button */}
            <div>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowModal(true)}
                icon={<Calendar className="h-4 w-4" />}
                className="w-full justify-center border-dashed border-2 rounded-xl py-8"
              >
                {t('landlords.createListing.step18.addViewingButton')}
              </Button>
            </div>

            {/* Existing Viewings */}
            {viewings.length > 0 && (
              <div className="space-y-4">
                {/* Group viewings by date */}
                {Object.entries(
                  viewings.reduce((groups, viewing) => {
                    const date = viewing.date;
                    if (!groups[date]) groups[date] = [];
                    groups[date].push(viewing);
                    return groups;
                  }, {})
                ).map(([date, dateViewings]) => (
                  <div key={date} className="space-y-4">
                    <Typography variant="body-lg" className="text-gray-900 font-medium">
                      {formatDate(date)}
                    </Typography>
                    <div className="space-y-2">
                      {dateViewings.map((viewing) => (
                        <div key={viewing.id} className="flex items-center justify-between p-4 border-2 border-gray-200 rounded-2xl">
                          <span className="text-sm font-medium text-gray-700">
                            {viewing.timeFrom}{viewing.timeTo ? ` - ${viewing.timeTo}` : ''}
                          </span>
                          <Button
                            variant="tertiary"
                            size="sm"
                            onClick={() => handleDeleteViewing(viewing.id)}
                            iconOnly
                            icon={<Trash2 className="h-4 w-4" />}
                            aria-label="Ta bort"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center">
                  <Button
                    variant="tertiary"
                    size="lg"
                    onClick={handleDeleteAllViewings}
                  >
                    {t('landlords.createListing.step18.deleteAllButton')}
                  </Button>
                </div>
              </div>
            )}

            {/* Info Box */}
            <HintBox>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)] font-medium mb-2">
                {t('landlords.createListing.step19.infoTitle')}
              </Typography>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                {t('landlords.createListing.step19.infoDescription')}
              </Typography>
            </HintBox>
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText={t('landlords.createListing.step19.reviewButton')}
          prevText="Tillbaka"
        />
      </div>

      {/* Add Viewing Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={t('landlords.createListing.step18.modalTitle')}
        className="max-w-md"
        showFooter={true}
        footerProps={{
          onPrev: () => setShowModal(false),
          onNext: handleCreateViewing,
          prevText: t('landlords.createListing.step18.closeButton'),
          nextText: t('landlords.createListing.step18.createButton'),
          nextVariant: 'tertiary',
          prevVariant: 'tertiary',
          nextDisabled: false,
          className: 'flex justify-center gap-3'
        }}
      >
        <div className="space-y-6">
          <Typography variant="body-md" className="text-gray-600">
            {t('landlords.createListing.step18.modalDescription')}
          </Typography>

          {/* Viewing Type Selection */}
          <RadioGroup
            label=""
            options={viewingTypeOptions}
            variant="card"
            value={viewingType}
            onValueChange={setViewingType}
          />

          {/* Date Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t('landlords.createListing.step18.dateLabel')}
            </label>
            <DatePicker
              value={selectedDate}
              onChange={setSelectedDate}
              placeholder={t('landlords.createListing.step18.selectDate')}
            />
          </div>

          {/* Time Selection */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('landlords.createListing.step18.timeFromLabel')}
              </label>
              <Select
                value={selectedTimeFrom}
                onChange={setSelectedTimeFrom}
                options={timeOptions}
              />
            </div>
            {viewingType === 'multiple' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('landlords.createListing.step18.timeToLabel')}
                </label>
                <Select
                  value={selectedTimeTo}
                  onChange={setSelectedTimeTo}
                  options={timeOptions}
                />
              </div>
            )}
          </div>

          {/* Hint for multiple viewings */}
          {viewingType === 'multiple' && (
            <HintBox>
              <Typography variant="body-sm" className="text-[var(--color-text-primary)]">
                {t('landlords.createListing.step18.timeHint')}
              </Typography>
            </HintBox>
          )}
        </div>
      </Modal>
    </div>
  );
};

CreateListingStep19.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep19; 