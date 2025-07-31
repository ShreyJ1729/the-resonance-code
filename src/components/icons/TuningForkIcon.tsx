import React from 'react';

interface TuningForkIconProps {
  size?: number;
  className?: string;
}

export const TuningForkIcon: React.FC<TuningForkIconProps> = ({ size = 24, className = "" }) => {
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
      {/* Tuning fork for 432 Hz */}
      <path d="M10 2v8" />
      <path d="M14 2v8" />
      <path d="M10 10c0 1.1.9 2 2 2s2-.9 2-2" />
      <path d="M12 12v10" />
      <path d="M8 20h8" />
      <path d="M10 22h4" />
    </svg>
  );
};