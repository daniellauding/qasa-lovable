import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import TextArea from '../../../../components/ui/TextArea';
import HintBox from '../../../../components/ui/HintBox';
import { ArrowLeft } from 'lucide-react';

const CreateListingStep13 = ({ onNext, onPrev, formData, updateFormData }) => {
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
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Beskriv din bostad
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Beskriv din bostad, området och det du vill förmedla i annonstexten. Du kan enkelt ändra din beskrivning senare.
            </Typography>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <Typography variant="body-sm" className="text-gray-500">
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

        <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
            aria-label="Tillbaka"
          >
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </button>
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

CreateListingStep13.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep13; 