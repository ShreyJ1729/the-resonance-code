import React, { useState, useEffect } from 'react';
import type { MainCategory, Category } from '../types';
import { iconMap } from './icons';
import { getColorClasses, getHexColorStyles } from '../utils/colorMapping';

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
  const [isMobile, setIsMobile] = useState(false);
  const IconComponent = iconMap[category.icon as keyof typeof iconMap];
  const colorClasses = getColorClasses(category.color);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-2 md:py-6 flex flex-col">
      <div className="max-w-4xl mx-auto flex flex-col h-full">
        {/* Back Button */}
        <div className="flex items-center mb-2 md:mb-6 flex-shrink-0">
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
        <div className="text-center mb-3 md:mb-8 flex-shrink-0">
          <div className={`w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 rounded-full ${colorClasses.bgLight} flex items-center justify-center`}>
            {IconComponent && (
              <IconComponent 
                size={16}
                className={`${colorClasses.text} md:w-6 md:h-6`}
              />
            )}
          </div>
          <h1 className="text-lg md:text-2xl font-light text-neutral-800 dark:text-neutral-200">
            {category.name}
          </h1>
          {category.name === "Binaural Beats" && (
            <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400 mt-1 md:mt-2 italic">
              Binaural beats require headphones to be effective
            </p>
          )}
        </div>

        {/* Subcategory Grid */}
        <div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-6 lg:gap-8 max-w-6xl mx-auto flex-1"
          style={{ 
            gridAutoRows: isMobile ? 'minmax(120px, 140px)' : 'minmax(180px, 200px)' 
          }}
        >
          {category.categories.map((subCategory, index) => {
            // Use subcategory's own icon and color if available, otherwise fall back to main category
            const subCategoryIcon = subCategory.icon || category.icon;
            const subCategoryColor = subCategory.color || category.color;
            const SubCategoryIconComponent = iconMap[subCategoryIcon as keyof typeof iconMap];
            
            // Check if subcategory color is a hex color
            const isHexColor = subCategoryColor.startsWith('#');
            const subColorClasses = isHexColor ? getColorClasses(category.color) : getColorClasses(subCategoryColor);
            const hexStyles = isHexColor ? getHexColorStyles(subCategoryColor) : null;
            
            return (
              <button
                key={`${subCategory.name}-${index}`}
                onClick={() => onSubCategorySelect(subCategory)}
                className={`group relative bg-white dark:bg-neutral-800 rounded-lg md:rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 w-full h-full flex flex-col items-center justify-center border border-neutral-100 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${subColorClasses.border} ${subColorClasses.ring} p-2 md:p-4`}
                style={hexStyles ? {
                  '--hover-bg': hexStyles.bgColorLight,
                  '--ring-color': hexStyles.ringColor,
                } as React.CSSProperties : undefined}
              >
                {SubCategoryIconComponent && (
                  <SubCategoryIconComponent 
                    size={48} 
                    className={`transition-colors duration-300 w-12 h-12 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 md:mb-3 ${
                      hexStyles ? '' : subColorClasses.text
                    }`}
                    style={hexStyles ? { color: hexStyles.textColor } : undefined}
                  />
                )}
                
                {/* Subcategory Name */}
                <h3 className="text-sm leading-tight font-semibold md:text-sm lg:text-base text-neutral-800 dark:text-neutral-200 text-center px-1">
                  {subCategory.name}
                </h3>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};