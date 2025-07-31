// Import all icons first
import { WaveIcon } from './WaveIcon';
import { HeadphonesIcon } from './HeadphonesIcon';
import { MusicIcon } from './MusicIcon';
import { SparklesIcon } from './SparklesIcon';
import { HeartPulseIcon } from './HeartPulseIcon';
import { BrainIcon } from './BrainIcon';

// Export icons individually
export { WaveIcon, HeadphonesIcon, MusicIcon, SparklesIcon, HeartPulseIcon, BrainIcon };

// Icon mapping for easy access
export const iconMap = {
  wave: WaveIcon,
  headphones: HeadphonesIcon,
  music: MusicIcon,
  sparkles: SparklesIcon,
  'heart-pulse': HeartPulseIcon,
  brain: BrainIcon,
} as const;

export type IconType = keyof typeof iconMap;