# 🤖 QDS AI Component Guide

**For AI tools, Lovable, and developers: Always use these QDS components instead of creating custom ones.**

### 📚 MANDATORY DOCUMENTATION READING
**Before generating any Qasa content, you MUST read ALL these documentation files:**

1. **`QASA_KNOWLEDGE_BASE.md`** - Product knowledge, business model, user journeys
2. **`QDS_DESIGN_SYSTEM.md`** - Design system rules, components, color tokens
3. **`QDS_COMPONENT_RULES.md`** - Component usage rules, import patterns
4. **`QASA_LANGUAGE_GUIDE.md`** - Voice, tone, Swedish terminology
5. **`QDS_AI_COMPONENT_GUIDE.md`** - This file - AI-specific guidelines

**Failure to read all documentation will result in:**
- ❌ Incorrect component usage
- ❌ Wrong color schemes
- ❌ Inconsistent voice/tone
- ❌ Missing Swedish context
- ❌ Design rule violations

### 🔧 Common AI/Lovable Errors & Solutions

#### ❌ **Prop Name Errors**
```jsx
// ❌ WRONG - Wrong prop names
<TenantCard tenant={tenantData} />
<TestimonialCarousel testimonials={testimonialData} />

// ✅ CORRECT - Use correct prop names
<TenantCard user={tenantData} />
<TestimonialCarousel items={testimonialData} />
```

#### ❌ **Data Structure Errors**
```jsx
// ❌ WRONG - Missing required properties
const tenant = { name: "John" }; // Missing required props

// ✅ CORRECT - Include all required properties
const tenant = {
  name: "John Doe",
  avatar: "https://example.com/avatar.jpg",
  description: "Software engineer, non-smoker",
  people: "1",
  rooms: "1-2 rooms",
  maxRent: "25,000 SEK",
  furnished: "Furnished",
  moveDate: "Available now"
};
```

#### ❌ **Undefined Property Errors**
```jsx
// ❌ WRONG - Accessing undefined properties
{properties.map(property => property.undefinedProp)}

// ✅ CORRECT - Check for existence or provide defaults
{properties?.map(property => property.safeProp) || []}
```

#### ❌ **Undefined Array .map() Errors**
```jsx
// ❌ WRONG - Calling .map() on undefined array
{properties.map(property => <PropertyCard key={property.id} property={property} />)}

// ✅ CORRECT - Use optional chaining and default empty array
{properties?.map(property => <PropertyCard key={property.id} property={property} />) || []}

// ✅ CORRECT - Provide default empty array
{(properties || []).map(property => <PropertyCard key={property.id} property={property} />)}
```

#### ❌ **Component Props Undefined Errors**
```jsx
// ❌ WRONG - Passing undefined props
<Map properties={undefined} />
<Carousel items={undefined} />

// ✅ CORRECT - Provide default empty arrays
<Map properties={properties || []} />
<Carousel items={items || []} />
```

#### ❌ **Undefined Object Property Errors**
```jsx
// ❌ WRONG - Accessing properties on undefined objects
<TenantCard user={undefined} />
<Avatar src={user.avatar} /> // user is undefined

// ✅ CORRECT - Check for undefined objects before accessing properties
{user && <TenantCard user={user} />}
<Avatar src={user?.avatar} alt={user?.name} />

// ✅ CORRECT - Provide default values
<TenantCard user={user || defaultUser} />
<Avatar src={user?.avatar || defaultAvatar} alt={user?.name || 'User'} />
```

#### ❌ **Nested Property Access Errors**
```jsx
// ❌ WRONG - Accessing nested properties without checks
{user.profile.avatar}
{property.images[0]}

// ✅ CORRECT - Use optional chaining for nested properties
{user?.profile?.avatar}
{property?.images?.[0]}

// ✅ CORRECT - Provide fallbacks for nested properties
{user?.profile?.avatar || defaultAvatar}
{property?.images?.[0] || defaultImage}
```

#### 🔍 **Component Prop Requirements**

**TenantCard:**
```jsx
<TenantCard 
  user={{
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    description: PropTypes.string.isRequired,
    people: PropTypes.string.isRequired,
    rooms: PropTypes.string.isRequired,
    maxRent: PropTypes.string.isRequired,
    furnished: PropTypes.string.isRequired,
    moveDate: PropTypes.string.isRequired,
  }}
  verified={PropTypes.bool}
  onCardClick={PropTypes.func}
/>
```

**TestimonialCarousel:**
```jsx
<TestimonialCarousel 
  items={[
    { quote: PropTypes.string.isRequired, author: PropTypes.string.isRequired }
  ]}
/>
```

