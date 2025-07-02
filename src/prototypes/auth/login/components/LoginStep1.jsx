import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/ui/Button';
import Typography from '../../../../components/ui/Typography';
import Input from '../../../../components/ui/Input';
import { useNavigate } from 'react-router-dom';

const LoginStep1 = ({ onNext, formData, updateFormData }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    updateFormData({ email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    updateFormData({ password: e.target.value });
  };

  const handleForgotPassword = () => {
    navigate('/auth/login/step/2');
  };

  const handleRegister = () => {
    navigate('/auth/register');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No validation - always allow continue
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Typography variant="h1" className="text-gray-900 mb-4">
            Välkommen tillbaka
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            Logga in för att hantera din uthyrning eller hitta ditt nästa hem.
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

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Lösenord
            </label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              className="w-full"
            />
          </div>

          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Glömt lösenord?
          </button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Logga in
          </Button>
        </form>

        <div className="mt-8 text-center">
          <Typography variant="body-md" className="text-gray-600 mb-4">
            Har du inget konto?
          </Typography>
          <Button
            variant="outline"
            size="md"
            onClick={handleRegister}
            className="w-full"
          >
            Registrera dig
          </Button>
        </div>
      </div>
    </div>
  );
};

LoginStep1.propTypes = {
  onNext: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  updateFormData: PropTypes.func.isRequired,
};

export default LoginStep1; 