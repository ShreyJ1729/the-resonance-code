// Core data interfaces
export interface Track {
  title: string;
  url: string;
}

export interface Category {
  name: string;
  icon?: string;
  color?: string;
  tracks: Track[];
}

export interface MainCategory {
  name: string;
  icon: string;
  color: string;
  categories: Category[];
}

export interface MusicData {
  categories: MainCategory[];
}

// Navigation interfaces
export type NavigationLevel = 'main' | 'category' | 'tracks';

export interface NavigationState {
  level: NavigationLevel;
  currentCategory?: MainCategory;
  currentSubCategory?: Category;
  breadcrumb: string[];
}