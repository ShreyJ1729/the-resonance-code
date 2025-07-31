// Utility to map data colors to proper Tailwind CSS classes
export const getColorClasses = (colorKey: string) => {
  const colorMap: Record<string, {
    bg: string;
    bgLight: string;
    bgHover: string;
    text: string;
    border: string;
    ring: string;
  }> = {
    'primary-500': {
      bg: 'bg-primary-500',
      bgLight: 'bg-primary-500/10',
      bgHover: 'bg-primary-500/20',
      text: 'text-primary-500',
      border: 'border-primary-500/30',
      ring: 'ring-primary-500/20'
    },
    'primary-600': {
      bg: 'bg-primary-600',
      bgLight: 'bg-primary-600/10',
      bgHover: 'bg-primary-600/20',
      text: 'text-primary-600',
      border: 'border-primary-600/30',
      ring: 'ring-primary-600/20'
    },
    'secondary-500': {
      bg: 'bg-secondary-500',
      bgLight: 'bg-secondary-500/10',
      bgHover: 'bg-secondary-500/20',
      text: 'text-secondary-500',
      border: 'border-secondary-500/30',
      ring: 'ring-secondary-500/20'
    },
    'secondary-600': {
      bg: 'bg-secondary-600',
      bgLight: 'bg-secondary-600/10',
      bgHover: 'bg-secondary-600/20',
      text: 'text-secondary-600',
      border: 'border-secondary-600/30',
      ring: 'ring-secondary-600/20'
    },
    'coral-500': {
      bg: 'bg-coral-500',
      bgLight: 'bg-coral-500/10',
      bgHover: 'bg-coral-500/20',
      text: 'text-coral-500',
      border: 'border-coral-500/30',
      ring: 'ring-coral-500/20'
    },
    'coral-600': {
      bg: 'bg-coral-600',
      bgLight: 'bg-coral-600/10',
      bgHover: 'bg-coral-600/20',
      text: 'text-coral-600',
      border: 'border-coral-600/30',
      ring: 'ring-coral-600/20'
    }
  };

  return colorMap[colorKey] || colorMap['primary-500']; // fallback to primary
};