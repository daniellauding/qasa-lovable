import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams } from 'react-router-dom';
import {
  MapPin,
  Users,
  Coins,
  Calendar,
  Sofa,
  House,
  PawPrint,
  AlertTriangle,
  ArrowRight,
  Edit,
} from 'lucide-react';
import DynamicHeader from '../../../components/DynamicHeader';
import Typography from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';
import Modal from '../../../components/ui/Modal';
import Avatar from '../../../components/ui/Avatar';
import DevExperimentsButton from '../../../components/DevExperimentsButton';
import { useTranslation } from '../../../utils/translations/LanguageContext';

export default function TenantProfilePage() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const isPublicView = searchParams.get('view') === 'public';

  const [activeModal, setActiveModal] = useState(null);

  // Mock profile data based on the provided HTML structure
  const profile = {
    name: 'Liza',
    age: 27,
    title: 'Phd student looking for a long-term apartment in Umeå.',
    bio: 'I am looking for an apartment close to the Umeå University to rent between now and January 2028. I am a tidy person, non-smoker, no pets.',
    verified: true,
    hasReference: true,
    avatar:
      'https://img.qasa.se/unsafe/fit-in/320x320/https://qasa-static-prod.s3-eu-west-1.amazonaws.com/img/69be410989d5bf43480353f89bd08b21f99f3170824a2f2a5e93ab1e6c5f345d.jpg',
    lastActive: 'fem minuter',
    searchCriteria: {
      location: 'Umeå',
      rooms: '2',
      size: '45',
      people: '1',
      furnished: 'both',
      propertyTypes: ['apartment', 'townhouse', 'villa', 'semi_detached'],
      moveInDate: 'asap',
      moveOutDate: 'indefinite',
      maxRent: '7000',
    },
    preferences: [],
    requirements: [],
    occupation: {
      title: 'PhD student',
      company: '',
      type: 'full_time',
      startMonth: 'Oktober',
      startYear: '2023',
      ongoing: true,
    },
    housingSituation: {
      currentType: 'student_housing',
      currentLocation: 'Studentboende i Umeå',
      movingReason:
        'I moved to Umeå in October 2023, and I am a Phd student at Umeå University. Looking for a long term apartment.',
      hasReference: true,
    },
    contactHistory: {
      locations: 'Umeå',
      priceRange: { min: 5800, max: 5927 },
      rooms: 3,
    },
  };

  const formatLastActive = time => {
    return t('tenantProfile.lastActive', { time });
  };

  const openModal = modalType => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  // Reusable section header component with edit button
  const SectionHeader = ({ title, onEdit, showEdit = !isPublicView }) => (
    <div className="flex items-center justify-between">
      <Typography variant="title-sm" className="text-gray-900">
        {title}
      </Typography>
      {showEdit && (
        <Button
          variant="ghost"
          size="sm"
          onClick={onEdit}
          className="text-gray-500 hover:text-gray-700"
        >
          <Edit className="w-4 h-4" />
        </Button>
      )}
    </div>
  );

  SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    showEdit: PropTypes.bool,
  };

  return (
    <div className="min-h-screen bg-white">
      <DynamicHeader isFluid={true} />

      {/* Profile Header - Full Width Background */}
      <div className="bg-[var(--color-background-inset)]">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center gap-8">
            <div className="relative">
              <Avatar
                src={profile.avatar}
                alt={profile.name}
                size="3xl"
                className="!w-20 !h-20 md:!w-80 md:!h-80 shadow-lg"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <Typography variant="title-lg" className="text-gray-900 mb-2">
                    {profile.name} ({profile.age})
                  </Typography>
                  <Typography variant="title-sm" className="text-gray-700 mb-4">
                    {profile.title}
                  </Typography>
                </div>
                {!isPublicView && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openModal('basicInfo')}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.verified && (
                  <Button variant="outline" size="sm">
                    <Icon name="IdCard" size="sm" className="mr-2" />
                    {t('tenantProfile.verified')}
                  </Button>
                )}
                {profile.hasReference && (
                  <Button variant="outline" size="sm">
                    <Icon name="HousePlus" size="sm" className="mr-2" />
                    {t('tenantProfile.hasReference')}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Content */}
          <div className="lg:col-span-2">
            {/* Profile Content */}
            <div className="space-y-8">
              {/* Introduction Section */}
              <div className="space-y-4">
                <Typography variant="body-md" className="text-gray-800">
                  {profile.bio}
                </Typography>

                <div className="flex items-center gap-3">
                  <PawPrint className="w-5 h-5 text-gray-600" />
                  <Typography variant="body-md" className="text-gray-700">
                    /
                  </Typography>
                </div>
              </div>

              {/* Looking For Section */}
              <div className="space-y-4">
                <SectionHeader
                  title={t('tenantProfile.sections.lookingFor.title')}
                  onEdit={() => openModal('lookingFor')}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {profile.searchCriteria.location}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <House className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {profile.searchCriteria.rooms} rum,{' '}
                      {profile.searchCriteria.size} m²
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {t('tenantProfile.sections.lookingFor.people', {
                        count: profile.searchCriteria.people,
                      })}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sofa className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {t('tenantProfile.sections.lookingFor.furnished')}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <House className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {t('tenantProfile.sections.lookingFor.propertyTypes')}
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      <span className="flex items-center gap-1">
                        <span>
                          {t('tenantProfile.sections.lookingFor.asap')}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                        <span>
                          {t('tenantProfile.sections.lookingFor.indefinite')}
                        </span>
                      </span>
                    </Typography>
                  </div>
                  <div className="flex items-center gap-3 md:col-span-2">
                    <Coins className="w-5 h-5 text-gray-600" />
                    <Typography variant="body-md" className="text-gray-700">
                      {t('tenantProfile.sections.lookingFor.maxRentAmount', {
                        amount: Number(
                          profile.searchCriteria.maxRent
                        ).toLocaleString(),
                      })}
                    </Typography>
                  </div>
                </div>
              </div>

              {/* Preferences Section */}
              <div className="space-y-4">
                <SectionHeader
                  title={t('tenantProfile.sections.preferences.title')}
                  onEdit={() => openModal('preferences')}
                />
                <Typography variant="body-md" className="text-gray-700">
                  {profile.preferences.length === 0
                    ? t('tenantProfile.sections.preferences.noPreferences')
                    : profile.preferences.join(', ')}
                </Typography>
              </div>

              {/* Employment Section */}
              <div className="space-y-4">
                <SectionHeader
                  title={t('tenantProfile.sections.employment.title')}
                  onEdit={() => openModal('employment')}
                />

                <div className="bg-[var(--color-background-inset)] rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <Typography
                        variant="title-xs"
                        className="text-gray-900 mb-1"
                      >
                        {profile.occupation.title}
                      </Typography>
                      <Typography
                        variant="body-md"
                        className="text-gray-600 mb-1"
                      >
                        {profile.occupation.company}
                      </Typography>
                      <Typography
                        variant="body-md"
                        className="text-gray-600 mb-2"
                      >
                        {t('tenantProfile.sections.employment.fullTime')}
                      </Typography>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>
                          {profile.occupation.startMonth}{' '}
                          {profile.occupation.startYear}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                        <span>
                          {t('tenantProfile.sections.employment.ongoing')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Housing Situation Section */}
              <div className="space-y-4">
                <SectionHeader
                  title={t('tenantProfile.sections.housingSituation.title')}
                  onEdit={() => openModal('housingSituation')}
                />

                <div className="space-y-4">
                  <div>
                    <Typography
                      variant="title-xs"
                      className="text-gray-900 mb-1"
                    >
                      {t(
                        'tenantProfile.sections.housingSituation.currentSituation'
                      )}
                    </Typography>
                    <Typography variant="body-md" className="text-gray-700">
                      {profile.housingSituation.currentLocation}
                    </Typography>
                    {profile.housingSituation.hasReference && (
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center justify-center w-4 h-4 bg-gray-100 rounded">
                          <Icon name="HousePlus" size="xs" />
                        </div>
                        <Typography
                          variant="body-sm"
                          className="text-gray-700 font-medium"
                        >
                          {t(
                            'tenantProfile.sections.housingSituation.reference'
                          )}
                        </Typography>
                      </div>
                    )}
                  </div>
                  <div>
                    <Typography
                      variant="title-xs"
                      className="text-gray-900 mb-1"
                    >
                      {t(
                        'tenantProfile.sections.housingSituation.movingReason'
                      )}
                    </Typography>
                    <Typography variant="body-md" className="text-gray-700">
                      {profile.housingSituation.movingReason}
                    </Typography>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200" />

              {/* Contact History */}
              <div>
                <Typography variant="title-sm" className="text-gray-900 mb-4">
                  {t('tenantProfile.sections.contactHistory.title')}
                </Typography>
                <div className="bg-[var(--color-background-inset)] rounded-lg p-4 space-y-2">
                  <Typography variant="body-md" className="text-gray-600">
                    <span className="font-medium">
                      {t('tenantProfile.sections.contactHistory.locations', {
                        locations: profile.contactHistory.locations,
                      })}
                    </span>
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    <span className="font-medium">
                      {t('tenantProfile.sections.contactHistory.priceRange', {
                        min: profile.contactHistory.priceRange.min,
                        max: profile.contactHistory.priceRange.max,
                      })}
                    </span>
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    <span className="font-medium">
                      {t('tenantProfile.sections.contactHistory.rooms', {
                        count: profile.contactHistory.rooms,
                      })}
                    </span>
                  </Typography>
                </div>
              </div>

              {/* Report Profile */}
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  className="text-red-600 border-red-200 hover:bg-red-50"
                >
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  {t('tenantProfile.reportProfile')}
                </Button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact & Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="space-y-4">
                <div>
                  <Typography variant="title-sm" className="text-gray-900 mb-2">
                    {profile.name}
                  </Typography>
                  <Typography variant="body-md" className="text-gray-600">
                    {formatLastActive(profile.lastActive)}
                  </Typography>
                </div>

                <hr className="border-gray-200" />

                <Button variant="primary" fullWidth>
                  {t('tenantProfile.contact')}
                </Button>
              </div>
            </div>

            {/* Rent Better Card */}
            <div className="bg-[var(--color-background-inset)] rounded-lg p-6 shadow-lg">
              <div className="space-y-4">
                <Typography variant="title-md" className="text-gray-900">
                  {t('tenantProfile.sidebar.rentBetter')}
                </Typography>
                <Typography variant="body-md" className="text-gray-700">
                  {t('tenantProfile.sidebar.rentBetterDescription')}
                </Typography>
                <Button variant="outline" href="/sv/how-it-works">
                  {t('tenantProfile.sidebar.readMore')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modals */}
      {activeModal === 'basicInfo' && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t('tenantProfile.modals.basicInfo.title')}
        >
          <div className="p-6">
            <Typography variant="body-md" className="text-gray-600">
              {t('tenantProfile.modals.basicInfo.placeholder')}
            </Typography>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={closeModal}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={closeModal}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'lookingFor' && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t('tenantProfile.modals.lookingFor.title')}
        >
          <div className="p-6">
            <Typography variant="body-md" className="text-gray-600">
              {t('tenantProfile.modals.lookingFor.placeholder')}
            </Typography>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={closeModal}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={closeModal}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'preferences' && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t('tenantProfile.modals.preferences.title')}
        >
          <div className="p-6">
            <Typography variant="body-md" className="text-gray-600">
              {t('tenantProfile.modals.preferences.placeholder')}
            </Typography>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={closeModal}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={closeModal}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'employment' && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t('tenantProfile.modals.employment.title')}
        >
          <div className="p-6">
            <Typography variant="body-md" className="text-gray-600">
              {t('tenantProfile.modals.employment.placeholder')}
            </Typography>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={closeModal}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={closeModal}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {activeModal === 'housingSituation' && (
        <Modal
          isOpen={true}
          onClose={closeModal}
          title={t('tenantProfile.modals.housingSituation.title')}
        >
          <div className="p-6">
            <Typography variant="body-md" className="text-gray-600">
              {t('tenantProfile.modals.housingSituation.placeholder')}
            </Typography>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={closeModal}>
                {t('common.cancel')}
              </Button>
              <Button variant="primary" onClick={closeModal}>
                {t('common.save')}
              </Button>
            </div>
          </div>
        </Modal>
      )}

      <DevExperimentsButton />
    </div>
  );
}
