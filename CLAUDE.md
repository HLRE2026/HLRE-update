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
- **Vite 6.3** for build tooling with video asset support (mp4 files configured)
- **Tailwind CSS** for styling with custom theme colors defined in tailwind.config.js:
  - Primary: Emerald palette (base: #10b981)
  - Secondary: Earth brown palette (base: #8b6f4b)
  - Accent: Mountain lake blue palette (base: #3d8ba9)
- **React Router 6.22** for client-side routing
- **Framer Motion 10.16** for animations
- **Lucide React** for icons
- **Stagewise Toolbar** (dev dependency) for development tools

### Project Structure
- `/src/App.tsx` - Main router configuration with 4 routes (Home, About, Resources, Contact)
- `/src/pages/` - Route-level page components
- `/src/components/` - Feature components including homepage sections:
  - VideoHero, CharitySupportSection, ThousandPerKm (actively modified)
  - ExpeditionVideoSection, WhyItMatters, OurVision, FundraisingJourney
  - AnimatedJourney, ImpactCounter, FeaturedVideo
- `/src/components/ui/` - Base UI components following shadcn/ui pattern
- `/src/lib/utils.ts` - Contains `cn()` helper for className merging
- `/src/assets/` - Static images and team photos
- `/public/` - Public assets served directly

### Key Patterns & Conventions
1. **Component Composition**: Build using smaller pieces from ui/ directory
2. **Styling**: Use Tailwind utilities with `cn()` helper for conditional classes
3. **TypeScript**: Strict mode enabled in tsconfig.app.json - define all prop types
4. **Routing**: Centralized in App.tsx using React Router's BrowserRouter
5. **Font**: Inter as primary sans-serif font
6. **Video Support**: MP4 files are configured as assets in Vite

### Current Development Context
The project has active changes to homepage components (Header, VideoHero, ThousandPerKm) as part of a redesign effort. The homepage-audit-and-recommendations.md contains detailed improvement plans including:
- Hero section enhancement with video/motion graphics
- Featured video placement
- Impact transparency sections
- Community engagement features

### Byterover Integration
The project includes Byterover MCP tools (see AGENTS.md) for knowledge management and planning workflows. These tools help with:
- Creating and updating project handbooks
- Managing implementation plans with todo tracking
- Storing and retrieving project knowledge
- Module documentation and updates