import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const RegisterStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const { t } = useTranslation();
  const [verificationCode, setVerificationCode] = useState(formData.verificationCode || '');

  const handleCodeChange = (e) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(value);
    updateFormData({ verificationCode: value });
    
    // Auto-proceed when code is complete
    if (value.length === 6) {
      setTimeout(() => onNext(), 500); // Small delay for better UX
    }
  };

  const handleResendCode = () => {
    console.log('Resending verification code...');
  };

  const handleContainerClick = () => {
    // Proceed to next step when clicking anywhere in the form
    onNext();
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-transparent flex items-center flex-col justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 cursor-pointer" onClick={handleContainerClick}>
        <div className="text-left mb-8">
          <Typography variant="h2" className="mb-2">
            {t('auth.register.step2.title')}
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            {t('auth.register.step2.subtitle')} <strong className="block">{formData.email || 'daniel@lauding.se'}</strong>
          </Typography>
        </div>

        <div className="space-y-6">
          <div>
            <div className="flex gap-2 justify-center mb-6">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  className="w-12 h-12 text-center text-lg font-mono border-2 border-gray-300 rounded-lg focus:border-gray-500 focus:outline-none"
                  value={verificationCode[index] || ''}
                  onChange={(e) => {
                    e.stopPropagation(); // Prevent container click when typing
                    const newCode = verificationCode.split('');
                    newCode[index] = e.target.value;
                    const updatedCode = newCode.join('').slice(0, 6);
                    handleCodeChange({ target: { value: updatedCode } });
                    
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
                  onClick={(e) => e.stopPropagation()} // Prevent container click when clicking input
                />
              ))}
            </div>
          </div>

          <div className="text-left">
            <Typography variant="title-xxs">
              {t('auth.register.step2.didntGetCode')}
            </Typography>
            <Typography variant="body-md">
              {t('auth.register.step2.checkSpam')}{' '}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent container click
                  handleResendCode();
                }}
                className="underline"
              >
                {t('auth.register.step2.resendCode')}
              </button>
            </Typography>
          </div>

          <div className="text-center mt-6">
            <Typography variant="body-sm" className="text-gray-500">
              {t('auth.register.step2.instruction')}
            </Typography>
          </div>
        </div>
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