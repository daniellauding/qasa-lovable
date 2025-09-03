import { Calendar, Check, Home, IdCard, MapPin, PawPrint, Pen, Sofa, Users } from 'lucide-react';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../components/ui/Button';
import SectionFooter from '../../../../components/ui/SectionFooter';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep17 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();

  const getMonthName = (monthIndex) => {
    const months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 
                   'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];
    return months[parseInt(monthIndex)] || '';
  };

  const getScheduleTypeLabel = (type) => {
    return type === 'full_time' ? 'Heltid' : 'Deltid';
  };

  const occupations = formData.occupations || [];
  const completedSections = [
    'Överblick',
    'Introduktion', 
    'Letar efter',
    'Boendesituation',
    'Sysselsättning'
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-[var(--color-background-inset)]">
      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="https://img.qasa.se/unsafe/fit-in/320x320/https://qasa-static-dev.s3-eu-west-1.amazonaws.com/img/aaf2bcf286f1d691a4279a435dff6e631d8604a56d46c9003c2b864e075382b5.png"
                  alt={formData.firstName}
                  className="w-32 h-32 rounded-full object-cover"
                />
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Typography variant="title-xl" className="text-gray-900 mb-2">
                    {formData.firstName || 'Daniel'}
                  </Typography>
                  <Typography variant="title-md" className="text-gray-700 mb-4">
                    {formData.bioTitle || 'Jag jobbar platsoberoende och gillar att laga mat'}
                  </Typography>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              {/* Verification Status */}
              <div className="flex gap-2 mb-4">
                <Button variant="outline" size="sm" className="opacity-70">
                  <span className="flex items-center gap-2">
                    <IdCard className="h-4 w-4" />
                    Ej verifierad
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Progress Section */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-4">
              <Typography variant="title-md" className="text-gray-900">
                Du är nästan klar
              </Typography>
              
              <div className="space-y-3">
                {completedSections.map((section, index) => (
                  <div key={section} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">{section}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4">
                <div className="flex-1 bg-pink-200 rounded-full h-2">
                  <div className="bg-pink-400 rounded-full h-2" style={{width: '97%'}}></div>
                </div>
                <span className="text-sm font-medium text-gray-700">97%</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button variant="primary" size="lg" className="w-full">
                Nästa
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-start justify-between mb-4">
                <Typography variant="body-md" className="text-gray-700 flex-1">
                  {formData.bio || 'Just nu bor jag på internet och söker andra lägenheter att jobba ifrån när jag jobbar på distans'}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>
              
              {formData.bioPets && (
                <div className="flex items-center gap-2 text-gray-600">
                  <PawPrint className="h-5 w-5" />
                  <Typography variant="body-sm">
                    {formData.bioPets}
                  </Typography>
                </div>
              )}
            </div>

            {/* Looking For Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Letar efter
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Lund</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">5 rum, 123 m²</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Boende för 4 personer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sofa className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Omöblerad bostad</span>
                </div>
                <div className="flex items-center gap-3">
                  <Home className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Lägenhet, Parhus, Radhus, Villa, Övrigt</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">19 juli 2025 → 16 augusti 2025</span>
                </div>
              </div>
            </div>

            {/* Preferences Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Preferenser
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Balkong</span>
              </div>
            </div>

            {/* Requirements Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Krav
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              <Typography variant="body-md" className="text-gray-600">
                Inga krav
              </Typography>
            </div>

            {/* Employment Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Sysselsättning
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              <div className="space-y-4">
                {occupations.slice(0, 2).map((occupation, index) => (
                  <div key={occupation.id} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                    <Typography variant="title-sm" className="text-gray-900 mb-1">
                      {occupation.title}
                    </Typography>
                    {occupation.subtitle && (
                      <Typography variant="body-sm" className="text-gray-600 mb-1">
                        {occupation.subtitle}
                      </Typography>
                    )}
                    <Typography variant="body-sm" className="text-gray-600 mb-2">
                      {getScheduleTypeLabel(occupation.scheduleType)}
                    </Typography>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{getMonthName(occupation.startMonth)} {occupation.startYear}</span>
                      <span>→</span>
                      {occupation.isOngoing ? (
                        <span className="text-green-600 font-medium">Pågående</span>
                      ) : (
                        <span>{getMonthName(occupation.endMonth)} {occupation.endYear}</span>
                      )}
                    </div>
                  </div>
                ))}

                {occupations.length > 2 && (
                  <Button variant="outline" size="sm">
                    Visa alla
                  </Button>
                )}
              </div>
            </div>

            {/* Housing Situation Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <Typography variant="title-md" className="text-gray-900">
                  Boendesituation
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  icon={<Pen className="h-4 w-4" />}
                  aria-label="Redigera"
                />
              </div>

              <div className="space-y-4">
                <div>
                  <Typography variant="title-sm" className="text-gray-900 mb-1">
                    Nuvarande boendesituation
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    Egen lägenhet i lund
                  </Typography>
                </div>
                <div>
                  <Typography variant="title-sm" className="text-gray-900 mb-1">
                    Anledning till flytt
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    det är hemligt
                  </Typography>
                </div>
                <div>
                  <Typography variant="title-sm" className="text-gray-900 mb-1">
                    Tidigare boende
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    aa
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="bg-white rounded-lg shadow-sm">
          <SectionFooter 
            onNext={onNext}
            onPrev={onPrev}
            nextText="Slutför"
            prevText="Tillbaka"
            className="p-6"
          />
        </div>
      </div>
    </div>
  );
};

CreateTenantListingStep17.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep17; 