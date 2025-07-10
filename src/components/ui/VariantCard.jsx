import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { BeakerIcon, ChevronDownIcon, LinkIcon } from '@heroicons/react/24/outline';
import { getVariantUrl, variantStatusConfig } from '../../utils/variants';

const VariantCard = ({ prototype }) => {
  const [selectedVariant, setSelectedVariant] = useState(prototype.variants[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Calculate dropdown position
  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      
      // Close dropdown if button is too far off-screen
      if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
        setIsDropdownOpen(false);
        return;
      }
      
      let top = rect.bottom + scrollTop + 4;
      let left = rect.left + scrollLeft;
      
      // Adjust if dropdown would go off right edge of screen
      const dropdownWidth = rect.width;
      if (left + dropdownWidth > window.innerWidth) {
        left = window.innerWidth - dropdownWidth - 10;
      }
      
      // Adjust if dropdown would go off left edge of screen
      if (left < 10) {
        left = 10;
      }
      
      setDropdownPosition({
        top,
        left,
        width: rect.width
      });
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleScrollOrResize = () => {
      if (isDropdownOpen) {
        updateDropdownPosition();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('scroll', handleScrollOrResize, true); // Use capture to catch all scroll events
      window.addEventListener('resize', handleScrollOrResize);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('scroll', handleScrollOrResize, true);
        window.removeEventListener('resize', handleScrollOrResize);
      };
    }
  }, [isDropdownOpen]);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    if (!isDropdownOpen) {
      // Use requestAnimationFrame to ensure DOM is updated
      requestAnimationFrame(() => {
        updateDropdownPosition();
      });
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const copyVariantLink = (variant, e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = window.location.origin + getVariantUrl(prototype.path, variant.id);
    navigator.clipboard.writeText(url);
  };

  // Portal dropdown component
  const DropdownPortal = () => {
    if (!isDropdownOpen) return null;
    
    return createPortal(
      <div 
        ref={dropdownRef}
        className="fixed bg-white border border-gray-200 rounded-md shadow-xl overflow-y-auto max-h-80"
        style={{
          top: dropdownPosition.top,
          left: dropdownPosition.left,
          width: dropdownPosition.width,
          zIndex: 99999
        }}
      >
        {prototype.variants.map((variant) => (
          <div
            key={variant.id}
            className="px-3 py-2 hover:bg-gray-50 cursor-pointer flex items-center justify-between"
            onClick={() => handleVariantChange(variant)}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center">
                <span className="text-sm font-medium text-gray-900">
                  {variant.name}
                </span>
                {variant.status && variant.status !== 'active' && (
                  <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                    variant.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {variantStatusConfig[variant.status]?.label}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-1">{variant.description}</p>
            </div>
            <button
              onClick={(e) => copyVariantLink(variant, e)}
              className="ml-2 p-1 text-gray-400 hover:text-gray-600"
              title="Copy link"
            >
              <LinkIcon className="w-3 h-3" />
            </button>
          </div>
        ))}
      </div>,
      document.body
    );
  };

  return (
    <div className="block group transform hover:-translate-y-1 transition-all duration-200">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden relative">
        {/* Thumbnail area */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden rounded-t-xl">
          {prototype.thumbnail ? (
            <img
              src={prototype.thumbnail}
              alt={prototype.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
              <BeakerIcon className="w-16 h-16 text-indigo-300" />
            </div>
          )}
        </div>

        {/* Card content */}
        <div className="p-6">
          {/* Category and tags */}
          <div className="flex items-center gap-2 mb-2">
            <div className="text-sm font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-700">
              {prototype.category}
            </div>
            {prototype.tags?.map(tag => (
              <span 
                key={tag} 
                className="text-xs font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title and description */}
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {prototype.name}
          </h2>
          <p className="text-sm text-gray-600 line-clamp-2 mb-4">
            {prototype.description}
          </p>

          {/* Variant selector */}
          {prototype.hasMultipleVariants ? (
            <div className="space-y-3">
              <div className="relative">
                <button
                  ref={buttonRef}
                  onClick={toggleDropdown}
                  className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <div className="flex items-center">
                    <BeakerIcon className="w-4 h-4 mr-2" />
                    <span>{selectedVariant.name}</span>
                    {selectedVariant.status && selectedVariant.status !== 'active' && (
                      <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                        selectedVariant.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {variantStatusConfig[selectedVariant.status]?.label}
                      </span>
                    )}
                  </div>
                  <ChevronDownIcon className="w-4 h-4" />
                </button>

                {/* Portal dropdown */}
                <DropdownPortal />
              </div>

              {/* Selected variant tags */}
              {selectedVariant.tags && (
                <div className="flex flex-wrap gap-1">
                  {selectedVariant.tags.map(tag => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Open variant button */}
              <Link
                to={getVariantUrl(prototype.path, selectedVariant.id)}
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Open {selectedVariant.name}
              </Link>
            </div>
          ) : (
            /* Single variant - simple link */
            <Link
              to={prototype.path}
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
            >
              Open Prototype
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default VariantCard; 