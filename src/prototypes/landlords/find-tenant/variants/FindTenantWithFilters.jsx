import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Card, { CreateTenantProfileCard, TenantCard, LandlordCTACard } from '../../../../components/ui/Card';
import Typography from '../../../../components/ui/Typography';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';
import RangeSlider from '../../../../components/ui/RangeSlider';
import Input from '../../../../components/ui/Input';
import Checkbox from '../../../../components/ui/Checkbox';
import { ArrowLeftIcon, ArrowRightIcon, XMarkIcon, AdjustmentsHorizontalIcon, MapPinIcon, CalendarIcon, HomeIcon, UsersIcon, BookmarkIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useTranslation } from '../../../../utils/translations/LanguageContext';

// Property listings for preview
const propertyListings = [
  {
    id: 1,
    title: 'Folkungagatan 44, Stockholm',
    type: 'Apartment',
    rooms: '2 rooms',
    size: '46 m²',
    price: 'SEK 12 500',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Folkungagatan 44, Stockholm',
    type: 'Apartment',
    rooms: '2 rooms',
    size: '46 m²',
    price: 'SEK 12 500',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop'
  }
];

// Base tenant data
const baseTenants = [
  {
    id: 1,
    name: 'Sara',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05a?w=150&h=150&fit=crop&crop=face',
    people: '1 person',
    rooms: '1 room, 33 m²',
    maxRent: 'Max SEK 15,000',
    furnished: 'Furnished',
    moveDate: 'Now → Until further notice',
    age: '(25)',
    description: '25-year old with stable income',
    occupation: ['student', 'worker'],
    household: ['single'],
    rules: { pets: true, smoking: false, verified: false },
    rent: 15000,
    roomCount: 1,
    size: 33,
    tenantCount: 1,
    matchPercentage: 40
  },
  {
    id: 2,
    name: 'Daniel',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    people: '1 person',
    rooms: '1 room, 33 m²',
    maxRent: 'Max SEK 15,000',
    furnished: 'Furnished',
    moveDate: 'Now → Until further notice',
    age: '(39)',
    description: 'Designer needs a home',
    occupation: ['worker'],
    household: ['single'],
    rules: { pets: false, smoking: false, verified: false },
    rent: 15000,
    roomCount: 1,
    size: 33,
    tenantCount: 1,
    matchPercentage: 30
  },
  {
    id: 3,
    name: 'Henka',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    people: '1 person',
    rooms: '1 room, 33 m²',
    maxRent: 'Max SEK 16,000',
    furnished: 'Furnished',
    moveDate: 'Now → Until further notice',
    age: '(27)',
    description: 'Rock artist needs your home',
    occupation: ['worker'],
    household: ['single'],
    rules: { pets: true, smoking: false, verified: false },
    rent: 16000,
    roomCount: 1,
    size: 33,
    tenantCount: 1,
    matchPercentage: 60
  },
  {
    id: 4,
    name: 'Gregory',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    people: '1 person',
    rooms: '1 room, 33 m²',
    maxRent: 'Max SEK 15,000',
    furnished: 'Furnished',
    moveDate: 'Now → Until further notice',
    age: '(43)',
    description: 'Full stack developer looking for a home',
    occupation: ['worker'],
    household: ['single'],
    rules: { pets: false, smoking: false, verified: false },
    rent: 15000,
    roomCount: 1,
    size: 33,
    tenantCount: 1,
    matchPercentage: 40
  }
];

