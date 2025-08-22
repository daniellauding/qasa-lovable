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
- `FilterButton` - Specialized filter toggle (uses Button tertiary variant internally)
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
- **Background colors**: Use `background="softPink"`, `background="inset"`, `background="white"`
- **Rounded containers**: Use `rounded="xl"`, `rounded="lg"`, `rounded="full"` for different levels
- **Image layouts**: Support `imagePosition="left"`, `imagePosition="right"`, `imagePosition="center"`
- **Call to actions**: Include buttons with proper QDS styling (primary, secondary, tertiary, outline)
- **Stepper components**: Use numbered circles (1, 2, 3) with proper backgrounds and connecting lines

#### ContentBlock Component Variants
```jsx
// Image Left Layout
<ContentBlock
  title="Why Choose Qasa?"
  description="Safe, secure, and simple rental process"
  image="property-image.jpg"
  imagePosition="left"
  background="softPink"
  ctaText="Learn More"
  ctaVariant="primary"
/>

// Image Right Layout
<ContentBlock
  title="Find Your Dream Home"
  description="Browse thousands of verified rental properties"
  image="property-image.jpg"
  imagePosition="right"
  background="white"
  ctaText="Browse Homes"
  ctaVariant="secondary"
/>

// Centered Layout
<ContentBlock
  title="No Deposit Required"
  description="Keep your money in your pocket"
  image="property-image.jpg"
  imagePosition="center"
  background="inset"
  ctaText="Learn More"
  ctaVariant="outline"
/>

// With Stepper
<ContentBlock
  title="How It Works"
  description="Simple steps to find your perfect home"
  background="softPink"
  stepper={["Search", "Apply", "Move In"]}
  ctaText="Get Started"
  ctaVariant="primary"
/>

// No Image
<ContentBlock
  title="Trust & Safety"
  description="All landlords are verified and all properties are inspected"
  background="white"
  ctaText="Learn About Safety"
  ctaVariant="tertiary"
/>
```

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

### 🚫 **Code Rejection Guidelines**
**Reject any code that violates QDS rules:**

- **Wrong prop names**: `tenant` instead of `user`, `testimonials` instead of `items`
- **Missing header/footer**: No navigation components
- **Invalid color classes**: `bg-background`, `text-muted-foreground`, `bg-muted/30`
- **Invalid typography variants**: `title-4xl`, `body-lg` (non-existent variants)
- **Invalid button variants**: `size="xl"` (should be `size="lg"`)
- **Direct color usage**: Any Tailwind colors instead of CSS variables
- **Missing QDS imports**: Using raw HTML instead of QDS components
- **Undefined array .map()**: Calling `.map()` on undefined arrays without fallbacks
- **Missing default arrays**: Not providing `|| []` fallbacks for array props
- **Undefined object properties**: Accessing properties on undefined objects without checks
- **Missing object validation**: Not verifying objects exist before rendering components
- **NEW COLORS VIOLATION**: Using `bg-blue-500`, `bg-green-500`, `from-blue-600 to-purple-600`
- **CUSTOM ICON BACKGROUNDS**: Creating `bg-blue-500 rounded-xl` for icons
- **BLUE/GREEN THEMES**: Introducing non-QDS color schemes
- **PURPLE GRADIENTS**: Using purple in gradients or backgrounds
- **UNDEFINED COMPONENT ERROR**: Using non-existent components like `Card.CreateTenantProfileCard`
- **WRONG COMPONENT NAMES**: Using incorrect component names that don't exist
- **VARIANT PARAMETERS**: Using `/landing?variant=conversion` or similar variant URLs
- **A/B TESTING URLS**: Creating variant-based URLs for testing
- **POSITION ABSOLUTE**: Using `absolute`, `fixed`, or `sticky` positioning
- **LAYOUT OVERLAPS**: Creating overlapping elements with absolute positioning
- **WRONG ICON NAMES**: Using `CalendarIcon`, `UserIcon`, `HomeIcon` (causes ReferenceError)
- **DIRECT ICON IMPORTS**: Importing directly from lucide-react instead of using QDS Icon component

