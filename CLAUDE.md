# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**The Resonance Code** is a React-based web application for exploring healing sound frequencies and binaural beats. The app provides a hierarchical navigation system through different frequency categories (Solfeggio Frequencies, Binaural Beats, 432 Hz Collections, etc.) with embedded YouTube playback.

### Key Architecture

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: TailwindCSS with custom color mappings
- **State Management**: React hooks with custom navigation system
- **Data Structure**: Hierarchical music data with categories → subcategories → tracks
- **Navigation**: Three-level sliding panel system (main → category → tracks)

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Code Architecture

### Core Components

- **App.tsx**: Main application with sliding panel navigation system
- **CategoryGrid**: Main category selection interface
- **SubCategoryList**: Displays subcategories within a main category
- **TrackList**: Shows individual tracks with YouTube player integration
- **DarkModeToggle**: Theme switching functionality

### Data Layer

- **src/data/musicData.ts**: All frequency/music data in structured format
- **src/types/index.ts**: TypeScript interfaces for data structures
- **src/utils/colorMapping.ts**: Color theme mappings for categories

### Hooks

- **useNavigation**: Manages three-level navigation state and transitions
- **useDarkMode**: Handles dark/light theme persistence
- **useKeyboardNavigation**: Keyboard shortcuts for navigation

### Navigation System

The app uses a three-level navigation hierarchy:
1. **Main**: Category selection grid
2. **Category**: Subcategory list for selected category
3. **Tracks**: Individual track list with YouTube player

Navigation state includes current level, selected category/subcategory, and breadcrumb trail.

### Styling Approach

- Uses TailwindCSS with extensive dark mode support
- Custom color mappings for different frequency categories
- Responsive design with mobile-first approach
- Sacred/mystical aesthetic direction (see todo.md for design goals)

## Important Files

- **src/data/musicData.ts**: Contains all frequency data - modify here to add new categories/tracks
- **src/components/icons/**: Custom SVG icons for different frequency types
- **todo.md**: Detailed design requirements and UX improvements needed
- **src/hooks/useNavigation.ts**: Core navigation logic

## Development Notes

- All music data is statically defined in musicData.ts
- YouTube integration via react-youtube package
- Icons are custom React components using Lucide React as base
- Dark mode persists via localStorage
- No backend - purely client-side application

## Testing & Quality

- No test framework currently configured
- ESLint configured for code quality
- TypeScript for type safety
- Remember to run `npm run lint` before commits