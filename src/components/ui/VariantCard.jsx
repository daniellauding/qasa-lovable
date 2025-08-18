import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Link as LinkIcon, 
  FlaskConical, 
  User, 
  Users, 
  Home, 
  Building, 
  MessageCircle, 
  Mail, 
  LogIn, 
  UserPlus, 
  Search, 
  FileText, 
  Settings, 
  Camera,
  BarChart3,
  Edit,
  Target,
  Gamepad2,
  Plus,
  Wand2
} from 'lucide-react';
import { getVariantUrl, variantStatusConfig } from '../../utils/variants';

// Helper function to get appropriate icon for each prototype
const getPrototypeIcon = (prototypeId, category) => {
  const iconMap = {
    // Tenant prototypes
    'tenant-profile': User,
    'tenant-profile-public': User,
    'tenant-apply-home': Home,
    'bet-increase-quality': Target,
    'create-tenant-listing': FileText,
    
    // Landlord prototypes
    'find-tenant': Search,
    'create-listing': Building,
    'media-management': Camera,
    'dashboard': BarChart3,
    'edit-listing': Edit,
    'landlord-profile': Users,
    
    // Auth prototypes
    'login': LogIn,
    'register': UserPlus,
    
    // Communication
    'messages': MessageCircle,
    
    // Mail templates
    'mail-template-welcome-premium': Mail,
    
    // Templates
    'blank-template': Plus,
    'template-builder': Wand2,
  };
  
  return iconMap[prototypeId] || FlaskConical;
};

// Component for handling prototype thumbnails with fallback icons
const PrototypeThumbnail = ({ prototype }) => {
  const [imageError, setImageError] = useState(false);
  const IconComponent = getPrototypeIcon(prototype.id, prototype.category);
  
  const handleImageError = () => {
    setImageError(true);
  };
  
  if (!prototype.thumbnail || imageError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <IconComponent className="w-16 h-16 text-indigo-300" />
      </div>
    );
  }
  
  return (
    <img
      src={prototype.thumbnail}
      alt={prototype.name}
      className="w-full h-full object-cover"
      onError={handleImageError}
    />
  );
};

const VariantCard = ({ prototype }) => {
  const [selectedVariant, setSelectedVariant] = useState(prototype.variants[0]);

  const handleVariantChange = (e) => {
    const variantId = e.target.value;
    const variant = prototype.variants.find(v => v.id === variantId);
    setSelectedVariant(variant);
  };

  const copyVariantLink = (variant, e) => {
    e.preventDefault();
    e.stopPropagation();
    const url = window.location.origin + getVariantUrl(prototype.path, variant.id);
    navigator.clipboard.writeText(url);
    
    // Show feedback
    const button = e.target.closest('button');
    if (button) {
      const originalTitle = button.title;
      button.title = 'Copied!';
      setTimeout(() => {
        button.title = originalTitle;
      }, 1000);
    }
  };

  return (
    <div className="block group transform hover:-translate-y-1 transition-all duration-200">
      <div className="bg-white rounded-xl shadow-sm hover:shadow-lg overflow-hidden relative">
        {/* Thumbnail area */}
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden rounded-t-xl">
          <PrototypeThumbnail prototype={prototype} />
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
              {/* Simple HTML Select */}
              <div className="relative">
                <select
                  value={selectedVariant.id}
                  onChange={handleVariantChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                >
                  {prototype.variants.map((variant) => (
                    <option key={variant.id} value={variant.id}>
                      {variant.name}
                      {variant.status && variant.status !== 'active' ? ` (${variantStatusConfig[variant.status]?.label})` : ''}
                    </option>
                  ))}
                </select>
                {/* Custom arrow */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <FlaskConical className="w-4 h-4 text-gray-400" />
                </div>
                  </div>

              {/* Selected variant info */}
              <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                {selectedVariant.description}
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

              {/* Action buttons */}
              <div className="flex gap-2">
              <Link
                to={getVariantUrl(prototype.path, selectedVariant.id)}
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                Open {selectedVariant.name}
              </Link>
                <button
                  onClick={(e) => copyVariantLink(selectedVariant, e)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
                  title="Copy link"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>
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