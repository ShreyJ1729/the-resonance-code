export { WaveIcon } from './WaveIcon';
export { HeadphonesIcon } from './HeadphonesIcon';
export { MusicIcon } from './MusicIcon';
export { SparklesIcon } from './SparklesIcon';
export { HeartPulseIcon } from './HeartPulseIcon';
export { BrainIcon } from './BrainIcon';

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