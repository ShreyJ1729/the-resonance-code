// Utility to convert hex color to RGB values for inline styles
const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Utility to get inline styles for hex colors
export const getHexColorStyles = (hexColor: string) => {
  const rgb = hexToRgb(hexColor);
  if (!rgb) return null;
  
  return {
    bgColor: hexColor,
    bgColorLight: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.1)`,
    bgColorHover: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`,
    textColor: hexColor,
    borderColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.3)`,
    ringColor: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)`
  };
};

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
    // Sacred Golden - Solfeggio Frequencies
    'golden': {
      bg: 'bg-yellow-500',
      bgLight: 'bg-yellow-50',
      bgHover: 'bg-yellow-100',
      text: 'text-yellow-600',
      border: 'border-yellow-300',
      ring: 'ring-yellow-200'
    },
    // Ocean Blue - Binaural Beats  
    'ocean': {
      bg: 'bg-blue-500',
      bgLight: 'bg-blue-50',
      bgHover: 'bg-blue-100',
      text: 'text-blue-600',
      border: 'border-blue-300',
      ring: 'ring-blue-200'
    },
    // Warm Amber - 432 Collections
    'amber': {
      bg: 'bg-amber-500',
      bgLight: 'bg-amber-50',
      bgHover: 'bg-amber-100',
      text: 'text-amber-600',
      border: 'border-amber-300',
      ring: 'ring-amber-200'
    },
    // Mystical Purple - Special Frequencies
    'purple': {
      bg: 'bg-purple-500',
      bgLight: 'bg-purple-50',
      bgHover: 'bg-purple-100',
      text: 'text-purple-600',
      border: 'border-purple-300',
      ring: 'ring-purple-200'
    },
    // Healing Green - Wellness & Healing
    'green': {
      bg: 'bg-emerald-500',
      bgLight: 'bg-emerald-50',
      bgHover: 'bg-emerald-100',
      text: 'text-emerald-600',
      border: 'border-emerald-300',
      ring: 'ring-emerald-200'
    },
    // Serene Indigo - Meditation & Mindfulness
    'indigo': {
      bg: 'bg-indigo-500',
      bgLight: 'bg-indigo-50',
      bgHover: 'bg-indigo-100',
      text: 'text-indigo-600',
      border: 'border-indigo-300',
      ring: 'ring-indigo-200'
    },
    // Legacy colors for backwards compatibility
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

  return colorMap[colorKey] || colorMap['golden']; // fallback to golden
};