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

#### ❌ **Undefined Component Errors (React Error #130)**
```jsx
// ❌ REJECT - Using non-existent components
import Card from '../../components/ui/Card';
<Card.CreateTenantProfileCard /> // This component doesn't exist!

// ❌ REJECT - Wrong component names
<Card.CreateTenantProfileCard /> // Should be Card.CreateProfileCard
<Button.PrimaryButton /> // Should be Button (no sub-components)

// ✅ ACCEPT - Use only existing components
import Card from '../../components/ui/Card';
<Card.CreateProfileCard /> // This exists
<Card.PropertyCard /> // This exists
<Card.TenantCard /> // This exists

// ✅ ACCEPT - Check component exports first
// Always verify component exists before using it
```

#### ❌ **Icon Reference Errors (ReferenceError)**
```jsx
// ❌ REJECT - Wrong icon imports (causes ReferenceError)
import { CalendarIcon } from 'lucide-react'; // CalendarIcon doesn't exist!
import { UserIcon, HomeIcon } from 'lucide-react'; // Wrong names!

// ❌ REJECT - Direct lucide-react usage
import { Calendar } from 'lucide-react';
<Calendar />

// ✅ ACCEPT - Use QDS Icon component only
import Icon from '../../components/ui/Icon';
<Icon name="Calendar" />
<Icon name="User" />
<Icon name="Home" />

// ✅ ACCEPT - Correct icon names for QDS Icon component
// Calendar, User, Home, Search, Mail, Phone, MapPin, Star, Heart, Eye, Edit, Trash, Plus, Minus, Check, X, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft
```

#### ❌ **Position Absolute Layout Errors**
```jsx
// ❌ REJECT - Position absolute breaks layout
<div className="absolute top-0 right-0">
<div className="fixed bottom-0 left-0">
<div className="sticky top-0">

// ❌ REJECT - Overlapping elements
<div className="absolute inset-0">
<div className="absolute z-10">

// ✅ ACCEPT - Use flexbox/grid for layout
<div className="flex justify-between items-center">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative">

// ✅ ACCEPT - Proper layout flow
<div className="flex flex-col space-y-4">
<div className="flex items-center gap-4">
```

#### ❌ **Wrong Icon Name Errors (ReferenceError)**
```jsx
// ❌ REJECT - Wrong icon names (causes ReferenceError)
import { CalendarIcon } from 'lucide-react';
import { UserIcon, HomeIcon, SearchIcon } from 'lucide-react';
<CalendarIcon />
<UserIcon />

// ❌ REJECT - Direct icon usage without QDS Icon component
import { Calendar } from 'lucide-react';
<Calendar />

// ✅ ACCEPT - Use QDS Icon component with correct names
import Icon from '../../components/ui/Icon';
<Icon name="Calendar" />
<Icon name="User" />
<Icon name="Home" />
<Icon name="Search" />

// ✅ ACCEPT - Correct lucide-react icon names
// Calendar, User, Home, Search, Mail, Phone, MapPin, Star, Heart, Eye, Edit, Trash, Plus, Minus, Check, X, ArrowRight, ArrowLeft, ChevronRight, ChevronLeft
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
<Typography variant="body-lg">Large body text</Typography>
<Typography variant="body-md">Normal text</Typography>
<Typography variant="body-sm">Secondary text</Typography>

// For larger text (flexible sizing)
<Typography variant="text-4xl">Large display text</Typography>
<Typography variant="text-2xl">Prominent text</Typography>
<Typography variant="text-xl">Emphasized text</Typography>

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
import CityCard from '@/components/ui/CityCard';
import FeatureCard from '@/components/ui/FeatureCard';

// Basic card
<Card className="p-6">
  <Typography variant="title-lg">Card Title</Typography>
  <Typography variant="body-md">Card content</Typography>
</Card>

// Specialized cards
<PropertyCard property={propertyData} />
<TenantCard tenant={tenantData} />
<LandlordCard landlord={landlordData} />

// Tertiary background cards
<CityCard city="Stockholm" homesCount="1522 homes" imageSrc="image.jpg" />
<FeatureCard title="No Deposit" description="Keep your money" illustrationSrc="icon.jpg" />
```

**When to use:**
- **Card**: General content containers
- **PropertyCard**: Property listings, search results
- **TenantCard**: Tenant profiles, applications
- **LandlordCard**: Landlord profiles, contact info
- **CityCard**: City browsing, location selection
- **FeatureCard**: Feature highlights, benefits display

