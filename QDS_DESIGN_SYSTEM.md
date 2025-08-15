# QDS - Qasa Design System

## 📚 Overview
**QDS (Qasa Design System)** is the official component library and design language for all Qasa products. It lives in Storybook and serves as the single source of truth for UI components.

**Location**: `/storybook` - Run `npm run storybook` to explore

---

## 🎯 Core Principles

1. **Consistency First** - Every UI element must come from QDS
2. **Accessibility Built-in** - All components meet WCAG 2.1 AA
3. **Theme Agnostic** - Works with Qasa and Blocket themes
4. **Swedish Market Focused** - Designed for Nordic users
5. **Performance Optimized** - Lightweight and fast

---

## 🏗️ QDS Architecture

```
QDS/
├── Components/          # UI building blocks
│   ├── Primitives/     # Base components (Button, Input, etc.)
│   ├── Patterns/       # Complex patterns (Forms, Cards, etc.)
│   └── Layouts/        # Page layouts and containers
├── Tokens/             # Design tokens
│   ├── Colors/         # Color variables
│   ├── Typography/     # Font system
│   ├── Spacing/        # Spacing scale
│   └── Effects/        # Shadows, borders, etc.
├── Icons/              # Lucide React icons
└── Themes/             # Qasa & Blocket themes
```

---

## 📦 Current QDS Components

### Primitives (Base Components)
| Component | Storybook | Status | Variants |
|-----------|-----------|--------|----------|
| Button | ✅ | Stable | 7 variants, 5 sizes |
| Typography | ✅ | Stable | 17 variants |
| Input | ✅ | Stable | Text, number, email |
| TextArea | ✅ | Stable | Resizable |
| Select | ✅ | Stable | Single, searchable |
| Checkbox | ✅ | Stable | With label |
| RadioGroup | ✅ | Stable | Vertical, horizontal |
| Switch | ✅ | Stable | On/off toggle |

### Patterns (Composite Components)
| Component | Storybook | Status | Purpose |
|-----------|-----------|--------|---------|
| Card | ✅ | Stable | Content container |
| Modal | ✅ | Stable | Overlay dialog |
| Toast | ✅ | Stable | Notifications |
| Avatar | ✅ | Stable | User image |
| Chip | ✅ | Stable | Tags/labels |
| DatePicker | ✅ | Stable | Date selection |
| RangeSlider | ✅ | Stable | Min/max selection |
| FilterModal | ✅ | Stable | Advanced filters |

### Layout Components
| Component | Storybook | Status | Usage |
|-----------|-----------|--------|-------|
| Box | ✅ | Stable | Generic container |
| Header | ✅ | Stable | App header |
| Footer | ✅ | Stable | App footer |
| Skeleton | ✅ | Stable | Loading states |

---

## 🎨 Design Tokens

### Color System
```css
/* QDS Color Variables */
--qds-color-primary     /* Qasa: #f19ec1, Blocket: #e3372a */
--qds-color-secondary   /* #322721 */
--qds-color-success     /* #10b981 */
--qds-color-warning     /* #f59e0b */
--qds-color-danger      /* #ef4444 */
--qds-color-info        /* #3b82f6 */

/* Semantic Colors */
--qds-color-background
--qds-color-surface
--qds-color-border
--qds-color-text-primary
--qds-color-text-secondary
```

### Typography Scale
```css
/* QDS Typography */
--qds-font-family: 'DiatypeRounded', system-ui;
--qds-font-mono: 'DiatypeRoundedMono', monospace;

/* Variants */
display-lg  /* 48px/56px */
display-md  /* 36px/44px */
display-sm  /* 30px/38px */
title-xl    /* 24px/32px */
title-lg    /* 20px/28px */
title-md    /* 18px/26px */
title-sm    /* 16px/24px */
title-xs    /* 14px/20px */
body-lg     /* 18px/28px */
body-md     /* 16px/24px */
body-sm     /* 14px/20px */
label-lg    /* 14px/20px */
label-md    /* 12px/16px */
label-sm    /* 11px/16px */
mono-md     /* 14px/20px */
mono-sm     /* 12px/16px */
```

