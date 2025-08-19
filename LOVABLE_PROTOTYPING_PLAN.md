# Lovable Prototyping Tool - Qasa Implementation Plan

## 🎯 Vision
Transform the Lovable tool into a Qasa-aware prototyping powerhouse that understands Qasa's business, uses QDS components exclusively, and generates production-ready prototypes with authentic Qasa language and functionality.

---

## 📚 Phase 1: Knowledge Integration

### 1.1 Qasa Business Knowledge Base
Create a comprehensive knowledge base that the tool can reference:

```markdown
/lovable-config/
├── qasa-knowledge/
│   ├── business-model.md      # How Qasa makes money, user types
│   ├── user-journey.md         # Tenant and landlord flows
│   ├── features.md            # Core features and capabilities
│   ├── terminology.md         # Swedish rental market terms
│   ├── competitors.md         # Market positioning
│   └── value-props.md         # Key selling points
```

### 1.2 Production Content Scraping
- Analyze qasa.se for real content patterns
- Extract actual property descriptions
- Collect real tenant profiles (anonymized)
- Document common search patterns
- Map the complete user journey

### 1.3 Help Center Integration
- Import all FAQ content
- Extract common user questions
- Document problem resolution flows
- Understand support patterns

---

## 📦 Phase 2: Component System Enforcement

### 2.1 Component Registry
```javascript
// lovable-config/component-registry.js
export const APPROVED_COMPONENTS = {
  layout: ['Box', 'Card', 'Modal', 'Skeleton'],
  forms: ['Input', 'TextArea', 'Select', 'Checkbox', 'RadioGroup', 'Switch', 'DatePicker', 'RangeSlider'],
  actions: ['Button', 'FilterButton', 'Dropdown'],
  feedback: ['Toast', 'HintBox', 'LoadingDots'],
  typography: ['Typography'],
  data: ['Avatar', 'Chip', 'Icon'],
  navigation: ['Header', 'Footer', 'Search']
};

export const COMPONENT_RULES = {
  'Button': {
    variants: ['primary', 'secondary', 'tertiary', 'outline', 'ghost', 'transparent', 'bordered'],
    sizes: ['xs', 'sm', 'md', 'lg', 'xl'],
    required: ['variant', 'size']
  },
  'Typography': {
    variants: ['display-lg', 'display-md', 'display-sm', 'title-xl', 'title-lg', 'title-md', 'title-sm', 'title-xs', 'body-lg', 'body-md', 'body-sm', 'label-lg', 'label-md', 'label-sm', 'mono-md', 'mono-sm'],
    required: ['variant']
  }
};
```

### 2.2 Import Validation
```javascript
// lovable-config/import-validator.js
export function validateImports(code) {
  const violations = [];
  
  // Check for direct Radix imports
  if (code.includes('@radix-ui/react')) {
    violations.push('Direct Radix UI import detected. Use QDS components instead.');
  }
  
  // Check for inline styled components
  if (code.includes('className="px-') || code.includes('className="py-')) {
    violations.push('Inline Tailwind styling detected. Use QDS components.');
  }
  
  // Check for non-Heroicons
  if (code.includes('react-icons')) {
    violations.push('Non-approved icon library detected. Use Heroicons only.');
  }
  
  return violations;
}
```

### 2.3 Component Generation Templates
```javascript
// lovable-config/templates/component.template.js
export const componentTemplate = `
import React from 'react';
import PropTypes from 'prop-types';
{{imports}}

const {{ComponentName}} = ({ {{props}} }) => {
  return (
    {{jsx}}
  );
};

{{ComponentName}}.propTypes = {
  {{propTypes}}
};

export default {{ComponentName}};
`;
```

---

## 🎨 Phase 3: Design System Integration

### 3.1 Theme Awareness
```javascript
// lovable-config/theme-config.js
export const QASA_THEME = {
  colors: {
    primary: '#f19ec1',
    secondary: '#322721',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444'
  },
  typography: {
    fontFamily: 'DiatypeRounded',
    monoFamily: 'DiatypeRoundedMono'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem'
  }
};
```

### 3.2 Responsive Design Rules
```javascript
// lovable-config/responsive-rules.js
export const BREAKPOINTS = {
  mobile: '640px',
  tablet: '768px',
  desktop: '1024px',
  wide: '1280px'
};

export const RESPONSIVE_PATTERNS = {
  grid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  stack: 'flex flex-col md:flex-row',
  container: 'container mx-auto px-4 md:px-6 lg:px-8'
};
```

---

## 🗣️ Phase 4: Language & Content Generation

### 4.1 Content Generator Configuration
```javascript
// lovable-config/content-generator.js
export const CONTENT_CONFIG = {
  language: 'sv-SE',
  tone: 'friendly_professional',
  terminology: {
    tenant: 'hyresgäst',
    landlord: 'hyresvärd',
    rent: 'hyra',
    apartment: 'lägenhet',
    room: 'rum'
  },
  patterns: {
    cta: ['Nästa', 'Skapa profil', 'Visa mer', 'Ansök nu'],
    headings: ['Hitta ditt nästa hem', 'Trygg bostadssökning', 'Verifierade hyresvärdar'],
    descriptions: [
      'Vi hjälper dig hitta rätt bostad snabbt och säkert',
      'Alla våra hyresvärdar är ID-verifierade',
      'Få svar inom 24 timmar'
    ]
  }
};
```

