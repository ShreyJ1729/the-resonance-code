import React from 'react';
import { Waves } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const WaveIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <Waves className={className} size={size} />;
};