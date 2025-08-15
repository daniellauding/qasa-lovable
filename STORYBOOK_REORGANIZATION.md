# 📚 Storybook Reorganization Plan

## 🎯 Goal: Clean, organized left panel that makes QDS easy to discover and use

---

## 📊 Current Issues
- Stories scattered across categories
- No clear hierarchy
- Hard to find specific components
- Missing component usage guidance
- Broken Colors story page

---

## 🏗️ New Organization Structure

### 🎨 **Design System** (Foundation)
```
Design System/
├── 🎨 Colors & Tokens
├── 📝 Typography  
├── 🔤 Iconography
└── 📐 Spacing & Layout
```

### 🧩 **Components** (Building Blocks)
```
Components/
├── Primitives/
│   ├── Button
│   ├── Input
│   ├── TextArea
│   ├── Select
│   ├── Checkbox
│   ├── RadioGroup
│   ├── Switch
│   └── DatePicker
├── Patterns/
│   ├── Card
│   ├── Modal
│   ├── Toast
│   ├── Avatar
│   ├── Chip
│   └── Skeleton
├── Layout/
│   ├── Header
│   ├── Footer
│   ├── Box
│   └── Search
└── Specialized/
    ├── FilterModal
    ├── FilterButton
    ├── RangeSlider
    └── HintBox
```

### 📱 **Templates & Flows** (Ready-to-use)
```
Templates/
├── Authentication/
│   ├── Login Flow
│   ├── Registration Flow
│   └── Profile Creation
├── Property/
│   ├── Listing Creation
│   ├── Property Search
│   ├── Property Details
│   └── Apply Flow
├── Dashboard/
│   ├── Tenant Dashboard
│   ├── Landlord Dashboard
│   └── Messages
└── Marketing/
    ├── Landing Pages
    ├── Email Templates
    └── Success Pages
```

### 🔧 **Development** (For Developers)
```
Development/
├── Variant System
├── Theme Switcher
├── Utilities
└── Examples
```

---

## 🎨 Story Title Updates

### Current → New Structure

**Design System:**
- `Design System/Colors` → `🎨 Design System/Colors & Tokens`
- `UI/Typography` → `🎨 Design System/Typography`

**Components:**
- `UI/Button` → `🧩 Components/Primitives/Button`
- `UI/Card` → `🧩 Components/Patterns/Card`
- `UI/Input` → `🧩 Components/Primitives/Input`
- `Components/Header` → `🧩 Components/Layout/Header`

**Templates:**
- `Create Listing Flow` → `📱 Templates/Property/Listing Creation`
- `Find Tenant` → `📱 Templates/Property/Tenant Search`
- `Messages Page` → `📱 Templates/Dashboard/Messages`

---

## 📝 Implementation Plan

### 1. Update Story Titles
```javascript
// Before
export default {
  title: 'UI/Button',
  component: Button,
};

// After  
export default {
  title: '🧩 Components/Primitives/Button',
  component: Button,
};
```

### 2. Add Category Descriptions
```javascript
export default {
  title: '🧩 Components/Primitives/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Primary UI element for all user actions. Never use raw <button> elements.'
      }
    }
  }
};
```

### 3. Create Usage Examples
```javascript
// Add real usage examples to each story
export const UsageExamples = () => (
  <div className="space-y-8">
    <div>
      <h3>Property Application</h3>
      <Button variant="primary" size="lg">Ansök nu</Button>
    </div>
    <div>
      <h3>Form Navigation</h3>
      <Button variant="secondary">Tillbaka</Button>
      <Button variant="primary">Nästa</Button>
    </div>
  </div>
);
```

---

## 🔧 Implementation Script

Let me create a script to update all story files:

