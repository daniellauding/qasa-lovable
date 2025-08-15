import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Input from '../../../../components/ui/Input';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateListingStep5 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [userType, setUserType] = useState(formData.userType || 'individual');
  const [isProfessional, setIsProfessional] = useState(formData.isProfessional || 'no');
  const [companyName, setCompanyName] = useState(formData.companyName || '');
  const [orgNumber, setOrgNumber] = useState(formData.orgNumber || '');

  const userTypeOptions = [
    { value: 'individual', label: 'Privatperson' },
    { value: 'company', label: 'Företag' },
  ];

  const professionalOptions = [
    { value: 'no', label: 'Nej' },
    { value: 'yes', label: 'Ja' },
  ];

  const handleUserTypeChange = (value) => {
    setUserType(value);
    updateFormData({ userType: value });
  };

  const handleProfessionalChange = (value) => {
    setIsProfessional(value);
    updateFormData({ isProfessional: value });
  };

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
    updateFormData({ companyName: e.target.value });
  };

  const handleOrgNumberChange = (e) => {
    setOrgNumber(e.target.value);
    updateFormData({ orgNumber: e.target.value });
  };

  const showCompanyFields = userType === 'company' && isProfessional === 'no';

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Vem är du?
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Vi behöver veta om du hyr ut som privatperson eller företag
            </Typography>
          </div>

          {/* User Type Selection */}
          <div className="space-y-6">
            <RadioGroup
              label=""
              options={userTypeOptions}
              variant="card"
              value={userType}
              onValueChange={handleUserTypeChange}
            />

            {/* Professional Company Question */}
            {userType === 'company' && (
              <div className="space-y-4">
                <Typography variant="body-md" className="text-gray-700">
                  Är ni ett professionellt fastighetsbolag som ska hyra ut i första hand?
                </Typography>
                <RadioGroup
                  label=""
                  options={professionalOptions}
                  variant="card"
                  value={isProfessional}
                  onValueChange={handleProfessionalChange}
                />
              </div>
            )}

            {/* Company Details */}
            {showCompanyFields && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Företagsnamn
                  </label>
                  <Input
                    placeholder="Företag AB"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organisationsnummer
                  </label>
                  <Input
                    placeholder="556677-8899"
                    value={orgNumber}
                    onChange={handleOrgNumberChange}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="tertiary"
            size="lg"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeft className="h-5 w-5" />}
            aria-label="Tillbaka"
          />
          
          <Button
            variant="primary"
            size="lg"
            onClick={onNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateListingStep5.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep5; 