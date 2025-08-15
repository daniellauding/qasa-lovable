# Week Action Plan: QDS Production Ready

## 🎯 Goal
Make the Qasa prototyping tool production-ready so designers and PMs can generate professional, on-brand prototypes without technical mess.

---

## 📅 Day-by-Day Execution Plan

### Day 1-2: Foundation Cleanup
**Goal**: Zero inconsistencies, single icon library, clean codebase

#### Morning Day 1
```bash
# 1. Create branch for cleanup
git checkout -b qds-cleanup-week

# 2. Run icon migration script
npm run scripts:migrate-icons

# 3. Commit icon changes
git add -A && git commit -m "Migrate all icons from Heroicons to Lucide React"
```

#### Afternoon Day 1
- Fix 5 files using Lucide (migrate to single library)
- Update all icon imports in prototypes
- Test all components still render correctly

#### Day 2
- Replace inline Tailwind in top 10 problematic files
- Create reusable style utilities
- Update component imports

**Deliverable**: Clean, consistent codebase with single icon library

---

### Day 3: Design System Compliance
**Goal**: All colors use CSS variables, Swedish translations implemented

#### Tasks
1. **Color Variable Migration**
   - Replace all `text-gray-*` with `var(--qds-color-text-*)`
   - Fix hardcoded hex colors
   - Create missing CSS variables

2. **Swedish Translation**
   - Update `src/translations/sv.js` with all UI strings
   - Fix QualityIndicator.jsx English text
   - Implement translation hooks in all prototypes

**Deliverable**: Fully themed, properly translated application

---

### Day 4: Automation & Validation
**Goal**: Prevent future inconsistencies with automated checks

#### Morning: Validation Scripts
```javascript
// scripts/validate-qds.js
- Check for non-QDS imports
- Scan for inline styles
- Verify icon library usage
- Validate color variables
```

#### Afternoon: Pre-commit Hooks
```bash
# .husky/pre-commit
#!/bin/sh
npm run validate:qds
npm run validate:translations
npm run lint:fix
```

**Deliverable**: Automated quality gates

---

### Day 5: Template System
**Goal**: Ready-to-use patterns for designers/PMs

#### Template Categories
1. **Landing Pages**
   - Hero sections
   - Feature grids
   - Testimonials
   - CTAs

2. **Property Listings**
   - Search results
   - Detail pages
   - Gallery views
   - Contact forms

3. **User Flows**
   - Registration
   - Application process
   - Profile creation
   - Messaging

#### Implementation
```javascript
// templates/generator.js
export function generateTemplate(type, config) {
  const template = templates[type];
  return populateWithQDSComponents(template, config);
}
```

**Deliverable**: 15+ ready-to-use templates

---

### Day 6: Testing & Documentation
**Goal**: Battle-tested system with clear documentation

#### Morning: Real Content Testing
- Import actual Qasa property data
- Test with production copy
- Verify Swedish market accuracy
- Check responsive behavior

#### Afternoon: Training Materials
- Record Loom videos for each use case
- Create step-by-step guides
- Document common patterns
- Prepare Notion handover

**Deliverable**: Tested system with complete documentation

---

### Day 7: Demo & Handover
**Goal**: Impressive demo and smooth handover

#### Demo Preparation
1. **Showcase Scenarios**
   - Generate landing page in 30 seconds
   - Create property listing with real data
   - Show theme switching (Qasa/Blocket)
   - Demonstrate language switching

2. **Metrics to Show**
   - 100% QDS compliance
   - 0 design inconsistencies
   - < 1 minute generation time
   - Perfect Swedish copy

**Deliverable**: Polished demo and excited stakeholders

---

## 🛠️ Technical Implementation Priority

### Immediate (Today)
```bash
# 1. Install dependencies
npm install husky --save-dev
npm install @commitlint/cli @commitlint/config-conventional --save-dev

# 2. Set up validation
mkdir scripts
touch scripts/validate-qds.js
touch scripts/migrate-icons.js

# 3. Create migration branch
git checkout -b qds-production-ready
```