### Spacing System
```css
/* QDS Spacing Scale */
--qds-space-xs: 0.25rem;  /* 4px */
--qds-space-sm: 0.5rem;   /* 8px */
--qds-space-md: 1rem;     /* 16px */
--qds-space-lg: 1.5rem;   /* 24px */
--qds-space-xl: 2rem;     /* 32px */
--qds-space-2xl: 3rem;    /* 48px */
--qds-space-3xl: 4rem;    /* 64px */
```

---

## 🔧 Extending QDS

### Adding New Components

1. **Create Component Structure**
```
src/components/ui/NewComponent/
├── NewComponent.jsx
├── NewComponent.styles.js
├── NewComponent.content.jsx
├── index.js
└── README.md
```

2. **Create Storybook Story**
```jsx
// src/stories/ui/NewComponent.stories.jsx
import NewComponent from '@/components/ui/NewComponent';

export default {
  title: 'QDS/NewComponent',
  component: NewComponent,
  tags: ['autodocs'],
};

export const Default = {
  args: {
    // default props
  },
};
```

3. **Follow QDS Standards**
- Use existing design tokens
- Support both themes
- Include PropTypes
- Add accessibility attributes
- Document in README

### Modifying Existing Components

1. **Check Impact**
   - Review all usage in prototypes
   - Update Storybook documentation
   - Test in both themes

2. **Version Control**
   - Document breaking changes
   - Provide migration guide
   - Update all instances

3. **Quality Checks**
   - Run visual regression tests
   - Check accessibility
   - Verify responsive behavior

---

## 🚀 Usage Guidelines

### For Developers

```jsx
// ✅ CORRECT - Using QDS
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import { Home } from 'lucide-react';

<Typography variant="title-lg">Welcome</Typography>
<Button variant="primary" size="md" leftIcon={<Home />}>
  Get Started
</Button>
```

```jsx
// ❌ WRONG - Not using QDS
import { Button as RadixButton } from '@radix-ui/themes';

<h1 className="text-2xl font-bold">Welcome</h1>
<button className="px-4 py-2 bg-pink-500">Get Started</button>
```

### For Designers

1. **Use QDS Components** in Figma/Sketch
2. **Follow Token System** for colors and spacing
3. **Check Storybook** for latest components
4. **Request New Components** through proper channels

---

## 📋 QDS Checklist

Before creating any UI:

- [ ] Check if component exists in QDS
- [ ] Use QDS Typography for all text
- [ ] Apply QDS color tokens
- [ ] Follow QDS spacing system
- [ ] Import icons from Lucide React
- [ ] Test in both themes
- [ ] Check accessibility
- [ ] Update Storybook if needed

---

## 🔄 Roadmap

### Phase 1: Standardization (Current)
- [x] Document all existing components
- [x] Create usage guidelines
- [ ] Migrate from Heroicons to Lucide React
- [ ] Fix all inconsistencies

### Phase 2: Enhancement
- [ ] Add more complex patterns
- [ ] Create form builder components
- [ ] Add animation system
- [ ] Improve theme switching

### Phase 3: Optimization
- [ ] Component lazy loading
- [ ] Tree shaking optimization
- [ ] Performance monitoring
- [ ] A11y automation

---

## 🛠️ Development Commands

```bash
# View QDS in Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Test components
npm test

# Check accessibility
npm run a11y

# Lint QDS code
npm run lint:qds
```

---

## 📚 Resources

- **Storybook**: http://localhost:6006
- **Figma Library**: [Link to QDS Figma]
- **Documentation**: This file + component READMEs
- **Support**: #qds-support channel

---

## ⚠️ Important Notes

1. **QDS is mandatory** - No exceptions for production code
2. **Never bypass QDS** - If something is missing, request it
3. **Consistency over creativity** - Follow the system
4. **Accessibility is required** - Not optional
5. **Both themes must work** - Test Qasa and Blocket

---

## 🤝 Contributing to QDS

1. **Propose** - Discuss need for new component
2. **Design** - Create mockups following QDS principles
3. **Build** - Implement with all requirements
4. **Document** - Add stories and documentation
5. **Review** - Get approval from QDS team
6. **Merge** - Component becomes part of QDS

---

## 📧 Contact

- **QDS Team Lead**: [Name]
- **Design System Channel**: #qds
- **Issues**: Create ticket in JIRA/GitHub
- **Questions**: Post in #qds-questions