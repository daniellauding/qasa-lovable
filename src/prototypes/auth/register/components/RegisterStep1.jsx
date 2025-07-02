import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import { useNavigate } from 'react-router-dom';

const RegisterStep1 = ({ onNext, formData, updateFormData }) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState(formData.userType || 'tenant');
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');

  const userTypeOptions = [
    { value: 'tenant', label: 'Hyra en bostad' },
    { value: 'landlord', label: 'Hyra ut en bostad' },
  ];

  const handleUserTypeChange = (value) => {
    setUserType(value);
    updateFormData({ userType: value });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateFormData({ email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateFormData({ password: e.target.value });
  };

  const handleLogin = () => {
    navigate('/auth/login');
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
          <Typography variant="h1" className="text-gray-900 mb-4">
            Välkommen hem
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            Skapa ett gratis konto för att hitta eller hyra ut ett hem.
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Typography variant="body-md" className="text-gray-700 mb-4">
              Jag vill:
            </Typography>
            <RadioGroup
              label=""
              options={userTypeOptions}
              variant="card"
              value={userType}
              onValueChange={handleUserTypeChange}
            />
          </div>

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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Lösenord
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="new-password"
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Skapa konto
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Typography variant="body-md" className="text-gray-600 mb-4">
            Har du redan ett konto?
          </Typography>
          <Button
            variant="outline"
            size="md"
            onClick={handleLogin}
            className="w-full"
          >
            Logga in
          </Button>
        </div>

        <div className="mt-6 text-center">
          <Typography variant="body-sm" className="text-gray-500">
            Genom att registrera dig som användare godkänner du{' '}
            <a href="#" className="underline text-blue-600 hover:text-blue-800">
              villkoren för tjänsten
            </a>
            . Att skapa ett konto hos Qasa är gratis och din data kommer att vara säker hos oss.
          </Typography>
        </div>
      </div>
    </div>
  );
};

RegisterStep1.propTypes = {
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default RegisterStep1; 