**Critical Rules:**
- **TenantCard & PropertyCard**: Must always use `bg-white` backgrounds
- **CityCard & FeatureCard**: Use `bg-[var(--color-button-tertiary-bg)]` (off-white/cream) for brand consistency
- **Never gray backgrounds**: No `bg-gray-10`, `bg-gray-20`, or grayish backgrounds for PropertyCard/TenantCard
- **White backgrounds mandatory**: PropertyCard/TenantCard ensure proper contrast and QDS compliance
- **Tertiary background cards**: CityCard, FeatureCard use brand tertiary for visual hierarchy
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
className="border-[var(--color-border)]"       // Default borders (#e5e5df)
className="border-[var(--border-color-default)]" // Alternative border token

// ❌ DON'T use direct colors
className="text-pink-500"   // Wrong!
className="text-gray-600"   // Wrong!
```

### 🔍 Search & Filters
```jsx
import Search from '@/components/ui/Search';
import FilterModal from '@/components/ui/FilterModal';
import FilterButton from '@/components/ui/FilterButton';

// Default search (white background)
<Search 
  placeholder="Search cities or districts"
  variant="default"
/>

// Filled search (tertiary background, white + 2px border on focus)
<Search 
  variant="filled"
  placeholder="Search cities or districts"
/>

// Search with filter button
<div className="flex gap-3">
  <div className="flex-1">
    <Search variant="filled" placeholder="Search cities or districts" />
  </div>
  <FilterButton count={3} onClick={() => setShowFilters(true)} />
</div>

<FilterModal 
  isOpen={showFilters}
  onClose={() => setShowFilters(false)}
  onApplyFilters={handleFilters}
/>
```

### 📄 Pagination
```jsx
import Pagination from '@/components/ui/Pagination';

<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => setCurrentPage(page)}
  showPageNumbers={true}
  showNavigation={true}
  maxVisiblePages={5}
/>

// Navigation only
<Pagination
  currentPage={3}
  totalPages={10}
  onPageChange={setCurrentPage}
  showPageNumbers={false}
  showNavigation={true}
/>

// Many pages with ellipsis
<Pagination
  currentPage={5}
  totalPages={50}
  onPageChange={setCurrentPage}
  maxVisiblePages={5}
/>
```

### 🏆 Qasa Premium Badge
```jsx
import PremiumBadge from '@/components/ui/PremiumBadge';

// Official Qasa Premium badge with responsive design
<PremiumBadge />

// In RichPromoCard titles
<RichPromoCard 
  showPremiumBadge={true}
  title="Find your next home twice as easily with"
  // ... other props
/>

// In premium content blocks
<div className="text-center">
  <Typography variant="display-lg" className="mb-4">
    Find your next homes 2.5x easier with
  </Typography>
  <PremiumBadge className="mb-4" />
</div>

// In modals (put badge in content, not title)
<Modal size="lg">
  <div className="text-center">
    <Typography variant="title-lg" className="mb-2">Find your next home 2.5x easier with</Typography>
    <PremiumBadge className="mb-3" />
    <Typography variant="body-sm" className="text-gray-600">From SEK 139 per month</Typography>
  </div>
</Modal>

// Property cards with status chips
<PropertyCard 
  property={propertyData}
  statusChip="apply-earlier"  // Yellow chip for premium features
  statusChip="first-hand"     // Green chip for first-hand properties
  statusChip="premium"        // Pink chip for premium properties
  statusChip="new"           // Blue chip for new listings
/>
```

### 🏷️ Feature Badges & Trust Indicators
```jsx
import FeatureBadge from '@/components/ui/FeatureBadge';
import TrustIndicator from '@/components/ui/TrustIndicator';
import PremiumBadge from '@/components/ui/PremiumBadge';

// Feature badges for property features
<FeatureBadge text="Balkong" />
<FeatureBadge text="Verifierad hyresvärd" icon={<CheckCircle className="w-4 h-4" />} />

// Trust indicators for safety
<TrustIndicator text="ID Verified" type="verified" />
<TrustIndicator text="Secure payment" type="secure" />
<TrustIndicator text="Trusted landlord" type="trusted" />

// Official Qasa Premium badge (responsive design)
<PremiumBadge />
```

### 🏙️ City & Feature Cards (Tertiary Background)
```jsx
import CityCard from '@/components/ui/CityCard';
import FeatureCard from '@/components/ui/FeatureCard';

