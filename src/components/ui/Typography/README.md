# Typography Component

The Typography component provides a consistent typographic system for the application using Qasa's custom fonts.

## Usage

```jsx
import Typography from './Typography';

// Display text
<Typography variant="display-lg">Large Display Text</Typography>

// Title text
<Typography variant="title-md" color="primary">Section Title</Typography>

// Body text
<Typography variant="body-md">Regular body text content</Typography>

// Labels
<Typography variant="label-sm" weight="medium">Form Label</Typography>

// Monospace text
<Typography variant="mono-md">Code snippet</Typography>
```

## Props

### variant
Controls the size, font family, and default weight of the text.

**Display variants** (Bold, Qasa Title font):
- `display-lg` - 60px
- `display-md` - 48px  
- `display-sm` - 36px

**Title variants** (Bold, Qasa Title font):
- `title-lg` - 36px
- `title-md` - 30px
- `title-sm` - 24px
- `title-xs` - 20px
- `title-2xs` - 16px

**Label variants** (Medium, Qasa Body font):
- `label-md` - 16px
- `label-sm` - 14px

**Body variants** (Regular, Qasa Body font):
- `body-xl` - 20px
- `body-lg` - 18px
- `body-md` - 16px
- `body-sm` - 14px

**Mono variants** (Qasa Mono font):
- `mono-md` - 16px regular
- `mono-sm` - 14px regular
- `mono-bold` - 16px bold

### color
- `default` - Dark gray text
- `secondary` - Medium gray text
- `primary` - Qasa pink text
- `white` - White text

### weight
Optional override for font weight:
- `normal`
- `medium` 
- `semibold`
- `bold`

### component
Override the HTML element used (defaults to `p` or heading element for h1-h4 variants).

## Font System

The component uses three custom font families:
- **Qasa Title** (`font-title`) - For headings and display text
- **Qasa Body** (`font-body`) - For body text and labels  
- **Qasa Mono** (`font-mono`) - For monospace text

## Legacy Support

Legacy variants are still supported for backward compatibility:
- `h1`, `h2`, `h3`, `h4` - Heading variants
- `body1`, `body2` - Body text variants
- `caption` - Small text variant 