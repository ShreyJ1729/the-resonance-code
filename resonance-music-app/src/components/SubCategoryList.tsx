import React from 'react';
import { SubCategory } from '../types';
import { getColorClasses, combineClasses } from '../utils/colorUtils';

interface SubCategoryListProps {
  subCategories: SubCategory[];
  onSubCategoryClick: (subCategory: SubCategory) => void;
  categoryColor: string;
}

export const SubCategoryList: React.FC<SubCategoryListProps> = ({
  subCategories,
  onSubCategoryClick,
  categoryColor
}) => {
  const colorClasses = getColorClasses(categoryColor);

  return (
    <div className="space-y-3">
      {subCategories.map((subCategory) => {
        const subCategoryColorClasses = getColorClasses(subCategory.color);
        
        return (
          <button
            key={subCategory.id}
            onClick={() => onSubCategoryClick(subCategory)}
            className={combineClasses(
              // Base styles
              'w-full p-4 rounded-xl border-2 transition-all duration-300 text-left group',
              'transform hover:scale-[1.02] hover:shadow-lg',
              // Dynamic color classes using safe approach
              subCategoryColorClasses.background,
              subCategoryColorClasses.backgroundHover,
              subCategoryColorClasses.border,
              subCategoryColorClasses.focusRing,
              'focus:outline-none focus:ring-2'
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className={combineClasses(
                  'text-lg font-semibold mb-1 transition-colors',
                  subCategoryColorClasses.text,
                  subCategoryColorClasses.textHover
                )}>
                  {subCategory.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {subCategory.description}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-500">
                    {subCategory.tracks?.length || 0} tracks
                  </span>
                  <span className={combineClasses(
                    'text-xs px-2 py-1 rounded-full',
                    subCategoryColorClasses.background,
                    subCategoryColorClasses.text
                  )}>
                    {subCategory.duration}
                  </span>
                </div>
              </div>
              <div className={combineClasses(
                'ml-4 p-2 rounded-full transition-all duration-300',
                subCategoryColorClasses.background,
                'group-hover:scale-110'
              )}>
                <svg 
                  className={combineClasses(
                    'w-5 h-5 transition-colors',
                    subCategoryColorClasses.text
                  )} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};