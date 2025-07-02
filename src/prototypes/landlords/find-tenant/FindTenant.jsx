import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card, { CreateTenantProfileCard, TenantCard, LandlordCTACard } from '../../../components/ui/Card';
import Typography from '../../../components/ui/Typography';
import Button from '../../../components/ui/Button';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../utils/translations/LanguageContext';

// Base tenant data (dynamic descriptions based on language)
const baseTenants = [
  {
    id: 1,
    name: 'Emilie',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05a?w=150&h=150&fit=crop&crop=face',
    people: '2',
    rooms: '2 rooms, 70 m²',
    maxRent: 'SEK 15,000',
    furnished: 'unfurnished',
    moveDate: '2025-09-01',
  },
  {
    id: 2,
    name: 'Anna',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    people: '2',
    rooms: '1 room, 20 m²',
    maxRent: 'SEK 18,000',
    furnished: 'furnished',
    moveDate: '2025-08-01',
  },
  {
    id: 3,
    name: 'Marcus',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '2 rooms, 55 m²',
    maxRent: 'SEK 22,000',
    furnished: 'partiallyFurnished',
    moveDate: '2025-07-15',
  },
  {
    id: 4,
    name: 'Sofia',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '1 room, 35 m²',
    maxRent: 'SEK 12,000',
    furnished: 'furnished',
    moveDate: '2025-06-01',
  },
  {
    id: 5,
    name: 'Erik & Lisa',
    avatar: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face',
    people: '3',
    rooms: '3 rooms, 85 m²',
    maxRent: 'SEK 25,000',
    furnished: 'unfurnished',
    moveDate: '2025-08-15',
  },
  {
    id: 6,
    name: 'David',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '1-2 rooms, 40-60 m²',
    maxRent: 'SEK 20,000',
    furnished: 'either',
    moveDate: '2025-07-01',
  },
  {
    id: 7,
    name: 'Lina',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '1 room, 30 m²',
    maxRent: 'SEK 14,000',
    furnished: 'furnished',
    moveDate: '2025-09-15',
  },
  {
    id: 8,
    name: 'Johan',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '2 rooms, 60 m²',
    maxRent: 'SEK 19,000',
    furnished: 'unfurnished',
    moveDate: '2025-08-20',
  },
  {
    id: 9,
    name: 'Maria & Alex',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    people: '2',
    rooms: '2 rooms, 75 m²',
    maxRent: 'SEK 16,500',
    furnished: 'partiallyFurnished',
    moveDate: '2025-07-30',
  },
  {
    id: 10,
    name: 'Oliver',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '1 room, 25 m²',
    maxRent: 'SEK 13,000',
    furnished: 'furnished',
    moveDate: '2025-06-15',
  },
  {
    id: 11,
    name: 'Astrid',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '2 rooms, 50 m²',
    maxRent: 'SEK 17,000',
    furnished: 'unfurnished',
    moveDate: '2025-09-30',
  },
  {
    id: 12,
    name: 'Viktor & Emma',
    avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=150&h=150&fit=crop&crop=face',
    people: '2',
    rooms: '3 rooms, 90 m²',
    maxRent: 'SEK 23,000',
    furnished: 'unfurnished',
    moveDate: '2025-08-01',
  },
  {
    id: 13,
    name: 'Saga',
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '1 room, 40 m²',
    maxRent: 'SEK 15,500',
    furnished: 'furnished',
    moveDate: '2025-07-10',
  },
  {
    id: 14,
    name: 'Mikael',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    people: '1',
    rooms: '2 rooms, 65 m²',
    maxRent: 'SEK 21,000',
    furnished: 'partiallyFurnished',
    moveDate: '2025-06-20',
  },
  {
    id: 15,
    name: 'Ida & Nils',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&h=150&fit=crop&crop=face',
    people: '2',
    rooms: '2 rooms, 80 m²',
    maxRent: 'SEK 18,500',
    furnished: 'unfurnished',
    moveDate: '2025-08-05',
  },
];

const FindTenant = ({ isFluid = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  // Create localized tenant data
  const dummyTenants = baseTenants.map(tenant => ({
    ...tenant,
    description: t(`tenantDescriptions.${tenant.id}`),
    furnished: t(`findTenant.tenantProfile.${tenant.furnished}`),
    moveDate: `${tenant.moveDate} → ${t('findTenant.tenantProfile.untilFurtherNotice')}`,
  }));
  
  const totalPages = Math.ceil((dummyTenants.length + 1) / itemsPerPage); // +1 for create profile card

  // Create grid items (mix of tenants and create profile cards)
  const gridItems = [];

  // Add create tenant profile card as first item
  gridItems.push({
    type: 'create-tenant-profile',
    id: 'create-tenant-profile-1',
    component: (
      <CreateTenantProfileCard
        title="Want landlords to find you?"
        description="Publish your profile here and let your future home come to you."
        buttonText="Create profile"
        onButtonClick={() => alert('Create tenant profile clicked!')}
      />
    )
  });

  // Add tenant cards
  dummyTenants.forEach((tenant, index) => {
    gridItems.push({
      type: 'tenant',
      id: `tenant-${tenant.id}`,
      component: (
        <TenantCard
          key={tenant.id}
          user={tenant}
          verified={index % 3 === 0} // Some verified
          matchPercentage={Math.floor(Math.random() * 40) + 60} // Random match 60-100%
          onCardClick={() => navigate('/tenants/profile?view=public')}
        />
      )
    });
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = gridItems.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const containerClasses = isFluid 
    ? "w-full px-4 sm:px-6 lg:px-8 py-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className={containerClasses}>
        {/* Page Header */}
        <div className="mb-8">
          <Typography variant="title-lg" className="mb-2">
            {t('findTenant.title')}
          </Typography>
          {/* <Typography variant="body-lg" className="text-gray-70">
            {t('findTenant.subtitle')}
          </Typography> */}
        </div>

        {/* Landlord CTA Card - Own Row */}
        <div className="mb-8">
          <LandlordCTACard
            title={t('findTenant.landlordCTA.title')}
            description={t('findTenant.landlordCTA.description')}
            onClick={() => alert('Create listing clicked!')}
          />
        </div>

        {/* Tenant Count */}
        <div className="mb-6">
          <Typography variant="body-md" className="text-gray-70">
            {t('findTenant.tenantCount', { count: '12,012' })}
          </Typography>
        </div>

        {/* Tenant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {currentItems.map(item => (
            <div key={item.id} className="h-full">
              {item.component}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            iconOnly
            variant="transparent"
            size="xs"
            icon={<ArrowLeftIcon className="h-5 w-5" />}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          />

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 text-sm font-medium rounded-full transition-colors ${
                  page === currentPage
                    ? 'bg-ui-pink text-black'
                    : 'text-gray-70 hover:text-gray-90 hover:bg-gray-20'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          <Button
            iconOnly
            variant="transparent"
            size="xs"
            icon={<ArrowRightIcon className="h-5 w-5" />}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </div>
      </main>
    </div>
  );
};

FindTenant.propTypes = {
  isFluid: PropTypes.bool,
};

export default FindTenant; 