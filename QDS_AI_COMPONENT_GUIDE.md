# 🤖 QDS AI Component Guide

**For AI tools, Lovable, and developers: Always use these QDS components instead of creating custom ones.**

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
<Button variant="primary" size="md">Click</Button>
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
<Button variant="primary" size="md">Primary Action</Button>
<Button variant="secondary" size="md">Secondary Action</Button>
<Button variant="tertiary" size="md" iconOnly icon={<ArrowLeft />} />
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

```jsx
import { Home, User, Heart, Search, Filter, Plus, X, Check } from 'lucide-react';

// In buttons
<Button leftIcon={<Plus />}>Lägg till</Button>
<Button iconOnly icon={<X />} variant="ghost" />

// In text
<div className="flex items-center gap-2">
  <Home className="w-5 h-5 text-gray-600" />
  <Typography variant="body-md">2 rum och kök</Typography>
</div>
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