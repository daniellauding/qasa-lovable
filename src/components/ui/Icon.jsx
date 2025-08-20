import React from 'react';
import PropTypes from 'prop-types';
import * as LucideIcons from 'lucide-react';

const sizeClasses = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10'
};

// Available QDS Icons - Always use these from Lucide React
export const QDS_ICONS = [
  'AlertCircle',
  'AlertTriangle', 
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowUp',
  'Bell',
  'BellOff',
  'Bookmark',
  'Calendar',
  'Camera',
  'CheckCircle',
  'Check',
  'ChevronDown',
  'ChevronLeft',
  'ChevronRight',
  'ChevronUp',
  'Globe',
  'Heart',
  'HelpCircle',
  'History',
  'Home',
  'Image',
  'Info',
  'List',
  'ListFilter',
  'LogOut',
  'Map',
  'MapPin',
  'Menu',
  'MessageCircle',
  'Minus',
  'MoreHorizontal',
  'MoreVertical',
  'Pen',
  'Plus',
  'Search',
  'Settings',
  'Share',
  'Sliders',
  'Star',
  'Trash',
  'User',
  'XCircle',
  'X'
];

const Icon = ({ name, size = 'md', className = '', ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons.HelpCircle;
  
  return (
    <IconComponent
      className={`${sizeClasses[size]} ${className}`}
      {...props}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(QDS_ICONS).isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  className: PropTypes.string,
};

export default Icon;