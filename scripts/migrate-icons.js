#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Mapping from Heroicons to Lucide React equivalents
const iconMapping = {
  // Common icons
  'HomeIcon': 'Home',
  'UserIcon': 'User', 
  'UsersIcon': 'Users',
  'HeartIcon': 'Heart',
  'StarIcon': 'Star',
  'PlusIcon': 'Plus',
  'MinusIcon': 'Minus',
  'XMarkIcon': 'X',
  'CheckIcon': 'Check',
  'ChevronRightIcon': 'ChevronRight',
  'ChevronLeftIcon': 'ChevronLeft',
  'ChevronUpIcon': 'ChevronUp',
  'ChevronDownIcon': 'ChevronDown',
  'ArrowRightIcon': 'ArrowRight',
  'ArrowLeftIcon': 'ArrowLeft',
  'ArrowUpIcon': 'ArrowUp', 
  'ArrowDownIcon': 'ArrowDown',
  
  // Interface icons
  'Bars3Icon': 'Menu',
  'MagnifyingGlassIcon': 'Search',
  'BellIcon': 'Bell',
  'CogIcon': 'Settings',
  'InformationCircleIcon': 'Info',
  'ExclamationTriangleIcon': 'AlertTriangle',
  'CheckCircleIcon': 'CheckCircle',
  'XCircleIcon': 'XCircle',
  'QuestionMarkCircleIcon': 'HelpCircle',
  
  // Content icons
  'DocumentTextIcon': 'FileText',
  'PhotoIcon': 'Image',
  'CameraIcon': 'Camera',
  'PaperClipIcon': 'Paperclip',
  'LinkIcon': 'Link',
  'ShareIcon': 'Share',
  'DownloadIcon': 'Download',
  'UploadIcon': 'Upload',
  
  // Communication
  'ChatBubbleLeftIcon': 'MessageCircle',
  'EnvelopeIcon': 'Mail',
  'PhoneIcon': 'Phone',
  
  // Navigation
  'MapPinIcon': 'MapPin',
  'GlobeAltIcon': 'Globe',
  'CalendarDaysIcon': 'Calendar',
  'ClockIcon': 'Clock',
  
  // Actions
  'PencilIcon': 'Edit',
  'TrashIcon': 'Trash2',
  'EyeIcon': 'Eye',
  'EyeSlashIcon': 'EyeOff',
  'PrinterIcon': 'Printer',
  
  // Media
  'PlayIcon': 'Play',
  'PauseIcon': 'Pause',
  'SpeakerWaveIcon': 'Volume2',
  'SpeakerXMarkIcon': 'VolumeX',
  
  // Shopping/Business
  'ShoppingCartIcon': 'ShoppingCart',
  'CreditCardIcon': 'CreditCard',
  'BanknotesIcon': 'Banknote',
  'BuildingOfficeIcon': 'Building',
  
  // Social
  'HandThumbUpIcon': 'ThumbsUp',
  'HandThumbDownIcon': 'ThumbsDown',
  'FlagIcon': 'Flag',
  'GiftIcon': 'Gift',
  
  // Tech
  'WifiIcon': 'Wifi',
  'SignalIcon': 'Signal',
  'BatteryIcon': 'Battery',
  'LockClosedIcon': 'Lock',
  'LockOpenIcon': 'Unlock',
  'ShieldCheckIcon': 'ShieldCheck',
  'BeakerIcon': 'FlaskConical'
};

// Find all React files
const files = glob.sync('src/**/*.{js,jsx,ts,tsx}', {
  ignore: ['**/node_modules/**', '**/dist/**']
});

let totalChanges = 0;
let filesChanged = 0;

console.log('🔄 Starting icon migration from Heroicons to Lucide React...\n');

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    let fileChanges = 0;

    // Skip if file doesn't contain heroicons imports
    if (!content.includes('@heroicons/react')) {
      return;
    }

    console.log(`📁 Processing: ${filePath}`);

    // Replace import statements
    // Handle both outline and solid imports
    content = content.replace(
      /import\s*{\s*([^}]+)\s*}\s*from\s*['"]@heroicons\/react\/24\/(outline|solid)['"]/g,
      (match, imports, type) => {
        const iconNames = imports
          .split(',')
          .map(name => name.trim().split(' as ')[0])
          .filter(name => iconMapping[name])
          .map(name => iconMapping[name]);
        
        if (iconNames.length > 0) {
          fileChanges++;
          return `import { ${iconNames.join(', ')} } from 'lucide-react'`;
        }
        return match;
      }
    );

    // Replace individual icon usages in JSX
    Object.entries(iconMapping).forEach(([heroIcon, lucideIcon]) => {
      const regex = new RegExp(`<${heroIcon}([^>]*)>`, 'g');
      if (regex.test(content)) {
        content = content.replace(regex, `<${lucideIcon}$1>`);
        fileChanges++;
      }
      
      // Handle self-closing tags
      const selfClosingRegex = new RegExp(`<${heroIcon}([^>]*)\\/?>`, 'g');
      if (selfClosingRegex.test(content)) {
        content = content.replace(selfClosingRegex, `<${lucideIcon}$1 />`);
        fileChanges++;
      }
    });

    // Only write if changes were made
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesChanged++;
      totalChanges += fileChanges;
      console.log(`  ✅ Updated ${fileChanges} icons`);
    } else {
      console.log(`  ⏭️  No changes needed`);
    }

  } catch (error) {
    console.error(`  ❌ Error processing ${filePath}:`, error.message);
  }
});

console.log(`\n🎉 Migration complete!`);
console.log(`📊 Files changed: ${filesChanged}`);
console.log(`🔄 Total icon changes: ${totalChanges}`);

if (filesChanged > 0) {
  console.log(`\n📝 Next steps:`);
  console.log(`1. Run: npm test (to verify nothing broke)`);
  console.log(`2. Run: npm run storybook (to check components)`);
  console.log(`3. Run: npm uninstall @heroicons/react`);
  console.log(`4. Commit changes: git add -A && git commit -m "Migrate all icons to Lucide React"`);
}

// Check for any remaining heroicons usage
const remainingFiles = files.filter(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  return content.includes('@heroicons/react');
});

if (remainingFiles.length > 0) {
  console.log(`\n⚠️  Files still using Heroicons (need manual review):`);
  remainingFiles.forEach(file => console.log(`   - ${file}`));
}

console.log('\n✨ Icon migration script completed!');