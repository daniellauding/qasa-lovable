# 🔍 Unused Components Analysis & Recommendations

## 📊 Analysis Summary
Based on the file usage analysis, here are the components that appear unused and recommendations for each:

---

## 🟢 **KEEP - These are actually used (False Positives)**

### **Typography Component** (`src/components/ui/Typography/Typography.jsx`)
- **Status**: ✅ **ACTUALLY USED** - False positive from analysis
- **Used in**: Multiple prototypes and templates
- **Evidence**: Found in 10+ files including:
  - `src/prototypes/landing/Landing.jsx`
  - `src/prototypes/templates/BlankTemplate.jsx`
  - `src/prototypes/auth/login/components/`
  - `src/prototypes/tenants/profile/TenantProfilePage.jsx`
- **Recommendation**: **KEEP** - This is a core component used throughout the project

### **CreateTenantProfileCard** (`src/components/ui/Card/CreateTenantProfileCard.jsx`)
- **Status**: ✅ **ACTUALLY USED** - False positive from analysis
- **Used in**: Landlord find-tenant flows
- **Evidence**: Found in:
  - `src/prototypes/landlords/find-tenant/FindTenant.jsx`
  - `src/prototypes/landlords/find-tenant/variants/FindTenantWithFilters.jsx`
- **Recommendation**: **KEEP** - Important for landlord flows

---

## 🟡 **REVIEW - Components that might be needed**

### **PropertyDetail Component** (`src/components/PropertyDetail.jsx`)
- **Status**: 🔍 **NEEDS REVIEW**
- **Purpose**: Detailed property view with image gallery and contact form
- **Features**:
  - Image gallery integration
  - Property information display
  - Contact modal for landlords
  - Responsive layout
- **Potential Use Cases**:
  - Property detail pages
  - Tenant application flows
  - Property preview modals
- **Recommendation**: **KEEP FOR FUTURE** - This is a well-built component that will likely be needed for property detail pages

### **Header Components** (`src/components/Header/Header.jsx`)
- **Status**: 🔍 **NEEDS REVIEW**
- **Purpose**: Main navigation header
- **Recommendation**: **KEEP** - Essential for any multi-page prototype

### **Accordion Component** (`src/components/ui/Accordion/Accordion.jsx`)
- **Status**: 🔍 **NEEDS REVIEW**
- **Purpose**: Collapsible content sections
- **Potential Use Cases**:
  - FAQ sections
  - Property details expansion
  - Form sections
- **Recommendation**: **KEEP** - Common UI pattern that will be useful

---

## 🟠 **CONSIDER REMOVING - Likely unused**

### **Storybook Story Files**
- **Status**: 🟠 **SAFE TO REMOVE** (if not needed for documentation)
- **Files**: All `.stories.jsx` files showing as unused
- **Recommendation**: **KEEP FOR DOCUMENTATION** - These are important for component documentation, not runtime usage

### **Font Files - Duplicate Formats**
- **Status**: 🟠 **OPTIMIZE**
- **Files**: Multiple `.otf` files when `.woff2` exists
- **Recommendation**: **REMOVE .otf FILES** - Keep only web-optimized formats:
  - ✅ Keep: `.woff2`, `.woff`
  - ❌ Remove: `.otf` (duplicate formats)

---

## 🔴 **REMOVE - Definitely unused**

### **Storybook Configuration Files**
- **Status**: 🔴 **SAFE TO REMOVE**
- **Files**:
  - `.storybook/vitest.setup.js` - Not needed for basic Storybook
  - `.storybook/manager.js` - Default configuration is sufficient

### **CSS Files in Stories Directory**
- **Status**: 🔴 **SAFE TO REMOVE**
- **Files**:
  - `src/stories/page.css`
  - `src/stories/header.css`
  - `src/stories/button.css`
- **Reason**: These appear to be leftover from initial setup

---

## 📋 **Action Plan**

### **Immediate Actions (Safe to do now)**

1. **Remove duplicate font files**:
   ```bash
   # Remove .otf files (keep .woff2 and .woff)
   rm public/fonts/Diatype\ Rounded/*.otf
   rm public/fonts/Diatype\ Rounded\ Semi-Mono/*.otf
   ```

2. **Remove unused CSS files**:
   ```bash
   rm src/stories/page.css
   rm src/stories/header.css
   rm src/stories/button.css
   ```

3. **Remove unused Storybook config**:
   ```bash
   rm .storybook/vitest.setup.js
   rm .storybook/manager.js
   ```

### **Review Required (Don't remove yet)**

1. **PropertyDetail component** - Review if needed for future property detail pages
2. **Header components** - Verify if they're used in any flows
3. **Accordion component** - Check if needed for FAQ or expandable content

### **Keep (False Positives)**

1. **Typography component** - Actually used throughout the project
2. **CreateTenantProfileCard** - Used in landlord flows
3. **All Storybook story files** - Important for documentation

---

## 🎯 **Recommendations Summary**

### **✅ Keep These:**
- All Typography components (false positive)
- CreateTenantProfileCard (false positive)
- PropertyDetail component (likely needed)
- Header components (essential)
- Accordion component (useful pattern)
- All Storybook stories (documentation)

### **🗑️ Remove These:**
- Duplicate `.otf` font files
- Unused CSS files in stories directory
- Unused Storybook config files

### **🔍 Review These:**
- Any components not listed above that show as unused

---

## 📈 **Expected Impact**

After cleanup:
- **Files removed**: ~15-20 files
- **Bundle size reduction**: Minimal (mostly font duplicates)
- **Maintenance improvement**: Cleaner codebase
- **Documentation**: Preserved (keeping Storybook stories)

---

## 🔄 **Next Steps**

1. **Run the cleanup commands** above
2. **Re-run analysis**: `npm run analyze`
3. **Review remaining unused files** with the team
4. **Document any components** that are intentionally kept for future use

---

*Note: This analysis is based on static import detection. Some components might be dynamically imported or used in ways not detected by the analysis script.*
