import React from 'react';
import { HeartPulse } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HeartPulseIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <HeartPulse className={className} size={size} />;
};