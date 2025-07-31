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
            const colorClasses = getColorClasses(category.color);
            
            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category)}
                className={`group relative bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 p-6 sm:p-8 text-center min-h-[240px] sm:min-h-[280px] flex flex-col items-center justify-center border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${colorClasses.border} ${colorClasses.ring}`}
              >
                {/* Icon Container */}
                <div className={`w-16 h-16 sm:w-20 sm:h-20 mb-4 sm:mb-6 rounded-full ${colorClasses.bgLight} flex items-center justify-center transition-all duration-300 group-hover:${colorClasses.bgHover} group-hover:scale-110`}>
                  {IconComponent && (
                    <IconComponent 
                      size={32} 
                      className={`${colorClasses.text} transition-colors duration-300 sm:w-10 sm:h-10`}
                    />
                  )}
                </div>

                {/* Category Name */}
                <h3 className="text-lg sm:text-xl font-medium text-neutral-800 mb-2 sm:mb-3 leading-tight px-2">
                  {category.name}
                </h3>


                {/* Hover Arrow */}
                <div className={`absolute top-4 right-4 w-6 h-6 rounded-full ${colorClasses.bgLight} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0`}>
                  <svg 
                    width="12" 
                    height="12" 
                    viewBox="0 0 12 12" 
                    fill="none"
                    className={colorClasses.text}
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

