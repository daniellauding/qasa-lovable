# 🎨 Figma Export Options Research

## Your Question: html.to.design Chrome Extension

### ✅ html.to.design Extension Assessment

**What it does:**
- Converts live HTML/CSS from browser to Figma components
- Preserves layout, typography, and basic styling
- Creates Figma frames and components automatically

**Pros:**
- ✅ Quick and easy conversion
- ✅ Preserves visual layout accurately
- ✅ Works with live Storybook components
- ✅ No code changes needed

**Cons:**
- ❌ Loses design token relationships
- ❌ May not preserve CSS variables
- ❌ Creates flat designs vs. component system
- ❌ Swedish text might need manual adjustment

**Best Use Cases:**
- Quick mockups for stakeholder presentations
- Visual documentation of component states
- Testing layouts before development

---

## 🔄 Alternative Export Methods

### 1. **Storybook-to-Figma Plugins**

**Figma Plugin: "Storybook Connect"**
- Direct integration with Storybook
- Better component mapping
- Preserves component structure
- Maintains design token relationships

**Setup:**
1. Install Figma plugin
2. Connect to your Storybook URL
3. Import components directly

### 2. **Design Tokens Approach**

**Tools:**
- **Style Dictionary** - Convert CSS variables to Figma tokens
- **Figma Tokens Studio** - Sync design tokens bidirectionally
- **Tokens Studio** - Maintain single source of truth

**Process:**
```bash
# Export CSS variables from QDS
npm run export-tokens

# Convert to Figma format
style-dictionary build --config figma.config.js

# Import to Figma via plugin
```

### 3. **Automated Screenshot Approach**

**Tools:**
- **Percy** - Visual testing with Figma export
- **Chromatic** - Storybook visual testing
- **Playwright** - Automated screenshots

**Benefits:**
- Always up-to-date
- Batch export all components
- Consistent across team

---

## 🧪 Testing html.to.design

### Test Plan
1. **Start Simple**: Export a single Button component
2. **Test Complex**: Export PropertyCard with all elements
3. **Test Layout**: Export full property listing page
4. **Evaluate Quality**: Check if design tokens are preserved

### Test Steps
```bash
# 1. Open Storybook
open http://localhost:6006/?path=/story/ui-button--variants

# 2. Install html.to.design Chrome extension

# 3. Use extension to export component

# 4. Check Figma result:
#    - Are colors correct?
#    - Is typography preserved?
#    - Are components grouped logically?
```

---

## 📊 Evaluation Matrix

| Method | Speed | Accuracy | Tokens | Components | Maintenance |
|--------|-------|----------|---------|------------|-------------|
| html.to.design | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| Storybook Plugin | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Design Tokens | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Screenshots | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐ | ⭐ | ⭐⭐⭐⭐ |

---

## 🎯 Recommended Approach

### Phase 1: Quick Win (Today)
**Use html.to.design for immediate needs**
- Test with 3 components: Button, PropertyCard, Search page
- Good for presentations and quick mockups
- No setup time required

### Phase 2: Professional Setup (Monday)
**Implement Design Tokens System**
- Export QDS CSS variables to Figma tokens
- Use Figma Tokens Studio plugin
- Maintain bidirectional sync
- Future-proof solution

### Phase 3: Automation (Future)
**Automated Pipeline**
- Storybook → Figma sync on component updates
- Automated visual testing
- Component library maintenance

---

## 🛠️ Implementation Guide

### Today: Test html.to.design

1. **Install Extension**
   ```
   Chrome Web Store → "html.to.design"
   ```

2. **Test Components**
   ```
   # Button variants
   http://localhost:6006/?path=/story/ui-button--variants
   
   # Property card  
   http://localhost:6006/?path=/story/ui-card--property-cards
   
   # Full search page
   http://localhost:6006/?path=/story/prototypes-homes-search
   ```

3. **Evaluate Results**
   - Check color accuracy (Qasa pink #f19ec1)
   - Verify typography (DiatypeRounded fonts)
   - Test Swedish characters (å, ä, ö)
   - Assess component grouping

### Monday: Design Tokens Setup

1. **Export CSS Variables**
   ```javascript
   // scripts/export-design-tokens.js
   const tokens = {
     color: {
       primary: { value: '#f19ec1' },
       secondary: { value: '#322721' }
     },
     typography: {
       fontFamily: { value: 'DiatypeRounded' }
     }
   };
   ```

2. **Figma Plugin Integration**
   - Install "Figma Tokens" plugin
   - Import token JSON file
   - Apply to Figma components

---

## ⚡ Quick Test Results

**Expected from html.to.design:**

✅ **Will work well:**
- Layout structure
- Component positioning  
- Basic styling
- Text content (Swedish included)

⚠️ **May need manual fixing:**
- CSS variable colors → hardcoded colors
- Font loading (might default to system fonts)
- Hover/interactive states
- Component variants grouping

❌ **Will definitely need work:**
- Design token relationships
- Component nesting structure
- Reusable component instances
- Theme switching capability

---

## 🎨 Alternative: Manual Component Creation

**For highest quality:**
1. Create Figma component library manually
2. Use QDS as reference (Storybook)
3. Implement proper design tokens
4. Build component variants correctly

**Time investment:** Higher initially, but better long-term

---

## 📋 Action Items

### Today (15 minutes)
- [ ] Install html.to.design extension
- [ ] Test export of Button component
- [ ] Test export of PropertyCard
- [ ] Document quality assessment

### Monday (2 hours)
- [ ] Evaluate html.to.design results
- [ ] Research Figma Tokens Studio setup
- [ ] Plan design token export system
- [ ] Create component library strategy

---

## 🎯 Success Criteria

### Minimum Viable (html.to.design)
- Components export visually correctly
- Swedish text displays properly
- Layouts are preserved
- Colors are close to QDS values

### Professional Grade (Design Tokens)
- Perfect color matching with QDS
- Typography loads correctly
- Component variants work
- Bidirectional sync established
- Team can modify in Figma or code

---

## 💡 Pro Tips

1. **Test Mobile Views**: html.to.design can export responsive breakpoints
2. **Component States**: Export different component states separately
3. **Page Layouts**: Test full page exports for layout documentation
4. **Version Control**: Export components after each major QDS update

---

**Recommendation: Start with html.to.design today for quick results, plan design tokens system for Monday for professional quality.** 🚀