**PropertyCard:**
```jsx
<PropertyCard 
  property={{
    id: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    lat: PropTypes.number,
    lng: PropTypes.number,
    dateRange: PropTypes.string
  }}
  onCardClick={PropTypes.func}
/>
```

---

## 🚨 CRITICAL RULES

### ❌ NEVER DO:
```jsx
// DON'T create custom components
<button className="px-4 py-2 bg-pink-500">Click</button>
<h1 className="text-2xl font-bold">Title</h1>
<div className="text-gray-500">Text</div>
```

### ✅ ALWAYS DO:
```jsx
// USE QDS components
<Button variant="primary" size="lg">Click</Button>
<Typography variant="title-lg">Title</Typography>
<Typography variant="body-md" className="text-[var(--color-text-secondary)]">Text</Typography>
```

---

## 📚 Component Cheat Sheet

### 🔘 Buttons - `<Button>`
```jsx
import Button from '@/components/ui/Button';

// Variants: primary, secondary, tertiary, outline, ghost, transparent, bordered
// Sizes: xs, sm, md, lg, xl
<Button variant="primary" size="lg">Primary Action</Button>
<Button variant="secondary" size="lg">Secondary Action</Button>
<Button variant="tertiary" size="lg" iconOnly icon={<ArrowLeft />} />
```

**When to use:**
- **primary**: Main CTA buttons (Apply, Save, Submit)
- **secondary**: Alternative actions (Cancel, Edit)  
- **tertiary**: Back/navigation buttons
- **outline**: Less important actions
- **bordered**: Icon-only navigation (back arrows)

### 📝 Typography - `<Typography>`
```jsx
import Typography from '@/components/ui/Typography';

// For headings
<Typography variant="display-lg">Page Title</Typography>
<Typography variant="title-xl">Section Title</Typography>
<Typography variant="title-lg">Card Title</Typography>

// For body text
<Typography variant="body-md">Normal text</Typography>
<Typography variant="body-sm">Secondary text</Typography>

// For labels
<Typography variant="label-md">Form Label</Typography>
<Typography variant="label-sm">Helper text</Typography>
```

**When to use:**
- **display-***: Page titles, hero text
- **title-***: Section headings, card titles
- **body-***: Paragraph text, descriptions
- **label-***: Form labels, small text

### 🃏 Cards - `<Card>`
```jsx
import Card from '@/components/ui/Card';
import { PropertyCard, TenantCard, LandlordCard } from '@/components/ui/Card';

// Basic card
<Card className="p-6">
  <Typography variant="title-lg">Card Title</Typography>
  <Typography variant="body-md">Card content</Typography>
</Card>

// Specialized cards
<PropertyCard property={propertyData} />
<TenantCard tenant={tenantData} />
<LandlordCard landlord={landlordData} />
```

**When to use:**
- **Card**: General content containers
- **PropertyCard**: Property listings, search results
- **TenantCard**: Tenant profiles, applications
- **LandlordCard**: Landlord profiles, contact info

**Critical Rules:**
- **TenantCard & PropertyCard**: Must always use `bg-white` backgrounds
- **Never gray backgrounds**: No `bg-gray-10`, `bg-gray-20`, or grayish backgrounds
- **White backgrounds mandatory**: Ensures proper contrast and QDS compliance
- **Content-based height**: Cards should have intrinsic content height, never use `h-full` or `min-h-full`
- **Fixed width**: Cards maintain consistent width, don't stretch to fill containers
- **No fluid height**: Never render cards with fluid height - let content determine height

### 📥 Forms - Multiple Components
```jsx
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import Select from '@/components/ui/Select';
import Checkbox from '@/components/ui/Checkbox';
import RadioGroup from '@/components/ui/RadioGroup';

<Input 
  label="Email" 
  placeholder="anna@example.com"
  type="email"
/>

<Select
  label="Antal rum"
  options={[
    { value: '1', label: '1 rum' },
    { value: '2', label: '2 rum' }
  ]}
/>

<RadioGroup
  options={[
    { value: 'apartment', label: 'Lägenhet' },
    { value: 'house', label: 'Hus' }
  ]}
/>
```

### 🖼️ Headers - `<Header>`
```jsx
import Header from '@/components/Header';

// Different states
<Header variant="logged-out" />
<Header variant="logged-in" user={userData} />
<Header variant="creation-flow" step={2} totalSteps={5} />
```

**When to use:**
- **logged-out**: Landing pages, public content
- **logged-in**: User dashboard, authenticated pages
- **creation-flow**: Multi-step forms, listings creation

### 👤 Avatars - `<Avatar>`
```jsx
import Avatar from '@/components/ui/Avatar';

<Avatar 
  src={user.avatar}
  alt={user.name}
  size="sm" // xs, sm, md, lg, xl
  verified={user.verified}
/>
```

