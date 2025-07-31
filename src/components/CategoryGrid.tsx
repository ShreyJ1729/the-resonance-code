import React from "react";
import type { MainCategory } from "../types";
import { iconMap } from "./icons";
import { getColorClasses } from "../utils/colorMapping";

interface CategoryGridProps {
  categories: MainCategory[];
  onCategorySelect: (category: MainCategory) => void;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({
  categories,
  onCategorySelect,
}) => {
  const handleCategoryClick = (category: MainCategory) => {
    console.log("CategoryGrid - Category clicked:", category.name);
    onCategorySelect(category);
  };
  return (
    <div className="h-screen bg-neutral-50 dark:bg-neutral-900 px-4 py-4 md:py-8 flex flex-col">
      <div className="max-w-4xl mx-auto flex flex-col h-full">
        {/* Header */}
        <div className="text-center mb-4 md:mb-12 flex-shrink-0">
          <h1 className="text-2xl md:text-4xl font-light text-neutral-800 dark:text-neutral-200 mb-2 md:mb-4">
            The Resonance Code
          </h1>
          <p className="text-sm md:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto px-2">
            Inspired by The Body Code by Dr. Bradley Nelson. Use muscle testing
            to navigate through the categories and find the right tracks for
            your needs.
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-rows-3 sm:grid-rows-3 md:grid-rows-2 lg:grid-rows-2 gap-3 md:gap-6 lg:gap-8 max-w-6xl mx-auto flex-1 md:flex-none">
          {categories.map((category) => {
            const IconComponent =
              iconMap[category.icon as keyof typeof iconMap];
            const colorClasses = getColorClasses(category.color);

            return (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category)}
                className={`group relative bg-white dark:bg-neutral-800 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 ease-out transform hover:-translate-y-1 w-full h-full md:h-48 lg:h-56 xl:h-60 flex flex-col items-center justify-center border border-neutral-100 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:${colorClasses.border} ${colorClasses.ring} p-4 md:p-4`}
              >
                {IconComponent && (
                  <IconComponent
                    size={60}
                    className={`${colorClasses.text} transition-colors duration-300 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-3 md:mb-2`}
                  />
                )}

                {/* Category Name */}
                <h3 className="text-sm md:text-sm lg:text-base font-medium text-neutral-800 dark:text-neutral-200 text-center leading-tight px-1">
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
