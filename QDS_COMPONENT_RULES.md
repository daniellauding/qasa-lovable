# Qasa Design System (QDS) Component Rules & Guidelines

## 🎯 Core Principle
**Always use QDS components from Storybook. Never freestyle with Radix UI or other libraries directly.**

---

## 📋 Component Usage Rules

### Rule 1: QDS Components First
✅ **DO:** Import from local UI components
```jsx
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Modal from '@/components/ui/Modal';
```

❌ **DON'T:** Import Radix UI directly
```jsx
// NEVER DO THIS
import * as Dialog from '@radix-ui/react-dialog';
import { Button as RadixButton } from '@radix-ui/themes';
```

### Rule 2: Follow Component Architecture
Every new component must have:
```
src/components/ui/ComponentName/
├── ComponentName.jsx       # Main logic
├── ComponentName.styles.js # Styling utilities
├── ComponentName.content.jsx # Rendering
├── index.js               # Exports
└── README.md             # Documentation
```

### Rule 3: Storybook Documentation Required
Every component MUST have a `.stories.jsx` file with:
- Default story
- All variant examples
- Interactive props table
- Usage guidelines
- Accessibility notes

### Rule 4: Use Design Tokens
Always use CSS custom properties for theming:
```jsx
// ✅ CORRECT
className="bg-[var(--color-primary)]"

// ❌ WRONG
className="bg-pink-500"
```

### Rule 5: Typography Consistency
Use Typography component with semantic variants:
```jsx
// ✅ CORRECT
<Typography variant="title-lg">Heading</Typography>

// ❌ WRONG
<h1 className="text-2xl font-bold">Heading</h1>
```

---

## 🏗️ Component Generation Guidelines

### When Creating New Components

1. **Check Existing Components First**
   - Search Storybook for similar components
   - Extend existing components when possible
   - Don't duplicate functionality

2. **Follow Naming Conventions**
   - PascalCase for components: `FilterModal`
   - camelCase for props: `isLoading`
   - kebab-case for CSS classes: `filter-modal`

3. **Required Props Structure**
   ```jsx
   Component.propTypes = {
     variant: PropTypes.oneOf(['primary', 'secondary']),
     size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
     className: PropTypes.string, // Always allow customization
     children: PropTypes.node,
     ...semanticProps
   };
   ```

4. **Accessibility Requirements**
   - Include proper ARIA attributes
   - Support keyboard navigation
   - Provide focus indicators
   - Test with screen readers

5. **Theme Support**
   - Components must work with both Qasa and Blocket themes
   - Use theme context for dynamic styling
   - Test in both themes before committing

---

## 🎨 Approved Component Library

### Layout Components
- `Box` - Container with padding/margin utilities
- `Card` - Content card with shadow and border
- `Modal` - Dialog overlay component
- `Skeleton` - Loading placeholder

### Form Components
- `Input` - Text input field
- `TextArea` - Multi-line text input
- `Select` - Dropdown selection
- `Checkbox` - Single checkbox
- `CheckboxGroup` - Multiple checkboxes
- `RadioGroup` - Radio button group
- `Switch` - Toggle switch
- `DatePicker` - Date selection
- `RangeSlider` - Range value selector

### Action Components
- `Button` - Primary action element (7 variants, 5 sizes)
- `FilterButton` - Specialized filter toggle
- `Dropdown` - Action menu dropdown

### Feedback Components
- `Toast` - Notification message
- `HintBox` - Contextual help
- `LoadingDots` - Loading indicator

### Typography Components
- `Typography` - Text with 17 semantic variants

### Data Display
- `Avatar` - User profile image
- `Chip` - Tag or label
- `Icon` - Lucide React wrapper
- `FeatureBadge` - Inline feature indicators
- `TrustIndicator` - Trust and safety indicators

### Navigation
- `Header` - App header
- `Footer` - App footer
- `Search` - Search input component

---

## 🔧 Import Patterns

### Correct Import Structure
```jsx
// Components from QDS
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import { Input, TextArea } from '@/components/ui/forms';

// Icons from Lucide React ONLY
import { Home, User, Heart, ChevronRight, Plus } from 'lucide-react';

// Utilities
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
```

### Never Import
```jsx
// ❌ No direct Radix imports
import * as Dialog from '@radix-ui/react-dialog';

// ❌ No Heroicons (legacy - being phased out)
import { HomeIcon } from '@heroicons/react/24/outline';

// ❌ No other icon libraries
import { FaHome } from 'react-icons/fa';

// ❌ No inline Tailwind components
const Button = () => <button className="px-4 py-2">Click</button>;

// ❌ No custom icon components
const CustomIcon = () => <svg>...</svg>;
```

---

## 📝 Variant System Integration

When creating prototype variants:

1. **Use QDS Components Consistently**
   - All variants must use the same component library
   - No mixing QDS with custom implementations

2. **Maintain Design System Integrity**
   - Variants change functionality, not base styling
   - Keep consistent spacing, typography, and colors

3. **Document Component Usage**
   ```jsx
   // At the top of each variant file
   /**
    * This variant uses:
    * - Button (primary, secondary variants)
    * - Typography (title-lg, body-md)
    * - Card with custom className
    */
   ```

