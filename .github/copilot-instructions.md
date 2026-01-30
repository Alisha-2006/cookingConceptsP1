# AI Coding Guidelines for Cooking Concepts React App

## Project Overview
This is a React application built with Vite for a cooking concepts website. It uses Tailwind CSS v4 for styling and react-icons for iconography. The app follows a component-based architecture with all components located in `src/components/`.

## Architecture
- **Entry Point**: `src/main.jsx` renders `App.jsx` in StrictMode
- **Component Structure**: Place all reusable components in `src/components/` with `.jsx` extension
- **Styling**: Pure Tailwind CSS classes, no custom CSS files except `src/index.css` which imports Tailwind

## Key Patterns
- **Color Scheme**: Use `#f25c05` for primary accents (buttons, hover states, logo background)
- **Icons**: Import from `react-icons` (e.g., `FaUtensils`, `AiOutlineMenu`)
- **Responsive Design**: Use Tailwind's `md:` prefix for desktop/mobile breakpoints
- **Navigation**: Implement responsive navbar with hamburger menu for mobile (see `src/components/Navbar.jsx` for example)
- **Component Naming**: PascalCase for component files and functions

## Development Workflow
- **Start Dev Server**: `npm run dev` (Vite with HMR)
- **Build**: `npm run build` (outputs to `dist/`)
- **Lint**: `npm run lint` (ESLint with React hooks and refresh plugins)
- **Preview Build**: `npm run preview`

## ESLint Rules
- Custom rule: `no-unused-vars` ignores variables starting with uppercase (for unused React components)
- Extends recommended JS, React hooks, and Vite refresh configs
- Ignores `dist/` directory

## Dependencies
- **Core**: React 19, React DOM
- **Styling**: Tailwind CSS v4 with Vite plugin
- **Icons**: react-icons
- **Build**: Vite with React plugin
- **Linting**: ESLint with React-specific plugins

## File Structure Example
```
src/
  components/
    Navbar.jsx    # Responsive nav with mobile menu
    Hero.jsx      # Main hero section (currently empty)
    Footer.jsx    # Site footer (currently empty)
  App.jsx         # Main app component
  main.jsx        # React root render
  index.css       # Tailwind import
```

When adding new components, follow the Navbar pattern: use Tailwind classes, react-icons, and ensure mobile responsiveness.