### 🔍 **Component Verification Checklist**
**Before using any component, verify:**
- ✅ Component exists in the import path
- ✅ Component name is spelled correctly
- ✅ Component is properly exported from its module
- ✅ Component props match the expected interface
- ✅ No typos in component names (e.g., `CreateTenantProfileCard` vs `CreateProfileCard`)

### 🔍 **Routing Verification Checklist**
**Before creating routes, verify:**
- ✅ Route path is direct (e.g., `/landing`, not `/landing?variant=conversion`)
- ✅ No variant parameters in URLs
- ✅ No A/B testing URL patterns
- ✅ Single landing page at `/landing`
- ✅ No variant system implementation

### 🔍 **Layout Verification Checklist**
**Before creating layouts, verify:**
- ✅ No `absolute`, `fixed`, or `sticky` positioning
- ✅ Use `flex` or `grid` for layout
- ✅ No overlapping elements
- ✅ Proper responsive behavior
- ✅ No z-index conflicts

### 🔍 **Icon Verification Checklist**
**Before using icons, verify:**
- ✅ Use QDS Icon component: `<Icon name="Calendar" />`
- ✅ No direct lucide-react imports
- ✅ Correct icon names: `Calendar`, `User`, `Home`, `Search`, `Mail`, `Phone`, `MapPin`, `Star`, `Heart`, `Eye`, `Edit`, `Trash`, `Plus`, `Minus`, `Check`, `X`, `ArrowRight`, `ArrowLeft`, `ChevronRight`, `ChevronLeft`
- ✅ No wrong names: `CalendarIcon`, `UserIcon`, `HomeIcon`, `SearchIcon`, etc.
- ✅ No ReferenceError: Icon names must exist in lucide-react

**Example Response Format:**
```
✅ Generated: NewLandingPage component
📍 URL: /landing 
📁 File: src/prototypes/landing/NewLandingPage.jsx
🚀 Access: Navigate to /landing to view the new conversion-optimized landing page
📋 Structure: Includes DynamicHeader, main content, and Footer components
🎨 Cards: All TenantCard and PropertyCard components use white backgrounds
🔧 Props: Verified correct prop names (user, items) and data structures
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
  Pen, Plus, Search, Settings, Share, Sliders, Star, Trash, User, XCircle, X,
  // Premium feature icons (yellow)
  Megaphone, Lightbulb, Zap, Clock, Send
} from 'lucide-react';
```