---

## 🚨 Enforcement Checklist

Before committing any new component or screen:

- [ ] All UI elements use QDS components
- [ ] No direct Radix UI imports
- [ ] Storybook story created/updated
- [ ] Works with both Qasa and Blocket themes
- [ ] Follows accessibility guidelines
- [ ] Uses semantic Typography variants
- [ ] Imports follow the approved pattern
- [ ] Component has proper PropTypes
- [ ] Responsive design implemented
- [ ] Tested in light and dark modes

---

## 🎨 Mandatory Color, Contrast, and Icon Rules

### White Text Rule
- When a section uses a dark surface or image overlay (e.g., `bg-[var(--color-brown)]`, gradients from black), all readable text must use `Typography` with `color="white"`. Do not rely on inherited colors.
- On brand/primary surfaces (buttons, chips) use `text-[var(--color-text-on-primary)]` for icons/text inside.

### Icon Styling Rules
- **Icons use transparent backgrounds** - Never add background colors or radius to icons themselves
- **Icon containers** can have backgrounds when needed for visual hierarchy
- **Use proper color tokens** for icon colors: `text-[var(--color-text-primary)]`, `text-[var(--color-text-secondary)]`
- **For checkmarks/bullets**: Use `CheckCircle` icon with `text-[var(--color-text-primary)]`, never red or green colors
- **Lucide icons must follow context**:
  - On primary buttons: `text-[var(--color-text-on-primary)]`.
  - On dark non-primary surfaces: `text-white`.
  - In light info boxes: icon container `bg-[var(--color-button-tertiary-bg)]`, icon `text-[var(--color-text-primary)]`.

### Tokens Only
- Never use Tailwind palette classes or hex values for colors. Always use CSS variables (tokens). If a token seems missing, choose the best semantic token and open a task to extend tokens.

Required replacements:
- `text-gray-900` → `text-[var(--color-text-primary)]`
- `text-gray-700/600/500/400` → `text-[var(--color-text-secondary)]` (or `text-[var(--color-gray-60|50|40)]` where nuance is needed)
- `text-green-600` → `text-[var(--color-success)]`
- `text-red-600` → `text-[var(--color-danger)]`

### Shadows & Borders
- Allowed shadows: `shadow-sm | shadow-md | shadow-lg` on cards/boxes only. No shadows on wide strips (hero, stats strip).
- Borders use semantic tokens, e.g., `border-[var(--color-border)]` or the documented brand-subtle border token.

---

## 🔠 Typography Hierarchy (Use `Typography` only)

- Page hero: `display-lg` (dark hero: `color="white"`).
- Section headers: `display-sm`.
- Card/box titles: `title-lg`.
- Stats value: `title-xl` or `title-lg` + hint `body-sm`.
- Paragraphs: `body-md`; secondary copy uses `color="secondary"`.
- Small print: `label-sm`.

Do not output raw `<h*>`/`<p>` with size classes.

---

## 🧱 Composition — No New Ad-hoc Sections

- Do not create new components like `WhatIsQasa`, `HowItWorksSection`, `TrustSafetySection` in prototypes.
- Compose with approved QDS components: `Typography`, `Button`, `Card`, `StatsStrip`, `FeatureCard`, `RichPromoCard`, `FAQLinkList`, `TestimonialCarousel`, `Carousel`, `CityCard`, `FeatureBadge`, `TrustIndicator`.
- If a reusable pattern is needed, follow the formal QDS component process and add Storybook docs before use.

### Content Block Variants
For content blocks with rounded backgrounds and layouts:
- **Background colors**: Use `bg-[var(--color-softPink)]`, `bg-[var(--color-background-inset)]`, `bg-white`
- **Rounded containers**: Use `rounded-xl`, `rounded-2xl`, `rounded-full` for different levels
- **Image layouts**: Support image-left, image-right, centered layouts
- **Call to actions**: Include buttons with proper QDS styling
- **Stepper components**: Use numbered circles (1, 2, 3) with `bg-white` or `bg-[var(--color-background-inset)]` backgrounds

---

## 📦 Box Component Policy

- `Box` is a simple neutral container. Default and only variant: `gray`.
- Background: `bg-[var(--color-background-inset)]` (Gray 10/inset). No white variant, no built-in shadow.
- If elevation is required, wrap content in `Card` or apply explicit `shadow-*` at usage site; do not modify `Box`.

---

## 🔘 Tabs Component Rules

- Variants: `default` (pill) and `simple` (underline).
  - `default`: active tab uses secondary/brown fill (token-backed), not pink.
  - `simple`: active tab shows a 2px bottom border in `--color-brown` and text switches to primary text color; inactive tabs use secondary text color.
- Sizes: `xs`, `sm`, `md`, `lg`, `xl` (same scale as `Button`).
- Icon tabs: supported via `icon` prop; can be `iconOnly`.
- Use `Button` internally for triggers; content area is caller‑provided.
## 🤖 AI/Lovable Tool Instructions