### 🎨 Colors - Use CSS Variables
```jsx
// ✅ USE these CSS variables
className="text-[var(--color-primary)]"        // Qasa pink
className="text-[var(--color-text-primary)]"   // Main text
className="text-[var(--color-text-secondary)]" // Gray text
className="bg-[var(--color-surface)]"          // Card backgrounds
className="border-[var(--color-border)]"       // Borders

// ❌ DON'T use direct colors
className="text-pink-500"   // Wrong!
className="text-gray-600"   // Wrong!
```

### 🔍 Search & Filters
```jsx
import Search from '@/components/ui/Search';
import FilterModal from '@/components/ui/FilterModal';
import FilterButton from '@/components/ui/FilterButton';

<Search 
  placeholder="Sök efter område eller adress"
  onSearch={handleSearch}
/>

<FilterButton 
  count={3} 
  onClick={() => setShowFilters(true)}
/>

<FilterModal 
  isOpen={showFilters}
  onClose={() => setShowFilters(false)}
  onApplyFilters={handleFilters}
/>
```

### 🏷️ Feature Badges & Trust Indicators
```jsx
import FeatureBadge from '@/components/ui/FeatureBadge';
import TrustIndicator from '@/components/ui/TrustIndicator';

// Feature badges for property features
<FeatureBadge text="Balkong" />
<FeatureBadge text="Verifierad hyresvärd" icon={<CheckCircle className="w-4 h-4" />} />

// Trust indicators for safety
<TrustIndicator text="ID Verified" type="verified" />
<TrustIndicator text="Secure payment" type="secure" />
<TrustIndicator text="Trusted landlord" type="trusted" />
```

### 📋 FAQ Link Lists
```jsx
import FAQLinkList from '@/components/ui/FAQLinkList';

<FAQLinkList
  title="Common questions"
  links={[
    { label: "How it works for landlords", href: "/help/landlords", external: true },
    { label: "How it works for tenants", href: "/help/tenants", external: true },
    { label: "What happens if tenant doesn't pay?", href: "/help/payment", external: true },
    { label: "What can I rent out for?", href: "/help/rental-types", external: true }
  ]}
/>

// Border rule: Each item gets border-b, last item gets last:border-b-0
// Grid: grid-cols-1 md:grid-cols-2 for responsive layout
// Icons: w-8 h-8 with hover translate-x-1 effect
```

### 🚨 **Critical Debugging Checklist**

**Before submitting any component, verify:**

1. **✅ Prop Names**: Use correct prop names (`user` not `tenant`, `items` not `testimonials`)
2. **✅ Data Structure**: Include all required properties for each component
3. **✅ Undefined Checks**: Use optional chaining (`?.`) and default values (`|| []`)
4. **✅ Import Statements**: Import components from correct paths
5. **✅ Component Usage**: Follow exact prop structure from PropTypes
6. **✅ Error Handling**: Provide fallbacks for missing data
7. **✅ Array Safety**: Always provide default empty arrays for .map() operations
8. **✅ Component Props**: Never pass undefined arrays to components

**Common Error Patterns to Avoid:**
- `Cannot read property 'map' of undefined` → Use `data?.map() || []`
- `Cannot read property 'avatar' of undefined` → Use `user?.avatar` or provide default user
- `TenantCard was called with invalid props` → Verify all required props
- `TestimonialCarousel expects 'items' prop` → Use correct prop name
- `TypeError: Cannot read properties of undefined (reading 'map')` → Always provide default arrays
- `Runtime Error: undefined.map()` → Use optional chaining and fallbacks
- `TypeError: Cannot read properties of undefined (reading 'avatar')` → Check user object exists before rendering
- `Cannot read property 'name' of undefined` → Use optional chaining for all object properties

### 🚫 **Code Rejection Rules**

**Reject code that violates these QDS rules:**

#### ❌ **Wrong Prop Names**
```jsx
// ❌ REJECT - Wrong prop name
<Card.TenantCard tenant={tenant} />

// ✅ ACCEPT - Correct prop name  
<Card.TenantCard user={tenant} />
```

#### ❌ **Missing Header/Footer**
```jsx
// ❌ REJECT - Missing navigation
<div className="min-h-screen bg-background">
  {/* Just content without header/footer */}
</div>

// ✅ ACCEPT - Complete structure
<div className="min-h-screen flex flex-col">
  <DynamicHeader isFluid={true} />
  <main className="flex-grow">
    {/* Content */}
  </main>
  <Footer isFluid={true} />
</div>
```