const FindTenantWithFilters = ({ isFluid = false }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const dropdownRef = useRef(null);
  
  // Dropdown states - only these are inline dropdowns
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedPropertyIds, setSelectedPropertyIds] = useState([1]); // Changed to array for multiple selection
  
  // Modal states - only for save search
  const [showSaveSearchModal, setShowSaveSearchModal] = useState(false);
  
  const itemsPerPage = 6;

  // Filter states
  const [filters, setFilters] = useState({
    location: 'Lund',
    dateFrom: 'August, 2025',
    price: 15000,
    rooms: 1,
    tenants: 1,
    rent: { min: 0, max: 30000 },
    size: { min: 5, max: 200 },
    occupation: ['student', 'worker'],
    household: ['single', 'couple'],
    rules: {
      verifiedUsers: true,
      petsAllowed: true,
      smokingAllowed: false,
      furnished: true
    }
  });

  const [locationInput, setLocationInput] = useState('');
  const [saveSearch, setSaveSearch] = useState({
    emailNotifications: true
  });

  // Check if advanced filters are applied (different from defaults)
  const hasAdvancedFilters = () => {
    const defaults = {
      occupation: ['student', 'worker'],
      household: ['single', 'couple'],
      rules: {
        verifiedUsers: true,
        petsAllowed: true,
        smokingAllowed: false,
        furnished: true
      }
    };
    
    return JSON.stringify(filters.occupation) !== JSON.stringify(defaults.occupation) ||
           JSON.stringify(filters.household) !== JSON.stringify(defaults.household) ||
           JSON.stringify(filters.rules) !== JSON.stringify(defaults.rules);
  };

  const resetAdvancedFilters = () => {
    setFilters(prev => ({
      ...prev,
      occupation: ['student', 'worker'],
      household: ['single', 'couple'],
      rules: {
        verifiedUsers: true,
        petsAllowed: true,
        smokingAllowed: false,
        furnished: true
      }
    }));
  };

  const clearAllFilters = () => {
    setFilters(prev => ({
      ...prev,
      occupation: [],
      household: [],
      rules: {
        verifiedUsers: false,
        petsAllowed: false,
        smokingAllowed: false,
        furnished: false
      }
    }));
  };

  const updateOccupation = (value, checked) => {
    setFilters(prev => ({
      ...prev,
      occupation: checked 
        ? [...prev.occupation, value]
        : prev.occupation.filter(item => item !== value)
    }));
  };

  const updateHousehold = (value, checked) => {
    setFilters(prev => ({
      ...prev,
      household: checked 
        ? [...prev.household, value]
        : prev.household.filter(item => item !== value)
    }));
  };

  const updateRules = (key, checked) => {
    setFilters(prev => ({
      ...prev,
      rules: {
        ...prev.rules,
        [key]: checked
      }
    }));
  };

  // Apply filters to tenants
  const filteredTenants = baseTenants;
  const totalPages = Math.ceil((filteredTenants.length + 1) / itemsPerPage);

  // Create grid items
  const gridItems = [];
  
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

  filteredTenants.forEach((tenant, index) => {
    gridItems.push({
      type: 'tenant',
      id: `tenant-${tenant.id}`,
      component: (
        <TenantCard
          key={tenant.id}
          user={{
            name: `${tenant.name} ${tenant.age}`,
            avatar: tenant.avatar,
            description: tenant.description,
            people: tenant.people,
            rooms: tenant.rooms,
            maxRent: tenant.maxRent,
            furnished: tenant.furnished,
            moveDate: tenant.moveDate
          }}
          verified={tenant.rules.verified}
          matchPercentage={tenant.matchPercentage}
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

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const selectedProperty = propertyListings.find(p => selectedPropertyIds.includes(p.id));
  const hasSelectedProperty = selectedPropertyIds.length > 0;

  const togglePropertySelection = (propertyId) => {
    setSelectedPropertyIds(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeDropdown]);

  const containerClasses = isFluid 
    ? "w-full px-4 sm:px-6 lg:px-8 py-8"
    : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8";

  // Add helper to check if advanced filters are active
  const isAdvancedFilterActive = hasAdvancedFilters();

  return (
    <div className="min-h-screen bg-white">
      <main className={containerClasses}>
        {/* Page Header */}
        <div className="mb-6">
          <Typography variant="title-lg" className="mb-2">
            Find Tenant
          </Typography>
        </div>

        {/* Filter Buttons - All in one row */}
        <div className="mb-6" ref={dropdownRef}>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3 flex-wrap mx-auto">
              {/* Property Selector - Compact */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('property')}
                  className="flex items-center gap-2 bg-white rounded-xl h-12 px-2 w-fit hover:bg-gray-20 transition-colors border border-gray-30"
                >
                  {hasSelectedProperty ? (
                    <img
                      src={selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-8 h-8 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-lg bg-gray-20 flex items-center justify-center">
                      <HomeIcon className="w-6 h-6 text-gray-40" />
                    </div>
                  )}
                  {activeDropdown === 'property' ? (
                    <ChevronUpIcon className="w-4 h-4 text-gray-40" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-gray-40" />
                  )}
                </button>

                {/* Property Dropdown */}
                {activeDropdown === 'property' && (
                  <div className="absolute top-full left-0 mt-2 z-50 w-96 max-h-96 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-20 p-6">
                      <Typography variant="title-sm" className="mb-4">
                        Select Properties
                      </Typography>
                      <div className="space-y-4 mb-6">
                        {propertyListings.map(property => (
                          <button
                            key={property.id}
                            onClick={() => togglePropertySelection(property.id)}
                            className="flex items-center gap-4 p-4 border border-gray-20 rounded-xl bg-white hover:bg-gray-10 transition-colors w-full"
                          >
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-20 h-20 rounded-lg object-cover"
                            />
                            <div className="flex-1 text-left">
                              <Typography variant="body-md" className="font-medium mb-1">
                                {property.title}
                              </Typography>
                              <Typography variant="body-sm" className="text-gray-60 mb-1">
                                {property.type} / {property.rooms} / {property.size}
                              </Typography>
                              <Typography variant="body-sm" className="font-medium">
                                {property.price}
                              </Typography>
                            </div>
                            <div
                              className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                                selectedPropertyIds.includes(property.id)
                                  ? 'bg-black border-black'
                                  : 'border-gray-30'
                              }`}
                            >
                              {selectedPropertyIds.includes(property.id) && (
                                <svg
                                  className="w-3 h-3 text-white"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>

                      <Button
                        variant="secondary"
                        size="md"
                        className="w-full bg-gray-90 text-white rounded-full"
                        onClick={() => alert('Create new listing')}
                      >
                        Create listing
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              {/* Location + Date Combined Filter */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('location-date')}
                  className="flex items-center gap-2 bg-white rounded-full px-6 py-3 hover:bg-gray-20 transition-colors border border-gray-30"
                >
                  <MapPinIcon className="w-4 h-4 text-gray-60" />
                  <Typography variant="body-sm">{filters.location}</Typography>
                  <CalendarIcon className="w-4 h-4 text-gray-60" />
                  <Typography variant="body-sm">{filters.dateFrom}</Typography>
                  {activeDropdown === 'location-date' ? (
                    <ChevronUpIcon className="w-4 h-4 text-gray-60" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-gray-60" />
                  )}
                </button>

                {/* Location + Date Dropdown */}
                {activeDropdown === 'location-date' && (
                  <div className="absolute top-full left-0 mt-2 z-50 w-96 max-h-96 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-20 p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-30">
                          <MapPinIcon className="w-4 h-4 text-gray-60" />
                          <Typography variant="body-sm">Lund</Typography>
                          <XMarkIcon className="w-4 h-4 text-gray-60" />
                        </button>
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-30">
                          <CalendarIcon className="w-4 h-4 text-gray-60" />
                          <Typography variant="body-sm">August, 2025</Typography>
                          <XMarkIcon className="w-4 h-4 text-gray-60" />
                        </button>
                      </div>

                      <div className="space-y-8">
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Location
                          </Typography>
                          <div className="flex gap-2">
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-30">
                              <Typography variant="body-sm">Lund</Typography>
                              <XMarkIcon className="w-4 h-4 text-gray-40" />
                            </div>
                            <Input
                              placeholder="Enter a city or area"
                              value={locationInput}
                              onChange={e => setLocationInput(e.target.value)}
                              className="flex-1"
                            />
                            <button className="p-2 text-gray-40">
                              <XMarkIcon className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Date
                          </Typography>
                          <div className="space-y-4">
                            <div>
                              <Typography variant="body-sm" className="mb-2 text-gray-70">
                                Move in
                              </Typography>
                              <Input placeholder="Add dates" className="w-full" />
                            </div>
                            <div>
                              <Typography variant="body-sm" className="mb-2 text-gray-70">
                                Move out
                              </Typography>
                              <Input placeholder="Add dates" className="w-full" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Price + Rooms + Tenants Combined Filter */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('filters')}
                  className="flex items-center gap-2 bg-white rounded-full px-6 py-3 hover:bg-gray-20 transition-colors border border-gray-30"
                >
                  <Typography variant="body-sm">{filters.price.toLocaleString()} SEK</Typography>
                  <HomeIcon className="w-4 h-4 text-gray-60" />
                  <Typography variant="body-sm">{filters.rooms} room</Typography>
                  <UsersIcon className="w-4 h-4 text-gray-60" />
                  <Typography variant="body-sm">{filters.tenants}</Typography>
                  {activeDropdown === 'filters' ? (
                    <ChevronUpIcon className="w-4 h-4 text-gray-60" />
                  ) : (
                    <ChevronDownIcon className="w-4 h-4 text-gray-60" />
                  )}
                </button>

                {/* Combined Filters Dropdown */}
                {activeDropdown === 'filters' && (
                  <div className="absolute top-full left-0 mt-2 z-50 w-96 max-h-96 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-20 p-6">
                      <div className="flex items-center gap-2 mb-6">
                        <button className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-30">
                          <Typography variant="body-sm">
                            Rent: 15,000 SEK - Rooms: 1 room - Tenants: 1
                          </Typography>
                          <XMarkIcon className="w-4 h-4 text-gray-60" />
                        </button>
                      </div>

                      <div className="space-y-8">
                        {/* Rent Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Rent
                          </Typography>
                          <Typography variant="body-sm" className="mb-3 text-gray-70">
                            Monthly cost
                          </Typography>
                          <RangeSlider
                            min={0}
                            max={30000}
                            value={[filters.rent.min, filters.rent.max]}
                            onChange={value =>
                              setFilters(prev => ({
                                ...prev,
                                rent: { min: value[0], max: value[1] }
                              }))
                            }
                            formatValue={value => `SEK ${value.toLocaleString()}`}
                          />
                          <div className="flex justify-between mt-2">
                            <Typography variant="body-sm">SEK 0</Typography>
                            <Typography variant="body-sm">SEK 30,000+</Typography>
                          </div>
                        </div>

                        {/* Size Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Size
                          </Typography>

                          <div className="mb-6">
                            <Typography variant="body-sm" className="mb-3 text-gray-70">
                              Rooms
                            </Typography>
                            <RangeSlider min={1} max={10} value={[1, 10]} onChange={() => {}} />
                            <div className="flex justify-between mt-2">
                              <Typography variant="body-sm">1</Typography>
                              <Typography variant="body-sm">10+</Typography>
                            </div>
                          </div>

                          <div>
                            <Typography variant="body-sm" className="mb-3 text-gray-70">
                              Size
                            </Typography>
                            <RangeSlider
                              min={5}
                              max={200}
                              value={[5, 200]}
                              onChange={() => {}}
                              formatValue={value => `${value} m²`}
                            />
                            <div className="flex justify-between mt-2">
                              <Typography variant="body-sm">5 m²</Typography>
                              <Typography variant="body-sm">200+ m²</Typography>
                            </div>
                          </div>
                        </div>

                        {/* Tenants Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Tenants
                          </Typography>
                          <RangeSlider min={1} max={10} value={[1, 10]} onChange={() => {}} />
                          <div className="flex justify-between mt-2">
                            <Typography variant="body-sm">1</Typography>
                            <Typography variant="body-sm">10+</Typography>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Advanced Filters */}
              <div className="relative">
                <Button
                  variant={isAdvancedFilterActive ? "primary" : "tertiary"}
                  size="lg"
                  iconOnly
                  icon={<AdjustmentsHorizontalIcon className={isAdvancedFilterActive ? "w-4 h-4 text-white" : "w-4 h-4 text-[#372d27]"} />}
                  onClick={() => toggleDropdown('advanced')}
                  className={isAdvancedFilterActive ? "bg-gray-90 text-white" : ""}
                />
                {isAdvancedFilterActive && (
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      resetAdvancedFilters();
                    }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-gray-90 text-white rounded-full flex items-center justify-center text-xs hover:bg-gray-80 transition-colors border-2 border-white shadow"
                    aria-label="Reset filters"
                  >
                    <XMarkIcon className="w-3 h-3" />
                  </button>
                )}

                {/* Advanced Filters Dropdown */}
                {activeDropdown === 'advanced' && (
                  <div className="absolute top-full right-0 mt-2 z-50 w-96 max-h-96 overflow-y-auto">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-20 p-6">
                      <Typography variant="title-sm" className="mb-6 font-title text-2xl font-bold text-gray-900">
                        Filters
                      </Typography>

                      <div className="space-y-8">
                        {/* Occupation Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Occupation
                          </Typography>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Student</Typography>
                              <Checkbox
                                checked={filters.occupation.includes('student')}
                                onChange={checked => updateOccupation('student', checked)}
                              />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Worker</Typography>
                              <Checkbox
                                checked={filters.occupation.includes('worker')}
                                onChange={checked => updateOccupation('worker', checked)}
                              />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Retired</Typography>
                              <Checkbox
                                checked={filters.occupation.includes('retired')}
                                onChange={checked => updateOccupation('retired', checked)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Household Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Household
                          </Typography>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Single</Typography>
                              <Checkbox
                                checked={filters.household.includes('single')}
                                onChange={checked => updateHousehold('single', checked)}
                              />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Couple</Typography>
                              <Checkbox
                                checked={filters.household.includes('couple')}
                                onChange={checked => updateHousehold('couple', checked)}
                              />
                            </div>
                            <div className="flex items-center justify-between p-4 border border-gray-20 rounded-xl">
                              <Typography variant="body-md">Family</Typography>
                              <Checkbox
                                checked={filters.household.includes('family')}
                                onChange={checked => updateHousehold('family', checked)}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Rules Section */}
                        <div>
                          <Typography variant="title-sm" className="mb-4">
                            Rules
                          </Typography>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-3">
                              <Checkbox
                                checked={filters.rules.petsAllowed}
                                onChange={checked => updateRules('petsAllowed', checked)}
                              />
                              <Typography variant="body-md">Pets allowed</Typography>
                            </div>
                            <div className="flex items-center gap-3">
                              <Checkbox
                                checked={filters.rules.smokingAllowed}
                                onChange={checked => updateRules('smokingAllowed', checked)}
                              />
                              <Typography variant="body-md">Smoking allowed</Typography>
                            </div>
                            <div className="flex items-center gap-3">
                              <Checkbox
                                checked={filters.rules.furnished}
                                onChange={checked => updateRules('furnished', checked)}
                              />
                              <Typography variant="body-md">Furnished</Typography>
                            </div>
                            <div className="flex items-center gap-3">
                              <Checkbox
                                checked={filters.rules.verifiedUsers}
                                onChange={checked => updateRules('verifiedUsers', checked)}
                              />
                              <Typography variant="body-md">Verified users</Typography>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="flex items-center justify-between pt-6 border-t border-gray-20 mt-8">
                        <button
                          onClick={clearAllFilters}
                          className="text-gray-60 hover:text-gray-90 font-medium transition-colors"
                        >
                          Clear all
                        </button>
                        <Button
                          onClick={() => setActiveDropdown(null)}
                          className="bg-gray-90 text-white hover:bg-gray-80 px-8 rounded-full"
                          variant="primary"
                          size="lg"
                        >
                          Show 15511 tenants
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Save Button */}
              <Button
                variant="tertiary"
                size="lg"
                iconOnly
                icon={<BookmarkIcon className="w-4 h-4" />}
                onClick={() => setShowSaveSearchModal(true)}
              />
            </div>
          </div>
        </div>

        {/* Tenant Count */}
        <div className="mb-6">
          <Typography variant="body-md" className="text-gray-70">
            15,577 tenants in Sweden
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

      {/* Save Search Modal */}
      <Modal
        isOpen={showSaveSearchModal}
        onClose={() => setShowSaveSearchModal(false)}
        title="Save search"
        showCloseButton={true}
        className="max-w-md"
      >
        <div className="p-6">
          <Typography variant="body-md" className="mb-4 text-gray-70">
            Anywhere / 2 filters
          </Typography>

          <div className="mb-6">
            <Checkbox
              checked={saveSearch.emailNotifications}
              onChange={checked => setSaveSearch({ ...saveSearch, emailNotifications: checked })}
              label="Get notified by email about new tenants"
            />
          </div>

          <div className="flex justify-center">
            <Button
              variant="primary"
              size="md"
              onClick={() => setShowSaveSearchModal(false)}
              className="px-8 bg-gray-90 text-white rounded-full"
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

FindTenantWithFilters.propTypes = {
  isFluid: PropTypes.bool,
};

export default FindTenantWithFilters; 