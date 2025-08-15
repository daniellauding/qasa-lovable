#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

const filesToFix = [
  'src/components/ui/Card/PropertyCard.jsx',
  'src/components/ui/Search.jsx', 
  'src/components/ui/VariantCard.jsx',
  'src/prototypes/messages/MessagesPage.jsx',
  'src/prototypes/tenants/profile/TenantProfilePage.jsx'
];

console.log('🔧 Fixing import conflicts...\n');

filesToFix.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Fix duplicate Heart imports
    content = content.replace(
      /import { (.*)Heart(.*) } from 'lucide-react';\s*import { (.*)Heart(.*) } from 'lucide-react';/g,
      (match, before1, after1, before2, after2) => {
        changed = true;
        // Combine the imports, removing duplicate Heart
        const allImports = [...new Set([
          ...before1.split(',').map(s => s.trim()).filter(Boolean),
          ...after1.split(',').map(s => s.trim()).filter(Boolean),
          ...before2.split(',').map(s => s.trim()).filter(Boolean), 
          ...after2.split(',').map(s => s.trim()).filter(Boolean)
        ].filter(name => name !== 'Heart'))];
        
        return `import { Heart, ${allImports.join(', ')} } from 'lucide-react';`;
      }
    );
    
    // Fix duplicate Star imports  
    content = content.replace(
      /import { (.*)Star(.*) } from 'lucide-react';\s*import { (.*)Star(.*) } from 'lucide-react';/g,
      (match, before1, after1, before2, after2) => {
        changed = true;
        const allImports = [...new Set([
          ...before1.split(',').map(s => s.trim()).filter(Boolean),
          ...after1.split(',').map(s => s.trim()).filter(Boolean),
          ...before2.split(',').map(s => s.trim()).filter(Boolean),
          ...after2.split(',').map(s => s.trim()).filter(Boolean)
        ].filter(name => name !== 'Star'))];
        
        return `import { Star, ${allImports.join(', ')} } from 'lucide-react';`;
      }
    );
    
    // Fix Search component name conflict
    if (filePath.includes('Search.jsx')) {
      content = content.replace(
        /import { Search } from 'lucide-react';\s*const Search = /g,
        "import { Search as SearchIcon } from 'lucide-react';\nconst Search = "
      );
      content = content.replace(/<Search /g, '<SearchIcon ');
      changed = true;
    }
    
    // Fix Link conflicts with react-router-dom
    if (content.includes('react-router-dom') && content.includes("from 'lucide-react'")) {
      content = content.replace(
        /import { (.*)Link(.*) } from 'lucide-react';/g,
        (match, before, after) => {
          changed = true;
          const otherImports = [before, after].join(',').split(',')
            .map(s => s.trim()).filter(s => s && s !== 'Link');
          return `import { Link as LinkIcon${otherImports.length ? ', ' + otherImports.join(', ') : ''} } from 'lucide-react';`;
        }
      );
      content = content.replace(/<Link /g, '<LinkIcon ');
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
    } else {
      console.log(`⏭️  No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
  }
});

console.log('\n✨ Import conflicts fixed!');