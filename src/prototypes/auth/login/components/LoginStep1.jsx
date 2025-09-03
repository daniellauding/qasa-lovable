import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import Typography from '../../../../components/ui/Typography';
import { useAuth } from '../../../../contexts/AuthContext';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const LoginStep1 = ({ onNext, formData, updateFormData }) => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { t } = useTranslation();
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
    // Log user in and navigate to landing page
    console.log('Login attempted with:', { email, password });
    login(); // Set authentication state
    navigate('/landing'); // Navigate to landing page
  };

  return (
    <div className="min-h-[calc(100vh-64px)] bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8">
        <div className="text-left mb-8">
          <Typography variant="display-sm" className="text-gray-900 mb-2">
            {t('auth.login.title')}
          </Typography>
          <Typography variant="body-md" className="text-gray-600">
            {t('auth.login.subtitle')}
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('auth.login.emailLabel')}
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
              {t('auth.login.passwordLabel')}
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
            className="text-sm underline"
          >
            {t('auth.login.forgotPassword')}
          </button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            {t('auth.login.loginButton')}
          </Button>
        </form>

        <div className="mt-8 text-center gap-4 flex flex-col">
          <Typography variant="title-xxs" color="text-primary">
            {t('auth.login.noAccount')}
          </Typography>
          <Button
            variant="tertiary"
            size="md"
            onClick={handleRegister}
            className="w-fit mx-auto"
          >
            {t('auth.login.signupButton')}
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