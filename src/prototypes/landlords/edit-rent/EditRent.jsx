import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderCreationFlow from '../../../components/Header/HeaderCreationFlow';
import Button from '../../../components/ui/Button';
import Typography from '../../../components/ui/Typography';
import Input from '../../../components/ui/Input';
import DevExperimentsButton from '../../../components/DevExperimentsButton';

const EditRent = () => {
  const navigate = useNavigate();
  const [rent, setRent] = useState('1000');

  const handleSaveAndExit = () => {
    // Save the rent amount and go back to dashboard
    navigate('/landlords/dashboard');
  };

  const handleDismiss = () => {
    // Go back to experiments dashboard without saving
    navigate('/experiments');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderCreationFlow onDismiss={handleDismiss} />
      
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-sm">
          <div className="p-8 space-y-8">
            <div className="space-y-4">
              <Typography variant="title-lg" className="text-gray-900">
                Vilken hyra hade du tänkt dig?
              </Typography>
              <Typography variant="body-md" className="text-gray-600">
                Fyll i hyran utan övriga kostnader.
              </Typography>
            </div>

            <div className="space-y-6">
              <Typography variant="body-md" className="text-gray-700">
                Tänk på att det finns lagar och regler kring vilken hyra som kan tas ut vid 
                andrahandsuthyrning av en hyresrätt. <span className="underline cursor-pointer">Läs mer</span>
              </Typography>

              <div>
                <label htmlFor="rent" className="block text-sm font-medium text-gray-700 mb-2">
                  Hyra
                </label>
                <div className="relative">
                  <Input
                    id="rent"
                    type="number"
                    value={rent}
                    onChange={(e) => setRent(e.target.value)}
                    className="w-full pr-8"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">kr</span>
                </div>
                <Typography variant="body-sm" className="text-gray-500 mt-2">
                  Hyresgästens månadskostnad är hyran + 4.95% serviceavgift. Den hyra du anger är vad du får 
                  utbetalt varje månad - inga kostnader tillkommer för dig som hyresvärd.
                </Typography>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <Typography variant="body-sm" className="text-gray-700 font-medium mb-2">
                  All hyra betalas
                </Typography>
                <Typography variant="body-sm" className="text-gray-600">
                  Vi betalar ut hyran till dig månadsvis innan den 25:e. Hyresgästen betalar alltid till oss först, 
                  så du behöver aldrig oroa dig för uteblivna betalningar.
                </Typography>
              </div>
            </div>
          </div>

          <div className="px-8 py-6 bg-white border-t border-gray-200 flex items-center justify-between">
            <Button
              variant="outline"
              size="lg"
              onClick={handleDismiss}
            >
              Redigera annons
            </Button>
            <Button
              variant="primary"
              size="lg"
              onClick={handleSaveAndExit}
            >
              Fortsätt
            </Button>
          </div>
        </div>
      </main>
      <DevExperimentsButton />
    </div>
  );
};

export default EditRent; 