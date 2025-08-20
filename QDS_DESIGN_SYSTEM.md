# Qasa Design System (QDS)

## 🎨 Components

### Core Components

#### Button
- **Primary**: Main actions and CTAs
- **Secondary**: Supporting actions
- **Tertiary**: Subtle actions
- **Destructive**: Dangerous actions (red)

#### Card
- **PropertyCard**: Display rental properties
- **LandlordCard**: Landlord information
- **TenantCard**: Tenant profiles
- **ContactCard**: Contact information
- **CreateProfileCard**: Profile creation flows

#### Typography
- **Headings**: H1-H6 with proper hierarchy
- **Body**: Regular and medium weights
- **Labels**: Form labels and small text
- **Mono**: Code and technical content

#### Input
- **Text**: Standard text input
- **Search**: Search functionality
- **Select**: Dropdown selections
- **TextArea**: Multi-line text
- **DatePicker**: Date selection

#### Navigation
- **Header**: Main navigation
- **Breadcrumbs**: Page hierarchy
- **Tabs**: Content organization
- **Pagination**: List navigation

#### Feedback
- **Toast**: Success, error, info messages
- **Modal**: Overlay dialogs
- **Loading**: Loading states
- **Skeleton**: Content placeholders
- **FAQLinkList**: FAQ links with arrow navigation

#### Data Display
- **Table**: Data tables
- **List**: Item lists
- **Stats**: Statistics display
- **Progress**: Progress indicators

#### Layout
- **Container**: Content wrapper
- **Grid**: Layout system
- **Spacing**: Consistent spacing
- **Divider**: Visual separation

#### Interactive
- **Checkbox**: Multiple selection
- **Radio**: Single selection
- **Switch**: Toggle states
- **Slider**: Range selection

#### Media
- **Avatar**: User images
- **Image**: Content images
- **Icon**: System icons (Lucide React)
- **Carousel**: Image galleries
- **FeatureBadge**: Inline feature indicators
- **TrustIndicator**: Trust and safety indicators

#### Maps & Location
- **Map**: Interactive property maps
- **LocationSearch**: Address search
- **CityCard**: City information

### Map Component

The Map component provides interactive property visualization with the following features:

#### Features
- **OpenStreetMap Integration**: Free, open-source mapping
- **Grouped Pins**: Automatic clustering of nearby properties
- **Price Display**: SEK prices shown when zoomed in
- **Hover Interactions**: Property cards appear on hover
- **Click Navigation**: Navigate to property details
- **Sweden Optimization**: Focused on Swedish locations

#### Usage
```jsx
import Map from '../components/ui/Map';

<Map
  properties={propertyArray}
  center={[59.3293, 18.0686]} // Stockholm
  zoom={11}
  onPropertyClick={handleClick}
  selectedProperty={selected}
  showGroupedPins={true}
/>
```

#### States
- **Zoomed Out**: Shows grouped pins with property counts
- **Zoomed In**: Shows individual price pins
- **Hover**: Displays floating property card
- **Selected**: Highlights active property
- **Loading**: Shows loading state while tiles load

#### Accessibility
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support
- Touch-friendly interactions

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
| Icon | ✅ | Stable | 5 sizes, 45+ icons |
| FeatureBadge | ✅ | Stable | 3 variants |
| TrustIndicator | ✅ | Stable | 4 types, 3 variants |

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
| FAQLinkList | ✅ | Stable | FAQ links with navigation |

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

## 🧪 Contrast & Accessibility Rules

- White-on-dark: When a surface is dark (e.g., `--color-brown`) or uses an image with dark gradient overlays, text must be white. Implement via `Typography` using `color="white"` and optional opacity classes (`opacity-80/85`).
- **Never use dark text on dark backgrounds**: Dark brown, dark blue, or any dark surface must use white text for proper contrast
- **Contrast requirement**: All text on dark backgrounds must meet WCAG 2.1 AA contrast ratio (4.5:1 minimum)
- Icons on primary: use `--color-text-on-primary` for icons and text inside primary buttons and brand pills.
- Icons on dark non-primary surfaces: use white (`text-white`).
- **Icon styling rules**:
  - Icons use transparent backgrounds - Never add background colors or radius to icons themselves
  - Icon containers can have backgrounds when needed for visual hierarchy
  - Use proper color tokens for icon colors: `text-[var(--color-text-primary)]`, `text-[var(--color-text-secondary)]`
  - For checkmarks/bullets: Use `CheckCircle` icon with `text-[var(--color-text-primary)]`, never red or green colors
- Never set `--color-text-primary` on dark surfaces; contrast fails.
- Maintain WCAG 2.1 AA contrast in both themes.

### Button & Icon Rules
- **Icons on buttons**: Icons and text should be on the same line within buttons
- **Icon placement**: Place icons after text with proper spacing (`ml-2` or `mr-2`)
- **Icon consistency**: Use consistent icon sizing within buttons (`w-5 h-5`)
- **Avoid mixing**: Don't mix different icon styles on the same button
- **Icon alignment**: Ensure icons are vertically centered with text
- **Button flex layout**: Always use `flex items-center justify-center` for buttons with icons
- **Icon spacing**: Use `gap-2` or `gap-3` for consistent spacing between icon and text
- **Icon sizing**: Use `w-5 h-5` for standard button icons, `w-4 h-4` for small buttons
- **Vertical centering**: Icons must be vertically aligned with text baseline

