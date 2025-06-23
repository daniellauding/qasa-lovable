# Card Components

This folder contains all card-related components organized for better maintainability and readability.

## Structure

```
Card/
├── index.js              # Main exports
├── Card.jsx              # Base card component
├── TenantCard.jsx         # Tenant profile cards
├── CreateProfileCard.jsx  # CTA/Create profile cards
├── PropertyCard.jsx       # Property listing cards with carousel
├── LandlordCard.jsx       # Landlord info cards
├── ContactCard.jsx        # Contact request cards
├── LandlordCTACard.jsx    # Landlord call-to-action cards
└── README.md             # This file
```

## Usage

The API remains exactly the same as before:

```jsx
import Card from '../ui/Card';

// Base card
<Card>Content</Card>

// Specific variants
<Card.TenantCard user={userData} verified onCardClick={handleClick} />
<Card.PropertyCard property={propertyData} onLikeToggle={handleLike} />
<Card.CreateProfileCard title="..." onButtonClick={handleCreate} />
<Card.LandlordCard landlord={landlordData} verified />
<Card.ContactCard property={propertyData} message="..." />
<Card.LandlordCTACard title="..." description="..." onClick={handleClick} />
```

## Benefits

- **Better organization**: Each card type in its own file
- **Easier maintenance**: Smaller, focused files
- **Same API**: No breaking changes
- **Better readability**: Easier to find and modify specific card types
- **Modularity**: Import only what you need (if needed in the future) 