import { ArrowLeft, Pen, Plus, Trash2 } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import Checkbox from '../../../../components/ui/Checkbox';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Select from '../../../../components/ui/Select';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep14 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get('action');
  const type = searchParams.get('type');
  const editId = searchParams.get('edit');

  const [occupations, setOccupations] = useState(formData.occupations || [
    {
      id: 1,
      type: 'student',
      title: 'Javascript Bootcamp',
      subtitle: 'Technigo',
      scheduleType: 'full_time',
      startMonth: '7',
      startYear: '2025',
      isOngoing: false,
      endMonth: '',
      endYear: ''
    },
    {
      id: 2,
      type: 'work',
      title: 'Senior Product Design Consultant',
      subtitle: 'Qasa AB',
      scheduleType: 'full_time',
      startMonth: '4',
      startYear: '2025',
      isOngoing: true,
      endMonth: '',
      endYear: ''
    },
    {
      id: 3,
      type: 'other',
      title: 'Tar körkort',
      subtitle: '',
      scheduleType: 'part_time',
      startMonth: '0',
      startYear: '2025',
      isOngoing: true,
      endMonth: '',
      endYear: ''
    },
    {
      id: 4,
      type: 'retired',
      title: 'Pensionerad',
      subtitle: '',
      scheduleType: 'full_time',
      startMonth: '3',
      startYear: '2017',
      isOngoing: true,
      endMonth: '',
      endYear: ''
    }
  ]);

  const [selectedOccupationType, setSelectedOccupationType] = useState('');
  const [currentOccupationForm, setCurrentOccupationForm] = useState({
    type: '',
    title: '',
    subtitle: '',
    scheduleType: 'full_time',
    startMonth: '',
    startYear: '',
    isOngoing: true,
    endMonth: '',
    endYear: ''
  });

  const occupationTypeOptions = [
    { value: 'work', label: 'Jobb' },
    { value: 'student', label: 'Student' },
    { value: 'retired', label: 'Pensionär' },
    { value: 'other', label: 'Övrigt' },
  ];

  const scheduleTypeOptions = [
    { value: 'full_time', label: 'Heltid' },
    { value: 'part_time', label: 'Deltid' },
  ];

  const monthOptions = [
    { value: '', label: 'Välj månad' },
    { value: '0', label: 'Januari' },
    { value: '1', label: 'Februari' },
    { value: '2', label: 'Mars' },
    { value: '3', label: 'April' },
    { value: '4', label: 'Maj' },
    { value: '5', label: 'Juni' },
    { value: '6', label: 'Juli' },
    { value: '7', label: 'Augusti' },
    { value: '8', label: 'September' },
    { value: '9', label: 'Oktober' },
    { value: '10', label: 'November' },
    { value: '11', label: 'December' },
  ];

  // Generate year options from 1941 to 2035
  const generateYearOptions = (isEndYear = false) => {
    const currentYear = new Date().getFullYear();
    const startYear = isEndYear ? currentYear : 1941;
    const endYear = isEndYear ? 2035 : currentYear + 1;
    const years = [];
    years.push({ value: '', label: 'Välj år' });
    for (let year = endYear; year >= startYear; year--) {
      years.push({ value: year.toString(), label: year.toString() });
    }
    return years;
  };

  // Initialize form when editing
  useEffect(() => {
    if (editId && action === 'form') {
      const editingOccupation = occupations.find(occ => occ.id === parseInt(editId));
      if (editingOccupation) {
        setCurrentOccupationForm(editingOccupation);
        setSelectedOccupationType(editingOccupation.type);
      }
    } else if (action === 'form' && type) {
      setSelectedOccupationType(type);
      setCurrentOccupationForm({
        type,
        title: type === 'retired' ? 'Pensionerad' : '',
        subtitle: '',
        scheduleType: 'full_time',
        startMonth: '',
        startYear: '',
        isOngoing: true,
        endMonth: '',
        endYear: ''
      });
    }
  }, [action, type, editId, occupations]);

  const getMonthName = (monthIndex) => {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 
                   'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    return months[parseInt(monthIndex)] || '';
  };

  const getScheduleTypeLabel = (type) => {
    return type === 'full_time' ? 'Heltid' : 'Deltid';
  };

  const handleAddEmployment = () => {
    navigate(`/tenants/create-tenant-listing/step/14?action=select-type`);
  };

  const handleOccupationTypeSelect = (selectedType) => {
    if (selectedType === 'other') {
      navigate(`/tenants/create-tenant-listing/step/14?action=confirm-other`);
    } else {
      navigate(`/tenants/create-tenant-listing/step/14?action=form&type=${selectedType}`);
    }
  };

  const handleConfirmOther = () => {
    navigate(`/tenants/create-tenant-listing/step/14?action=form&type=other`);
  };

  const handleSaveOccupation = () => {
    const newOccupation = {
      ...currentOccupationForm,
      id: editId ? parseInt(editId) : Date.now(),
    };

    let updatedOccupations;
    if (editId) {
      updatedOccupations = occupations.map(occ => 
        occ.id === parseInt(editId) ? newOccupation : occ
      );
    } else {
      updatedOccupations = [...occupations, newOccupation];
    }

    setOccupations(updatedOccupations);
    updateFormData({ occupations: updatedOccupations });
    navigate(`/tenants/create-tenant-listing/step/14`);
  };

  const handleEditOccupation = (occupation) => {
    navigate(`/tenants/create-tenant-listing/step/14?action=form&type=${occupation.type}&edit=${occupation.id}`);
  };

  const handleDeleteOccupation = (id) => {
    const updatedOccupations = occupations.filter(occ => occ.id !== id);
    setOccupations(updatedOccupations);
    updateFormData({ occupations: updatedOccupations });
  };

  const handleBackToMain = () => {
    navigate(`/tenants/create-tenant-listing/step/14`);
  };

  const getFormTitle = () => {
    switch (selectedOccupationType) {
      case 'work': return 'Om ditt arbete';
      case 'student': return 'Om dina studier';
      case 'retired': return 'Om din pension';
      case 'other': return 'Om sysselsättning';
      default: return 'Vad gör du?';
    }
  };

  const getFieldLabels = () => {
    switch (selectedOccupationType) {
      case 'work':
        return { title: 'Jobbtitel', subtitle: 'Företag' };
      case 'student':
        return { title: 'Program', subtitle: 'Skola' };
      case 'retired':
        return { title: '', subtitle: '' };
      case 'other':
        return { title: 'Titel', subtitle: '' };
      default:
        return { title: '', subtitle: '' };
    }
  };

  const handleNext = () => {
    updateFormData({ occupations });
    onNext();
  };

  // Render based on current action
  if (action === 'select-type') {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white flex items-start justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg">
          <div className="py-8 space-y-8">
            <SectionHeader 
              title="Vad gör du?"
              titleVariant="title-lg"
              titleColor="text-gray-900"
            />

            <div className="space-y-6">
              <RadioGroup
                label=""
                options={occupationTypeOptions}
                variant="card"
                value={selectedOccupationType}
                onValueChange={setSelectedOccupationType}
              />
            </div>
          </div>

          <SectionFooter 
            onNext={() => selectedOccupationType && handleOccupationTypeSelect(selectedOccupationType)}
            onPrev={handleBackToMain}
            nextText="Nästa"
            prevText="Tillbaka"
            nextDisabled={!selectedOccupationType}
            variant="left-tertiary-right-primary"
            background="white"
            className="py-6"
          />
        </div>
      </div>
    );
  }

  if (action === 'confirm-other') {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white flex items-start justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg">
          <div className="py-8 space-y-8">
            <SectionHeader 
              title="Är du säker?"
              description="Om det finns något alternativ som bättre beskriver din nuvarande sysselsättning än 'Annan inkomst', välj det. Det ökar dina chanser att få en bostad."
              titleVariant="title-lg"
              titleColor="text-gray-900"
              descriptionColor="text-gray-600"
            />
          </div>

          <SectionFooter 
            onNext={handleConfirmOther}
            onPrev={() => navigate(`/tenants/create-tenant-listing/step/14?action=select-type`)}
            nextText="Nästa"
            prevText="Tillbaka"
            variant="left-tertiary-right-primary"
            background="white"
          />
        </div>
      </div>
    );
  }

  if (action === 'form') {
    return (
      <div className="min-h-[calc(100vh-64px)] bg-white flex items-start justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg">
          <div className="py-8 space-y-8">
            <SectionHeader 
              title={getFormTitle()}
              titleVariant="title-lg"
              titleColor="text-gray-900"
            />
            
            <div className="space-y-6">
              {/* Title field (except for retired) */}
              {selectedOccupationType !== 'retired' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getFieldLabels().title}
                  </label>
                  <Input
                    value={currentOccupationForm.title}
                    onChange={(e) => setCurrentOccupationForm(prev => ({ ...prev, title: e.target.value }))}
                    placeholder={`Ange ${getFieldLabels().title?.toLowerCase()}`}
                  />
                </div>
              )}

              {/* Subtitle field (for work and student) */}
              {(selectedOccupationType === 'work' || selectedOccupationType === 'student') && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {getFieldLabels().subtitle}
                  </label>
                  <Input
                    value={currentOccupationForm.subtitle}
                    onChange={(e) => setCurrentOccupationForm(prev => ({ ...prev, subtitle: e.target.value }))}
                    placeholder={`Ange namnet på ${getFieldLabels().subtitle?.toLowerCase()}`}
                  />
                </div>
              )}

              {/* Schedule type (except for retired) */}
              {selectedOccupationType !== 'retired' && (
                <div>
                  <Typography variant="body-md" className="text-gray-700 mb-4">
                    {selectedOccupationType === 'student' ? 'Utbildningens omfattning' : 'Omfattning av anställning'}
                  </Typography>
                  <RadioGroup
                    label=""
                    options={scheduleTypeOptions}
                    variant="card"
                    value={currentOccupationForm.scheduleType}
                    onValueChange={(value) => setCurrentOccupationForm(prev => ({ ...prev, scheduleType: value }))}
                  />
                </div>
              )}

              {/* Date section */}
              <div>
                <Typography variant="title-sm" className="text-gray-900 mb-4">
                  Datum
                </Typography>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startmånad
                    </label>
                    <Select
                      value={currentOccupationForm.startMonth}
                      onValueChange={(value) => setCurrentOccupationForm(prev => ({ ...prev, startMonth: value }))}
                      options={monthOptions}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Startår
                    </label>
                    <Select
                      value={currentOccupationForm.startYear}
                      onValueChange={(value) => setCurrentOccupationForm(prev => ({ ...prev, startYear: value }))}
                      options={generateYearOptions()}
                    />
                  </div>
                </div>

                {/* Ongoing checkbox */}
                <div className="mb-4">
                  <Checkbox
                    id="ongoing"
                    label="Pågående sysselsättning"
                    checked={currentOccupationForm.isOngoing}
                    onCheckedChange={(checked) => setCurrentOccupationForm(prev => ({ 
                      ...prev, 
                      isOngoing: checked,
                      endMonth: checked ? '' : prev.endMonth,
                      endYear: checked ? '' : prev.endYear
                    }))}
                  />
                </div>

                {/* End date (if not ongoing) */}
                {!currentOccupationForm.isOngoing && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slutmånad
                      </label>
                      <Select
                        value={currentOccupationForm.endMonth}
                        onValueChange={(value) => setCurrentOccupationForm(prev => ({ ...prev, endMonth: value }))}
                        options={monthOptions}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slutår
                      </label>
                      <Select
                        value={currentOccupationForm.endYear}
                        onValueChange={(value) => setCurrentOccupationForm(prev => ({ ...prev, endYear: value }))}
                        options={generateYearOptions(true)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <SectionFooter 
            onNext={handleSaveOccupation}
            onPrev={handleBackToMain}
            nextText="Nästa"
            prevText="Tillbaka"
            variant="left-tertiary-right-primary"
            background="white"
            className="py-6"
          />
        </div>
      </div>
    );
  }

  // Main view - Employment list
  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-start justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="py-8 space-y-8">
          <SectionHeader 
            title="Sysselsättning"
            titleVariant="title-lg"
            titleColor="text-gray-900"
          />

          <div className="space-y-6">
            {occupations.map((occupation, index) => (
              <div key={occupation.id} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <Typography variant="title-sm" className="mb-1">
                      {occupation.title}
                    </Typography>
                    {occupation.subtitle && (
                      <Typography variant="body-sm" className="mb-1">
                        {occupation.subtitle}
                      </Typography>
                    )}
                    <Typography variant="body-sm" className="mb-2">
                      {getScheduleTypeLabel(occupation.scheduleType)}
                    </Typography>
                    <div className="flex items-center gap-2 text-sm">
                      <span>{getMonthName(occupation.startMonth)} {occupation.startYear}</span>
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                      {occupation.isOngoing ? (
                        <span className="font-medium">Pågående</span>
                      ) : (
                        <span>{getMonthName(occupation.endMonth)} {occupation.endYear}</span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() => handleDeleteOccupation(occupation.id)}
                      iconOnly
                      icon={<Trash2 className="h-4 w-4" />}
                      aria-label="Ta bort"
                    />
                    <Button
                      variant="tertiary"
                      size="sm"
                      onClick={() => handleEditOccupation(occupation)}
                      iconOnly
                      icon={<Pen className="h-4 w-4" />}
                      aria-label="Redigera"
                    />
                  </div>
                </div>
                {index < occupations.length - 1 && (
                  <hr className="border-gray-200" />
                )}
              </div>
            ))}

            <Button
              variant="tertiary"
              size="md"
              onClick={handleAddEmployment}
              icon={<Plus className="h-4 w-4" />}
              className="w-fit"
            >
              Lägg till sysselsättning
            </Button>
          </div>
        </div>

        <SectionFooter 
          onNext={handleNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
          nextVariant="secondary"
          variant="left-tertiary-right-primary"
          background="white"
        />
      </div>
    </div>
  );
};

CreateTenantListingStep14.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep14; 