import { ArrowLeft } from 'lucide-react';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import Typography from '../../../../components/ui/Typography';

const LoginStep2 = ({ onNext, onPrev, formData, updateFormData }) => {
  const [email, setEmail] = useState(formData.email || '');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateFormData({ email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation - always allow continue
    console.log('Password reset requested for:', email);
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8">
        <div className="text-left mb-8">
          <Typography variant="display-sm" className="text-gray-900 mb-2">
            Glömt lösenord
          </Typography>
          <Typography variant="body-md">
            Ange din e-postadress nedan så skickar vi ett mejl för att återställa ditt lösenord.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              E-post
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="username"
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between pt-4">
            <Button
              variant="tertiary"
              size="md"
              onClick={onPrev}
              iconOnly
              icon={<ArrowLeft className="h-5 w-5" />}
              aria-label="Tillbaka"
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
            >
              Återställ lösenord
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

LoginStep2.propTypes = {
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default LoginStep2; 