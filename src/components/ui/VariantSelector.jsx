import React, { useState } from 'react';
import { ChevronDownIcon, BeakerIcon, LinkIcon } from '@heroicons/react/24/outline';
import { getPrototypeVariants, getVariantUrl, variantStatusConfig } from '../../utils/variants';

const VariantSelector = ({ prototypeId, currentVariant = 'default', basePath, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const variants = getPrototypeVariants(prototypeId);
  
  if (!variants || variants.length <= 1) {
    return null; // Don't show selector if no variants available
  }

  const current = variants.find(v => v.id === currentVariant) || variants[0];

  const handleVariantSelect = (variantId) => {
    const url = getVariantUrl(basePath, variantId);
    window.location.href = url;
    setIsOpen(false);
  };

  const copyVariantLink = (variantId, e) => {
    e.stopPropagation();
    const url = window.location.origin + getVariantUrl(basePath, variantId);
    navigator.clipboard.writeText(url);
    // You could add a toast notification here
  };

  return (
    <div className={`relative inline-block text-left ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 rounded-md"
      >
        <BeakerIcon className="w-4 h-4 mr-2" />
        {current.name}
        {current.status && current.status !== 'active' && (
          <span className={`ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
            current.status === 'draft' ? 'bg-yellow-100 text-yellow-800' : 'bg-gray-100 text-gray-800'
          }`}>
            {variantStatusConfig[current.status]?.label}
          </span>
        )}
        <ChevronDownIcon className="w-4 h-4 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1">
            <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
              Select Variant
            </div>
            {variants.map((variant) => (
              <div
                key={variant.id}
                className={`relative px-4 py-3 hover:bg-gray-50 cursor-pointer ${
                  variant.id === currentVariant ? 'bg-indigo-50' : ''
                }`}
                onClick={() => handleVariantSelect(variant.id)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <span className={`text-sm font-medium ${
                        variant.id === currentVariant ? 'text-indigo-900' : 'text-gray-900'
                      }`}>
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
                    {variant.tags && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {variant.tags.map(tag => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <button
                    onClick={(e) => copyVariantLink(variant.id, e)}
                    className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                    title="Copy link to this variant"
                  >
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantSelector; 