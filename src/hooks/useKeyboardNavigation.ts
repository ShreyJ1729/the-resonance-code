import { useEffect, useState } from 'react';
import type { NavigationState, MainCategory, Category, Track } from '../types';

interface KeyboardNavigationProps {
  navigationState: NavigationState;
  navigateBack: () => void;
  navigateToCategory: (category: MainCategory) => void;
  navigateToSubCategory: (subCategory: Category) => void;
  categories: MainCategory[];
  onTrackSelect?: (track: Track) => void;
  selectedTrack?: Track | null;
}

export const useKeyboardNavigation = ({
  navigationState,
  navigateBack,
  navigateToCategory,
  navigateToSubCategory,
  categories,
  onTrackSelect,
  selectedTrack,
}: KeyboardNavigationProps) => {
  const [showHelpOverlay, setShowHelpOverlay] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Prevent keyboard navigation when typing in inputs or textareas
      const target = event.target as HTMLElement;
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.contentEditable === 'true') {
        return;
      }

      // Handle special keys
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          navigateBack();
          break;
          
        case '?':
          event.preventDefault();
          setShowHelpOverlay(prev => !prev);
          break;
          
        case 'Escape':
          event.preventDefault();
          if (showHelpOverlay) {
            setShowHelpOverlay(false);
          }
          break;
      }

      // Handle number keys (1-9)
      const numberKey = parseInt(event.key);
      if (numberKey >= 1 && numberKey <= 9) {
        event.preventDefault();
        handleNumberKeyNavigation(numberKey);
      }
    };

    const handleNumberKeyNavigation = (number: number) => {
      switch (navigationState.level) {
        case 'main':
          // Navigate to categories (1-6)
          if (number <= categories.length) {
            const targetCategory = categories[number - 1];
            navigateToCategory(targetCategory);
          }
          break;
          
        case 'category':
          // Navigate to subcategories
          if (navigationState.currentCategory) {
            const subcategories = navigationState.currentCategory.categories;
            if (number <= subcategories.length) {
              const targetSubCategory = subcategories[number - 1];
              navigateToSubCategory(targetSubCategory);
            }
          }
          break;
          
        case 'tracks':
          // Navigate to tracks
          if (navigationState.currentSubCategory && onTrackSelect) {
            const tracks = navigationState.currentSubCategory.tracks;
            if (number <= tracks.length) {
              const targetTrack = tracks[number - 1];
              onTrackSelect(targetTrack);
            }
          }
          break;
      }
    };

    // Add event listener
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [
    navigationState,
    navigateBack,
    navigateToCategory,
    navigateToSubCategory,
    categories,
    onTrackSelect,
    selectedTrack,
    showHelpOverlay,
  ]);

  return {
    showHelpOverlay,
    setShowHelpOverlay,
  };
};