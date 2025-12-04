# Add Dark Mode Toggle

The goal is to allow users to manually switch between Light and Dark modes using a toggle button in the Navbar.

## User Review Required
None.

## Proposed Changes

### Configuration
#### [MODIFY] [tailwind.config.js](file:///Users/saurabhkhule/Desktop/Antigravity/saurabh-portfolio-react/tailwind.config.js)
- Change `darkMode` strategy from `media` (default) to `class`.

### Components
#### [MODIFY] [Navbar.jsx](file:///Users/saurabhkhule/Desktop/Antigravity/saurabh-portfolio-react/src/components/Navbar.jsx)
- Add a toggle button (Sun/Moon icon).
- Implement logic to toggle the `dark` class on the `html` element.
- Persist preference in `localStorage`.

## Verification Plan
### Manual Verification
- Click the toggle button and verify the theme changes instantly.
- Refresh the page and verify the theme persists.
- Check if the correct icon (Sun/Moon) is displayed for the current theme.
