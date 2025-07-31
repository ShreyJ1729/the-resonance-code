import React from 'react';
import { Music } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const MusicIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <Music className={className} size={size} />;
};