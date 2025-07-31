import React from 'react';
import { Brain } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const BrainIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <Brain className={className} size={size} />;
};