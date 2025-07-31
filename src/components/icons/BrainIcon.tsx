import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BrainIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Brain outline */}
      <path
        d="M9.5 2A6.5 6.5 0 0 0 3 8.5c0 1.78.69 3.41 1.83 4.61A6.5 6.5 0 0 0 9.5 22h5a6.5 6.5 0 0 0 4.67-9.89A6.5 6.5 0 0 0 21 8.5 6.5 6.5 0 0 0 14.5 2h-5z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.05"
      />
      {/* Brain folds/details */}
      <path
        d="M12 6c-1 0-2 1-2 2s1 2 2 2 2-1 2-2-1-2-2-2z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M8 12c1 0 2-1 2-2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M16 12c-1 0-2-1-2-2"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M12 14c-1 1-2 2-2 3s1 2 2 2 2-1 2-2-1-2-2-3z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      {/* Lotus petals around brain */}
      <path
        d="M12 1c-1 1-1 2 0 3s2 0 3-1-1-2-3-2z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M23 12c-1-1-2-1-3 0s0 2 1 3 2-1 2-3z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M12 23c1-1 1-2 0-3s-2 0-3 1 1 2 3 2z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M1 12c1 1 2 1 3 0s0-2-1-3-2 1-2 3z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
};