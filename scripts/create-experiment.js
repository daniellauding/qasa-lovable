#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function createExperiment() {
  console.log('\n🧪 Create New Qasa Experiment\n');

  const category = await question('Category (e.g., tenants, landlords): ');
  const name = await question('Experiment name (e.g., increase-application-quality): ');
  const displayName = await question('Display name (e.g., Increase Application Quality): ');
  const description = await question('Description: ');
  const tags = await question('Tags (comma-separated, e.g., experiment,gamification): ');

  const basePath = path.join(__dirname, '..', 'src', 'prototypes', category, name);
  const componentName = displayName.replace(/\s+/g, '');

  // Create directory structure
  fs.mkdirSync(path.join(basePath, 'components'), { recursive: true });

  // Create main component
  const mainComponent = `import React from 'react';

function ${componentName}() {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">${displayName}</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add your experiment content here */}
      </main>
    </div>
  );
}

export default ${componentName};`;

  fs.writeFileSync(path.join(basePath, `${componentName}.jsx`), mainComponent);

  // Create story
  const story = `import ${componentName} from '../prototypes/${category}/${name}/${componentName}';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Prototypes/${displayName}',
  component: ${componentName},
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {},
};`;

  fs.writeFileSync(path.join(__dirname, '..', 'src', 'stories', `${componentName}.stories.jsx`), story);

  // Update App.jsx
  const appPath = path.join(__dirname, '..', 'src', 'App.jsx');
  let appContent = fs.readFileSync(appPath, 'utf8');

  // Add import
  const importStatement = `import ${componentName} from './prototypes/${category}/${name}/${componentName}';\n`;
  appContent = appContent.replace(
    /import.*?from.*?;\n/,
    (match) => match + importStatement
  );

  // Add to prototypes array
  const prototypeEntry = `  {
    id: '${name}',
    category: '${category}',
    name: '${displayName}',
    description: '${description}',
    thumbnail: '/thumbnails/${name}.png',
    path: '/${category}/${name}',
    component: ${componentName},
    tags: [${tags.split(',').map(tag => `'${tag.trim()}'`).join(', ')}],
  },\n];`;

  appContent = appContent.replace(/\n];/, prototypeEntry);

  fs.writeFileSync(appPath, appContent);

  console.log('\n✅ Experiment created successfully!');
  console.log(`\nNext steps:
1. Add your experiment content in src/prototypes/${category}/${name}/${componentName}.jsx
2. Create components in src/prototypes/${category}/${name}/components/
3. Add a thumbnail image at public/thumbnails/${name}.png
4. Run npm run storybook to view your experiment in Storybook\n`);

  rl.close();
}

createExperiment().catch(console.error); 