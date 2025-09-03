import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '../../../../components/ui/Typography';
import SectionHeader from '../../../../components/ui/SectionHeader';
import SectionFooter from '../../../../components/ui/SectionFooter';
import TextArea from '../../../../components/ui/TextArea';
import HintBox from '../../../../components/ui/HintBox';

const CreateListingStep12 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [description, setDescription] = useState(formData.description || '');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    updateFormData({ description: e.target.value });
  };

  const remainingChars = 3000 - description.length;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
        <div className="p-8 space-y-8">
          <SectionHeader title="Beskriv din bostad" description="Beskriv din bostad, området och det du vill förmedla i annonstexten. Du kan enkelt ändra din beskrivning senare." />

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-secondary)] mb-2">
                Om bostaden
              </label>
              <TextArea
                value={description}
                onChange={handleDescriptionChange}
                placeholder="Beskrivning"
                rows={6}
                maxLength={3000}
              />
              <div className="flex justify-between items-center mt-2">
                <Typography variant="body-sm" color="secondary">
                  {remainingChars}
                </Typography>
              </div>
              
              <HintBox className="mt-4">
                <Typography variant="body-sm" className="text-[var(--color-text-primary,#362b25)] font-medium mb-2">
                  Saker hyresgäster ofta undrar över:
                </Typography>
                <ul className="space-y-1">
                  <li>• Planlösning</li>
                  <li>• Vad som ingår i hyran</li>
                  <li>• Kommunikation</li>
                  <li>• Varför du hyr ut din bostad</li>
                </ul>
              </HintBox>
            </div>
          </div>
        </div>

        <SectionFooter
          onNext={onNext}
          onPrev={onPrev}
          nextText="Nästa"
          prevText="Tillbaka"
        />
      </div>
    </div>
  );
};

CreateListingStep12.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep12; 