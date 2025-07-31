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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <button
            onClick={onBack}
            className="flex items-center text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path 
                d="M12 4L6 10L12 16" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            <span className="ml-2 text-sm">Back</span>
          </button>
        </div>

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
          <h1 className="text-2xl font-light text-neutral-800 dark:text-neutral-200">
            {category.name}
          </h1>
        </div>

        {/* Subcategory Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-5xl mx-auto">
          {category.categories.map((subCategory, index) => (
            <button
              key={`${subCategory.name}-${index}`}
              onClick={() => onSubCategorySelect(subCategory)}
              className={`group relative bg-white dark:bg-neutral-800 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center border border-neutral-100 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${colorClasses.border} ${colorClasses.ring} p-2`}
            >
              {IconComponent && (
                <IconComponent 
                  size={48} 
                  className={`${colorClasses.text} transition-colors duration-300 sm:w-16 sm:h-16 mb-1`}
                />
              )}
              
              {/* Subcategory Name */}
              <h3 className="text-xs font-medium text-neutral-800 dark:text-neutral-200 text-center leading-tight">
                {subCategory.name}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};