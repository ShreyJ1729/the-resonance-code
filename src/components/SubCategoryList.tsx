import React from 'react';
import { MainCategory, Category } from '../types';
import { iconMap } from './icons';

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

  return (
    <div className="min-h-screen bg-neutral-50 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with Back Button */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-neutral-600 hover:text-neutral-800 transition-colors mr-4"
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

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`
            w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/10 
            flex items-center justify-center
          `}>
            {IconComponent && (
              <IconComponent 
                size={32} 
                className={`text-${category.color}`}
              />
            )}
          </div>
          <h1 className="text-3xl font-light text-neutral-800 mb-3">
            {category.name}
          </h1>
          <p className="text-neutral-600">
            Choose a specific frequency or collection
          </p>
        </div>

        {/* Subcategory List */}
        <div className="space-y-4">
          {category.categories.map((subCategory, index) => (
            <button
              key={`${subCategory.name}-${index}`}
              onClick={() => onSubCategorySelect(subCategory)}
              className={`
                w-full text-left bg-white rounded-xl shadow-card hover:shadow-card-hover
                transition-all duration-300 ease-out transform hover:-translate-y-0.5
                p-4 sm:p-6 border border-neutral-100 hover:border-${category.color}/20
                focus:outline-none focus:ring-2 focus:ring-${category.color}/50 focus:ring-offset-2
                group
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg font-medium text-neutral-800 mb-1 sm:mb-2 pr-2">
                    {subCategory.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600">
                    {subCategory.tracks.length} tracks available
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className={`
                  w-8 h-8 rounded-full bg-${category.color}/10 
                  flex items-center justify-center
                  transition-all duration-300 transform group-hover:translate-x-1
                  group-hover:bg-${category.color}/20
                `}>
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 16 16" 
                    fill="none"
                    className={`text-${category.color}`}
                  >
                    <path 
                      d="M6 3L11 8L6 13" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Track Preview */}
              <div className="mt-4 pt-4 border-t border-neutral-100">
                <div className="flex flex-wrap gap-2">
                  {subCategory.tracks.slice(0, 3).map((track, trackIndex) => (
                    <span
                      key={trackIndex}
                      className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                    >
                      {track.title.length > 30 
                        ? `${track.title.substring(0, 30)}...` 
                        : track.title
                      }
                    </span>
                  ))}
                  {subCategory.tracks.length > 3 && (
                    <span className="px-2 py-1 bg-neutral-200 text-neutral-500 text-xs rounded-full">
                      +{subCategory.tracks.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};