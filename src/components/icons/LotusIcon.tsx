import React from 'react';

interface LotusIconProps {
  size?: number;
  className?: string;
}

export const LotusIcon: React.FC<LotusIconProps> = ({ size = 24, className = "" }) => {
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
      {/* Lotus flower for wellness & healing */}
      <path d="M12 2c-2 4-2 8 0 10 2-2 2-6 0-10z" />
      <path d="M12 12c-4-2-8-2-10 0 2 2 6 2 10 0z" />
      <path d="M12 12c4-2 8-2 10 0-2 2-6 2-10 0z" />
      <path d="M12 12c2 4 2 8 0 10-2-2-2-6 0-10z" />
      <path d="M12 12c-3-3-6-4-8-2 1 3 4 4 8 2z" />
      <path d="M12 12c3-3 6-4 8-2-1 3-4 4-8 2z" />
      <path d="M12 12c3 3 6 4 8 2-1-3-4-4-8-2z" />
      <path d="M12 12c-3 3-6 4-8 2 1-3 4-4 8-2z" />
    </svg>
  );
};