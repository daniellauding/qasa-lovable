#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const SRC_DIR = path.join(__dirname, '../src');
const PUBLIC_DIR = path.join(__dirname, '../public');
const STORYBOOK_DIR = path.join(__dirname, '../.storybook');

// File extensions to analyze
const JS_EXTENSIONS = ['js', 'jsx', 'ts', 'tsx'];
const CSS_EXTENSIONS = ['css', 'scss', 'sass'];
const ASSET_EXTENSIONS = ['png', 'jpg', 'jpeg', 'svg', 'gif', 'ico', 'woff', 'woff2', 'ttf', 'otf'];

// Results storage
const results = {
  used: new Set(),
  unused: new Set(),
  imports: new Map(),
  exports: new Map(),
  errors: []
};

// Helper function to get all files recursively
function getAllFiles(dir, extensions = []) {
  const files = [];
  const pattern = extensions.length > 0 
    ? `**/*.{${extensions.join(',')}}`
    : '**/*';
  
  try {
    const matches = glob.sync(pattern, { 
      cwd: dir, 
      absolute: true,
      ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
    });
    files.push(...matches);
  } catch (error) {
    results.errors.push(`Error reading directory ${dir}: ${error.message}`);
  }
  
  return files;
}

// Extract imports from a file
function extractImports(filePath) {
  const imports = [];
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Match various import patterns
  const importPatterns = [
    // ES6 imports
    /import\s+(?:(?:\{[^}]*\}|\*\s+as\s+\w+|\w+)(?:\s*,\s*(?:\{[^}]*\}|\*\s+as\s+\w+|\w+))*\s+from\s+)?['"`]([^'"`]+)['"`]/g,
    // Dynamic imports
    /import\s*\(\s*['"`]([^'"`]+)['"`]\s*\)/g,
    // Require statements
    /require\s*\(\s*['"`]([^'"`]+)['"`]\s*\)/g,
    // CSS imports
    /@import\s+['"`]([^'"`]+)['"`]/g,
    // Asset references in JSX
    /src\s*=\s*['"`]([^'"`]+)['"`]/g,
    /href\s*=\s*['"`]([^'"`]+)['"`]/g,
    /backgroundImage\s*:\s*url\s*\(\s*['"`]?([^'"`)]+)['"`]?\s*\)/g
  ];
  
  importPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const importPath = match[1];
      if (importPath && !importPath.startsWith('http') && !importPath.startsWith('//')) {
        imports.push(importPath);
      }
    }
  });
  
  return imports;
}

// Resolve import path to absolute path
function resolveImportPath(importPath, currentFile) {
  const currentDir = path.dirname(currentFile);
  
  // Handle relative imports
  if (importPath.startsWith('.')) {
    const resolvedPath = path.resolve(currentDir, importPath);
    
    // Try different extensions
    const extensions = [...JS_EXTENSIONS, ...CSS_EXTENSIONS];
    for (const ext of extensions) {
      const withExt = `${resolvedPath}.${ext}`;
      if (fs.existsSync(withExt)) return withExt;
    }
    
    // Try as directory with index file
    for (const ext of extensions) {
      const indexFile = path.join(resolvedPath, `index.${ext}`);
      if (fs.existsSync(indexFile)) return indexFile;
    }
    
    return resolvedPath;
  }
  
  // Handle absolute imports (from src)
  if (importPath.startsWith('@/') || importPath.startsWith('src/')) {
    const cleanPath = importPath.replace(/^@\//, '').replace(/^src\//, '');
    const resolvedPath = path.resolve(SRC_DIR, cleanPath);
    
    // Try different extensions
    const extensions = [...JS_EXTENSIONS, ...CSS_EXTENSIONS];
    for (const ext of extensions) {
      const withExt = `${resolvedPath}.${ext}`;
      if (fs.existsSync(withExt)) return withExt;
    }
    
    return resolvedPath;
  }
  
  return null;
}

// Analyze file usage
function analyzeFileUsage() {
  console.log('🔍 Analyzing file usage in Qasa prototyping project...\n');
  
  // Get all files
  const jsFiles = getAllFiles(SRC_DIR, JS_EXTENSIONS);
  const cssFiles = getAllFiles(SRC_DIR, CSS_EXTENSIONS);
  const publicFiles = getAllFiles(PUBLIC_DIR, ASSET_EXTENSIONS);
  const storybookFiles = getAllFiles(STORYBOOK_DIR, JS_EXTENSIONS);
  
  const allFiles = [...jsFiles, ...cssFiles, ...publicFiles, ...storybookFiles];
  
  console.log(`📁 Found ${allFiles.length} files to analyze:`);
  console.log(`   - ${jsFiles.length} JavaScript/TypeScript files`);
  console.log(`   - ${cssFiles.length} CSS files`);
  console.log(`   - ${publicFiles.length} public assets`);
  console.log(`   - ${storybookFiles.length} Storybook files\n`);
  
  // Track all files as potentially unused
  allFiles.forEach(file => results.unused.add(file));
  
  // Analyze imports in JS/TS files
  const filesToAnalyze = [...jsFiles, ...storybookFiles];
  
  console.log('🔗 Analyzing imports...');
  filesToAnalyze.forEach(file => {
    try {
      const imports = extractImports(file);
      results.imports.set(file, imports);
      
      imports.forEach(importPath => {
        const resolvedPath = resolveImportPath(importPath, file);
        if (resolvedPath && fs.existsSync(resolvedPath)) {
          results.used.add(resolvedPath);
          results.unused.delete(resolvedPath);
        }
      });
    } catch (error) {
      results.errors.push(`Error analyzing ${file}: ${error.message}`);
    }
  });
  
  // Mark entry points as used
  const entryPoints = [
    path.join(SRC_DIR, 'index.tsx'),
    path.join(SRC_DIR, 'App.tsx'),
    path.join(STORYBOOK_DIR, 'main.js'),
    path.join(STORYBOOK_DIR, 'preview.jsx')
  ];
  
  entryPoints.forEach(entry => {
    if (fs.existsSync(entry)) {
      results.used.add(entry);
      results.unused.delete(entry);
    }
  });
  
  // Generate report
  generateReport();
}

// Generate usage report
function generateReport() {
  console.log('\n📊 File Usage Analysis Report\n');
  console.log('=' .repeat(50));
  
  // Summary
  const totalFiles = results.used.size + results.unused.size;
  const usagePercentage = ((results.used.size / totalFiles) * 100).toFixed(1);
  
  console.log(`📈 Usage Summary:`);
  console.log(`   - Total files: ${totalFiles}`);
  console.log(`   - Used files: ${results.used.size}`);
  console.log(`   - Unused files: ${results.unused.size}`);
  console.log(`   - Usage rate: ${usagePercentage}%\n`);
  
  // Unused files by directory
  const unusedByDir = {};
  results.unused.forEach(file => {
    const relativePath = path.relative(process.cwd(), file);
    const dir = path.dirname(relativePath);
    if (!unusedByDir[dir]) unusedByDir[dir] = [];
    unusedByDir[dir].push(path.basename(file));
  });
  
  if (Object.keys(unusedByDir).length > 0) {
    console.log('🗑️  Potentially Unused Files:\n');
    Object.entries(unusedByDir).forEach(([dir, files]) => {
      console.log(`📁 ${dir}/`);
      files.forEach(file => {
        console.log(`   - ${file}`);
      });
      console.log('');
    });
  }
  
  // Import analysis
  console.log('🔗 Import Analysis:\n');
  const importStats = {};
  results.imports.forEach((imports, file) => {
    const relativePath = path.relative(process.cwd(), file);
    importStats[relativePath] = imports.length;
  });
  
  // Show files with most imports
  const sortedByImports = Object.entries(importStats)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 10);
  
  console.log('📦 Files with Most Imports:');
  sortedByImports.forEach(([file, count]) => {
    console.log(`   - ${file}: ${count} imports`);
  });
  
  // Errors
  if (results.errors.length > 0) {
    console.log('\n❌ Errors encountered:');
    results.errors.forEach(error => {
      console.log(`   - ${error}`);
    });
  }
  
  // Recommendations
  console.log('\n💡 Recommendations:');
  console.log('   - Review unused files before deleting (they might be dynamically imported)');
  console.log('   - Consider removing unused assets to reduce bundle size');
  console.log('   - Check if unused components are meant for future use');
  console.log('   - Verify that all imports are resolving correctly');
  
  console.log('\n' + '=' .repeat(50));
}

// Run analysis
if (import.meta.url === `file://${process.argv[1]}`) {
  analyzeFileUsage();
}

export { analyzeFileUsage, results };
