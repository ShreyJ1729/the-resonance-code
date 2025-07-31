import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WaveIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 12C2 12 4.5 6 7 12C9.5 18 12 6 14.5 12C17 18 19.5 6 22 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 8C2 8 4.5 4 7 8C9.5 12 12 4 14.5 8C17 12 19.5 4 22 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
      <path
        d="M2 16C2 16 4.5 12 7 16C9.5 20 12 12 14.5 16C17 20 19.5 12 22 16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />
    </svg>
  );
};