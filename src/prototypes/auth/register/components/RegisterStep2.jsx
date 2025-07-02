import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';

const RegisterStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [verificationCode, setVerificationCode] = useState(formData.verificationCode || '');

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
    updateFormData({ verificationCode: value });
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation - always allow continue
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Typography variant="h2" className="text-gray-900 mb-4">
            Verifiera din mejl
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            Fyll i koden vi skickade till <strong>{formData.email || 'daniel@lauding.se'}</strong>
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex gap-2 justify-center mb-6">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg font-mono border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none"
                  value={verificationCode[index] || ''}
                  onChange={(e) => {
                    const newCode = verificationCode.split('');
                    newCode[index] = e.target.value;
                    const updatedCode = newCode.join('').slice(0, 6);
                    setVerificationCode(updatedCode);
                    updateFormData({ verificationCode: updatedCode });
                    
                    // Auto-focus next input
                    if (e.target.value && index < 5) {
                      const nextInput = e.target.parentElement.children[index + 1];
                      nextInput?.focus();
                    }
                  }}
                  onKeyDown={(e) => {
                    // Auto-focus previous input on backspace
                    if (e.key === 'Backspace' && !e.target.value && index > 0) {
                      const prevInput = e.target.parentElement.children[index - 1];
                      prevInput?.focus();
                    }
                  }}
                />
              ))}
            </div>
          </div>

          <div className="text-center">
            <Typography variant="h4" className="text-gray-900 mb-2">
              Fick du inte koden?
            </Typography>
            <Typography variant="body-md" className="text-gray-600">
              Kontrollera din skräppost eller{' '}
              <button
                type="button"
                onClick={handleResendCode}
                className="underline text-blue-600 hover:text-blue-800"
              >
                skicka en ny kod
              </button>
            </Typography>
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Verifiera
          </Button>
        </form>
      </div>
    </div>
  );
};

RegisterStep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep2; 