### 📚 MANDATORY DOCUMENTATION READING
**Before generating any Qasa content, you MUST read ALL these documentation files:**

1. **`QASA_KNOWLEDGE_BASE.md`** - Product knowledge, business model, user journeys
2. **`QDS_DESIGN_SYSTEM.md`** - Design system rules, components, color tokens
3. **`QDS_COMPONENT_RULES.md`** - Component usage rules, import patterns
4. **`QASA_LANGUAGE_GUIDE.md`** - Voice, tone, Swedish terminology
5. **`QDS_AI_COMPONENT_GUIDE.md`** - AI-specific guidelines

**Failure to read all documentation will result in design violations and incorrect implementations.**

When generating new components or screens:

1. **Always check** `src/components/ui/` for existing components
2. **Import from** QDS library, never create inline components
3. **Reference** Storybook for component props and usage
4. **Use** Typography component for all text
5. **Apply** theme variables via CSS custom properties
6. **Follow** the component folder structure exactly
7. **Create** Storybook stories for new components
8. **Test** in both Qasa and Blocket themes

### Example Generation Template
```jsx
// NewFeature.jsx
import React from 'react';
import PropTypes from 'prop-types';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { Home } from 'lucide-react';

const NewFeature = ({ title, description }) => {
  return (
    <Card className="p-6">
      <Typography variant="title-lg" className="mb-2">
        {title}
      </Typography>
      <Typography variant="body-md" className="text-[var(--color-text-secondary)] mb-4">
        {description}
      </Typography>
      <Button variant="primary" size="md" leftIcon={<Home className="w-5 h-5" />}>
        Get Started
      </Button>
    </Card>
  );
};

NewFeature.propTypes = {
  title: PropTypes.string.required,
  description: PropTypes.string.required,
};

export default NewFeature;
```

### AI/Lovable Prompt Guide
When generating new components or pages, **always include**:

1. **URL Path**: Where the page/component will be accessible (e.g., `/landing`, `/landlords/dashboard`)
2. **File Path**: Where the component was created (e.g., `src/prototypes/landing/NewLandingPage.jsx`)
3. **Component Name**: The exported component name
4. **Usage Instructions**: How to access and test the generated content
5. **Complete Structure**: Always include header and footer components
6. **Navigation**: Never skip navigation elements for user experience
7. **Card Backgrounds**: TenantCard and PropertyCard must use `bg-white` backgrounds
8. **No Gray Cards**: Never use grayish backgrounds for any cards

**Example Response Format:**
```
✅ Generated: NewLandingPage component
📍 URL: /landing 
📁 File: src/prototypes/landing/NewLandingPage.jsx
🚀 Access: Navigate to /landing to view the new conversion-optimized landing page
📋 Structure: Includes DynamicHeader, main content, and Footer components
🎨 Cards: All TenantCard and PropertyCard components use white backgrounds
```

---

## 📚 Resources

- **Storybook:** Run `npm run storybook` to explore all components
- **Component Docs:** Each component folder has a README.md
- **Theme Variables:** See `src/index.css` for all CSS custom properties
- **Typography Guide:** Reference `src/stories/ui/Typography.stories.jsx`
- **Color Palette:** See `src/stories/Colors.stories.jsx`

---

## ⚡ Quick Reference

### Button Variants
`primary` | `secondary` | `tertiary` | `outline` | `ghost` | `transparent` | `bordered`

### Button Sizes
`xs` (32px) | `sm` (40px) | `md` (48px) | `lg` (56px) | `xl` (64px)

### Typography Variants
**Display:** `display-lg` | `display-md` | `display-sm`  
**Title:** `title-xl` | `title-lg` | `title-md` | `title-sm` | `title-xs`  
**Body:** `body-lg` | `body-md` | `body-sm`  
**Label:** `label-lg` | `label-md` | `label-sm`  
**Mono:** `mono-md` | `mono-sm`

### Theme Colors
```css
--color-primary: /* Qasa: #f19ec1, Blocket: #e3372a */
--color-secondary: #322721
--color-background: #ffffff
--color-surface: #f9fafb
--color-border: #e5e7eb
--color-softPink: #FCEEF0
--color-background-inset: #f3f4f6
```

### Available Icons
```jsx
// Always use these approved Lucide React icons
import { 
  AlertCircle, AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp,
  Bell, BellOff, Bookmark, Calendar, Camera, CheckCircle, Check,
  ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Globe, Heart,
  HelpCircle, History, Home, Image, Info, List, ListFilter, LogOut,
  Map, MapPin, Menu, MessageCircle, Minus, MoreHorizontal, MoreVertical,
  Pen, Plus, Search, Settings, Share, Sliders, Star, Trash, User, XCircle, X
} from 'lucide-react';
```

### FAQ Link List Border Rules
- **Each item**: `border-b border-gray-100` for visual separation
- **Last item**: `last:border-b-0` to remove bottom border from final item
- **Grid layout**: `grid grid-cols-1 md:grid-cols-2` for responsive design
- **Icon styling**: `w-8 h-8` with `group-hover:translate-x-1 transition-transform`
- **Typography**: Use `Typography` component with `title-sm` variant for labels