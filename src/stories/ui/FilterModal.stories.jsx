import React, { useState } from 'react';
import FilterModal from '../../components/ui/FilterModal';
import FilterButton from '../../components/ui/FilterButton';

export default {
  title: 'UI/FilterModal',
  component: FilterModal,
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <FilterButton onClick={() => setIsOpen(true)}>
          Open Filter Modal
        </FilterButton>
        <FilterModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onApplyFilters={(filters) => {
            console.log('Applied filters:', filters);
            alert('Filters applied! Check console for details.');
          }}
        />
      </div>
    );
  },
};

export const AlwaysOpen = {
  render: () => {
    const [appliedFilters, setAppliedFilters] = useState(null);

    return (
      <div className="space-y-6">
        <div className="max-w-2xl">
          <FilterModal
            isOpen={true}
            onClose={() => {}}
            onApplyFilters={(filters) => {
              setAppliedFilters(filters);
              console.log('Applied filters:', filters);
            }}
          />
        </div>
        
        {appliedFilters && (
          <div className="max-w-2xl p-4 bg-gray-10 rounded-lg">
            <h4 className="text-sm font-medium mb-2">Applied Filters:</h4>
            <div className="text-xs text-gray-60 space-y-2">
              <div><strong>Monthly Rent:</strong> SEK {appliedFilters.monthlyRent[0]} - SEK {appliedFilters.monthlyRent[1]}+</div>
              <div><strong>Rooms:</strong> {appliedFilters.rooms[0]} - {appliedFilters.rooms[1]}+</div>
              <div><strong>Size:</strong> {appliedFilters.size[0]} - {appliedFilters.size[1]}+ m²</div>
              <div><strong>Household Size:</strong> {appliedFilters.householdSize}</div>
              <div><strong>Category:</strong> {appliedFilters.category}</div>
              {Object.entries(appliedFilters.homeType).some(([k, v]) => v) && (
                <div><strong>Home Type:</strong> {Object.entries(appliedFilters.homeType).filter(([k, v]) => v).map(([k]) => k).join(', ')}</div>
              )}
              {Object.entries(appliedFilters.propertyType).some(([k, v]) => v) && (
                <div><strong>Property Type:</strong> {Object.entries(appliedFilters.propertyType).filter(([k, v]) => v).map(([k]) => k).join(', ')}</div>
              )}
              {Object.entries(appliedFilters.furnishing).some(([k, v]) => v) && (
                <div><strong>Furnishing:</strong> {Object.entries(appliedFilters.furnishing).filter(([k, v]) => v).map(([k]) => k).join(', ')}</div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const InteractiveExample = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [appliedFilters, setAppliedFilters] = useState(null);
    const [resultCount, setResultCount] = useState(16617);

    const handleApplyFilters = (filters) => {
      setAppliedFilters(filters);
      // Simulate result count change based on filters
      let count = 16617;
      
      // Reduce count based on filters
      if (filters.monthlyRent[1] < 30000) count = Math.floor(count * 0.7);
      if (filters.rooms[1] < 10) count = Math.floor(count * 0.8);
      if (filters.category !== 'All homes') count = Math.floor(count * 0.3);
      if (Object.values(filters.homeType).some(v => v)) count = Math.floor(count * 0.6);
      if (Object.values(filters.propertyType).some(v => v)) count = Math.floor(count * 0.5);
      
      setResultCount(count);
    };

    return (
      <div className="space-y-6 max-w-4xl">
        {/* Search Interface */}
        <div className="p-6 bg-gray-10 rounded-2xl">
          <h3 className="text-lg font-semibold mb-4">Property Search</h3>
          <div className="flex gap-3">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search cities or districts"
                className="w-full px-4 py-3 pl-12 rounded-full border border-gray-30 bg-white focus:outline-none focus:border-gray-50"
              />
            </div>
            <FilterButton onClick={() => setIsOpen(true)} size="lg" />
          </div>
          
          {appliedFilters && (
            <div className="mt-4 p-4 bg-white rounded-xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium">Active Filters</h4>
                <span className="text-sm text-gray-60">{resultCount.toLocaleString()} properties found</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {appliedFilters.monthlyRent[1] < 30000 && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    Max SEK {appliedFilters.monthlyRent[1].toLocaleString()}
                  </span>
                )}
                {appliedFilters.rooms[1] < 10 && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {appliedFilters.rooms[0]}-{appliedFilters.rooms[1]}+ rooms
                  </span>
                )}
                {appliedFilters.category !== 'All homes' && (
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {appliedFilters.category}
                  </span>
                )}
                {Object.entries(appliedFilters.homeType).filter(([k, v]) => v).map(([key]) => (
                  <span key={key} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {key.replace(/([A-Z])/g, ' $1').toLowerCase()}
                  </span>
                ))}
                {Object.entries(appliedFilters.propertyType).filter(([k, v]) => v).map(([key]) => (
                  <span key={key} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    {key}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filter Modal */}
        <FilterModal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onApplyFilters={handleApplyFilters}
        />

        {/* Results Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: Math.min(6, Math.ceil(resultCount / 1000)) }, (_, i) => (
            <div key={i} className="p-4 bg-white border border-gray-20 rounded-xl">
              <div className="w-full h-32 bg-gray-20 rounded-lg mb-3"></div>
              <h4 className="font-medium text-sm mb-1">Property {i + 1}</h4>
              <p className="text-xs text-gray-60 mb-2">Stockholm • 2 rooms, 45 m²</p>
              <p className="text-sm font-medium">SEK 12,000/month</p>
            </div>
          ))}
        </div>
        
        {resultCount === 0 && (
          <div className="text-center p-8 bg-gray-10 rounded-xl">
            <h3 className="text-lg font-medium mb-2">No properties found</h3>
            <p className="text-gray-60">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>
    );
  },
}; 