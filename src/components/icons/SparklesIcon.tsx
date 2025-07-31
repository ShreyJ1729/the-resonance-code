import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const SparklesIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main crystal/star shape */}
      <path
        d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4.5L6 21l1.5-7.5L2 9h7l3-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Smaller sparkles */}
      <path
        d="M6 4l1 2h2l-1.5 1L8 9l-2-1.5L4 9l.5-2L3 6h2l1-2z"
        fill="currentColor"
        opacity="0.6"
      />
      <path
        d="M18 3l0.5 1h1l-0.75 0.5L19 5.5l-1-0.75L17 5.5l0.25-1L17 4h1l0.5-1z"
        fill="currentColor"
        opacity="0.7"
      />
      <path
        d="M20 15l0.5 1h1l-0.75 0.5L21 17.5l-1-0.75L19 17.5l0.25-1L19 16h1l0.5-1z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M4 17l0.5 1h1l-0.75 0.5L5 19.5l-1-0.75L3 19.5l0.25-1L3 18h1l0.5-1z"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
};