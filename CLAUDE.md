# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Hope, Love & Resilience Expedition (HLRE) website - a charity/non-profit project documenting Mark Ivancic's 300km journey through the Canadian Rockies from Banff to Jasper. The website serves to tell Mark's story, raise funds for the documentary, and engage sponsors.

## Commands

```bash
# Development
npm run dev      # Start development server on http://localhost:5173

# Build & Production
npm run build    # Build for production
npm run preview  # Preview production build locally

# Code Quality
npm run lint     # Run ESLint
```

## Architecture

### Tech Stack
- **React 18.3** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling with custom theme colors:
  - Primary: Emerald (green-600/700)
  - Secondary: Earth brown (#8B4513)
  - Accent: Mountain lake blue (#006D77)
- **React Router** for client-side routing
- **Framer Motion** for animations
- **Lucide React** for icons

### Project Structure
- `/src/pages/` - Route-level page components (Home, About, Resources, Contact)
- `/src/components/` - Reusable components organized by feature
- `/src/components/ui/` - Base UI components following shadcn/ui pattern
- `/src/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/src/assets/` - Static images and team photos

### Key Patterns
1. **Component Composition**: Components are built using smaller, reusable pieces from the ui/ directory
2. **Styling**: Use Tailwind utility classes with the `cn()` helper for conditional styling
3. **TypeScript**: Strict mode enabled - always define proper types for props and state
4. **Routing**: All routes defined in App.tsx using React Router

### Current Development Focus
The project is undergoing a homepage redesign with new sections being added (CharitySupportSection, ExpeditionVideoSection, etc.) as indicated by the git status. A homepage-audit-and-recommendations.md file contains detailed improvement suggestions.