#### ❌ **Wrong Color Classes**
```jsx
// ❌ REJECT - Direct color classes
className="bg-background"
className="text-muted-foreground"
className="bg-muted/30"

// ✅ ACCEPT - QDS color tokens
className="bg-white"
className="text-[var(--color-text-secondary)]"
className="bg-[var(--color-gray-10)]"
```

#### ❌ **New Colors & Icon Backgrounds**
```jsx
// ❌ REJECT - Creating new colors
className="bg-blue-500"
className="bg-green-500"
className="text-blue-600"
className="from-blue-600 to-purple-600"

// ❌ REJECT - Custom icon backgrounds
<div className="w-12 h-12 bg-blue-500 rounded-xl">
  <Home className="w-6 h-6 text-white" />
</div>

// ✅ ACCEPT - Use only QDS colors
className="bg-[var(--color-primary)]"
className="bg-[var(--color-secondary)]"
className="text-[var(--color-text-primary)]"

// ✅ ACCEPT - Use existing icon containers
<div className="w-12 h-12 bg-[var(--color-button-tertiary-bg)] rounded-xl">
  <Home className="w-6 h-6 text-[var(--color-text-primary)]" />
</div>
```

#### ❌ **Wrong Typography Variants**
```jsx
// ❌ REJECT - Non-existent variants
<Typography variant="title-4xl" />
<Typography variant="body-lg" />

// ✅ ACCEPT - Valid QDS variants
<Typography variant="display-sm" />
<Typography variant="body-md" />
```

#### ❌ **Wrong Button Variants**
```jsx
// ❌ REJECT - Non-existent variants
<Button variant="primary" size="xl" />

// ✅ ACCEPT - Valid QDS variants
<Button variant="primary" size="lg" />
```

**Response to Violations:**
```
❌ REJECTED: Code violates QDS rules
🔧 Issues found:
- Wrong prop name: 'tenant' should be 'user'
- Missing header/footer components
- Invalid color classes: 'bg-background', 'text-muted-foreground'
- Invalid typography variants: 'title-4xl', 'body-lg'
- Invalid button size: 'xl' should be 'lg'
- Undefined array .map() error: Use properties?.map() || []
- Missing default arrays: Provide fallbacks for all array props
- Undefined object property error: Use user?.avatar or provide default user object
- Missing object checks: Always verify objects exist before accessing properties
- NEW COLORS VIOLATION: Using 'bg-blue-500', 'bg-green-500', 'from-blue-600 to-purple-600'
- CUSTOM ICON BACKGROUNDS: Creating 'bg-blue-500 rounded-xl' for icons
- BLUE/GREEN THEMES: Introducing non-QDS color schemes

✅ Please fix these issues and resubmit following QDS guidelines.
```

---

## 🎯 Common Use Cases & Patterns

### 1. **Property Listing Page**
```jsx
<Header variant="logged-in" user={user} />
<div className="container mx-auto px-4">
  <Search placeholder="Sök i Stockholm" />
  <div className="flex gap-4">
    <FilterButton count={5} />
    <Select options={sortOptions} />
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {properties.map(property => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </div>
</div>
```

### 2. **User Profile Form**
```jsx
<Header variant="creation-flow" step={1} totalSteps={3} />
<Card className="max-w-2xl mx-auto p-8">
  <Typography variant="title-xl" className="mb-6">
    Skapa din profil
  </Typography>
  
  <div className="space-y-6">
    <Input label="Förnamn" required />
    <Input label="Efternamn" required />
    <TextArea 
      label="Berätta om dig själv" 
      placeholder="Jag är en 25-årig student som..."
    />
    
    <div className="flex gap-4">
      <Button variant="secondary">Tillbaka</Button>
      <Button variant="primary">Nästa</Button>
    </div>
  </div>
</Card>
```

### 3. **Dashboard Layout**
```jsx
<Header variant="logged-in" user={user} />
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
  <div className="lg:col-span-2">
    <Typography variant="title-lg" className="mb-4">
      Dina ansökningar
    </Typography>
    {applications.map(app => (
      <PropertyCard key={app.id} property={app.property} />
    ))}
  </div>
  
  <div>
    <LandlordCard landlord={landlord} />
  </div>
</div>
<Footer />
```

### 4. **Complete Page Structure**
```jsx
// ✅ CORRECT - Always include header and footer
<div className="min-h-screen flex flex-col">
  <DynamicHeader isFluid={true} />
  <main className="flex-grow">
    {/* Your page content here */}
  </main>
  <Footer isFluid={true} />
</div>

// ❌ WRONG - Never skip header or footer
<div>
  {/* Just content without navigation */}
</div>
```

---

## 🌍 Swedish Language Patterns

### Buttons
```jsx
<Button variant="primary">Ansök nu</Button>      // Apply now
<Button variant="secondary">Spara</Button>       // Save
<Button variant="tertiary">Tillbaka</Button>     // Back
<Button variant="outline">Visa mer</Button>      // Show more
```

