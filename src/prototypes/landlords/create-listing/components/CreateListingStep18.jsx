import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import RadioGroup from '../../../../components/ui/RadioGroup';
import DatePicker from '../../../../components/ui/DatePicker';
import Select from '../../../../components/ui/Select';
import HintBox from '../../../../components/ui/HintBox';
import { Trash2, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const CreateListingStep18 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [showModal, setShowModal] = useState(false);
  const [viewingType, setViewingType] = useState('single');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [viewings, setViewings] = useState(formData.viewings || []);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    setShowModal(urlParams.has('modal'));
  }, [location]);

  const viewingTypeOptions = [
    { value: 'multiple', label: 'Flera visningar' },
    { value: 'single', label: 'Enskild visning' },
  ];

  const timeOptions = [
    { value: '', label: 'Välj en tid' },
    ...Array.from({ length: 17 }, (_, i) => {
      const hour = 7 + Math.floor(i / 3);
      const minute = (i % 3) * 20;
      const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      return { value: timeString, label: timeString };
    })
  ];

  const handleAddViewing = () => {
    setShowModal(true);
    navigate(`${location.pathname}?modal`, { replace: true });
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate(location.pathname, { replace: true });
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleCreateViewing = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime) {
      const newViewing = {
        id: Date.now(),
        date: selectedDate,
        time: selectedTime,
        type: viewingType
      };
      const updatedViewings = [...viewings, newViewing];
      setViewings(updatedViewings);
      updateFormData({ viewings: updatedViewings });
      handleCloseModal();
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
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Visningar
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Låt hyresgäster boka en visning när de kontaktar dig. Skapa tidsluckor när du har möjlighet att hålla visningar för intresserade hyresgäster. Bokade visningar kan avbokas när som helst via din annons-dashboard.
            </Typography>
          </div>

          <div className="space-y-6">
            {/* Add Viewing Button */}
            <div>
              <Button
                variant="outline"
                size="lg"
                onClick={handleAddViewing}
                icon={<CalendarIcon className="h-4 w-4" />}
                className="w-full justify-center"
              >
                Lägg till tider för visningar
              </Button>
            </div>

            {/* Existing Viewings */}
            {viewings.length > 0 && (
              <div className="space-y-4">
                {viewings.map((viewing) => (
                  <div key={viewing.id} className="space-y-4">
                    <Typography variant="body-lg" className="text-gray-900 font-medium">
                      {formatDate(viewing.date)}
                    </Typography>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <span className="text-sm font-medium text-gray-700">
                        {viewing.time} - {viewing.time.split(':').map((part, i) => i === 1 ? String(parseInt(part) + 20).padStart(2, '0') : part).join(':')}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteViewing(viewing.id)}
                        iconOnly
                        icon={<Trash2 className="h-4 w-4" />}
                        aria-label="Ta bort"
                      />
                    </div>
                  </div>
                ))}
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDeleteAllViewings}
                  className="text-gray-600"
                >
                  Ta bort alla
                </Button>
              </div>
            )}

            {/* Info Box */}
            <HintBox>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)] font-medium mb-2">
                Bra att veta
              </Typography>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                Du kan alltid lägga till och ta bort visningar under tiden din annons är publicerad. Endast ID-verifierade hyresgäster kan boka visningar.
              </Typography>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Lägg till tider för visningar
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCloseModal}
                  iconOnly
                  icon={<X className="h-5 w-5" />}
                  aria-label="Stäng"
                />
              </div>
              
              <form onSubmit={handleCreateViewing} className="space-y-6">
                <Typography variant="body-md" className="text-gray-600">
                  Välj datum och tid när du är tillgänglig för att träffa hyresgäster. Visningstider har en varaktighet på 20 minuter.
                </Typography>

                {/* Viewing Type */}
                <RadioGroup
                  label=""
                  options={viewingTypeOptions}
                  variant="card"
                  value={viewingType}
                  onValueChange={setViewingType}
                />

                {/* Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Datum
                  </label>
                  <DatePicker
                    value={selectedDate}
                    onChange={setSelectedDate}
                    placeholder="Välj datum"
                  />
                </div>

                {/* Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Från
                    </label>
                    <Select
                      value={selectedTime}
                      onChange={setSelectedTime}
                      options={timeOptions}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Till
                    </label>
                    <Select
                      value={selectedTime ? timeOptions.find(opt => opt.value === selectedTime)?.value ? timeOptions[timeOptions.findIndex(opt => opt.value === selectedTime) + 1]?.value || '' : '' : ''}
                      onChange={() => {}}
                      options={timeOptions}
                      disabled
                    />
                  </div>
                </div>

                <Typography variant="body-sm" className="text-gray-500">
                  Sätt en starttid från när du är tillgänglig så skapar vi visningstiderna åt dig.
                </Typography>

                <div className="flex gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleCloseModal}
                    className="flex-1"
                  >
                    Stäng
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1"
                  >
                    Skapa
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

CreateListingStep18.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep18; 