# RadioGroup Components

This folder contains the RadioGroup component organized for better maintainability.

## Structure

```
RadioGroup/
├── index.js         # Main export
├── RadioGroup.jsx   # Main component
├── RadioItem.jsx    # Individual radio item
├── styles.js        # Styling utilities
└── README.md        # This file
```

## Components

### RadioGroup.jsx
Main component that handles:
- Label rendering
- Options mapping
- Radix UI Root wrapper

### RadioItem.jsx  
Individual radio button component that handles:
- Both 'default' and 'card' variants
- Option rendering with descriptions
- Radio indicator positioning

### styles.js
Centralized styling utilities:
- `getRadioStyles()` - Radio button styling
- `getItemStyles()` - Item container styling

## Usage

```jsx
import RadioGroup from '../ui/RadioGroup';

<RadioGroup
  label="Choose property type"
  options={[
    { value: 'house', label: 'House' },
    { value: 'apartment', label: 'Apartment', description: 'Multi-unit building' }
  ]}
  variant="default" // or "card"
/>
```

## Benefits

- **Cleaner main component**: Focused on composition
- **Reusable RadioItem**: Easy to modify individual items
- **Centralized styles**: Easy to update styling
- **Better testing**: Can test components in isolation 