# 🏡 Complete Qasa <3 Lovable Usage Guide

## 🎯 Why This Project Exists

**Problem**: Creating Qasa prototypes was slow, inconsistent, and required technical skills.

**Solution**: A unified system where anyone can create professional, on-brand Qasa prototypes in minutes using:
- **Lovable AI** for rapid prototyping
- **QDS Components** for consistency  
- **Real Swedish Content** for authenticity
- **Variant System** for A/B testing

**Result**: Faster ideation, better stakeholder communication, and consistent design quality.

---

## 👨‍💻 About the Author

**Created by**: Daniel Lauding  
**Role**: Senior Product Designer & Prototyping Specialist  
**Company**: Instinctly AB  
**Date**: July 2025
**Contact**: daniel@lauding.se

**Background**: 
- 15+ years in product design and prototyping
- Expert in design systems and component libraries
- Passionate about making design tools accessible to everyone
- Previously worked at Spotify and other tech companies

**Why I Built This**:
As a designer at Qasa, I was frustrated by how long it took to create prototypes and how inconsistent they were. I wanted to build a system that would:
- Make prototyping accessible to everyone (designers, PMs, developers)
- Ensure consistent Qasa branding
- Speed up the ideation and feedback process
- Create a foundation for future design work

**Current Status**: 
This is an active project that I'm continuously improving based on team feedback and usage patterns. The goal is to make it the go-to tool for all Qasa prototyping needs.

---

## 🚀 Quick Start (2 minutes)

### Option 1: Use Lovable (Recommended for Everyone)

