# Qasa Codebase Inconsistency Report

## 🚨 Critical Issues Found

### 1. Icon Library Conflict
**Issue**: Mixed usage of Heroicons and Lucide React
- **Current State**: 
  - Heroicons: 60+ files (primary)
  - Lucide React: 5 files (should be removed)
- **Files using Lucide**:
  - `src/prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep1.jsx`
  - `src/prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep14.jsx`
  - `src/prototypes/tenants/create-tenant-listing/components/CreateTenantListingStep17.jsx`
  - `src/components/Footer.jsx`
  - `src/components/ui/Card/TenantCard.jsx`

**✅ Fix**: Standardize on **Lucide React** (as per your request) or **Heroicons** (current majority)

---

### 2. Direct Tailwind Classes (Should Use QDS)
**Issue**: Extensive inline Tailwind instead of QDS components

**Most Problematic Files**:
```
src/prototypes/tenants/profile/TenantProfilePage.jsx - 50+ violations
src/prototypes/landlords/find-tenant/variants/FindTenantWithFilters.jsx
src/prototypes/homes/variants/HomesPageDiscover.jsx
src/components/Header/HeaderDiscover.jsx
```

**Common Violations**:
- `text-gray-500`, `text-gray-700` → Should use Typography
- `bg-gray-50`, `bg-white` → Should use CSS variables
- `rounded-lg`, `rounded-full` → Should use design tokens
- `px-4 py-2` → Should use QDS spacing system

---

### 3. Typography Inconsistencies
**Issue**: Not using Typography component consistently

**Violations Found**:
- `src/components/ui/Card/QualityIndicator.jsx`:
  - Lines 16, 31, 39, 47, 55: Raw `<h2>` and `<p>` tags
  - Should use: `<Typography variant="title-md">` and `<Typography variant="body-md">`

**Pattern Violations**:
- `className="text-lg font-semibold"` → `<Typography variant="title-md">`
- `className="text-sm text-gray-500"` → `<Typography variant="body-sm" className="text-gray-500">`

---

### 4. Hardcoded Colors
**Issue**: Direct color values instead of CSS variables

**Hex Colors Found**:
- `CreateTenantListingStep1.jsx` (Lines 36-74): Flag SVG colors
- `CreateTenantListingStep2.jsx` (Line 211): `color: '#000'`

**Direct Tailwind Colors**:
- `QualityIndicator.jsx`: `text-green-500`, `text-blue-500`, `text-yellow-500`, `text-red-500`
- Should use: `var(--color-success)`, `var(--color-info)`, `var(--color-warning)`, `var(--color-danger)`

**RGBA Values**:
- `HomesPageDiscover.jsx`: `rgba(0,0,0,0.1)`
- Should use: CSS variable with opacity

---

### 5. Language & Copy Issues
**Issue**: English text in Swedish application

**Critical File**:
- `src/components/ui/Card/QualityIndicator.jsx`:
  - Contains: "Application Quality", "Employment Details", "References"
  - Should be: "Ansökningskvalitet", "Anställningsuppgifter", "Referenser"

**Missing Translations**:
- Many prototype files have hardcoded strings
- Should use translation system: `t('key.path')`

---

## 📋 Action Items

### Immediate Fixes (High Priority)

1. **Icon Library Standardization**
   ```bash
   # If choosing Lucide React:
   npm uninstall @heroicons/react
   # Update all imports from @heroicons/react to lucide-react
   
   # If choosing Heroicons:
   npm uninstall lucide-react
   # Update 5 files using lucide-react to use @heroicons/react
   ```

2. **Update QDS_COMPONENT_RULES.md**
   ```jsx
   // Add to rules:
   import { Home, Users, Calendar } from 'lucide-react'; // ✅ CORRECT
   import { HomeIcon } from '@heroicons/react/24/outline'; // ❌ WRONG
   ```

3. **Fix QualityIndicator.jsx**
   - Replace all `<h2>` with `<Typography variant="title-md">`
   - Replace all `<p>` with `<Typography variant="body-md">`
   - Replace color classes with CSS variables

### Medium Priority

4. **Create Tailwind Abstraction Layer**
   ```jsx
   // Instead of:
   <div className="px-4 py-2 bg-gray-50 rounded-lg">
   
   // Use:
   <Box padding="md" variant="surface" rounded="lg">
   ```

5. **Implement Translation Keys**
   - Add missing keys to `src/translations/sv.js`
   - Replace hardcoded strings with `t()` function calls

### Low Priority

6. **Clean Up SVG Flags**
   - Consider using react-country-flag library
   - Or create Flag component with proper theming

7. **Document Color Variables**
   - Add all missing color variables to CSS
   - Create color usage guidelines

---

## 🔧 Automation Scripts Needed

### 1. Icon Migration Script
```javascript
// scripts/migrate-icons.js
const files = glob('src/**/*.{jsx,tsx}');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Replace @heroicons/react with lucide-react
  content = content.replace(/@heroicons\/react/g, 'lucide-react');
  // Update icon names...
  fs.writeFileSync(file, content);
});
```

### 2. Color Variable Checker
```javascript
// scripts/check-colors.js
const violations = [];
const colorPattern = /(#[0-9a-fA-F]{6}|rgb\(|text-(red|blue|green|yellow)-)/g;
// Scan and report...
```

### 3. Typography Enforcer
```javascript
// scripts/enforce-typography.js
const htmlTags = /<(h[1-6]|p|span)[\s>]/g;
// Find and report violations...
```

---

## 📊 Summary Statistics

| Issue Type | Count | Severity |
|------------|-------|----------|
| Icon Library Mix | 5 files | High |
| Direct Tailwind | 20+ files | Medium |
| Typography | 10+ instances | Medium |
| Hardcoded Colors | 15+ instances | Medium |
| Missing Translations | 30+ strings | High |
| Direct Radix Usage | 0 | ✅ OK |

---

## ✅ Next Steps

1. **Decision Needed**: Heroicons or Lucide React?
2. **Run automation scripts** to fix bulk issues
3. **Manual review** of critical files
4. **Update documentation** with chosen standards
5. **Add pre-commit hooks** to prevent future violations
6. **Train team** on QDS usage

---

## 🎯 Goal State

- ✅ Single icon library (Lucide React)
- ✅ All text using Typography component
- ✅ All colors using CSS variables
- ✅ All UI using QDS components
- ✅ All copy using translation system
- ✅ Consistent Swedish terminology
- ✅ No inline Tailwind (only QDS classes)