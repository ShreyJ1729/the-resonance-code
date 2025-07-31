import React from 'react';

interface OmIconProps {
  size?: number;
  className?: string;
}

export const OmIcon: React.FC<OmIconProps> = ({ size = 24, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Om symbol - simplified sacred representation */}
      <path d="M12 2C8 2 4 6 4 12c0 2 1 4 2 5.5" />
      <path d="M20 12c0-6-4-10-8-10" />
      <path d="M12 6c2 0 4 2 4 6 0 2-1 4-2 5" />
      <path d="M8 12c0-2 1-4 4-4" />
      <circle cx="16" cy="8" r="1" />
      <path d="M6 17.5c1 1 2.5 2.5 6 2.5s5-1.5 6-2.5" />
    </svg>
  );
};