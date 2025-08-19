# Qasa Language & Tone Guide

## 🎯 Voice Principles

### We are...
- **Friendly & Approachable** - Like a helpful neighbor, not a corporation
- **Trustworthy & Transparent** - Clear about terms, fees, and processes
- **Supportive & Encouraging** - Guiding users through their housing journey
- **Swedish & Inclusive** - Understanding local market while welcoming all

### We are not...
- Formal or bureaucratic
- Pushy or aggressive
- Technical without explanation
- Generic or impersonal

---

## 🗣️ Tone of Voice

### Conversational & Personal
- Use "du" (you) and "dig" (your) consistently
- Write like you're talking to a friend
- Keep sentences short and clear
- Use active voice

**Example:**
✅ "Vi hjälper dig hitta ditt nästa hem"  
❌ "Bostadssökande assisteras i processen"

### Helpful & Guiding
- Provide clear next steps
- Explain complex terms simply
- Use examples and placeholders
- Anticipate user questions

**Example:**
✅ "Exempel: 2 sovrum, balkong, nära tunnelbanan"  
❌ "Ange önskemål"

### Trustworthy & Safe
- Emphasize verification and security
- Use "schysst" (fair/decent) for trust
- Be transparent about the process
- Highlight safety features

**Example:**
✅ "Alla hyresvärdar är ID-verifierade för din trygghet"  
❌ "Hyresvärdar finns tillgängliga"

---

## 📝 Key Terminology

### Housing Terms

| Swedish | English | Usage Context |
|---------|---------|---------------|
| **Hyresgäst** | Tenant | Person looking for housing |
| **Hyresvärd** | Landlord | Property owner/manager |
| **Profilannons** | Profile listing | Tenant's searchable profile (Qasa term) |
| **Bostadsannons** | Property listing | Available rental property |
| **Förstahandskontrakt** | First-hand contract | Direct rental from owner |
| **Andrahandskontrakt** | Second-hand contract | Subletting arrangement |
| **Hyresavtal** | Rental agreement | Legal contract |
| **Schysst hyresavtal** | Fair rental agreement | Qasa's promise of fair terms |
| **Inflyttningsdatum** | Move-in date | When tenancy begins |
| **Maxhyra** | Maximum rent | Budget limit |
| **Sökområde** | Search area | Geographic preference |

### Trust & Quality Indicators

| Term | Meaning | When to Use |
|------|---------|-------------|
| **ID-verifierad** | ID-verified | Emphasizing safety |
| **Trygg** | Safe/Secure | General safety context |
| **Schysst** | Fair/Decent | Qasa's core value |
| **Pålitlig** | Reliable | User trustworthiness |
| **Verifierad** | Verified | Confirmed information |

### Platform Features

| Feature | Swedish | Description |
|---------|---------|-------------|
| **Qasa Premium** | Premium membership | Enhanced features |
| **Matchning** | Matching | Tenant-property pairing |
| **Snabbansökan** | Quick application | Streamlined apply process |
| **Profilstyrka** | Profile strength | Completion indicator |

---

## ✍️ Copy Patterns

### Buttons

**Primary Actions:**
- "Nästa" → Next step
- "Skapa profil" → Create profile  
- "Skicka ansökan" → Send application
- "Visa mer" → Show more

**Secondary Actions:**
- "Tillbaka" → Go back
- "Avbryt" → Cancel
- "Hoppa över" → Skip
- "Rensa filter" → Clear filters

**Premium CTAs:**
- "Bli Premium" → Go Premium
- "Uppgradera nu" → Upgrade now
- "Prova gratis" → Try free

### Form Fields

**Labels:**
```
Förnamn (First name)
Efternamn (Last name)
E-postadress (Email)
Telefonnummer (Phone)
Personnummer (valfritt) (Personal ID - optional)
```

**Placeholders:**
```
"Exempel: Anna Andersson"
"Exempel: anna@exempel.se"
"Exempel: 070-123 45 67"
"Beskriv dig själv med några meningar..."
```

**Helper Text:**
```
"Vi använder detta för att verifiera din identitet"
"Du kan ändra detta senare i dina inställningar"
"Minst 8 tecken, en stor bokstav och en siffra"
```

### Validation Messages

**Error:**
- "Detta fält är obligatoriskt"
- "Ogiltig e-postadress"
- "Lösenordet är för kort"
- "Du måste välja minst ett alternativ"

**Success:**
- "Sparad!" 
- "Profil uppdaterad"
- "Ansökan skickad"
- "Verifiering slutförd"

**Information:**
- "Laddar..."
- "Hämtar information..."
- "Uppdaterar..."

### Headings & Descriptions

**Section Headers:**
```
"Om dig" (About you)
"Dina preferenser" (Your preferences)
"Kontaktuppgifter" (Contact details)
"Verifiering" (Verification)
```