### Available QDS Components
```jsx
// Navigation Components
import Pagination from '@/components/ui/Pagination';
import Tabs from '@/components/ui/Tabs';
import Accordion from '@/components/ui/Accordion';
import Search from '@/components/ui/Search';
import Carousel from '@/components/ui/Carousel';

// Button Components
import Button from '@/components/ui/Button';

// Typography Components
import Typography from '@/components/ui/Typography';

// Card Components
import Card from '@/components/ui/Card';
import { PropertyCard, TenantCard, LandlordCard } from '@/components/ui/Card';
import CityCard from '@/components/ui/CityCard';
import FeatureCard from '@/components/ui/FeatureCard';

// Form Components
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Select from '@/components/ui/Select';
import Checkbox from '@/components/ui/Checkbox';
import RadioGroup from '@/components/ui/RadioGroup';
import Switch from '@/components/ui/Switch';
import DatePicker from '@/components/ui/DatePicker';
import RangeSlider from '@/components/ui/RangeSlider';
import FilterButton from '@/components/ui/FilterButton';
import Dropdown from '@/components/ui/Dropdown';

// Feedback Components
import Toast from '@/components/ui/Toast';
import HintBox from '@/components/ui/HintBox';
import LoadingDots from '@/components/ui/LoadingDots';
import Modal from '@/components/ui/Modal';

// Data Display Components
import Avatar from '@/components/ui/Avatar';
import Chip from '@/components/ui/Chip';
import Icon from '@/components/ui/Icon';
import FeatureBadge from '@/components/ui/FeatureBadge';
import TrustIndicator from '@/components/ui/TrustIndicator';
import PremiumBadge from '@/components/ui/PremiumBadge';
import Skeleton from '@/components/ui/Skeleton';

// Layout Components
import ContentBlock from '@/components/ui/ContentBlock';
import HeroSection from '@/components/ui/HeroSection';
import StatsStrip from '@/components/ui/StatsStrip';
import TestimonialCarousel from '@/components/ui/TestimonialCarousel';
import FAQLinkList from '@/components/ui/FAQLinkList';
import CityCard from '@/components/ui/CityCard';
import FeatureCard from '@/components/ui/FeatureCard';
import RichPromoCard from '@/components/ui/RichPromoCard';
import LocationSearch from '@/components/ui/LocationSearch';
import VariantCard from '@/components/ui/VariantCard';
import VariantSelector from '@/components/ui/VariantSelector';
import SectionHeader from '@/components/ui/SectionHeader';
import SectionFooter from '@/components/ui/SectionFooter';

// Map Components
import Map from '@/components/ui/Map';

// Utility Components
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
```

### Premium Feature Icons (Yellow)
```jsx
// Premium feature icons with yellow color (text-yellow-500)
megaphone: <Megaphone className="w-4 h-4 text-yellow-500" />     // Super apply
bulb: <Lightbulb className="w-4 h-4 text-yellow-500" />          // Exclusive insights
flashlight: <Zap className="w-4 h-4 text-yellow-500" />          // Highlighted profile
chicken: <Clock className="w-4 h-4 text-yellow-500" />           // Apply earlier
plane: <Send className="w-4 h-4 text-yellow-500" />              // More applications
```

### FAQ Link List Border Rules
- **Each item**: `border-b border-gray-100` for visual separation
- **Last item**: `last:border-b-0` to remove bottom border from final item
- **Grid layout**: `grid grid-cols-1 md:grid-cols-2` for responsive design
- **Icon styling**: `w-8 h-8` with `group-hover:translate-x-1 transition-transform`
- **Typography**: Use `Typography` component with `title-sm` variant for labels

### Qasa Premium Badge & Features
- **Premium badge**: Use `PremiumBadge` component for official Qasa Premium branding
  - Simple usage: `<PremiumBadge />` (no props needed)
  - Responsive design: auto-adjusts for mobile/desktop
  - Custom clip-path styling with brand colors
- **Usage contexts**:
  - RichPromoCard: `showPremiumBadge={true}`
  - Premium ContentBlocks: centered with proper spacing
  - Modal titles: integrated with Typography
- **Property status chips**: Use `statusChip` prop on PropertyCard
  - `apply-earlier`: Yellow background with brown text
  - `first-hand`: Green background with white text
  - `premium`: Pink background with white text
  - `new`: Blue background with white text

### Card Height & Layout Rules
- **Content-based height**: Cards should have intrinsic content height, never use `h-full` or `min-h-full`
- **Fixed width**: Cards maintain consistent width, don't stretch to fill containers
- **No fluid height**: Never render cards with fluid height - let content determine height
- **Map integration**: Map takes 2/3 width, cards on right with fixed width
- **Map parent height**: If map wrapper is higher, map fills parent container with `h-full`

---

## 🚫 Critical Design Rules (AI MUST Follow)

### 👤 Avatar Rules
- **❌ Never use illustrated/cartoon avatars** - Always use realistic person photos
- **✅ Use real photos** of people for tenant profiles and user avatars
- **✅ High quality** - Professional, clear photos

