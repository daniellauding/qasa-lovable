import React, { useState } from 'react';
import { useTranslation } from '../../utils/translations/LanguageContext';
import Typography from '../../components/ui/Typography/Typography';
import Accordion from '../../components/ui/Accordion/Accordion';
import Button from '../../components/ui/Button/Button';
import Icon from '../../components/ui/Icon';
import Input from '../../components/ui/Input';
import RadioGroup from '../../components/ui/RadioGroup/RadioGroup';

const SettingsPage = () => {
  const { t } = useTranslation();
  const [editingField, setEditingField] = useState(null); // Track which field is being edited

  // Mock data - in real app this would come from API/context
  const [userData, setUserData] = useState({
    firstName: 'Daniel Mattias',
    lastName: 'Lauding',
    email: 'daniel@lauding.se',
    phone: '+46739184410',
    birthDate: '1986-12-09',
    role: 'landlord',
    accountType: 'private',
    notificationFreq: 'not-provided',
    contactRequests: 'notify',
    smsNotifications: 'no',
    promoCode: 'not-provided'
  });

  const accordionSections = [
    {
      id: 'personal',
      title: t('settings.personal.title'),
      description: t('settings.personal.description'),
      content: (
        <div className="space-y-6">
          {/* Name Section */}
          {editingField === 'name' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.personal.name')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="body-sm" className="text-gray-500 mb-2">
                    {t('settings.personal.firstName')}
                  </Typography>
                  <Input
                    value={userData.firstName}
                    onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                    placeholder={t('settings.personal.firstName')}
                  />
                </div>
                <div>
                  <Typography variant="body-sm" className="text-gray-500 mb-2">
                    {t('settings.personal.lastName')}
                  </Typography>
                  <Input
                    value={userData.lastName}
                    onChange={(e) => setUserData({...userData, lastName: e.target.value})}
                    placeholder={t('settings.personal.lastName')}
                  />
                </div>
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.personal.name')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {userData.firstName} {userData.lastName}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('name')}
                aria-label="edit"
              />
            </div>
          )}

          {/* Email Section */}
          {editingField === 'email' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.personal.email')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <Input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                  placeholder={t('settings.personal.email')}
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.personal.email')}
                </Typography>
                <div className="space-y-1">
                  <Typography variant="body-md" className="text-gray-600">
                    {userData.email}
                  </Typography>
                  <Typography variant="body-sm" className="text-gray-500">
                    {t('settings.personal.emailVerified')}
                  </Typography>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('email')}
                aria-label="edit"
              />
            </div>
          )}

          {/* Phone Section */}
          {editingField === 'phone' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.personal.phone')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <Typography variant="body-sm" className="text-gray-500 mb-2">
                    {t('settings.personal.phoneExample')}
                  </Typography>
                  <Input
                    type="tel"
                    value={userData.phone}
                    onChange={(e) => setUserData({...userData, phone: e.target.value})}
                    placeholder={t('settings.personal.phoneExample')}
                  />
                </div>
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.personal.phone')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {userData.phone}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('phone')}
                aria-label="edit"
              />
            </div>
          )}

          {/* Birth Date Section */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="title-xxs" className="mb-1">
                {t('settings.personal.birthDate')}
              </Typography>
              <div className="space-y-1">
                <Typography variant="body-md" className="text-gray-600">
                  {userData.birthDate}
                </Typography>
                <Typography variant="body-sm" className="text-gray-500">
                  {t('settings.personal.birthDateNote')}
                </Typography>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-10 rounded-lg">
            <Typography variant="body-sm" className="text-gray-600">
              {t('settings.personal.privateNote')}
            </Typography>
          </div>
        </div>
      )
    },
    {
      id: 'account',
      title: t('settings.account.title'),
      description: t('settings.account.description'),
      content: (
        <div className="space-y-6">
          {/* Role Section */}
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <Typography variant="title-xxs" className="mb-1">
                {t('settings.account.role')}
              </Typography>
              <Typography variant="body-md" className="text-gray-600">
                {t('settings.account.roleValue')}
              </Typography>
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="Pen" size="sm" />}
              aria-label="edit"
            />
          </div>

          {/* Account Type Section */}
          {editingField === 'accountType' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.account.accountType')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <RadioGroup
                  value={userData.accountType}
                  onChange={(value) => setUserData({...userData, accountType: value})}
                  items={[
                    { value: 'private', label: t('settings.account.privateAccount') },
                    { value: 'business', label: t('settings.account.businessAccount') }
                  ]}
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.account.accountType')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {userData.accountType === 'private' 
                    ? t('settings.account.privateAccount') 
                    : t('settings.account.businessAccount')}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('accountType')}
                aria-label="edit"
              />
            </div>
          )}

          {/* Qasa Premium Section */}
          <div className="mt-6 p-6 bg-gray-10 rounded-lg">
            <div className="space-y-4">
              <Typography variant="title-sm" className="font-semibold">
                {t('settings.account.premium.title')}
              </Typography>
              <Typography variant="body-md" className="text-gray-600">
                {t('settings.account.premium.description')}
              </Typography>
              <Button variant="primary" size="md">
                {t('settings.account.premium.getButton')}
              </Button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'verifications',
      title: t('settings.verifications.title'),
      description: t('settings.verifications.description'),
      content: (
        <div className="space-y-6">
          {/* ID Verification */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="title-xxs">
                {t('settings.verifications.idVerification')}
              </Typography>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {t('settings.verifications.verified')}
              </div>
            </div>
            <Typography variant="body-md" className="text-gray-600 mb-1">
              Daniel Mattias Lauding
            </Typography>
            <Typography variant="body-sm" className="text-gray-500 mb-2">
              19861209-XXXX
            </Typography>
            <Typography variant="body-sm" className="text-gray-500">
              ID verifierat med BankID
            </Typography>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="MoreHorizontal" size="sm" />}
              className="mt-2"
              aria-label="more options"
            />
          </div>

          {/* Credit Check */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="title-xxs">
                {t('settings.verifications.creditCheck')}
              </Typography>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Tillagt
              </div>
            </div>
            <Typography variant="body-md" className="text-gray-600 mb-2">
              {t('settings.verifications.creditCheckCompleted')}
            </Typography>
            <Typography variant="body-sm" className="text-gray-500">
              {t('settings.verifications.validUntil', { date: '2026-06-04' })}
            </Typography>
          </div>

          {/* Credit History */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="title-xxs">
                {t('settings.verifications.creditHistory')}
              </Typography>
              <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                {t('settings.verifications.notVerified')}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="Plus" size="sm" />}
              className="mt-2"
            />
          </div>

          {/* References */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="title-xxs">
                {t('settings.verifications.references')}
              </Typography>
              <div className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-sm">
                {t('settings.verifications.notVerified')}
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="Plus" size="sm" />}
              className="mt-2"
            />
          </div>
        </div>
      )
    },
    {
      id: 'notifications',
      title: t('settings.notifications.title'),
      description: t('settings.notifications.description'),
      content: (
        <div className="space-y-6">
          {/* Notification Frequency */}
          {editingField === 'notificationFreq' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.notifications.frequency')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <RadioGroup
                  value={userData.notificationFreq}
                  onChange={(value) => setUserData({...userData, notificationFreq: value})}
                  items={[
                    { value: 'daily', label: 'Daily' },
                    { value: 'weekly', label: 'Weekly' },
                    { value: 'never', label: 'Never' }
                  ]}
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.notifications.frequency')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {t('settings.notifications.notProvided')}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('notificationFreq')}
                aria-label="edit"
              />
            </div>
          )}

          {/* Contact Requests */}
          {editingField === 'contactRequests' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.notifications.contactRequests')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <RadioGroup
                  value={userData.contactRequests}
                  onChange={(value) => setUserData({...userData, contactRequests: value})}
                  items={[
                    { value: 'notify', label: t('settings.notifications.notifyMe') },
                    { value: 'no', label: t('settings.notifications.noThanks') }
                  ]}
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.notifications.contactRequests')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {t('settings.notifications.notifyMe')}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('contactRequests')}
                aria-label="edit"
              />
            </div>
          )}

          {/* SMS Notifications */}
          {editingField === 'smsNotifications' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.notifications.smsNotifications')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <RadioGroup
                  value={userData.smsNotifications}
                  onChange={(value) => setUserData({...userData, smsNotifications: value})}
                  items={[
                    { value: 'yes', label: 'Yes, send SMS notifications' },
                    { value: 'no', label: t('settings.notifications.noThanks') }
                  ]}
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.notifications.smsNotifications')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {t('settings.notifications.noThanks')}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('smsNotifications')}
                aria-label="edit"
              />
            </div>
          )}
        </div>
      )
    },
    {
      id: 'bankAccount',
      title: t('settings.bankAccount.title'),
      description: t('settings.bankAccount.description'),
      content: (
        <div className="space-y-6">
          {/* Bank Account */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <Typography variant="title-sm" className="font-semibold">
                {t('settings.bankAccount.title')}
              </Typography>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {t('settings.bankAccount.active')}
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4 mb-4">
              <div>
                <Typography variant="body-sm" className="text-gray-500 mb-1">
                  {t('settings.bankAccount.bankName')}
                </Typography>
                <Typography variant="body-md">Handelsbanken</Typography>
              </div>
              <div>
                <Typography variant="body-sm" className="text-gray-500 mb-1">
                  {t('settings.bankAccount.clearingNumber')}
                </Typography>
                <Typography variant="body-md">6117</Typography>
              </div>
              <div>
                <Typography variant="body-sm" className="text-gray-500 mb-1">
                  {t('settings.bankAccount.accountNumber')}
                </Typography>
                <Typography variant="body-md">993176348</Typography>
              </div>
              <div>
                <Typography variant="body-sm" className="text-gray-500 mb-1">
                  {t('settings.bankAccount.country')}
                </Typography>
                <Typography variant="body-md">SE</Typography>
              </div>
            </div>
            
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="MoreHorizontal" size="sm" />}
              aria-label="more options"
            />
          </div>

          {/* Civil Registration */}
          <div className="p-4 bg-gray-10 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <Typography variant="title-sm" className="font-semibold">
                {t('settings.bankAccount.civilRegistration')}
              </Typography>
              <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {t('settings.bankAccount.added')}
              </div>
            </div>
            <Typography variant="body-md" className="text-gray-600 mb-2">
              Gambrinusgatan 2, Stockholm
            </Typography>
            <Button
              variant="ghost"
              size="sm"
              icon={<Icon name="MoreHorizontal" size="sm" />}
              aria-label="more options"
            />
          </div>
        </div>
      )
    },
    {
      id: 'privacy',
      title: t('settings.privacy.title'),
      description: t('settings.privacy.description'),
      content: (
        <div className="py-4">
          <Button variant="secondary" size="md">
            {t('settings.privacy.cookieSettings')}
          </Button>
        </div>
      )
    },
    {
      id: 'taxReports',
      title: t('settings.taxReports.title'),
      description: t('settings.taxReports.description'),
      content: (
        <div className="py-4">
          <Button variant="secondary" size="md">
            {t('settings.taxReports.seeReports')}
          </Button>
        </div>
      )
    },
    {
      id: 'deleteAccount',
      title: t('settings.deleteAccount.title'),
      description: t('settings.deleteAccount.description'),
      content: (
        <div className="py-4">
          <Button variant="danger" size="md">
            {t('settings.deleteAccount.button')}
          </Button>
        </div>
      )
    },
    {
      id: 'promotionalCode',
      title: t('settings.promotionalCode.title'),
      description: t('settings.promotionalCode.description'),
      content: (
        <div className="space-y-6">
          {editingField === 'promoCode' ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Typography variant="title-xxs">
                  {t('settings.promotionalCode.activeCode')}
                </Typography>
                <Button
                  variant="ghost"
                  size="sm"
                  icon={<Icon name="X" size="sm" />}
                  onClick={() => setEditingField(null)}
                  aria-label="cancel"
                />
              </div>
              <div className="space-y-4">
                <Input
                  value={userData.promoCode}
                  onChange={(e) => setUserData({...userData, promoCode: e.target.value})}
                  placeholder="Enter promotional code"
                />
                <Button variant="secondary" size="md" onClick={() => setEditingField(null)}>
                  {t('settings.save')}
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <Typography variant="title-xxs" className="mb-1">
                  {t('settings.promotionalCode.activeCode')}
                </Typography>
                <Typography variant="body-md" className="text-gray-600">
                  {t('settings.notifications.notProvided')}
                </Typography>
              </div>
              <Button
                variant="ghost"
                size="sm"
                icon={<Icon name="Pen" size="sm" />}
                onClick={() => setEditingField('promoCode')}
                aria-label="edit"
              />
            </div>
          )}
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Typography variant="title-lg" className="mb-2">
            {t('settings.title')}
          </Typography>
        </div>

        <div className="space-y-0">
          <Accordion items={accordionSections} />
        </div>


      </div>
    </div>
  );
};

export default SettingsPage;
