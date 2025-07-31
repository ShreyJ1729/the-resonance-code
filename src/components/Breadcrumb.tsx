import React from 'react';

interface BreadcrumbProps {
  items: string[];
  onNavigate: (index: number) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-neutral-600 dark:text-neutral-300 mb-0">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="text-neutral-400 dark:text-neutral-500"
            >
              <path 
                d="M6 4L10 8L6 12" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          )}
          <button
            onClick={() => onNavigate(index)}
            className={`
              transition-colors
              ${index === items.length - 1 
                ? 'text-neutral-800 dark:text-neutral-200 font-medium cursor-default' 
                : 'hover:text-neutral-800 dark:hover:text-neutral-100 cursor-pointer text-blue-600 dark:text-blue-400'
              }
            `}
            disabled={index === items.length - 1}
          >
            {item}
          </button>
        </React.Fragment>
      ))}
    </nav>
  );
};