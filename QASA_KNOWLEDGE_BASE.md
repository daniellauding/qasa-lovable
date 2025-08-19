# Qasa Knowledge Base

## 📝 How to Add Content
**You can paste any Qasa-related content here - brand guidelines, features, help articles, etc. Just paste it below and I'll organize it.**

---

## 🏢 About Qasa

### Company Mission
[ADD YOUR CONTENT HERE - Mission statement, vision, values]

### Business Model
[ADD YOUR CONTENT HERE - How Qasa makes money, revenue streams, pricing]

---

## 🎯 Core Features

### For Tenants
[ADD YOUR CONTENT HERE - Tenant features, benefits, how it works]

### For Landlords
[ADD YOUR CONTENT HERE - Landlord features, benefits, how it works]

### Premium Features
[ADD YOUR CONTENT HERE - What's included in premium, pricing, benefits]

---

## 🔄 User Journeys

### Tenant Journey
[ADD YOUR CONTENT HERE - Step by step tenant flow]

### Landlord Journey
[ADD YOUR CONTENT HERE - Step by step landlord flow]

---

## 📚 Help & Support Content

### Common Questions
[ADD YOUR CONTENT HERE - FAQs, help articles, support documentation]

### How It Works
[ADD YOUR CONTENT HERE - Detailed explanations of Qasa processes]

---

## 🎨 Brand Guidelines

### Voice & Tone
[ADD YOUR CONTENT HERE - Brand voice, tone guidelines, communication style]

### Visual Identity
[ADD YOUR CONTENT HERE - Colors, typography, logo usage, imagery style]

### Marketing Messages
[ADD YOUR CONTENT HERE - Key messages, value propositions, taglines]

---

## 🌍 Market & Competition

### Swedish Rental Market
[ADD YOUR CONTENT HERE - Market insights, regulations, terminology]

### Competitive Positioning
[ADD YOUR CONTENT HERE - How Qasa differs, unique value props]

---

## 📖 Content Examples

### Property Descriptions
[ADD YOUR CONTENT HERE - Real examples from production]

### Tenant Profiles
[ADD YOUR CONTENT HERE - Real examples from production]

### Success Stories
[ADD YOUR CONTENT HERE - Case studies, testimonials]

---

## 🔗 ChatGPT Integration

### Qasa Translate GPT
- **URL**: https://chatgpt.com/g/g-688c89dc798c8191a4f6f2925be22853-qasa-translate-en-sv-fi-nb
- **Purpose**: Translation and localization for EN/SV/FI/NB
- **Integration Plan**: Use for generating authentic multi-language content

### Integration Strategy
1. **API Connection**: Connect to ChatGPT for real-time translations
2. **Content Generation**: Use for creating localized copy
3. **Tone Consistency**: Ensure Qasa voice across all languages
4. **Terminology**: Maintain consistent rental market terms

---

## 📋 Extracted Patterns from Codebase

### Common Swedish Terms
- **Hyresgäst** - Tenant
- **Hyresvärd** - Landlord  
- **Profilannons** - Profile listing
- **Bostadsannons** - Property listing
- **Schysst hyresavtal** - Fair rental agreement
- **ID-verifierad** - ID-verified
- **Förstahandskontrakt** - First-hand contract
- **Andrahandskontrakt** - Second-hand contract

### Trust Indicators
- "Alla hyresvärdar är ID-verifierade"
- "Trygg bostadssökning"
- "Schyssta villkor"
- "Personlig support"

### CTAs
- "Nästa" - Next
- "Skapa profil" - Create profile
- "Visa mer" - Show more
- "Ansök nu" - Apply now
- "Bli Premium" - Go Premium

### Value Props
- "Hitta ditt nästa hem snabbare"
- "Få svar inom 24 timmar"
- "Vi finns här för dig"
- "Från början till utflytt"

---

## 🚀 Implementation Notes

### For Lovable Tool
1. Parse this knowledge base for context
2. Use ChatGPT GPT for translations
3. Apply Qasa tone consistently
4. Generate realistic Swedish content
5. Follow market terminology

### Content Generation Rules
- Always use Swedish rental terminology correctly
- Maintain friendly but professional tone
- Include trust indicators in messaging
- Provide concrete examples and next steps
- Emphasize safety and fairness

---

## 📊 Metrics & Success Indicators

[ADD YOUR CONTENT HERE - KPIs, success metrics, conversion goals]

---

## 🔄 Updates Log

- **[Date]**: Initial knowledge base created
- **[Your additions]**: [Description of what you added]

---

**Note**: Please paste any Qasa-related content, documentation, or brand materials below this line, and I'll organize it into the appropriate sections above.

---

## YOUR CONTENT DUMP AREA
[PASTE YOUR QASA CONTENT HERE]

---

## UI Composition Cheatsheet (for Lovable & Editors)

- Do not create ad-hoc section components (e.g., `WhatIsQasa`, `HowItWorksSection`, `TrustSafetySection`). Compose pages from approved QDS components only.
- Use these building blocks: `Typography`, `Button`, `Card`, `StatsStrip`, `FeatureCard`, `RichPromoCard`, `FAQLinkList`, `TestimonialCarousel`, `Carousel`, `CityCard`.

### Recipes

- “What is Qasa?”
  - Title: `Typography` `display-sm`
  - Subtitle: `Typography` `title-xl`
  - Description: `Typography` `body-md` `color="secondary"`
  - Stats grid (x3): value `title-lg` + hint `body-sm`

- “How it works”
  - Two pills: `Button` inside rounded container — active `variant="primary"`, inactive `variant="transparent"`
  - Four step boxes: bordered `div` with icon circle, `title-lg`, and `body-sm`

- Trust & Safety grid
  - 4 items: icon container + `title-lg` + `body-sm`

### Color & Contrast

- On dark surfaces (e.g., `bg-[var(--color-brown)]`) or image overlays, all text must be white via `Typography color="white"`. Subtext can use `opacity-80/85`.
- Icons in primary buttons use `text-[var(--color-text-on-primary)]`. Icons on dark non-primary surfaces use `text-white`.
- Never use Tailwind palette or hex for colors; always use tokens.

### Title Hierarchy

- Page hero: `display-lg`
- Section header: `display-sm`
- Card title: `title-lg`
- Paragraph: `body-md` (secondary copy uses `color="secondary"`)
- Small: `label-sm`