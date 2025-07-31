import React from 'react';
import type { MainCategory, Category } from '../types';
import { iconMap } from './icons';
import { getColorClasses } from '../utils/colorMapping';

interface SubCategoryListProps {
  category: MainCategory;
  onSubCategorySelect: (subCategory: Category) => void;
  onBack: () => void;
}

export const SubCategoryList: React.FC<SubCategoryListProps> = ({
  category,
  onSubCategorySelect,
  onBack,
}) => {
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
  const colorClasses = getColorClasses(category.color);

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-12 h-12 mx-auto mb-3 rounded-full ${colorClasses.bgLight} flex items-center justify-center`}>
            {IconComponent && (
              <IconComponent 
                size={24} 
                className={colorClasses.text}
              />
            )}
          </div>
          <h1 className="text-2xl font-light text-neutral-800">
            {category.name}
          </h1>
        </div>

        {/* Subcategory Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {category.categories.map((subCategory, index) => (
            <button
              key={`${subCategory.name}-${index}`}
              onClick={() => onSubCategorySelect(subCategory)}
              className={`group relative bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 p-3 sm:p-4 text-center min-h-[120px] sm:min-h-[140px] flex flex-col items-center justify-center border border-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${colorClasses.border} ${colorClasses.ring}`}
            >
              {/* Icon Container */}
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-3 rounded-full ${colorClasses.bgLight} flex items-center justify-center transition-all duration-300 group-hover:${colorClasses.bgHover} group-hover:scale-110`}>
                {IconComponent && (
                  <IconComponent 
                    size={24} 
                    className={`${colorClasses.text} transition-colors duration-300 sm:w-10 sm:h-10`}
                  />
                )}
              </div>

              {/* Subcategory Name */}
              <h3 className="text-xs sm:text-sm font-medium text-neutral-800 leading-tight px-1">
                {subCategory.name}
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
          ))}
        </div>
      </div>
    </div>
  );
};