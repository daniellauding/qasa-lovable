import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import SectionFooter from '../../../../components/ui/SectionFooter';
import Typography from '../../../../components/ui/Typography';

const CreateListingStep16 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [electricityCost, setElectricityCost] = useState(formData.electricityCost || 'included_in_rent');
  const [electricityAmount, setElectricityAmount] = useState(formData.electricityAmount || '');

  const electricityOptions = [
    { value: 'included_in_rent', label: 'El ingår i hyran' },
    { value: 'not_included_in_rent', label: 'El ingår inte i hyran' },
    { value: 'tenant_managed', label: 'Hyresgästen upprättar eget elavtal' },
    { value: 'fixed_fee', label: 'Elkostnad tillkommer utöver hyran' },
  ];

  const handleElectricityCostChange = (value) => {
    setElectricityCost(value);
    updateFormData({ electricityCost: value });
    
    // Clear amount if not fixed fee
    if (value !== 'fixed_fee') {
      setElectricityAmount('');
      updateFormData({ electricityAmount: '' });
    }
  };

  const handleElectricityAmountChange = (e) => {
    const value = e.target.value;
    setElectricityAmount(value);
    updateFormData({ electricityAmount: value });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg">
        <div className="p-8 space-y-8">
          <div className="space-y-4">
            <Typography variant="title-lg" className="text-gray-900">
              Övriga kostnader
            </Typography>
          </div>

          <div className="space-y-8">
            {/* Electricity Cost */}
            <div>
              <Typography variant="body-md" className="text-gray-700 mb-4">
                Elkostnad
              </Typography>
              <RadioGroup
                label=""
                options={electricityOptions}
                variant="card"
                value={electricityCost}
                onValueChange={handleElectricityCostChange}
              />
            </div>

            {/* Electricity Amount - Only show if fixed fee is selected */}
            {electricityCost === 'fixed_fee' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Elkostnad
                </label>
                <div className="relative">
                  <Input
                    type="number"
                    min="0"
                    placeholder="Ange elkostnad"
                    value={electricityAmount}
                    onChange={handleElectricityAmountChange}
                    className="pr-12"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 text-sm">kr</span>
                  </div>
                </div>
              </div>
            )}
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

CreateListingStep16.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default CreateListingStep16; 