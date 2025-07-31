// Import custom icons
import { WaveIcon } from "./WaveIcon";
import { HeadphonesIcon } from "./HeadphonesIcon";
import { MusicIcon } from "./MusicIcon";
import { SparklesIcon } from "./SparklesIcon";
import { HeartPulseIcon } from "./HeartPulseIcon";
import { BrainIcon } from "./BrainIcon";
import { OmIcon } from "./OmIcon";
import { SoundWavesIcon } from "./SoundWavesIcon";
import { TuningForkIcon } from "./TuningForkIcon";
import { CrystalIcon } from "./CrystalIcon";
import { LotusIcon } from "./LotusIcon";
import { MeditationIcon } from "./MeditationIcon";

// Import Lucide React icons
import {
  Shield,
  Unlock,
  RefreshCw,
  Dna,
  Heart,
  Droplets,
  Eye,
  Sun,
  Moon,
  Target,
  Zap,
  Bed,
  Coins,
  ShieldCheck,
  Leaf,
  Repeat,
  Repeat1,
  List,
  ListMusic,
} from "lucide-react";

// Export icons individually
export {
  WaveIcon,
  HeadphonesIcon,
  MusicIcon,
  SparklesIcon,
  HeartPulseIcon,
  BrainIcon,
  OmIcon,
  SoundWavesIcon,
  TuningForkIcon,
  CrystalIcon,
  LotusIcon,
  MeditationIcon,
};

// Icon mapping for easy access
export const iconMap = {
  // Custom icons
  wave: WaveIcon,
  headphones: HeadphonesIcon,
  music: MusicIcon,
  sparkles: SparklesIcon,
  "heart-pulse": HeartPulseIcon,
  brain: BrainIcon,
  om: OmIcon,
  "sound-waves": SoundWavesIcon,
  "tuning-fork": TuningForkIcon,
  crystal: CrystalIcon,
  lotus: LotusIcon,
  meditation: MeditationIcon,

  // Lucide React icons
  shield: Shield,
  unlock: Unlock,
  "refresh-cw": RefreshCw,
  dna: Dna,
  heart: Heart,
  droplets: Droplets,
  eye: Eye,
  sun: Sun,
  moon: Moon,
  target: Target,
  zap: Zap,
  bed: Bed,
  coins: Coins,
  "shield-check": ShieldCheck,
  leaf: Leaf,
  repeat: Repeat,
  "repeat-1": Repeat1,
  list: List,
  "list-music": ListMusic,
} as const;

export type IconType = keyof typeof iconMap;