### 🏠 Property Image Rules
- **❌ Never show people, humans, or animals** in property listing images
- **✅ Show the actual property** - rooms, buildings, exteriors
- **✅ Use professional real estate photos** - clean, well-lit property shots

### 🎨 Background Color Rules
- **❌ Never use dark backgrounds** like `bg-gray-50` or similar dark grays
- **✅ Use only** `bg-white` or `bg-[var(--color-gray-10)]` for page backgrounds
- **✅ Keep it light** - white or very light gray backgrounds only

### 🔘 Button Text Rules
- **❌ Never add "- Free"** to button text
- **✅ Keep button text clean** - "Start Listing", "Create Profile"
- **✅ Avoid promotional text** in button labels

### 🎯 Icon Color Rules
- **❌ Never use green, blue, yellow** or other non-brand colors for icons
- **✅ Use brand colors only** - `text-[var(--color-text-primary)]`, `text-[var(--color-primary)]`
- **✅ Follow Qasa palette** - pink (#f19ec1), brown (#322721)

### 🎴 TenantCard Background Rules
- **❌ Never use grayish backgrounds** for TenantCard components
- **✅ Use white or light backgrounds** for better contrast and readability
- **✅ Keep it clean** - avoid busy or dark backgrounds

### 🃏 Card & Border Rules

#### Card Background Types
- **White Background Cards**: PropertyCard, TenantCard, LandlordCard, ContactCard, CreateProfileCard
  - Use `bg-white` always
  - For data display, user profiles, property listings
  - Highest contrast and readability
- **Tertiary Background Cards**: CityCard, FeatureCard
  - Use `bg-[var(--color-button-tertiary-bg)]` (off-white/cream)
  - For navigation, feature highlights, promotional content
  - Creates visual hierarchy and brand consistency

#### Border & Visual Separation
- **✅ Add borders to cards** when they're on the same background color
- **✅ Use subtle borders** - `border border-gray-100` or `border border-[var(--color-border)]`
- **✅ White cards on colored sections** use borders for visual separation
- **✅ Tertiary cards** typically don't need borders due to background contrast

### 🔘 Button & Icon Rules
- **❌ Don't mix different icon styles** on the same button
- **✅ Icons and text should be on the same line** within buttons
- **✅ Use consistent icon sizing** (`w-5 h-5`) within buttons
- **✅ Place icons after text** with proper spacing (`ml-2`)

### 📋 List & Bullet Point Rules
- **❌ Don't use custom bullet points** with `w-2 h-2 rounded-full` divs
- **✅ Always use CheckCircle icons** from Lucide React for lists
- **✅ Use proper styling** - `text-[var(--color-text-primary)]` for check circles
- **✅ Consistent spacing** between list items (`space-y-3`)

---

## 🎨 Qasa Style Guide (AI Reference)

### Colors to Use
- **Qasa Pink:** #f19ec1 (main brand color)
- **Dark Brown:** #322721 (text and accents)
- **Light Gray:** #f9fafb (backgrounds)

### Swedish Phrases to Use
- "Hitta ditt nästa hem" - Find your next home
- "Ansök nu" - Apply now
- "Verifierad hyresvärd" - Verified landlord
- "Trygg bostadssökning" - Safe housing search
- "Schyssta villkor" - Fair conditions
- "rum och kök" - rooms and kitchen
- "kr/mån" - SEK/month

### Tone of Voice
- Friendly neighbor, not corporate
- Use "du" (you) not formal Swedish
- Encouraging and supportive
- Clear and simple

### Make It Feel Swedish
- Use Swedish city names: Stockholm, Göteborg, Malmö
- Include Swedish areas: Östermalm, Vasastan, Södermalm
- Add "kr" after prices (15,000 kr)
- Use Swedish apartment terms: "2 rok" (2 rooms + kitchen)

### Make It Feel Like Qasa
- Always use pink (#f19ec1) for main actions
- Include "verified" badges on landlords
- Add trust messages about safety
- Use friendly, encouraging language