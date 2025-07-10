# Qasa Match Prototyping

A React-based prototyping platform for testing different approaches to Qasa's rental matching features. Built with Vite, React Router, and Tailwind CSS.

## 🧪 Variant System

This project includes a powerful variant system that allows teams to create, manage, and compare different versions of prototypes:

### Features
- **URL-based variants**: Switch between versions using `?variant=name` 
- **Visual variant selector**: Floating selector to switch between variants
- **Experiments dashboard**: Grid view of all prototypes with variant dropdowns
- **Shareable links**: Each variant gets its own unique URL
- **Status tracking**: Mark variants as `draft`, `active`, or `archived`
- **Easy comparison**: Side-by-side testing of different approaches

### Creating Variants

#### Step 1: Add to Variant Registry

Add your prototype to `src/utils/variants.js`:

```js
'your-prototype-id': {
  name: 'Your Prototype Name',
  description: 'Brief description of what this prototype does',
  variants: [
    {
      id: 'default',
      name: 'Default',
      description: 'Standard implementation',
      component: () => import('../prototypes/path/to/YourPrototype'),
      tags: ['baseline']
    },
    {
      id: 'enhanced',
      name: 'Enhanced Version',
      description: 'Improved user experience with additional features',
      component: () => import('../prototypes/path/to/variants/YourPrototypeEnhanced'),
      tags: ['improved', 'features'],
      status: 'draft'  // draft, active, or archived
    }
  ]
}
```

#### Step 2: Create Variant Components

Create a `variants/` folder in your prototype directory:

```
src/prototypes/your-prototype/
├── YourPrototype.jsx           # Default variant
├── variants/
│   ├── YourPrototypeEnhanced.jsx
│   ├── YourPrototypeGamified.jsx
│   └── components/             # Variant-specific components
│       ├── EnhancedStep1.jsx
│       └── GamifiedStep2.jsx
```

#### Step 3: Update App.tsx Routes

Add VariantWrapper to your routes:

```js
<Route path="/your-prototype" element={
  <VariantWrapper 
    prototypeId="your-prototype-id" 
    defaultComponent={YourPrototype}
  />
} />
<Route path="/your-prototype/step/:step" element={
  <VariantWrapper 
    prototypeId="your-prototype-id" 
    defaultComponent={YourPrototype}
  />
} />
```

#### Step 4: URLs Work Automatically

- Default: `/your-prototype`
- Variant: `/your-prototype?variant=enhanced`
- With parameters: `/your-prototype/step/2?variant=enhanced`

### Profile Completion Experiments

We've implemented three different approaches to profile completion in the auth register flow:

#### 1. Enhanced Profile Completion (`enhanced-profile`)
- **URL**: `/auth/register/step/2?variant=enhanced-profile`
- **Approach**: Combines email verification with optional profile fields
- **Features**:
  - Real-time profile preview sidebar
  - Progress percentage calculation
  - Immediate feedback on field completion
  - Mobile-responsive layout

#### 2. Gamified Completion (`gamified`)
- **URL**: `/auth/register/step/2?variant=gamified`
- **Approach**: Uses gamification elements to encourage completion
- **Features**:
  - Points system (+50 to +200 points per field)
  - Achievement unlocking with visual notifications
  - Level progression system
  - Progress challenges and motivational messaging

#### 3. Step-by-Step Profile (`step-by-step`)
- **URL**: `/auth/register/step/3?variant=step-by-step`
- **Approach**: Breaks profile completion into focused micro-steps
- **Features**:
  - One field per step for maximum focus
  - Clear benefit explanations for each field
  - Skip options for non-critical fields
  - Progress tracking with completion count

### Best Practices for Variants

1. **Start Simple**: Begin with one clear hypothesis to test
2. **Document Purpose**: Clearly state what you're testing and why
3. **Use Descriptive IDs**: `simplified`, `enhanced`, `gamified` are better than `v1`, `v2`
4. **Track Status**: Mark variants as `draft` while developing, `active` when ready to test
5. **Mobile First**: Ensure all variants work well on mobile devices
6. **Test Thoroughly**: Each variant should be fully functional
7. **Clean Up**: Archive or remove variants that aren't providing value

### Example Variants
- **create-tenant-listing-simplify**: 5-step simplified flow vs 17-step complete flow
- **find-tenant-cards**: Card layout vs list layout for tenant discovery
- **create-listing-enhanced-media**: Enhanced media upload experience

## 🎨 Theme System

Supports multiple themes via URL parameters:
- `?theme=qasa` - Qasa branding (default)
- `?theme=blocket` - Blocket branding

### Storybook Integration
- Theme picker toolbar in Storybook
- Automatic theme switching for component testing
- All components work with both themes

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open Storybook
npm run storybook

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── prototypes/           # Main prototype flows
│   ├── tenants/
│   │   └── create-tenant-listing/
│   │       ├── CreateTenantListingFlow.jsx     # Default variant
│   │       └── variants/
│   │           ├── CreateTenantListingSimplify.jsx
│   │           └── CreateTenantListingExperimental.jsx
│   └── landlords/
├── components/
│   ├── ui/               # Reusable UI components
│   │   ├── VariantSelector.jsx  # Variant switching dropdown
│   │   └── VariantCard.jsx      # Enhanced experiment cards
│   └── VariantWrapper.jsx       # Handles variant loading
├── utils/
│   └── variants.js       # Variant registry and utilities
└── contexts/             # React contexts (theme, auth, etc.)
```

## 🔗 Key URLs

- `/experiments` - Dashboard showing all prototypes with variants
- `/tenants/create-tenant-listing` - Default tenant listing flow
- `/tenants/create-tenant-listing?variant=simplify` - Simplified variant
- `/auth/register/step/3` - Default landing page (for testing)

## 🛠 Development Workflow

1. **Create new variant**: Add entry to `variants.js` and create component
2. **Test variant**: Use variant selector or URL parameter
3. **Share with team**: Copy variant URL from experiments dashboard
4. **Compare approaches**: Open multiple tabs with different variants
5. **Iterate**: Update variants based on feedback

## 📊 Experiments Dashboard

Visit `/experiments` to see:
- All prototypes with their available variants
- Variant status (draft, active, archived)
- Description and tags for each variant
- Quick links to copy variant URLs
- Organized sections for prototypes with/without variants

This system makes it easy for designers and developers to experiment with different approaches and share specific versions for feedback and testing.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

## 📦 Creating New Experiments

To create a new experiment:

```bash
npm run new-experiment
```

This will:
1. Create the experiment directory structure
2. Set up the component files
3. Create Storybook stories
4. Add it to the main App.jsx

## 🧪 Development

- Each experiment is isolated in its own directory under `src/prototypes`
- Components specific to an experiment should be in the experiment's `components` directory
- Shared components go in `src/components`
- Every component should have a corresponding story in `src/stories`

## 📚 Storybook

We use Storybook for:
- Component development and testing
- Visual documentation
- Experiment previews

Access it by running:
```bash
npm run storybook
```

## 🔄 Git Workflow

1. Create a new branch for your experiment:
   ```bash
   git checkout -b experiment/feature-name
   ```

2. Commit your changes:
   ```bash
   git add .
   git commit -m "feat: add new experiment feature"
   ```

3. Push your changes:
   ```bash
   git push origin experiment/feature-name
   ```

4. Create a Pull Request when ready for review 