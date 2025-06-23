# Button Components

This folder contains the Button component organized for better maintainability and future extensibility.

## Structure

```
Button/
├── index.js           # Main export
├── Button.jsx         # Main component
├── ButtonContent.jsx  # Content rendering (icons, loading)
├── styles.js          # Styling utilities
└── README.md         # This file
```

## Components

### Button.jsx
Main component that handles:
- Props validation and defaults
- Disabled state logic
- Button element rendering

### ButtonContent.jsx  
Content rendering component that handles:
- Loading state (shows LoadingDots)
- Icon positioning (left/right)
- Text truncation
- Icon spacing

### styles.js
Centralized styling utilities:
- `sizeClasses` - Button size variants
- `variantClasses` - Button style variants
- `getButtonClasses()` - Combined class builder

## Usage

```jsx
import Button from '../ui/Button';

<Button 
  variant="primary" 
  size="md" 
  icon={<Icon />}
  loading={isLoading}
  fullWidth
>
  Click me
</Button>
```

## Benefits

- **Cleaner main component**: Focused on button logic
- **Reusable content logic**: Easy to modify icons/loading
- **Centralized styles**: Easy to add new variants
- **Future-ready**: Easy to add specialized button types 