### 4.2 Real Content Templates
```javascript
// lovable-config/content-templates.js
export const PROPERTY_TEMPLATE = {
  title: "{{rooms}} rum och kök, {{size}}m²",
  location: "{{area}}, {{city}}",
  rent: "{{amount}} kr/mån",
  features: [
    'Balkong/uteplats',
    'Diskmaskin',
    'Tvättmaskin',
    'Nära kommunikationer',
    'Hiss',
    'Förråd'
  ],
  description: "Ljus och trivsam {{rooms}}-rumslägenhet i populära {{area}}. {{description}}"
};

export const TENANT_TEMPLATE = {
  greeting: "Hej! Jag heter {{name}}",
  about: "Jag är {{age}} år och arbetar som {{occupation}}. {{interests}}",
  looking: "Söker {{roomCount}} rum i {{areas}} från {{moveDate}}",
  budget: "Budget: upp till {{maxRent}} kr/mån"
};
```

---

## 🚀 Phase 5: Example Use Cases Implementation

### 5.1 Landing Page Generator
```javascript
// use-cases/landing-page.js
export const generateLandingPage = {
  components: ['Header', 'Hero', 'Features', 'Testimonials', 'CTA', 'Footer'],
  content: {
    hero: {
      title: 'Hitta ditt nästa hem med Qasa',
      subtitle: 'Sveriges tryggaste bostadsplattform',
      cta: 'Börja söka'
    },
    features: [
      {
        icon: 'ShieldCheckIcon',
        title: 'ID-verifierade hyresvärdar',
        description: 'Alla hyresvärdar är verifierade för din trygghet'
      },
      {
        icon: 'ClockIcon',
        title: 'Svar inom 24 timmar',
        description: 'Få snabba besked om din ansökan'
      },
      {
        icon: 'DocumentTextIcon',
        title: 'Schyssta hyresavtal',
        description: 'Vi säkerställer rättvisa villkor för båda parter'
      }
    ]
  }
};
```

### 5.2 Listing Page Generator
```javascript
// use-cases/listing-page.js
export const generateListingPage = {
  layout: 'split-view',
  sections: {
    gallery: {
      component: 'ImageGallery',
      images: 'fetch-from-unsplash-swedish-apartments'
    },
    details: {
      component: 'PropertyDetails',
      fields: ['title', 'location', 'rent', 'size', 'rooms', 'moveIn', 'contract']
    },
    features: {
      component: 'FeatureList',
      items: 'auto-generate-relevant-features'
    },
    description: {
      component: 'Typography',
      variant: 'body-md',
      content: 'generate-realistic-description'
    },
    landlord: {
      component: 'LandlordCard',
      verified: true
    },
    actions: {
      component: 'ActionBar',
      buttons: ['Ansök nu', 'Spara', 'Dela']
    }
  }
};
```

### 5.3 Search Experience Generator
```javascript
// use-cases/search-experience.js
export const generateSearchExperience = {
  components: {
    search: 'SearchBar',
    filters: 'FilterModal',
    results: 'PropertyGrid',
    map: 'MapView',
    sorting: 'SortDropdown'
  },
  variations: [
    'standard-list',
    'map-focused',
    'card-grid',
    'minimal-list',
    'detailed-cards'
  ],
  realData: {
    properties: 'generate-20-realistic-listings',
    locations: 'swedish-city-areas',
    priceRanges: 'market-accurate-rents'
  }
};
```

### 5.4 Application Flow Generator
```javascript
// use-cases/application-flow.js
export const generateApplicationFlow = {
  steps: [
    {
      component: 'ApplicationIntro',
      content: 'personalized-greeting'
    },
    {
      component: 'ProfileCompletion',
      fields: ['employment', 'income', 'references']
    },
    {
      component: 'PersonalLetter',
      template: 'qasa-letter-template'
    },
    {
      component: 'DocumentUpload',
      required: ['id', 'employment', 'income']
    },
    {
      component: 'ApplicationReview',
      summary: true
    },
    {
      component: 'ApplicationSuccess',
      nextSteps: true
    }
  ]
};
```

---

## 🔧 Phase 6: Technical Implementation

### 6.1 Lovable Configuration File
```javascript
// .lovable.config.js
module.exports = {
  projectType: 'qasa-prototype',
  componentLibrary: 'qds',
  enforceRules: true,
  language: 'sv-SE',
  themes: ['qasa', 'blocket'],
  contentSource: './lovable-config/qasa-knowledge',
  validators: [
    'import-validator',
    'component-validator',
    'accessibility-validator',
    'theme-validator'
  ],
  generators: {
    component: './lovable-config/templates/component.template.js',
    page: './lovable-config/templates/page.template.js',
    variant: './lovable-config/templates/variant.template.js'
  }
};
```

