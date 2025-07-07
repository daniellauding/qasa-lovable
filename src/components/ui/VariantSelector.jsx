import React, { useState } from 'react';
import { ChevronDownIcon, LinkIcon, CheckIcon, BeakerIcon } from 'lucide-react';
import { getVariants, getVariantURL, copyVariantURL } from '../../utils/variants';
import Button from './Button';

const VariantSelector = ({ prototypeId, basePath, currentVariant = 'main' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedVariant, setCopiedVariant] = useState(null);
  const variants = getVariants(prototypeId);

  if (variants.length <= 1) {
    return null; // No variants to show
  }

  const handleCopyLink = async (variantId, e) => {
    e.stopPropagation();
    const success = await copyVariantURL(basePath, variantId);
    if (success) {
      setCopiedVariant(variantId);
      setTimeout(() => setCopiedVariant(null), 2000);
    }
  };

  const currentVariantData = variants.find(v => v.id === currentVariant) || variants[0];

  return (
    <div className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{currentVariantData.name}</span>
          {currentVariantData.experimental && (
            <BeakerIcon className="w-3 h-3 text-orange-500" />
          )}
        </div>
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-2 space-y-1">
            {variants.map((variant) => (
              <div
                key={variant.id}
                className="group flex items-center justify-between p-2 hover:bg-gray-50 rounded-md"
              >
                <a
                  href={getVariantURL(basePath, variant.id)}
                  className="flex-1 min-w-0"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                      {variant.name}
                    </span>
                    {variant.experimental && (
                      <BeakerIcon className="w-3 h-3 text-orange-500" />
                    )}
                    {variant.isDefault && (
                      <span className="px-1.5 py-0.5 text-xs bg-blue-100 text-blue-700 rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5 truncate">
                    {variant.description}
                  </p>
                </a>
                
                <button
                  onClick={(e) => handleCopyLink(variant.id, e)}
                  className="ml-2 p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Copy link"
                >
                  {copiedVariant === variant.id ? (
                    <CheckIcon className="w-3 h-3 text-green-500" />
                  ) : (
                    <LinkIcon className="w-3 h-3" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VariantSelector; 