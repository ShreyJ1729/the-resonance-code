import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HeartPulseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Heart shape */}
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.1"
      />
      {/* Pulse line */}
      <path
        d="M2 12h4l2-4 2 8 2-4h4l2-2 2 2h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      {/* Healing energy dots */}
      <circle cx="8" cy="8" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="16" cy="8" r="1" fill="currentColor" opacity="0.6" />
      <circle cx="12" cy="16" r="1" fill="currentColor" opacity="0.6" />
    </svg>
  );
};