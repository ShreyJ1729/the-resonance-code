import React from 'react';

interface SoundWavesIconProps {
  size?: number;
  className?: string;
}

export const SoundWavesIcon: React.FC<SoundWavesIconProps> = ({ size = 24, className = "" }) => {
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
      {/* Sound waves emanating from center */}
      <path d="M12 8v8" />
      <path d="M8 10v4" />
      <path d="M16 10v4" />
      <path d="M4 12v0" />
      <path d="M20 12v0" />
      <path d="M6 11v2" />
      <path d="M18 11v2" />
      <path d="M10 9v6" />
      <path d="M14 9v6" />
    </svg>
  );
};