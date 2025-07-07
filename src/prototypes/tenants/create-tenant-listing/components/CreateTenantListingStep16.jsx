import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep16 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();

  const handleVerify = () => {
    // In a real implementation, this would navigate to the verification service
    window.open('/sv/id-verification?redirectUrl=/create-tenant-listing/verifications', '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Intyg och verifieringar
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Ange referenser och verifiera din identitet för att få en ännu mer attraktiv profil
            </Typography>
          </div>

          {/* Verification Section */}
          <div className="space-y-6">
            <div className="border rounded-lg p-6 space-y-4">
              <Typography variant="title-sm" className="text-gray-900">
                Ej verifierad
              </Typography>
              <Typography variant="body-md" className="text-gray-600">
                Verifierat personnummer visar att du är en pålitlig användare.
              </Typography>
              
              <Button
                variant="primary"
                size="lg"
                onClick={handleVerify}
                className="w-auto"
              >
                Verifiera
              </Button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="tertiary"
            size="lg"
            onClick={onPrev}
            iconOnly
            icon={<ArrowLeftIcon className="h-5 w-5" />}
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

CreateTenantListingStep16.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep16; 