// City navigation cards (tertiary background)
<CityCard 
  city="Stockholm" 
  homesCount="1,522 homes" 
  imageSrc="stockholm.jpg"
  onClick={() => navigate('/homes')} 
/>

// Feature highlight cards (tertiary background)
<FeatureCard
  title="No Deposit"
  description="Keep your money — we handle the deposit."
  illustrationSrc="hand-icon.jpg"
  variant="standard"
  className="max-w-96"
/>
```

**Tertiary Background Usage:**
- **CityCard**: City browsing, location selection, carousel navigation
- **FeatureCard**: Feature highlights, benefit showcases, promotional content
- **Background**: Uses `bg-[var(--color-button-tertiary-bg)]` (off-white/cream)
- **Visual hierarchy**: Distinguishes navigational/promotional cards from data cards
- **Brand consistency**: Matches QDS tertiary color for cohesive design

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

// Border rule: Each item gets border-b border-[var(--color-border)], last item gets last:border-b-0
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
- GRAY BACKGROUND VIOLATION: Using bg-gray-50, bg-gray-100, bg-gray-200, or any bg-gray-* classes
- UNDEFINED COMPONENT ERROR: Using non-existent components like Card.CreateTenantProfileCard
- WRONG COMPONENT NAMES: Using incorrect component names that don't exist
- VARIANT PARAMETERS: Using `/landing?variant=conversion` or similar variant URLs
- A/B TESTING URLS: Creating variant-based URLs for testing
- POSITION ABSOLUTE: Using `absolute`, `fixed`, or `sticky` positioning
- LAYOUT OVERLAPS: Creating overlapping elements with absolute positioning
- WRONG ICON NAMES: Using `CalendarIcon`, `UserIcon`, `HomeIcon` (causes ReferenceError)
- DIRECT ICON IMPORTS: Importing directly from lucide-react instead of using QDS Icon component

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

// ❌ WRONG - Never use variant parameters
<Route path="/landing?variant=conversion" element={<ConversionLanding />} />

// ✅ CORRECT - Direct routing without variants
<Route path="/landing" element={<Landing />} />
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
- **Qasa Theme**: Pink primary (#ff99c2)
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
- **✅ Follow Qasa palette** - pink (#ff99c2), brown (#322721)

### 🎴 TenantCard Background Rules
- **❌ Never use grayish backgrounds** for TenantCard components
- **✅ Use white or light backgrounds** for better contrast and readability
- **✅ Keep it clean** - avoid busy or dark backgrounds

### 🃏 Card & Border Rules
- **✅ Add borders to cards** when they're on the same background color
- **✅ Use subtle borders** - `border border-gray-100` or `border border-[var(--color-border)]`
- **✅ Cards should use white backgrounds** for contrast against colored sections
- **✅ Borders provide visual separation** between cards and container

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
- **Qasa Pink:** #ff99c2 (main brand color)
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
- Always use pink (#ff99c2) for main actions
- Include "verified" badges on landlords
- Add trust messages about safety
- Use friendly, encouraging language

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
  - **For amenities lists**: Use specific contextual icons (Home, Wifi, Car, Settings) with `text-gray-600`
  - **For process steps**: Use `CheckCircle` icon with `stroke-2` for step-by-step guides  
  - **For status lists**: Use `Check` and `X` icons with default colors (no color classes)
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
- Use `background="softPink"` for premium/feature highlights
- Use `background="inset"` for secondary information  
- Use `background="white"` for primary content

#### Image Layouts
- `imagePosition="left"` - Image on left, text on right
- `imagePosition="right"` - Image on right, text on left
- `imagePosition="center"` - Image above text, centered layout

#### Rounded Containers
- Use `rounded="xl"` for standard content blocks
- Use `rounded="lg"` for featured content
- Use `rounded="full"` for pill-shaped elements

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
```

```
Create an information section with:
- Title: "No Deposit Required"
- Description: "Keep your money in your pocket"
- Background: inset
- CTA: "Learn More" (outline variant)
- Stepper: ["Search", "Apply", "Move In"]
```

```
Create a hero section with:
- Title: "Welcome to Qasa"
- Description: "Safe and secure rental platform"
- Image position: center
- Background: white
- CTA: "Get Started" (primary variant)
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
  ctaOnClick={handleClick}
/>
```

#### Available Variants
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