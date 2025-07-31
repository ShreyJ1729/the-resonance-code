import React from 'react';
import { Sparkles } from 'lucide-react';

interface IconProps {
  className?: string;
  size?: number;
}

export const SparklesIcon: React.FC<IconProps> = ({ className = '', size = 24 }) => {
  return <Sparkles className={className} size={size} />;
};