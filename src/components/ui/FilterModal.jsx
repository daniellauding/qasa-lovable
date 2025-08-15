import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';
import Button from './Button';
import Checkbox from './Checkbox';
import RadioGroup from './RadioGroup';
import Dropdown from './Dropdown';
import RangeSlider from './RangeSlider';
import DatePicker from './DatePicker';
import Select from './Select';
import { X } from 'lucide-react';

const FilterModal = ({ isOpen, onClose, onApplyFilters }) => {
  const [filters, setFilters] = useState({
    // Rent
    monthlyRent: [0, 30000],
    
    // Size
    rooms: [1, 10],
    size: [5, 200],
    householdSize: 'Show all',
    
    // Dates
    moveInDate: '',
    minRentalLength: 'Show all',
    
    // Home type
    homeType: {
      entireHome: false,
      sharedHome: false,
    },
    propertyType: {
      apartment: false,
      house: false,
      cottage: false,
      dorm: false,
      other: false,
    },
    
    // Furnishing
    furnishing: {
      furnished: false,
      unfurnished: false,
    },
    
    // Category
    category: 'All homes',
    
    // Apply earlier
    applyEarlier: {
      applyEarlierHomes: false,
      homesAvailableForAnyone: false,
    },
    
    // Accessibility
    accessibility: {
      wheelchairAccessible: false,
    },
    
    // Rules
    rules: {
      petsAllowed: false,
      smokingAllowed: false,
    },
  });

  const handleFilterChange = (section, key, value) => {
    setFilters(prev => ({
      ...prev,
      [section]: key === null 
        ? value // Direct assignment for range sliders, selects, etc.
        : typeof prev[section] === 'object' 
        ? { ...prev[section], [key]: value }
        : value
    }));
  };

  const handleClearAll = () => {
    setFilters({
      monthlyRent: [0, 30000],
      rooms: [1, 10],
      size: [5, 200],
      householdSize: 'Show all',
      moveInDate: '',
      minRentalLength: 'Show all',
      homeType: { entireHome: false, sharedHome: false },
      propertyType: { apartment: false, house: false, cottage: false, dorm: false, other: false },
      furnishing: { furnished: false, unfurnished: false },
      category: 'All homes',
      applyEarlier: { applyEarlierHomes: false, homesAvailableForAnyone: false },
      accessibility: { wheelchairAccessible: false },
      rules: { petsAllowed: false, smokingAllowed: false },
    });
  };

  const handleApply = () => {
    onApplyFilters?.(filters);
    onClose();
  };



  return (
    <Modal isOpen={isOpen} onClose={onClose} className="md:max-w-[600px]">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-gray-20 -m-6 px-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-90">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-10 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-60" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Rent Section */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Rent</h3>
            <RangeSlider
              label="Monthly cost"
              min={0}
              max={50000}
              value={filters.monthlyRent}
              onChange={(value) => handleFilterChange('monthlyRent', null, value)}
              suffix="SEK"
            />
          </section>

          {/* Size Section */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Size</h3>
            <RangeSlider
              label="Rooms"
              min={1}
              max={15}
              value={filters.rooms}
              onChange={(value) => handleFilterChange('rooms', null, value)}
            />
            <RangeSlider
              label="Size"
              min={5}
              max={300}
              value={filters.size}
              onChange={(value) => handleFilterChange('size', null, value)}
              suffix="m²"
            />
            <div className="mb-6">
              <Select
                label="Household size"
                value={filters.householdSize}
                onChange={(value) => handleFilterChange('householdSize', null, value)}
                options={[
                  { value: 'Show all', label: 'Show all' },
                  { value: '1', label: '1 person' },
                  { value: '2', label: '2 people' },
                  { value: '3', label: '3 people' },
                  { value: '4+', label: '4+ people' },
                ]}
              />
            </div>
          </section>

          {/* Dates and Duration */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Dates and duration</h3>
            <div className="mb-4">
              <DatePicker
                label="Move in from"
                value={filters.moveInDate}
                onChange={(value) => handleFilterChange('moveInDate', null, value)}
                placeholder="Select date"
              />
            </div>
            <div className="mb-6">
              <Select
                label="Min rental length"
                value={filters.minRentalLength}
                onChange={(value) => handleFilterChange('minRentalLength', null, value)}
                options={[
                  { value: 'Show all', label: 'Show all' },
                  { value: '1 month', label: '1 month' },
                  { value: '3 months', label: '3 months' },
                  { value: '6 months', label: '6 months' },
                  { value: '12 months', label: '12 months' },
                ]}
              />
            </div>
          </section>

          {/* Home Type */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Home type</h3>
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-90 mb-3">Shared or entire home</h4>
              <div className="grid grid-cols-2 gap-4">
                <Checkbox
                  id="entire-home"
                  checked={filters.homeType.entireHome}
                  onChange={(checked) => handleFilterChange('homeType', 'entireHome', checked)}
                  label="Entire home"
                />
                <Checkbox
                  id="shared-home"
                  checked={filters.homeType.sharedHome}
                  onChange={(checked) => handleFilterChange('homeType', 'sharedHome', checked)}
                  label="Shared home"
                />
              </div>
            </div>
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-90 mb-3">Home type</h4>
              <div className="grid grid-cols-2 gap-4">
                <Checkbox
                  id="apartment"
                  checked={filters.propertyType.apartment}
                  onChange={(checked) => handleFilterChange('propertyType', 'apartment', checked)}
                  label="Apartment"
                />
                <Checkbox
                  id="house"
                  checked={filters.propertyType.house}
                  onChange={(checked) => handleFilterChange('propertyType', 'house', checked)}
                  label="House"
                />
                <Checkbox
                  id="cottage"
                  checked={filters.propertyType.cottage}
                  onChange={(checked) => handleFilterChange('propertyType', 'cottage', checked)}
                  label="Cottage"
                />
                <Checkbox
                  id="dorm"
                  checked={filters.propertyType.dorm}
                  onChange={(checked) => handleFilterChange('propertyType', 'dorm', checked)}
                  label="Dorm"
                />
                <Checkbox
                  id="other"
                  checked={filters.propertyType.other}
                  onChange={(checked) => handleFilterChange('propertyType', 'other', checked)}
                  label="Other"
                />
              </div>
            </div>
          </section>

          {/* Furnishing */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Furnishing</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Checkbox
                id="furnished"
                checked={filters.furnishing.furnished}
                onChange={(checked) => handleFilterChange('furnishing', 'furnished', checked)}
                label="Furnished"
              />
              <Checkbox
                id="unfurnished"
                checked={filters.furnishing.unfurnished}
                onChange={(checked) => handleFilterChange('furnishing', 'unfurnished', checked)}
                label="Unfurnished"
              />
            </div>
          </section>

          {/* Category */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Category</h3>
            <RadioGroup
              value={filters.category}
              onChange={(value) => handleFilterChange('category', null, value)}
              options={[
                { value: 'All homes', label: 'All homes' },
                { value: 'First hand', label: 'First hand' },
                { value: 'Student housing', label: 'Student housing' },
                { value: 'Senior housing', label: 'Senior housing' },
                { value: 'Corporate housing', label: 'Corporate housing' },
              ]}
              className="space-y-3"
            />
          </section>

          {/* Apply Earlier */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Apply earlier</h3>
            <div className="space-y-3 mb-6">
              <Checkbox
                id="apply-earlier-homes"
                checked={filters.applyEarlier.applyEarlierHomes}
                onChange={(checked) => handleFilterChange('applyEarlier', 'applyEarlierHomes', checked)}
                label="Apply earlier homes"
              />
              <Checkbox
                id="homes-available-anyone"
                checked={filters.applyEarlier.homesAvailableForAnyone}
                onChange={(checked) => handleFilterChange('applyEarlier', 'homesAvailableForAnyone', checked)}
                label="Homes available for anyone"
              />
            </div>
          </section>

          {/* Accessibility */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Accessibility</h3>
            <div className="mb-6">
              <Checkbox
                id="wheelchair-accessible"
                checked={filters.accessibility.wheelchairAccessible}
                onChange={(checked) => handleFilterChange('accessibility', 'wheelchairAccessible', checked)}
                label="Only show wheelchair accessible homes"
              />
            </div>
          </section>

          {/* Rules */}
          <section>
            <h3 className="text-base font-semibold text-gray-90 mb-4">Rules</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <Checkbox
                id="pets-allowed"
                checked={filters.rules.petsAllowed}
                onChange={(checked) => handleFilterChange('rules', 'petsAllowed', checked)}
                label="Pets allowed"
              />
              <Checkbox
                id="smoking-allowed"
                checked={filters.rules.smokingAllowed}
                onChange={(checked) => handleFilterChange('rules', 'smokingAllowed', checked)}
                label="Smoking allowed"
              />
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-20 -m-6 px-6 mt-6">
          <button
            onClick={handleClearAll}
            className="text-gray-60 hover:text-gray-90 font-medium transition-colors"
          >
            Clear all
          </button>
          <Button
            onClick={handleApply}
            className="bg-brown text-white hover:bg-brown-light"
          >
            Show 16617 results
          </Button>
        </div>
      </div>
    </Modal>
  );
};

FilterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onApplyFilters: PropTypes.func,
};

export default FilterModal; 