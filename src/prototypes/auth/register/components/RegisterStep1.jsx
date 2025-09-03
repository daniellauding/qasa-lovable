import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button';
import Input from '../../../../components/ui/Input';
import RadioGroup from '../../../../components/ui/RadioGroup';
import Typography from '../../../../components/ui/Typography';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

const RegisterStep1 = ({ onNext, formData, updateFormData }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userType, setUserType] = useState(formData.userType || 'tenant');
  const [email, setEmail] = useState(formData.email || '');
  const [password, setPassword] = useState(formData.password || '');

  const userTypeOptions = [
    { value: 'tenant', label: t('auth.register.userTypes.tenant') },
    { value: 'landlord', label: t('auth.register.userTypes.landlord') },
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
    <div className="min-h-[calc(100vh-64px)] bg-transparent flex items-center flex-col justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl p-8">
        <div className="text-left mb-8">
          <Typography variant="display-sm" className="mb-2">
            {t('auth.register.title')}
          </Typography>
          <Typography variant="body-md">
            {t('auth.register.subtitle')}
          </Typography>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Typography variant="body-md" className="text-gray-700 mb-4">
              {t('auth.register.userTypeLabel')}
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
              {t('auth.register.emailLabel')}
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
              {t('auth.register.passwordLabel')}
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
            {t('auth.register.createAccountButton')}
          </Button>
        </form>

        <div className="mt-8 text-center flex flex-col gap-4">
        <Typography variant="title-xxs" color="text-primary">
            {t('auth.register.hasAccount')}
          </Typography>
          <Button
            variant="tertiary"
            size="md"
            onClick={handleLogin}
            className="w-fit mx-auto"
          >
            {t('auth.register.loginButton')}
          </Button>
        </div>
      </div>
      <div className="mt-6 max-w-sm text-center">
        <Typography variant="body-sm" className="text-gray-500">
          Genom att registrera dig som användare godkänner du{' '}
          <a href="#" className="underline">
            villkoren för tjänsten
          </a>
          . Att skapa ett konto hos Qasa är gratis och din data kommer att vara säker hos oss.
        </Typography>
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