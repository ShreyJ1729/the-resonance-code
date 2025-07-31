// Color utility functions for safe CSS class selection
// This prevents dynamic class generation that gets purged by Tailwind

export interface ColorClasses {
  background: string;
  backgroundHover: string;
  text: string;
  textHover: string;
  border: string;
  focusRing: string;
}

export const colorMap: Record<string, ColorClasses> = {
  'primary-500': {
    background: 'bg-primary-500/10',
    backgroundHover: 'hover:bg-primary-500/20',
    text: 'text-primary-500',
    textHover: 'hover:text-primary-600',
    border: 'border-primary-500/20',
    focusRing: 'focus:ring-primary-500/30'
  },
  'primary-600': {
    background: 'bg-primary-600/10',
    backgroundHover: 'hover:bg-primary-600/20',
    text: 'text-primary-600',
    textHover: 'hover:text-primary-700',
    border: 'border-primary-600/20',
    focusRing: 'focus:ring-primary-600/30'
  },
  'secondary-500': {
    background: 'bg-secondary-500/10',
    backgroundHover: 'hover:bg-secondary-500/20',
    text: 'text-secondary-500',
    textHover: 'hover:text-secondary-600',
    border: 'border-secondary-500/20',
    focusRing: 'focus:ring-secondary-500/30'
  },
  'secondary-600': {
    background: 'bg-secondary-600/10',
    backgroundHover: 'hover:bg-secondary-600/20',
    text: 'text-secondary-600',
    textHover: 'hover:text-secondary-700',
    border: 'border-secondary-600/20',
    focusRing: 'focus:ring-secondary-600/30'
  },
  'coral-500': {
    background: 'bg-coral-500/10',
    backgroundHover: 'hover:bg-coral-500/20',
    text: 'text-coral-500',
    textHover: 'hover:text-coral-600',
    border: 'border-coral-500/20',
    focusRing: 'focus:ring-coral-500/30'
  },
  'coral-600': {
    background: 'bg-coral-600/10',
    backgroundHover: 'hover:bg-coral-600/20',
    text: 'text-coral-600',
    textHover: 'hover:text-coral-700',
    border: 'border-coral-600/20',
    focusRing: 'focus:ring-coral-600/30'
  },
  'teal-500': {
    background: 'bg-teal-500/10',
    backgroundHover: 'hover:bg-teal-500/20',
    text: 'text-teal-500',
    textHover: 'hover:text-teal-600',
    border: 'border-teal-500/20',
    focusRing: 'focus:ring-teal-500/30'
  },
  'teal-600': {
    background: 'bg-teal-600/10',
    backgroundHover: 'hover:bg-teal-600/20',
    text: 'text-teal-600',
    textHover: 'hover:text-teal-700',
    border: 'border-teal-600/20',
    focusRing: 'focus:ring-teal-600/30'
  },
  'amber-500': {
    background: 'bg-amber-500/10',
    backgroundHover: 'hover:bg-amber-500/20',
    text: 'text-amber-500',
    textHover: 'hover:text-amber-600',
    border: 'border-amber-500/20',
    focusRing: 'focus:ring-amber-500/30'
  },
  'amber-600': {
    background: 'bg-amber-600/10',
    backgroundHover: 'hover:bg-amber-600/20',
    text: 'text-amber-600',
    textHover: 'hover:text-amber-700',
    border: 'border-amber-600/20',
    focusRing: 'focus:ring-amber-600/30'
  },
  'indigo-500': {
    background: 'bg-indigo-500/10',
    backgroundHover: 'hover:bg-indigo-500/20',
    text: 'text-indigo-500',
    textHover: 'hover:text-indigo-600',
    border: 'border-indigo-500/20',
    focusRing: 'focus:ring-indigo-500/30'
  },
  'indigo-600': {
    background: 'bg-indigo-600/10',
    backgroundHover: 'hover:bg-indigo-600/20',
    text: 'text-indigo-600',
    textHover: 'hover:text-indigo-700',
    border: 'border-indigo-600/20',
    focusRing: 'focus:ring-indigo-600/30'
  }
};

/**
 * Get safe CSS classes for a given color
 * @param color - The color key (e.g., 'primary-500', 'coral-600')
 * @returns ColorClasses object with all necessary CSS classes
 */
export function getColorClasses(color: string): ColorClasses {
  return colorMap[color] || colorMap['primary-500']; // fallback to primary-500
}

/**
 * Combine multiple CSS classes safely
 * @param classes - Array of CSS class strings
 * @returns Combined class string
 */
export function combineClasses(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Get background class with opacity for a color
 * @param color - The color key
 * @param opacity - Optional opacity level (10, 20, etc.)
 * @returns Background CSS class
 */
export function getBackgroundClass(color: string, opacity: number = 10): string {
  const colorClasses = getColorClasses(color);
  return opacity === 20 ? colorClasses.backgroundHover.replace('hover:', '') : colorClasses.background;
}

/**
 * Get text class for a color
 * @param color - The color key
 * @param isHovered - Whether to use hover state
 * @returns Text CSS class
 */
export function getTextClass(color: string, isHovered: boolean = false): string {
  const colorClasses = getColorClasses(color);
  return isHovered ? colorClasses.textHover.replace('hover:', '') : colorClasses.text;
}

/**
 * Get border class for a color
 * @param color - The color key
 * @returns Border CSS class
 */
export function getBorderClass(color: string): string {
  const colorClasses = getColorClasses(color);
  return colorClasses.border;
}