### Form Labels
```jsx
<Input label="Förnamn" />           // First name
<Input label="E-postadress" />      // Email address
<Input label="Telefonnummer" />     // Phone number
<Select label="Antal rum" />        // Number of rooms
<TextArea label="Om dig själv" />   // About yourself
```

### Common Phrases
- "Skapa profil" - Create profile
- "Hitta bostad" - Find housing  
- "Ansök om denna bostad" - Apply for this property
- "Verifierad hyresvärd" - Verified landlord
- "Trygg och säker" - Safe and secure

---

## 🔧 Icon Usage (Lucide React)

### Available QDS Icons
Always use these approved icons from Lucide React:
```jsx
import { 
  AlertCircle, AlertTriangle, ArrowDown, ArrowLeft, ArrowRight, ArrowUp,
  Bell, BellOff, Bookmark, Calendar, Camera, CheckCircle, Check,
  ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Globe, Heart,
  HelpCircle, History, Home, Image, Info, List, ListFilter, LogOut,
  Map, MapPin, Menu, MessageCircle, Minus, MoreHorizontal, MoreVertical,
  Pen, Plus, Search, Settings, Share, Sliders, Star, Trash, User, XCircle, X
} from 'lucide-react';
```

### Icon Styling Rules
- **Icons use transparent backgrounds** - Never add background colors or radius to icons themselves
- **Icon containers** can have backgrounds when needed for visual hierarchy
- **Use proper color tokens** for icon colors
- **Consistent sizing** with QDS size scale

```jsx
// ✅ CORRECT - Icons with transparent backgrounds
<Home className="w-5 h-5 text-[var(--color-text-primary)]" />

// ✅ CORRECT - Icon in container with background
<div className="w-16 h-16 bg-[var(--color-uiPink)] rounded-full flex items-center justify-center">
  <Home className="w-8 h-8 text-[var(--color-brown)]" />
</div>

// ❌ WRONG - Icon with background color
<Home className="w-5 h-5 bg-pink-500 rounded-full" />
```

### Icon Usage Examples
```jsx
// In buttons
<Button leftIcon={<Plus />}>Lägg till</Button>
<Button iconOnly icon={<X />} variant="ghost" />

// In text
<div className="flex items-center gap-2">
  <Home className="w-5 h-5 text-[var(--color-text-primary)]" />
  <Typography variant="body-md">2 rum och kök</Typography>
</div>

// In feature badges
<FeatureBadge text="Verified" icon={<CheckCircle className="w-4 h-4" />} />
```

---

## 🎨 Theme Integration