### Component Usage Rules
- **Always use QDS components**: Never create custom implementations when QDS components exist
- **Tabs**: Use `Tabs` component from QDS instead of custom button groups or segmented controls
- **Buttons**: Use `Button` component with proper `icon` and `iconPosition` props
- **Icons**: Use `Icon` wrapper component with `name` prop, not direct Lucide imports
- **Typography**: Always use `Typography` component with proper variants
- **Cards**: Use `Card` components (PropertyCard, TenantCard, etc.) from QDS
- **No custom CSS**: Avoid writing custom CSS when QDS components provide the functionality
- **Consistent patterns**: Follow established QDS patterns for similar functionality

### Avatar & Image Rules
- **Avatars**: Never use illustrated/cartoon avatars - always use realistic person photos
- **Property images**: Never show people, humans, or animals in property listing images
- **TenantCard background**: Never use grayish backgrounds for TenantCard components
- **Image quality**: Use high-quality, professional photos for all user-facing content
- **Image relevance**: Property images should show the actual property, not lifestyle shots with people

### Card & Border Rules
- **Cards on same background**: When cards (PropertyCard, TenantCard, etc.) are placed on backgrounds of the same color, add borders for visual separation
- **Border styling**: Use `border border-[var(--color-border)]` or `border border-gray-100` for subtle borders
- **Card backgrounds**: Cards should typically use `bg-white` for contrast against colored backgrounds
- **Visual hierarchy**: Borders help distinguish cards from their container background
- **Consistent spacing**: Use proper gap spacing between cards (`gap-6` or similar)

### Background Color Rules
- **Page backgrounds**: Never use dark backgrounds like `bg-gray-50` or similar dark grays
- **Use only**: `bg-white` or `bg-[var(--color-gray-10)]` for page backgrounds
- **Card backgrounds**: Use `bg-white` for card components
- **Section backgrounds**: Use `bg-white` or `bg-[var(--color-gray-10)]` for sections

### Button Text Rules
- **Never add "- Free"**: Don't append "- Free" to button text
- **Keep button text clean**: Use simple, action-oriented text like "Start Listing", "Create Profile"
- **Avoid promotional text**: Don't include pricing or promotional text in button labels

### Icon Color Rules
- **Use brand colors only**: Icons should use `text-[var(--color-text-primary)]`, `text-[var(--color-text-secondary)]`, or `text-[var(--color-primary)]`
- **Never use**: Green, blue, yellow, or other non-brand colors for icons
- **Consistent styling**: All icons in the same context should use the same color scheme
- **Brand compliance**: Icons should follow Qasa's color palette (#f19ec1, #322721, etc.)

### List & Bullet Point Rules
- **Use CheckCircle icons**: For lists and bullet points, always use `CheckCircle` icon from Lucide React
- **Icon styling**: Use `text-[var(--color-text-primary)]` for check circle icons
- **Avoid custom bullets**: Don't use custom div elements with `w-2 h-2 rounded-full` for bullets
- **Consistent spacing**: Use proper spacing between list items (`space-y-3`)
- **Icon alignment**: Ensure check circle icons are properly aligned with text

### FAQ Link List Rules
- **Border styling**: Use `border-b border-gray-100` for each link item
- **Last item border**: Always include `last:border-b-0` to remove border from last item
- **Grid layout**: Use `grid grid-cols-1 md:grid-cols-2` for responsive layout
- **Hover effects**: Include `group-hover:translate-x-1 transition-transform` for arrow icons
- **Icon sizing**: Use `w-8 h-8` for arrow icons in FAQ links

## 🧱 Shadows & Borders

- Allowed shadows: `shadow-sm`, `shadow-md`, `shadow-lg` on cards/compact boxes only. Avoid shadows on full-width strips (hero, stats strip).
- Borders must use tokens like `--color-border` or brand-subtle variants. Avoid pure white fills/borders to simulate contrast; use overlays/tokens.

### Content Block Variants
For content blocks with rounded backgrounds and layouts:
- **Background colors**: Use `bg-[var(--color-softPink)]`, `bg-[var(--color-background-inset)]`, `bg-white`
- **Rounded containers**: Use `rounded-xl`, `rounded-2xl`, `rounded-full` for different levels
- **Image layouts**: Support image-left, image-right, centered layouts
- **Call to actions**: Include buttons with proper QDS styling
- **Stepper components**: Use numbered circles (1, 2, 3) with `bg-white` or `bg-[var(--color-background-inset)]` backgrounds

### Box
- Background: `--color-background-inset` (Gray 10). No built-in shadow. Use `Card` for elevation.

## 🔠 Title Hierarchy (Use `Typography` variants)

- Page hero: `display-lg` (compact: `display-md`). On dark hero use `color="white"`.
- Section headers: `display-sm`.
- Card/box titles: `title-lg`.
- Body copy: `body-md` (secondary copy: `color="secondary"`).
- Stat value: `title-xl` or `title-lg`; hint: `body-sm`/`label-md`.

These rules are mandatory for Lovable and manual contributors.

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
- [x] Migrate from Heroicons to Lucide React
- [x] Fix all inconsistencies
- [x] Create conversion landing page with real app functionality

### Phase 2: Enhancement
- [ ] Add more complex patterns
- [ ] Create form builder components
- [ ] Add animation system
- [ ] Improve theme switching
- [ ] Optimize conversion landing page performance

### Phase 3: Optimization
- [ ] Component lazy loading
- [ ] Tree shaking optimization
- [ ] Performance monitoring
- [ ] A11y automation
- [ ] A/B testing for conversion optimization

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