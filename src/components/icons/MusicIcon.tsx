import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const MusicIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Tuning fork shape */}
      <path
        d="M12 2v20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M8 6c0-2.2 1.8-4 4-4s4 1.8 4 4v0c0 2.2-1.8 4-4 4s-4-1.8-4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Musical notes */}
      <circle cx="6" cy="16" r="2" fill="currentColor" opacity="0.7" />
      <path
        d="M8 16V8l6-2v8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <circle cx="14" cy="14" r="2" fill="currentColor" opacity="0.7" />
      {/* 432 Hz indicator */}
      <path
        d="M16 18c0.5 0 1 0.5 1 1s-0.5 1-1 1-1-0.5-1-1 0.5-1 1-1"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  );
};