**🔗 Access**: [Lovable.dev](https://lovable.dev)

**Step 1**: Open Lovable
**Step 2**: Start with "Qasa" templates or describe what you want
**Step 3**: Refine with specific prompts
**Step 4**: Export or share your prototype

### Option 2: Use Local Development (For Technical Users)

```bash
# Clone the repository
git clone https://github.com/daniellauding/qasa-lovable.git
cd match-prototyping

# Install dependencies
npm install

# Start development server
npm run dev
# Open: http://localhost:3000

# Start Storybook (component library)
npm run storybook
# Open: http://localhost:6006
```

---

## 💬 Lovable Usage Guide

### 🎨 For Designers

#### Getting Started
1. **Open**: [https://qasa.lovable.app/](https://qasa.lovable.app/) - Press "Remix with Lovable" in bottom right
2. **Choose**: "Start with Qasa template" or Choose a page from Lovables page viewer
3. **Describe**: What you want to build in plain English
4. **Refine**: Use specific prompts to improve the design

#### Magic Prompts for Designers
```
"Create a Qasa property listing page with:
- Hero section: 'Hitta ditt nästa hem' 
- 3 property cards with realistic Swedish apartments
- Filter sidebar with Stockholm areas
- Apply buttons in Qasa pink (#ff99c2)
- Mobile-responsive design"
```

```
"Design a tenant application flow with:
- 5-step progress indicator
- Swedish form labels
- Trust indicators (ID-verifierad)
- Success page with next steps
- Qasa branding throughout"
```

#### How to Modify Pages in Lovable
1. **Click "Edit"** on any page
2. **Use prompts** like:
   - "Change the hero text to Swedish"
   - "Add more property cards"
   - "Make the buttons pink"
   - "Add a filter section"
3. **Save changes** and continue iterating

#### Sharing & Collaboration
- **Share Link**: Copy the URL from Lovable
- **Export**: Download as image or code
- **Remix**: Use "Remix this design" to create variations
- **Collaborate**: Invite team members to edit

### 📝 For Copywriters

#### Content Guidelines
- **Language**: Always use Swedish for Swedish market
- **Tone**: Friendly neighbor, not corporate
- **Style**: Use "du" (you) not formal Swedish
- **Trust**: Include verification badges and safety messages

#### Copy Templates
```javascript
// Property Titles
"Ljus 2:a i Vasastan" // Light 2-room in Vasastan
"Charmig etta på Södermalm" // Charming studio in Södermalm
"Exklusiv 3:a på Östermalm" // Exclusive 3-room in Östermalm

// CTAs
"Ansök nu" // Apply now
"Skapa profil" // Create profile
"Visa mer" // Show more
"Kontakta hyresvärd" // Contact landlord

// Trust Messages
"ID-verifierad hyresvärd" // ID-verified landlord
"Trygg bostadssökning" // Safe housing search
"Schyssta villkor" // Fair conditions
```

#### Prompting for Copy
```
"Write Swedish copy for a Qasa landing page that:
- Explains how Qasa works for tenants
- Emphasizes safety and trust
- Uses friendly, encouraging tone
- Includes specific benefits
- Ends with clear call-to-action"
```

### 🔧 For Technical Users

#### Local Development Setup

**Prerequisites**:
- Node.js (v18+) - [Download](https://nodejs.org/)
- Git - [Download](https://git-scm.com/)
- Code editor (VS Code recommended) - [Download](https://code.visualstudio.com/)

**Mac Setup**:
```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node

# Install Git
brew install git
```

**Windows Setup**:
```bash
# Download and install Node.js from https://nodejs.org/
# Download and install Git from https://git-scm.com/
```

**Project Setup**:
```bash
# Clone repository
git clone https://github.com/daniellauding/qasa-lovable.git
cd match-prototyping

# Install dependencies
npm install

# Start development
npm run dev
```

#### Component Development

**View Components**: `http://localhost:6006`
**Edit Components**: `src/components/ui/`
**Add New Components**: Follow QDS component rules

**Example Component Structure**:
```
src/components/ui/NewComponent/
├── NewComponent.jsx
├── NewComponent.styles.js
├── index.js
└── README.md
```

#### Variant System

**Create New Variant**:
1. Add to `src/utils/variants.js`
2. Create component in `variants/` folder
3. Test with `?variant=name`

**Example**:
```javascript
// src/utils/variants.js
'property-listing': {
  name: 'Property Listing',
  variants: [
    {
      id: 'default',
      name: 'Default',
      component: () => import('../prototypes/property/PropertyListing')
    },
    {
      id: 'enhanced',
      name: 'Enhanced',
      component: () => import('../prototypes/property/variants/PropertyListingEnhanced')
    }
  ]
}
```

### 🎯 For Non-Technical Users

#### Using Lovable (No Code Required)

**Step 1**: Open [https://qasa.lovable.app/](https://qasa.lovable.app/) - Press "Remix with Lovable" in bottom right
**Step 2**: Describe what you want to build
**Step 3**: Refine with prompts
**Step 4**: Share or export

**Example Workflow**:
1. "Create a Qasa homepage"
2. "Add Swedish text"
3. "Make it more pink"
4. "Add property cards"
5. "Make it mobile-friendly"

#### Tools You Don't Need to Install
- ❌ Terminal/Command Line
- ❌ Node.js
- ❌ Git
- ❌ Code Editor

#### What You Can Do
- ✅ Create prototypes
- ✅ Share with stakeholders
- ✅ Export images
- ✅ Collaborate with team
- ✅ Test different ideas

---

## 🎨 Design Workflow Integration

### Ideation Phase
1. **Brainstorm** with Lovable prompts
2. **Create variations** quickly
3. **Share concepts** with team
4. **Get feedback** early

### Workshop Integration
1. **Live prototyping** during workshops
2. **Real-time iteration** based on feedback
3. **Multiple concepts** for comparison
4. **Stakeholder buy-in** with realistic prototypes

### Design Reviews
1. **Present prototypes** from Lovable
2. **Show variants** for comparison
3. **Demonstrate interactions**
4. **Collect feedback** efficiently

---

## 🔧 Technical Deep Dive

### Project Structure
```
match-prototyping/
├── src/
│   ├── components/ui/          # QDS Components
│   ├── prototypes/             # Prototype flows
│   ├── utils/variants.js       # Variant system
│   └── contexts/               # React contexts
├── .storybook/                 # Storybook config
├── public/                     # Static assets
└── package.json               # Dependencies
```

### Key Technologies
- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Storybook** - Component library
- **React Router** - Navigation

### Development Commands
```bash
npm run dev          # Start development server
npm run storybook    # Start Storybook
npm run build        # Build for production
npm run preview      # Preview production build
```

### Adding New Features
1. **Create component** in `src/components/ui/`
2. **Add Storybook story** in `src/stories/`
3. **Create prototype** in `src/prototypes/`
4. **Add variant** in `src/utils/variants.js`

---

## 📚 Learning Resources

### For Beginners
- **Lovable Tutorial**: https://docs.lovable.dev/introduction/welcome
- **Qasa Brand Guide**: Check internal documentation
- **Swedish Rental Terms**: See QASA_KNOWLEDGE_BASE.md

### For Developers
- **React Docs**: [react.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **Storybook**: [storybook.js.org](https://storybook.js.org)

### For Designers
- **Figma Integration**: Use html.to.design extension
- **Design Tokens**: See QDS_DESIGN_SYSTEM.md
- **Component Library**: `http://localhost:6006`

---

## 🆘 Support & Troubleshooting

### Common Issues

**Lovable not working**:
- Check internet connection
- Try refreshing the page
- Clear browser cache

**Page appears white/blank**:
- Do a hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check if the page is still loading
- Try opening in a new tab/window

**Preview not updating**:
- Sometimes Lovable opens a new preview while working
- Refresh the preview window/tab
- Check if changes are saved before refreshing

**Component not loading**:
- Verify the component exists in the codebase
- Check browser console for errors
- Restart the development server if needed

**Local development issues**:
```bash
# Clear dependencies
rm -rf node_modules package-lock.json
npm install

# Check Node.js version
node --version  # Should be 18+

# Restart development server
npm run dev
```

**Component not showing**:
- Check Storybook: `http://localhost:6006`
- Verify import path
- Check console for errors

### Getting Help

**For Lovable Issues**:
- Check https://docs.lovable.dev/introduction/welcome
- Contact Lovable support

**For Technical Issues**:
- Check project README.md
- Review component documentation
- Ask in Slack

**For Design Questions**:
- Check QDS_DESIGN_SYSTEM.md
- Review existing prototypes
- Consult design team

---

## 🎯 Success Metrics

### Before This System
- ❌ 2+ hours to create prototype
- ❌ Inconsistent design quality
- ❌ Required technical skills
- ❌ Hard to iterate quickly

### After This System
- ✅ 5 minutes to create prototype
- ✅ Consistent Qasa branding
- ✅ Anyone can use it
- ✅ Fast iteration and feedback

---

## 🚀 Next Steps

### Immediate (This Week)
1. **Try Lovable** with the prompts above
2. **Create your first prototype**
3. **Share with team** for feedback
4. **Explore existing prototypes**

### Short Term (Next Month)
1. **Build component library** further
2. **Add more templates**
3. **Integrate with ChatGPT** for content
4. **Create training materials**

### Long Term (Next Quarter)
1. **AI-powered prototyping**
2. **Advanced variant system**
3. **Production integration**
4. **Team adoption**

---

## 💡 Pro Tips

### For Everyone
- **Start simple** - Don't overcomplicate
- **Use Swedish content** - Makes it feel authentic
- **Test on mobile** - Most users are on phones
- **Iterate quickly** - Don't perfect too early

### For Designers
- **Use Qasa pink** (#ff99c2) for main actions
- **Include trust indicators** (verified badges)
- **Keep it friendly** - Not corporate
- **Test with real users** early

### For Developers
- **Follow QDS rules** - Don't create custom components
- **Use design tokens** - Not hardcoded values
- **Test variants** - A/B test everything
- **Document changes** - Help the team

---

## 🎉 You're Ready!

**Start creating amazing Qasa prototypes today!**

1. **Open Lovable**: [https://qasa.lovable.app/](https://qasa.lovable.app/) - Press "Remix with Lovable" in bottom right
2. **Try a prompt**: "Create a Qasa property listing page"
3. **Share your work**: Get feedback from the team
4. **Keep iterating**: Improve based on feedback

**Remember**: The goal is to make prototyping so easy that anyone can create professional Qasa designs in minutes! 🏡💗

---

*Need help? Check the troubleshooting section above or ask in the team chat.*