### 6.2 Pre-commit Hooks
```javascript
// .husky/pre-commit
#!/bin/sh
npm run lovable:validate
npm run storybook:check
npm run theme:test
```

### 6.3 VS Code Extension
```json
// .vscode/settings.json
{
  "lovable.componentLibrary": "qds",
  "lovable.enforceImports": true,
  "lovable.language": "sv-SE",
  "lovable.autoComplete": {
    "components": true,
    "content": true,
    "translations": true
  }
}
```

---

## 📋 Phase 7: Quality Assurance

### 7.1 Validation Checklist
- [ ] All components from QDS library
- [ ] No direct Radix imports
- [ ] Swedish content is accurate
- [ ] Themes work correctly
- [ ] Responsive on all devices
- [ ] Accessibility standards met
- [ ] Real estate data is realistic
- [ ] User flows are complete

### 7.2 Testing Scenarios
```javascript
// lovable-config/test-scenarios.js
export const TEST_SCENARIOS = [
  {
    name: 'Create tenant profile',
    steps: ['registration', 'profile-completion', 'verification'],
    expectedComponents: ['Input', 'TextArea', 'Button', 'Typography'],
    expectedContent: 'swedish-rental-terms'
  },
  {
    name: 'Search for apartment',
    steps: ['search', 'filter', 'view-listing', 'apply'],
    expectedComponents: ['Search', 'FilterModal', 'Card', 'Button'],
    expectedContent: 'area-names-stockholm'
  }
];
```

---

## 🚦 Phase 8: Launch & Training

### 8.1 Documentation
- Component usage guide
- Content writing guide
- Swedish terminology reference
- Common patterns library
- Troubleshooting guide

### 8.2 Training Materials
- Video tutorials for common tasks
- Example prototypes repository
- Best practices document
- FAQ section

### 8.3 Feedback Loop
- Usage analytics
- Error tracking
- User feedback collection
- Continuous improvement process

---

## ✅ Success Metrics

1. **Component Compliance**: 100% QDS component usage
2. **Content Quality**: Native Swedish speaker approval
3. **Design Consistency**: Matches production Qasa.se
4. **Generation Speed**: < 30 seconds for full page
5. **User Satisfaction**: 90%+ approval from design team
6. **Code Quality**: Passes all linting rules
7. **Accessibility**: WCAG 2.1 AA compliant

---

## 🎯 Deliverables

### Immediate (Week 1-2)
- [x] QDS Component Rules document
- [x] Language & Tone Guide
- [ ] Component validation script
- [ ] Basic content templates

### Short-term (Week 3-4)
- [ ] Lovable configuration setup
- [ ] Import validator implementation
- [ ] Swedish content generator
- [ ] Landing page use case

### Mid-term (Month 2)
- [ ] All use cases implemented
- [ ] VS Code extension
- [ ] Testing suite
- [ ] Documentation complete

### Long-term (Month 3)
- [ ] AI model fine-tuned on Qasa
- [ ] Production content integration
- [ ] Advanced prototyping features
- [ ] Team training completed

---

## 🔄 Maintenance Plan

### Weekly
- Review generated prototypes
- Update content templates
- Fix reported issues

### Monthly
- Update component library
- Refresh production content
- Analyze usage patterns
- Improve AI responses

### Quarterly
- Major feature additions
- Performance optimization
- Team training sessions
- Strategy alignment review

---

## 📐 Lovable Generation Rules (QDS Compliance)

These rules are hard requirements for Lovable output:

- **No new section components**: Do not generate `WhatIsQasa`, `HowItWorksSection`, `TrustSafetySection`, etc. Use existing QDS components and compose sections.
- **Typography hierarchy**:
  - Hero: `display-lg` (dark hero uses `color="white"`)
  - Section headers: `display-sm`
  - Card titles: `title-lg`
  - Body: `body-md` (secondary copy: `color="secondary"`)
  - Small/hints: `label-sm` or `body-sm`
- **Color & contrast**:
  - On dark surfaces or image + dark gradient → use `Typography color="white"` for all text; use opacity for subtext.
  - Icons inside primary buttons → `text-[var(--color-text-on-primary)]`.
  - Icons on dark non-primary surfaces → `text-white`.
  - Never use Tailwind palette or hex; use tokens.
- **Shadows & borders**:
  - Allowed shadows: `shadow-sm | shadow-md | shadow-lg` for cards/boxes only.
  - Borders must use token colors (e.g., `--color-border`). No pure-white borders for contrast.
- **Language**: Always generate EN/SV/FI/NO keys simultaneously when emitting translation snippets.

### Composition Recipes (for generation)

- “What is Qasa?” section
  - Title (`display-sm`), subtitle (`title-xl`), description (`body-md` secondary)
  - 3 stats using value (`title-lg`) + hint (`body-sm`)

- “How it works” pills + steps
  - Two `Button`s in rounded container (primary active, transparent inactive)
  - 4 step boxes: icon circle + `title-lg` + `body-sm`

- Trust & Safety grid
  - 4 items: icon container + `title-lg` + `body-sm`