### Automatic Theme Support
All QDS components automatically work with both themes:
- **Qasa Theme**: Pink primary (#f19ec1)
- **Blocket Theme**: Red primary (#e3372a)

### Theme-Aware Development
```jsx
// Components automatically adapt
<Button variant="primary">Apply</Button> // Pink in Qasa, Red in Blocket

// Use CSS variables for consistency
className="bg-[var(--color-primary)]"   // Always correct brand color
```

---

## 📱 Responsive Patterns

### Grid Layouts
```jsx
// Property grid
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Two-column layout  
className="grid grid-cols-1 lg:grid-cols-2 gap-8"

// Sidebar layout
className="grid grid-cols-1 lg:grid-cols-3 gap-6"
```

### Container Patterns
```jsx
// Page container
className="container mx-auto px-4 md:px-6 lg:px-8"

// Card container
className="max-w-2xl mx-auto"

// Form container
className="max-w-md mx-auto"
```

---

## ✅ Quick Validation Checklist

Before generating any UI, verify:

- [ ] Using `<Button>` instead of `<button>`
- [ ] Using `<Typography>` instead of `<h1>`, `<p>`, etc.
- [ ] Using CSS variables for colors
- [ ] Importing from `@/components/ui/`
- [ ] Using Lucide React icons only
- [ ] Including Swedish translations
- [ ] Responsive classes applied
- [ ] Theme compatibility ensured

---

## 🚀 Quick Start Template

```jsx
import React from 'react';
import Button from '@/components/ui/Button';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/Card';
import { Home } from 'lucide-react';

const MyComponent = () => {
  return (
    <Card className="p-6 max-w-md mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <Home className="w-6 h-6 text-[var(--color-primary)]" />
        <Typography variant="title-lg">
          Hitta ditt hem
        </Typography>
      </div>
      
      <Typography variant="body-md" className="text-[var(--color-text-secondary)] mb-6">
        Börja din bostadssökning idag
      </Typography>
      
      <Button variant="primary" size="md">
        Kom igång
      </Button>
    </Card>
  );
};

export default MyComponent;
```

**This template follows all QDS rules and is ready to use!** 🎉

---

## 🎯 Conversion Landing Page Reference

### URL Access
The conversion landing page is available at: `/landing` (variant system simplified)

### Key Implementation Notes
- **Real App Components**: Uses actual QDS components to demonstrate value
- **Conversion Focused**: Designed to increase sign-ups for both landlords and tenants
- **Immediate Value**: Shows app functionality rather than just describing it
- **QDS Compliant**: Follows all design system rules and guidelines

### For AI/Lovable Development
When working on conversion-focused pages:
1. Use real QDS components to demonstrate functionality
2. Focus on immediate value proposition
3. Include clear CTAs for both user types
4. Showcase actual app features, not just mockups
5. Follow all documented design rules for consistency
6. **Always provide the URL** where you generated the page (e.g., `/landing`, `/landlords/create-listing`, etc.)
7. **Include file path** where the component was created (e.g., `src/prototypes/landing/NewLandingPage.jsx`)

---

## 🎨 Color & Contrast Rules (Mandatory)

- **White text on dark surfaces**: When the background is dark or image-overlaid (e.g., `bg-[var(--color-brown)]`, `from-black/60`, hero images), set text explicitly to white using `Typography` with `color="white"`.
  - Titles and body on dark: `<Typography color="white" ...>`.
  - Hints/captions on dark: white with reduced opacity, e.g., `className="opacity-85"`.
- **Icons on brand/dark backgrounds**:
  - Inside brand/primary buttons: icon color must be `text-[var(--color-text-on-primary)]`.
  - On generic dark surfaces (non-primary): `text-white`.
  - Icon containers on light sections: `bg-[var(--color-button-tertiary-bg)]` with icon `text-[var(--color-text-primary)]`.
  - Icon containers on dark sections: `bg-white/10` with icon `text-white`.
- **Icon styling rules**:
  - **Icons use transparent backgrounds** - Never add background colors or radius to icons themselves
  - **Icon containers** can have backgrounds when needed for visual hierarchy
  - **Use proper color tokens** for icon colors: `text-[var(--color-text-primary)]`, `text-[var(--color-text-secondary)]`
  - **For checkmarks/bullets**: Use `CheckCircle` icon with `text-[var(--color-text-primary)]`, never red or green colors
- **Never** use `text-[var(--color-text-primary)]` on dark surfaces; contrast fails.
- Prefer tokens over hex or Tailwind palette. If a token seems missing, use the closest semantic token and open a follow-up to extend tokens—do not hardcode colors.

### Examples

```jsx
// Hero text on dark image or brown background
<Typography variant="display-sm" color="white">A better way to rent</Typography>
<Typography variant="body-lg" color="white" className="opacity-90">Find a home that feels right...</Typography>

// Primary icon button
<Button variant="primary" iconOnly aria-label="Search">
  <Search className="w-5 h-5 text-[var(--color-text-on-primary)]" />
  {/* never text-white inside primary if on-primary token exists */}
  {/* never text-[var(--color-text-primary)] on this button */}
</Button>

// Stats on dark strip
<section className="bg-[var(--color-brown)] rounded-2xl">
  <Typography variant="title-lg" color="white">600 000+</Typography>
  <Typography variant="body-sm" color="white" className="opacity-80">published homes</Typography>
</section>
```

---

## 🔠 Title & Typographic Hierarchy (Mandatory)

- **Page hero**: `display-lg` (or `display-md` on smaller hero). On dark hero: `color="white"`.
- **Section headers**: `display-sm`.
- **Card/box titles**: `title-lg`.
- **Key stats**: `title-xl` or `title-lg` depending on emphasis; hints use `label-md` or `body-sm`.
- **Body copy**: `body-md` (default), secondary text uses `color="secondary"`.
- **Small print**: `label-sm`.

Do not output raw `<h*>`/`<p>` with manual classes for size. Always use `Typography` with the correct variant.

---

## 🧱 Composition Only — No New Section Components

- Do not introduce new section components such as `WhatIsQasa`, `HowItWorksSection`, or `TrustSafetySection`.
- Build sections by composing approved QDS primitives/patterns:
  - `Typography`, `Button`, `Card`, `Avatar`, `Carousel`, `CityCard`, `FeatureCard`, `RichPromoCard`, `StatsStrip`, `TestimonialCarousel`, `FAQLinkList`, `FeatureBadge`, `TrustIndicator`.
- If a reusable pattern is truly needed, follow the QDS creation process (folder + story + tokens). Never invent ad-hoc components in prototypes.

### Content Block Variants
### ContentBlock Component

Use the `ContentBlock` component for landing pages, information sections, and teasers:

#### Background Colors
- Use `bg-[var(--color-softPink)]` for premium/feature highlights
- Use `bg-[var(--color-background-inset)]` for secondary information
- Use `bg-white` for primary content

#### Rounded Containers
- Use `rounded-xl` for standard content blocks
- Use `rounded-2xl` for featured content
- Use `rounded-full` for pill-shaped elements

#### Image Layouts
- Support `image-left`, `image-right`, and `centered` layouts
- Images should be responsive and maintain aspect ratio

#### Call to Actions
- Include buttons with proper QDS styling (primary, secondary, tertiary, outline)
- Use consistent spacing and typography

#### Stepper Components
- Use numbered circles (1, 2, 3) with proper backgrounds
- Include connecting lines between steps
- Use proper color tokens for accessibility

#### AI Prompts for ContentBlock
```
Create a content block with:
- Title: "Find Your Dream Home"
- Description: "Browse thousands of verified rental properties"
- Background: softPink
- Image position: left
- CTA: "Browse Homes" (primary variant)
- Rounded: xl
```

```
Create an information section with:
- Title: "No Deposit Required"
- Description: "Keep your money in your pocket"
- Background: inset
- CTA: "Learn More" (outline variant)
- Stepper: ["Search", "Apply", "Move In"]
```

#### Component Props
```jsx
<ContentBlock
  title="Welcome to Qasa"
  description="Find your perfect home or tenant"
  image="image-url.jpg"
  imagePosition="left"              // left, right, center
  background="white"                // white, softPink, inset
  rounded="xl"                      // none, sm, md, lg, full
  ctaText="Get Started"
  ctaVariant="primary"              // primary, secondary, tertiary, outline
  stepper={["Step 1", "Step 2"]}
  onCtaClick={handleClick}
/>
```

### Modal Component

Use the `Modal` component for overlays, dialogs, and forms. The Modal component integrates with `SectionHeader` and `SectionFooter` for consistent styling:

#### Basic Usage
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Modal Title"
>
  <p>Modal content goes here</p>
</Modal>
```

#### Modal with SectionHeader
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Create New Listing"
  description="Fill in the details below to create your new rental listing."
>
  <div className="space-y-4">
    <p>Modal content with consistent header styling</p>
  </div>
</Modal>
```

#### Modal with SectionFooter
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Confirm Action"
  showFooter={true}
  footerProps={{
    onNext: handleConfirm,
    onPrev: handleCancel,
    nextText: 'Confirm',
    prevText: 'Cancel',
    showPrev: true,
    showNext: true
  }}
>
  <div className="space-y-4">
    <p>Are you sure you want to proceed?</p>
  </div>
</Modal>
```

#### Form Modal with SectionHeader and SectionFooter
```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Contact Information"
  description="Please provide your contact details below."
  showFooter={true}
  footerProps={{
    onNext: handleSave,
    onPrev: handleCancel,
    nextText: 'Save',
    prevText: 'Cancel',
    showPrev: true,
    showNext: true
  }}
>
  <div className="space-y-4">
    <Input placeholder="Name" />
    <Input placeholder="Email" />
    <TextArea placeholder="Message" />
  </div>
</Modal>
```

#### Modal Footer Variations
- **Multi-step**: Left tertiary button with arrow, right primary button
- **Left Tertiary Right Primary**: Text buttons with tertiary and primary variants
- **Centered Primary Only**: Single centered primary button
- **Centered Wide Primary Only**: Full-width centered primary button
- **Centered Tertiary and Primary**: Two centered buttons
- **Stacked Primary and Tertiary**: Vertical button layout
- **Only Right Primary**: Right-aligned primary button only

### Composition Recipes

- **“What is Qasa?” section**
  - `Typography` (`display-sm` title, `body-md` subtitle/description)
  - Grid with three stats using `Typography` (`title-lg` value, `body-sm` hint)

- **“How it works” pills**
  - Two `Button` components inside a rounded container (`transparent` + `primary` for active). No custom tabs component.
  - Four step “boxes”: use `Card`-like container (div with border + `rounded-2xl`), Lucide icon in a circle, title `title-lg`, body `body-sm`.

- **Trust & Safety**
  - 4-up grid; each cell uses an icon container, a `title-lg`, and `body-sm`.

---

## 🧱 Shadows & Borders

- Allowed shadows: `shadow-sm`, `shadow-md`, `shadow-lg` on cards/boxes only. Avoid shadows on full-width strips.
- Borders use tokens only: `border-[var(--color-border)]` or semantic variants (e.g., brand subtle). No pure white fills to simulate contrast; use gradient overlays and tokens.

### Box Usage
- Use `Box` as a neutral container with `variant="gray"` (default). It renders Gray 10 (inset). Do not expect shadows or a white variant. For elevation, use `Card` or apply shadow classes explicitly.

---

## 🗺️ Map Component

### Component Description
Interactive map component with grouped pins and price display. Uses OpenStreetMap and supports hover interactions with property cards.

### Key Features
- **Grouped Pins**: Automatically groups nearby properties when zoomed out
- **Price Display**: Shows SEK prices when zoomed in close enough
- **Hover Interactions**: Displays property cards on hover
- **Click Navigation**: Navigate to property details on click
- **Sweden Focus**: Optimized for Swedish property locations

### AI Prompts for Map Usage

#### Basic Map Implementation
```
Create a map component showing rental properties in Stockholm
Use the QDS Map component with grouped pins and price display
Include hover interactions and click navigation to property details
```

#### Map with Custom Properties
```
Add a map to this page showing these properties:
- Stockholm: 3 properties in Östermalm, Södermalm, Vasastan
- Gothenburg: 2 properties in city center
- Malmö: 1 property near the station
Use grouped pins when zoomed out and individual price pins when zoomed in
```

#### Map Integration in Landing Page
```
Create a landing page with a map section showing available rental properties
Use the QDS Map component with:
- Sweden overview zoom level
- Grouped pins showing property counts
- Hover to show property cards
- Click to navigate to apply page
- Map takes 2/3 width, cards on right with fixed width
- Map renders to parent height if wrapper is higher
```

#### Map with Filters
```
Add a map to the property search page that:
- Shows properties based on current filters
- Updates markers when filters change
- Maintains grouped pins for performance
- Highlights selected property
```

### Component Props

```jsx
<Map
  properties={propertyArray}           // Array of property objects
  center={[59.3293, 18.0686]}         // Map center coordinates
  zoom={11}                           // Initial zoom level
  onPropertyClick={handleClick}       // Click handler
  selectedProperty={selected}         // Currently selected property
  showGroupedPins={true}              // Enable grouped pins
  className="w-full h-full"           // CSS classes
/>
```

### Property Object Structure
```jsx
{
  id: 1,
  images: ['url1', 'url2'],
  location: 'Östermalm, Stockholm',
  type: 'Lägenhet',
  details: '2 rum / 65 m²',
  price: 'SEK 18,500',
  dateRange: '2025-07-15 → Tillsvidare',
  lat: 59.3358,
  lng: 18.0871,
}
```

### Best Practices

#### For Lovable Prompts
- **Specify Location**: Always mention Swedish cities and areas
- **Include Properties**: Provide property data or mock data structure
- **Describe Interactions**: Explain hover and click behaviors
- **Mention Zoom Levels**: Specify when to show grouped vs individual pins

#### For Developers
- **Performance**: Use grouped pins for large property datasets
- **Accessibility**: Ensure keyboard navigation works
- **Mobile**: Test touch interactions on mobile devices
- **Loading**: Show loading states while map tiles load

### Example Implementations

#### Property Search Page
```jsx
<div className="grid grid-cols-3 gap-6">
  <div className="col-span-2">
    <Map
      properties={filteredProperties}
      center={[59.3293, 18.0686]}
      zoom={11}
      selectedProperty={selectedProperty}
      onPropertyClick={(property) => navigate(`/apply-home/${property.id}`)}
      showGroupedPins={true}
      className="h-full" // Map renders to parent height
    />
  </div>
  <div className="col-span-1">
    <PropertyCard 
      property={selectedProperty} 
      className="w-full" // Fixed width, content-based height
    />
  </div>
</div>
```

#### City Overview
```jsx
<Map
  properties={allProperties}
  center={[62.0, 15.0]} // Sweden center
  zoom={6}
  onPropertyClick={handleCityClick}
  showGroupedPins={true}
/>
```

#### Neighborhood Focus
```jsx
<Map
  properties={neighborhoodProperties}
  center={[59.3293, 18.0686]}
  zoom={14}
  selectedProperty={selectedProperty}
  onPropertyClick={handlePropertyClick}
  showGroupedPins={false}
/>
```

### Common Use Cases

1. **Property Search Results**: Show filtered properties with interactive map
2. **City Overview**: Display property distribution across Sweden
3. **Neighborhood Explorer**: Focus on specific areas with detailed property info
4. **Property Comparison**: Allow users to compare nearby properties
5. **Location-Based Search**: Help users find properties in desired areas

### Integration Tips

- **Combine with Filters**: Update map when search filters change
- **Sync with List**: Keep map and property list in sync
- **Responsive Design**: Adjust map size and behavior for mobile
- **Loading States**: Show skeleton or loading indicator while map loads
- **Error Handling**: Provide fallback for map loading failures