import React from 'react';
import { Headphones } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const HeadphonesIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <Headphones className={className} size={size} />;
};