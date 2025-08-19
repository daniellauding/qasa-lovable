import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import TextArea from '../../../../components/ui/TextArea';
import HintBox from '../../../../components/ui/HintBox';
import { ArrowLeft } from 'lucide-react';

const CreateListingStep19 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [phoneNumber, setPhoneNumber] = useState(formData.phoneNumber || '+46739184410');
  const [practicalInfo, setPracticalInfo] = useState(formData.practicalInfo || '');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    updateFormData({ phoneNumber: e.target.value });
  };

  const handlePracticalInfoChange = (e) => {
    setPracticalInfo(e.target.value);
    updateFormData({ practicalInfo: e.target.value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Information inför visningar
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Lägg till lite extra information för att göra visningarna så smidiga som möjligt. 
              Informationen delas med hyresgästen innan visning.
            </Typography>
          </div>

          <div className="space-y-8">
            {/* Phone Number Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefonnummer
                </label>
                <Input
                  id="phoneNumber"
                  type="tel"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  placeholder="+46739184410"
                  className="w-full"
                />
                <Typography variant="body-sm" className="text-gray-500 mt-2">
                  Telefonnumret är kopplat till ditt Qasa-konto och till visningen.
                </Typography>
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled
              >
                Spara
              </Button>
            </form>

            {/* Practical Information Form */}
            <form className="space-y-6">
              <div>
                <label htmlFor="practicalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Praktisk information<span className="text-gray-400"> (Valfritt)</span>
                </label>
                <TextArea
                  id="practicalInfo"
                  value={practicalInfo}
                  onChange={handlePracticalInfoChange}
                  placeholder="Fyll i portkod eller annan information för intresserade hyresgäster"
                  rows={4}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled
              >
                Spara
              </Button>
            </form>

            {/* Info Box */}
            <HintBox>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)] font-medium mb-2">
                Bra att veta
              </Typography>
              <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)]">
                Telefonnummer delas 8 timmar innan den bokade visningen. Du kan alltid avboka 
                visningar under tiden din annons är publicerad.
              </Typography>
            </HintBox>
          </div>
        </div>

        <div className="px-8 py-6 bg-white flex items-center justify-between">
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
            Granska
          </Button>
        </div>
      </div>
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