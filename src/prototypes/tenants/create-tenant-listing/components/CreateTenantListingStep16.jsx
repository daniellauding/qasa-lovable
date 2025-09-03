import PropTypes from 'prop-types';
import React from 'react';
import Button from '../../../../components/ui/Button';
import SectionFooter from '../../../../components/ui/SectionFooter';
import SectionHeader from '../../../../components/ui/SectionHeader';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep16 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();

  const handleVerify = () => {
    // In a real implementation, this would navigate to the verification service
    window.open('/sv/id-verification?redirectUrl=/create-tenant-listing/verifications', '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <SectionHeader 
          title="Intyg och verifieringar"
          description="Ange referenser och verifiera din identitet för att få en ännu mer attraktiv profil"
          titleVariant="h1"
          titleColor="text-gray-900"
          descriptionColor="text-gray-600"
          className="mb-8"
        />

          {/* Verification Section */}
          <div className="space-y-6">
            <div className="space-y-4">
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

        <SectionFooter 
          onNext={onNext}
          onPrev={onPrev}
          nextText={t('common.next', 'Nästa')}
          prevText={t('common.back', 'Tillbaka')}
          className="mt-8"
        />
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