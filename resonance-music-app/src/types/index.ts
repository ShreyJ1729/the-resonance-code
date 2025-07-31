// Type definitions for the music therapy app

export interface Track {
  id: string;
  name: string;
  description: string;
  duration: number; // in seconds
  type?: string;
  bpm?: number;
  audioUrl?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  color: string;
  duration: string;
  tracks?: Track[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  color: string;
  icon: string;
  subCategories: SubCategory[];
}

export interface NavigationState {
  currentView: 'categories' | 'subcategories' | 'tracks';
  selectedCategory?: Category;
  selectedSubCategory?: SubCategory;
  breadcrumb: BreadcrumbItem[];
}

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
}