import React from 'react';
import type { MainCategory } from '../types';
import { iconMap } from './icons';
import { getColorClasses } from '../utils/colorMapping';

interface CategoryGridProps {
  categories: MainCategory[];
  onCategorySelect: (category: MainCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategoryClick = (category: MainCategory) => {
    console.log('CategoryGrid - Category clicked:', category.name);
    onCategorySelect(category);
  };
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-neutral-800 dark:text-neutral-200 mb-4">
            Resonance Music Therapy
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore healing frequencies and binaural beats designed to support your wellness journey
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 max-w-4xl mx-auto">
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            const colorClasses = getColorClasses(category.color);
            
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category)}
                className={`group relative bg-white dark:bg-neutral-800 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 w-32 h-32 sm:w-36 sm:h-36 flex flex-col items-center justify-center border border-neutral-100 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${colorClasses.border} ${colorClasses.ring} p-2`}
              >
                {IconComponent && (
                  <IconComponent 
                    size={64} 
                    className={`${colorClasses.text} transition-colors duration-300 sm:w-20 sm:h-20 mb-1`}
                  />
                )}
                
                {/* Category Name */}
                <h3 className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200 text-center leading-tight">
                  {category.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

