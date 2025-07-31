import React from 'react';

interface BreadcrumbProps {
  items: string[];
  onNavigate: (index: number) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-neutral-600 mb-6">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 16 16" 
              fill="none"
              className="text-neutral-400"
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
              transition-colors hover:text-neutral-800
              ${index === items.length - 1 
                ? 'text-neutral-800 font-medium cursor-default' 
                : 'hover:text-neutral-800 cursor-pointer'
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