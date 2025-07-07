import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import TextArea from '../../../../components/ui/TextArea';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const CreateTenantListingStep15 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [bioTitle, setBioTitle] = useState(formData.bioTitle || 'Jag jobbar platsoberoende och gillar att laga mat');
  const [bio, setBio] = useState(formData.bio || '');
  const [bioPets, setBioPets] = useState(formData.bioPets || 'Nej jag har bara dammråttor');

  const handleBioTitleChange = (e) => {
    const value = e.target.value;
    setBioTitle(value);
    updateFormData({ bioTitle: value });
  };

  const handleBioChange = (e) => {
    const value = e.target.value;
    setBio(value);
    updateFormData({ bio: value });
  };

  const handleBioPetsChange = (e) => {
    const value = e.target.value;
    setBioPets(value);
    updateFormData({ bioPets: value });
  };

  const remainingChars = 240 - bio.length;
  const bioTitleRemainingChars = 60 - bioTitle.length;

  const handleNext = () => {
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-xl" className="text-gray-900">
              Introduktion
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Berätta mer om dig själv
            </Typography>
          </div>

          <div className="space-y-6">
            {/* Bio Title */}
            <div>
              <label htmlFor="bioTitle" className="block text-sm font-medium text-gray-700 mb-2">
                Din rubrik
              </label>
              <TextArea
                id="bioTitle"
                value={bioTitle}
                onChange={handleBioTitleChange}
                placeholder="Exempel: Skötsam student söker liten lägenhet"
                maxLength={60}
                rows={2}
                className="w-full"
              />
              <Typography variant="body-sm" className="text-gray-500 mt-2">
                Beskriv dig själv med en mening.
              </Typography>
            </div>

            {/* Bio Introduction */}
            <div>
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-2">
                Din introduktion
              </label>
              <TextArea
                id="bio"
                value={bio}
                onChange={handleBioChange}
                placeholder="Exempel: Jag bor just nu i Sundsvall och söker boende i Göteborg tillsammans med min pojkvän Adam, då vi planerar att flytta dit i sommar. Vi är skötsamma och lugna personer som gillar att vara ute i naturen och plocka svamp. Vi ser fram emot att hitta ett tryggt och trivsamt hem."
                maxLength={240}
                rows={4}
                className="w-full"
              />
              <Typography variant="body-sm" className="text-gray-500 mt-2">
                {remainingChars} / 240
              </Typography>
            </div>

            {/* Pets */}
            <div>
              <label htmlFor="bioPets" className="block text-sm font-medium text-gray-700 mb-2">
                Vilka husdjur har du, om något? 
                <span className="text-gray-400 font-normal"> (Valfritt)</span>
              </label>
              <Input
                id="bioPets"
                value={bioPets}
                onChange={handleBioPetsChange}
                placeholder="Exempel: Jag har en söt gammal katt :)"
                maxLength={90}
                className="w-full"
              />
              <Typography variant="body-sm" className="text-gray-500 mt-2">
                Vilken sorts husdjur har du - en tax, en innekatt, en vandrande pinne?
              </Typography>
            </div>
          </div>
        </div>

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
            onClick={handleNext}
          >
            Nästa
          </Button>
        </div>
      </div>
    </div>
  );
};

CreateTenantListingStep15.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateTenantListingStep15; 