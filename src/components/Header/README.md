# Header Component

The Header component provides different variants for different user states and flows.

## Usage

```jsx
import Header, { HeaderLoggedOut, HeaderLoggedIn, HeaderCreationFlow } from './Header';

// Main component with variant prop
<Header variant="logged-out" onLogin={() => {}} onSignup={() => {}} />
<Header variant="logged-in" user={user} messageCount={5} />
<Header variant="creation-flow" onDismiss={() => {}} />

// Direct component usage
<HeaderLoggedOut onLogin={() => {}} onSignup={() => {}} />
<HeaderLoggedIn user={user} messageCount={5} notificationCount={2} />
<HeaderCreationFlow onDismiss={() => {}} />
```

## Variants

### HeaderLoggedOut
For when users are not logged in.

**Props:**
- `onLogin` (function) - Callback for login button click
- `onSignup` (function) - Callback for signup button click

**Features:**
- Navigation menu (Bostäder, Hyresgäster, Så fungerar det)
- Login and signup buttons
- Mobile-responsive with collapsible menu

### HeaderLoggedIn
For when users are logged in.

**Props:**
- `user` (object) - User information
  - `name` (string) - User's display name
  - `avatar` (string) - User's avatar image URL
- `messageCount` (number) - Number of unread messages (shows badge)
- `notificationCount` (number) - Number of notifications (shows badge)

**Features:**
- Navigation menu
- Messages icon with count badge
- Favorites/heart icon
- User avatar with notification badge
- Dropdown menu with user actions
- Premium promotion in dropdown

### HeaderCreationFlow
Minimal header for creation flows and modals.

**Props:**
- `onDismiss` (function) - Callback for dismiss/close button
- `showDismiss` (boolean) - Whether to show the dismiss button (default: true)

**Features:**
- Just the Qasa logo
- Optional dismiss/close button
- Clean, minimal design

## Main Header Component

The main Header component accepts a `variant` prop to automatically render the appropriate variant:

- `"logged-out"` - Renders HeaderLoggedOut
- `"logged-in"` - Renders HeaderLoggedIn  
- `"creation-flow"` - Renders HeaderCreationFlow

All other props are passed through to the variant component.

## Styling

All variants:
- Use consistent branding with Qasa logo
- Sticky positioning (`sticky top-0`)
- White background with bottom border
- Responsive design
- Consistent height (64px / h-16)

## Navigation

The logged-out and logged-in variants include the same navigation menu:
- Bostäder (/sv/find-home)
- Hyresgäster (/sv/find-tenant) 
- Så fungerar det (/sv/how-it-works)

Navigation includes hover effects and mobile responsiveness. 