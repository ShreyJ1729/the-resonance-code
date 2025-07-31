import React from 'react';
import { MainCategory } from '../types';
import { iconMap } from './icons';

interface CategoryGridProps {
  categories: MainCategory[];
  onCategorySelect: (category: MainCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategorySelect,
}) => {
  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-neutral-800 mb-4">
            Resonance Music Therapy
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore healing frequencies and binaural beats designed to support your wellness journey
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            
            return (
              <button
                key={category.name}
                onClick={() => onCategorySelect(category)}
                className={`
                  group relative bg-white rounded-2xl shadow-card hover:shadow-card-hover
                  transition-all duration-300 ease-out transform hover:-translate-y-1
                  p-6 sm:p-8 text-center min-h-[240px] sm:min-h-[280px] flex flex-col items-center justify-center
                  border border-neutral-100 hover:border-${category.color}/20
                  focus:outline-none focus:ring-2 focus:ring-${category.color}/50 focus:ring-offset-2
                `}
              >
                {/* Icon Container */}
                <div className={`
                  w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full bg-${category.color}/10 
                  flex items-center justify-center transition-all duration-300
                  group-hover:bg-${category.color}/20 group-hover:scale-110
                `}>
                  {IconComponent && (
                    <IconComponent 
                      size={32} 
                      className={`text-${category.color} transition-colors duration-300 sm:w-10 sm:h-10`}
                    />
                  )}
                </div>

                {/* Category Name */}
                <h3 className="text-lg sm:text-xl font-medium text-neutral-800 mb-2 sm:mb-3 leading-tight px-2">
                  {category.name}
                </h3>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed px-2">
                  {getCategoryDescription(category.name)}
                </p>

                {/* Track Count */}
                <div className="mt-4 text-xs text-neutral-500">
                  {getTotalTracks(category)} tracks available
                </div>

                {/* Hover Arrow */}
                <div className={`
                  absolute top-4 right-4 w-6 h-6 rounded-full bg-${category.color}/10
                  flex items-center justify-center opacity-0 group-hover:opacity-100
                  transition-all duration-300 transform translate-x-2 group-hover:translate-x-0
                `}>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                    className={`text-${category.color}`}
                  >
                    <path 
                      d="M4 2L8 6L4 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Helper function to get category descriptions
const getCategoryDescription = (categoryName: string): string => {
  const descriptions = {
    'Solfeggio Frequencies': 'Sacred healing frequencies for spiritual and physical wellness',
    'Binaural Beats': 'Brainwave entrainment for focus, relaxation, and altered states',
    '432 Hz Collections': 'Natural tuning frequency for harmony and deep healing',
    'Special Frequencies': 'Unique healing tones for manifestation and positivity',
    'Wellness & Healing': 'Therapeutic music for anxiety relief and emotional balance',
    'Meditation & Mindfulness': 'Guided frequencies for inner peace and spiritual growth',
  } as const;
  
  return descriptions[categoryName as keyof typeof descriptions] || 'Explore healing frequencies';
};

// Helper function to count total tracks
const getTotalTracks = (category: MainCategory): number => {
  return category.categories.reduce((total, subCategory) => total + subCategory.tracks.length, 0);
};