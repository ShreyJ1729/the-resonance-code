import React from 'react';

interface MeditationIconProps {
  size?: number;
  className?: string;
}

export const MeditationIcon: React.FC<MeditationIconProps> = ({ size = 24, className = "" }) => {
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
      {/* Meditation pose figure */}
      <circle cx="12" cy="6" r="2" />
      <path d="M12 8v6" />
      <path d="M8 10l4 4 4-4" />
      <path d="M6 14c0 4 2.5 8 6 8s6-4 6-8" />
      <path d="M10 18h4" />
      {/* Aura/energy lines */}
      <path d="M4 12c0-4 4-8 8-8s8 4 8 8" />
      <path d="M6 8c0-3 2.7-6 6-6s6 3 6 6" />
    </svg>
  );
};