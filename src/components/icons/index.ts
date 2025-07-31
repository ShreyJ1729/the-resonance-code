// Import all icons first
import { WaveIcon } from './WaveIcon';
import { HeadphonesIcon } from './HeadphonesIcon';
import { MusicIcon } from './MusicIcon';
import { SparklesIcon } from './SparklesIcon';
import { HeartPulseIcon } from './HeartPulseIcon';
import { BrainIcon } from './BrainIcon';
import { OmIcon } from './OmIcon';
import { SoundWavesIcon } from './SoundWavesIcon';
import { TuningForkIcon } from './TuningForkIcon';
import { CrystalIcon } from './CrystalIcon';
import { LotusIcon } from './LotusIcon';
import { MeditationIcon } from './MeditationIcon';

// Export icons individually
export { WaveIcon, HeadphonesIcon, MusicIcon, SparklesIcon, HeartPulseIcon, BrainIcon, OmIcon, SoundWavesIcon, TuningForkIcon, CrystalIcon, LotusIcon, MeditationIcon };

// Icon mapping for easy access
export const iconMap = {
  wave: WaveIcon,
  headphones: HeadphonesIcon,
  music: MusicIcon,
  sparkles: SparklesIcon,
  'heart-pulse': HeartPulseIcon,
  brain: BrainIcon,
  om: OmIcon,
  'sound-waves': SoundWavesIcon,
  'tuning-fork': TuningForkIcon,
  crystal: CrystalIcon,
  lotus: LotusIcon,
  meditation: MeditationIcon,
} as const;

export type IconType = keyof typeof iconMap;