### Icon Migration Script
```javascript
// scripts/migrate-icons.js
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const iconMap = {
  'HomeIcon': 'Home',
  'UserIcon': 'User',
  'ChevronRightIcon': 'ChevronRight',
  'PlusIcon': 'Plus',
  // Add all mappings
};

function migrateIcons() {
  const files = glob.sync('src/**/*.{jsx,tsx}');
  
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace imports
    content = content.replace(
      /@heroicons\/react\/24\/(outline|solid)/g,
      'lucide-react'
    );
    
    // Replace icon names
    Object.entries(iconMap).forEach(([old, new]) => {
      content = content.replace(new RegExp(old, 'g'), new);
    });
    
    fs.writeFileSync(file, content);
  });
}

migrateIcons();
```

### QDS Validation Script
```javascript
// scripts/validate-qds.js
const violations = [];

function validateQDS() {
  // Check for direct Radix imports
  if (content.includes('@radix-ui/react')) {
    violations.push('Direct Radix import found');
  }
  
  // Check for inline Tailwind
  if (content.match(/className=".*(?:px-|py-|text-gray)/)) {
    violations.push('Inline Tailwind classes found');
  }
  
  // Check for hardcoded colors
  if (content.match(/#[0-9a-fA-F]{6}/)) {
    violations.push('Hardcoded hex color found');
  }
  
  if (violations.length > 0) {
    console.error('QDS Violations:', violations);
    process.exit(1);
  }
}
```

---

## 🎯 Success Metrics

### Technical
- ✅ 0 ESLint errors
- ✅ 0 TypeScript errors
- ✅ 100% QDS component usage
- ✅ 0 hardcoded colors
- ✅ Single icon library (Lucide)

### Business
- ✅ < 1 minute to generate prototype
- ✅ 100% Swedish copy accuracy
- ✅ Works on all devices
- ✅ Both themes functional
- ✅ No design inconsistencies

### User Experience
- ✅ Designers can use without dev help
- ✅ PMs can test ideas quickly
- ✅ Consistent with production Qasa
- ✅ Professional output quality

---

## 🚀 Quick Wins for Demo

1. **One-Click Templates**
   - "Create Qasa Landing Page" button
   - "Generate Property Listing" button
   - "Build Tenant Profile" button

2. **Live Preview**
   - Real-time theme switching
   - Instant language toggle
   - Device preview (mobile/tablet/desktop)

3. **Export Options**
   - Copy code to clipboard
   - Export as React component
   - Generate Figma specs

---

## 📊 Risk Mitigation

| Risk | Impact | Mitigation |
|------|--------|------------|
| Icon migration breaks UI | High | Test each component after migration |
| Translation missing keys | Medium | Fallback to English with warning |
| Performance issues | Medium | Lazy load heavy components |
| QDS incomplete | High | Document missing pieces for Phase 2 |

---

## 🔄 Daily Standup Topics

### Day 1
- "Started icon migration, 30% complete"
- "Found 5 additional inconsistencies"

### Day 2
- "Icons migrated, testing in progress"
- "Tailwind cleanup 50% done"

### Day 3
- "Colors standardized"
- "Swedish translations 80% complete"

### Day 4
- "Validation scripts working"
- "Pre-commit hooks active"

### Day 5
- "10 templates created"
- "Generator function tested"

### Day 6
- "Real content integrated"
- "Documentation complete"

### Day 7
- "Demo ready"
- "Handover prepared"

---

## ✅ Definition of Done

- [ ] All files use Lucide React icons
- [ ] No inline Tailwind classes
- [ ] All colors use CSS variables
- [ ] Swedish translations complete
- [ ] Validation scripts running
- [ ] Pre-commit hooks active
- [ ] 15+ templates available
- [ ] Documentation complete
- [ ] Training videos recorded
- [ ] Demo prepared
- [ ] Stakeholders impressed