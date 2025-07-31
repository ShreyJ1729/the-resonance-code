import React from 'react';

interface CrystalIconProps {
  size?: number;
  className?: string;
}

export const CrystalIcon: React.FC<CrystalIconProps> = ({ size = 24, className = "" }) => {
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
      {/* Crystal/Gem shape for special frequencies */}
      <path d="M6 9l6-7 6 7-6 13-6-13z" />
      <path d="M6 9h12" />
      <path d="M9 2l3 7-3 13" />
      <path d="M15 2l-3 7 3 13" />
    </svg>
  );
};