```javascript
// scripts/reorganize-storybook.js
const updates = [
  // Design System
  { from: 'Design System/Colors', to: '🎨 Design System/Colors & Tokens' },
  { from: 'UI/Typography', to: '🎨 Design System/Typography' },
  
  // Primitives
  { from: 'UI/Button', to: '🧩 Components/Primitives/Button' },
  { from: 'UI/Input', to: '🧩 Components/Primitives/Input' },
  { from: 'UI/TextArea', to: '🧩 Components/Primitives/TextArea' },
  { from: 'UI/Select', to: '🧩 Components/Primitives/Select' },
  { from: 'UI/Checkbox', to: '🧩 Components/Primitives/Checkbox' },
  { from: 'UI/RadioGroup', to: '🧩 Components/Primitives/RadioGroup' },
  { from: 'UI/Switch', to: '🧩 Components/Primitives/Switch' },
  { from: 'UI/DatePicker', to: '🧩 Components/Primitives/DatePicker' },
  
  // Patterns
  { from: 'UI/Card', to: '🧩 Components/Patterns/Card' },
  { from: 'UI/Modal', to: '🧩 Components/Patterns/Modal' },
  { from: 'UI/Toast', to: '🧩 Components/Patterns/Toast' },
  { from: 'UI/Avatar', to: '🧩 Components/Patterns/Avatar' },
  { from: 'UI/Chip', to: '🧩 Components/Patterns/Chip' },
  { from: 'UI/Skeleton', to: '🧩 Components/Patterns/Skeleton' },
  
  // Layout
  { from: 'Components/Header', to: '🧩 Components/Layout/Header' },
  { from: 'Components/Footer', to: '🧩 Components/Layout/Footer' },
  { from: 'UI/Box', to: '🧩 Components/Layout/Box' },
  { from: 'UI/Search', to: '🧩 Components/Layout/Search' },
  
  // Specialized
  { from: 'UI/FilterModal', to: '🧩 Components/Specialized/FilterModal' },
  { from: 'UI/FilterButton', to: '🧩 Components/Specialized/FilterButton' },
  { from: 'UI/RangeSlider', to: '🧩 Components/Specialized/RangeSlider' },
  { from: 'UI/HintBox', to: '🧩 Components/Specialized/HintBox' },
  
  // Templates
  { from: 'CreateListingFlow', to: '📱 Templates/Property/Listing Creation' },
  { from: 'FindTenant', to: '📱 Templates/Property/Tenant Search' },
  { from: 'MessagesPage', to: '📱 Templates/Dashboard/Messages' },
  { from: 'TenantProfilePage', to: '📱 Templates/Dashboard/Tenant Profile' }
];
```

---

## 🎯 Benefits of New Structure

### For Designers:
- ✅ Clear component hierarchy
- ✅ Easy to find specific elements
- ✅ Visual examples of usage
- ✅ Design token reference

### For Developers:
- ✅ Logical organization
- ✅ Code examples included
- ✅ Import paths visible
- ✅ Usage guidelines clear

### For Product Managers:
- ✅ Complete templates available
- ✅ Real use cases shown
- ✅ Swedish content examples
- ✅ Flow documentation

### For AI Tools:
- ✅ Clear component categories
- ✅ Usage examples to learn from
- ✅ Pattern recognition easier
- ✅ Consistent naming

---

## 📋 Quick Wins (Today)

### 1. Fix Broken Colors Story
```javascript
// Update Colors.stories.jsx
export default {
  title: '🎨 Design System/Colors & Tokens',
  parameters: {
    layout: 'fullscreen',
  }
};
```

### 2. Add Component Usage Notes
```javascript
// Add to Button.stories.jsx
export default {
  title: '🧩 Components/Primitives/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
## When to Use
- **Primary**: Main actions (Apply, Save, Submit)
- **Secondary**: Alternative actions (Cancel, Edit)  
- **Tertiary**: Navigation (Back, Close)

## Swedish Labels
- "Ansök nu" (Apply now)
- "Spara" (Save)
- "Tillbaka" (Back)
        `
      }
    }
  }
};
```

### 3. Test Visual Hierarchy
After updates, the left panel should look like:
```
🎨 Design System
  ├── Colors & Tokens
  ├── Typography
  └── Iconography

🧩 Components
  ├── Primitives
  │   ├── Button
  │   ├── Input
  │   └── ...
  ├── Patterns
  │   ├── Card
  │   ├── Modal
  │   └── ...
  └── Layout
      ├── Header
      └── ...

📱 Templates
  ├── Property
  ├── Dashboard
  └── ...
```

---

## 🚀 Immediate Action

Let me implement the first few updates to demonstrate:

1. Update Colors story (fix broken page)
2. Update Button story (add usage examples)
3. Update Card story (show patterns)
4. Test new organization

**Result**: Cleaner, more professional Storybook that guides users to the right components! 🎉