**Benefit Statements:**
```
"Hitta ditt nästa hem snabbare"
"Få svar inom 24 timmar"
"Trygg bostadssökning med ID-verifiering"
"Personlig hjälp genom hela processen"
```

---

## 💬 Conversation Examples

### Welcome Messages
```
"Välkommen till Qasa! 👋
Låt oss hjälpa dig hitta ditt nästa hem."

"Hej [Name]!
Redo att börja din bostadssökning?"
```

### Encouragement
```
"Bra jobbat! Din profil är nu 80% klar."
"Nästan klar! Bara några steg till."
"Perfekt! Nu kan hyresvärdar hitta dig."
```

### Help & Support
```
"Behöver du hjälp? Vi finns här för dig."
"Kontakta oss om du har frågor."
"Vår support svarar vanligtvis inom 2 timmar."
```

### Error Recovery
```
"Något gick fel, men oroa dig inte.
Försök igen eller kontakta support."

"Vi kunde inte spara dina ändringar.
Kontrollera din internetanslutning och försök igen."
```

---

## 🌍 Localization Notes

### Swedish Market Specifics
- Use Swedish rental terminology correctly
- Understand första/andrahand distinction
- Reference local areas and transport
- Use Swedish date format (YYYY-MM-DD)
- Include Swedish phone format

### Cultural Sensitivity
- Respect Swedish preference for directness
- Avoid excessive marketing language
- Value transparency and fairness
- Emphasize security and trust
- Keep professional but friendly distance

### Multi-language Consistency
When translating:
1. Maintain friendly tone across languages
2. Adapt examples to local context
3. Keep technical terms consistent
4. Preserve Qasa brand voice
5. Test with native speakers

### Mandatory Language Coverage (EN/SV/FI/NO)

- All generated translation blocks must include the same keys for: **English (`en`)**, **Swedish (`sv`)**, **Finnish (`fi`)**, and **Norwegian (`no`)**.
- Reuse existing key paths when possible (e.g., `landing.hero.title`). Do not invent new top-level namespaces unless approved.
- If adding a key, add it to all four language files in one change.
- Example structure for a new microcopy key:

```js
// en.js
export const en = {
  landing: { cta: { explore: 'Explore homes' } }
}

// sv.js
export const sv = {
  landing: { cta: { explore: 'Utforska bostäder' } }
}

// fi.js
export const fi = {
  landing: { cta: { explore: 'Tutustu koteihin' } }
}

// no.js
export const no = {
  landing: { cta: { explore: 'Utforsk boliger' } }
}
```

### URL and Local Storage Persistence

- The language selector must sync via `?lang=xx` in the URL and persist to `localStorage` key `app_lang`. Components must read from context; stories use the Storybook toolbar.

---

## 📋 Content Templates

### Property Description
```
[Room count] rum och kök, [Size] m²
[Area], [City]
[Rent] kr/mån

✓ [Feature 1, e.g., "Balkong"]
✓ [Feature 2, e.g., "Diskmaskin"]
✓ [Feature 3, e.g., "Nära tunnelbana"]

Inflyttning: [Date]
Kontraktslängd: [Duration]
```

### Tenant Introduction
```
Hej! Jag heter [Name] och söker [housing type].

Om mig:
[Personal description, 2-3 sentences]

Jag söker:
- [Preference 1]
- [Preference 2]
- [Preference 3]

Budget: upp till [amount] kr/mån
Inflyttning: [timeframe]
```

### Success Message
```
🎉 Grattis!

[Main message, e.g., "Din ansökan har skickats"]

Vad händer nu?
1. [Next step 1]
2. [Next step 2]
3. [Next step 3]

[CTA button]
```

---

## 🚀 Quick Reference

### Power Words
- **Trygg** (Safe)
- **Schysst** (Fair)
- **Enkel** (Simple)
- **Snabb** (Fast)
- **Personlig** (Personal)
- **Verifierad** (Verified)

### Avoid These
- Bureaucratic language
- Legal jargon without explanation
- Generic corporate speak
- Aggressive sales language
- Technical terms without context

### Always Include
- Clear next steps
- Concrete examples
- Reassurance about safety
- Options to get help
- Progress indicators

---

## 🤖 AI/Lovable Instructions

When generating Qasa content:

1. **Voice:** Friendly Swedish neighbor helping you find housing
2. **Tone:** Warm, trustworthy, encouraging
3. **Language:** Simple Swedish/English, avoid jargon
4. **Structure:** Short sentences, clear CTAs, helpful examples
5. **Values:** Emphasize trust, fairness, support
6. **Localization:** Use Swedish housing terms correctly
7. **Personality:** Professional but approachable

### Example Prompt for AI:
"Write as Qasa - a friendly, trustworthy Swedish housing platform that helps people find homes. Use simple, encouraging language with Swedish housing terms. Always emphasize safety (trygg), fairness (schysst), and support. Include concrete examples and clear next steps."