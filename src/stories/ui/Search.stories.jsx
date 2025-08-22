import React, { useState } from 'react';
import Search from '../../components/ui/Search';
import FilterButton from '../../components/ui/FilterButton';
import FilterModal from '../../components/ui/FilterModal';

export default {
  title: 'UI/Search',
  component: Search,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['default', 'filled'],
      description: 'Visual variant of the search input'
    },
  },
};

export const Default = {
  args: {
    placeholder: 'Search cities or districts',
  },
};

export const Filled = {
  args: {
    placeholder: 'Search cities or districts',
    variant: 'filled',
  },
};

export const Sizes = {
  render: () => (
    <div className="flex flex-col gap-6 w-[500px]">
      <Search size="sm" placeholder="Small search" />
      <Search size="md" placeholder="Medium search (default)" />
      <Search size="lg" placeholder="Large search" />
    </div>
  ),
};

export const Variants = {
  render: () => (
    <div className="flex flex-col gap-6 w-[500px]">
      <div>
        <h3 className="text-sm font-medium mb-3">Default (White Background)</h3>
        <Search variant="default" placeholder="Search cities or districts" />
        <p className="text-xs text-gray-600 mt-2">Focus: subtle border highlight</p>
      </div>
      <div>
        <h3 className="text-sm font-medium mb-3">Filled (Tertiary Background)</h3>
        <Search variant="filled" placeholder="Search cities or districts" />
        <p className="text-xs text-gray-600 mt-2">Focus: white background with gray border</p>
      </div>
    </div>
  ),
};

export const WithValue = {
  render: () => {
    const [value, setValue] = useState('Stockholm');
    return (
      <div className="w-[500px]">
        <Search
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search cities or districts"
        />
      </div>
    );
  },
};

export const SearchWithFilter = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return (
      <div className="space-y-6">
        {/* Search Bar with Filter - Compact Version */}
        <div className="flex gap-3 w-[600px]">
          <div className="flex-1">
            <Search
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search cities or districts"
            />
          </div>
          <FilterButton
            onClick={() => setIsFilterOpen(true)}
          />
        </div>

        {/* Search Bar with Filter - Filled Version */}
        <div className="w-[800px] p-4 bg-[var(--color-gray-10)] rounded-2xl">
          <div className="flex gap-3">
            <div className="flex-1">
              <Search
                variant="filled"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search cities or districts"
                size="lg"
              />
            </div>
            <FilterButton
              size="lg"
              onClick={() => setIsFilterOpen(true)}
            />
          </div>
        </div>

        {/* Filter Modal */}
        <FilterModal
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          onApplyFilters={(filters) => {
            console.log('Applied filters:', filters);
          }}
        />
      </div>
    );
  },
};

export const SearchStates = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div>
        <h3 className="text-sm font-medium mb-3">Empty State</h3>
        <Search placeholder="Search cities or districts" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">With Text</h3>
        <Search defaultValue="Stockholm" placeholder="Search cities or districts" />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Focused State</h3>
        <Search 
          autoFocus
          placeholder="Search cities or districts"
          className="ring-2 ring-blue-200 border-blue-300"
        />
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-3">Disabled State</h3>
        <Search 
          disabled
          placeholder="Search cities or districts"
          className="opacity-50 cursor-not-allowed"
        />
      </div>
    </div>
  ),
};

export const SearchWithDropdown = {
  render: () => {
    const [searchValue, setSearchValue] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
    
    const cities = ['Stockholm', 'Gothenburg', 'Malmö', 'Uppsala', 'Västerås', 'Örebro'];
    const filteredCities = cities.filter(city => 
      city.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div className="w-[500px] relative">
        <Search
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setShowDropdown(e.target.value.length > 0);
          }}
          onFocus={() => setShowDropdown(searchValue.length > 0)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
          placeholder="Search cities or districts"
        />
        
        {showDropdown && filteredCities.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-20 rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto">
            <div className="p-3">
              <h4 className="text-sm font-medium text-gray-70 mb-3">Recent searches</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-2 hover:bg-gray-10 rounded-lg cursor-pointer">
                  <div className="w-5 h-5 text-gray-60">🕐</div>
                  <span className="text-sm">Anywhere / 1 filter</span>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-20 p-3">
              <h4 className="text-sm font-medium text-gray-70 mb-3">Popular searches</h4>
              <div className="space-y-2">
                {filteredCities.map((city) => (
                  <div
                    key={city}
                    className="flex items-center gap-3 p-2 hover:bg-gray-10 rounded-lg cursor-pointer"
                    onClick={() => {
                      setSearchValue(city);
                      setShowDropdown(false);
                    }}
                  >
                    <div className="w-5 h-5 text-gray-60">📍</div>
                    <span className="text-sm">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
}; 