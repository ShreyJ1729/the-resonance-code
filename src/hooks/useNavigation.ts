import { useState } from 'react';
import type { NavigationState, MainCategory, Category } from '../types';

export const useNavigation = () => {
  const [navigationState, setNavigationState] = useState<NavigationState>({
    level: 'main',
    breadcrumb: ['Home'],
  });

  const navigateToCategory = (category: MainCategory) => {
    setNavigationState({
      level: 'category',
      currentCategory: category,
      breadcrumb: ['Home', category.name],
    });
  };

  const navigateToSubCategory = (subCategory: Category) => {
    if (!navigationState.currentCategory) return;
    
    setNavigationState({
      level: 'tracks',
      currentCategory: navigationState.currentCategory,
      currentSubCategory: subCategory,
      breadcrumb: ['Home', navigationState.currentCategory.name, subCategory.name],
    });
  };

  const navigateBack = () => {
    if (navigationState.level === 'tracks') {
      setNavigationState({
        level: 'category',
        currentCategory: navigationState.currentCategory,
        breadcrumb: navigationState.breadcrumb.slice(0, -1),
      });
    } else if (navigationState.level === 'category') {
      setNavigationState({
        level: 'main',
        breadcrumb: ['Home'],
      });
    }
  };

  const navigateToHome = () => {
    setNavigationState({
      level: 'main',
      breadcrumb: ['Home'],
    });
  };

  return {
    navigationState,
    navigateToCategory,
    navigateToSubCategory,
    navigateBack,
    navigateToHome,
  };
};