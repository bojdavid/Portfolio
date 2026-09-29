export interface InterestStat {
  label: string;
  value: string;
  badge: string;
}

export interface InterestVisualConfig {
  dotColor: string;
  badgeClass: string;
  bgGradient: string;
  stats: InterestStat[];
  footer: string;
  file: string;
}

export const interestConfigs: Record<string, InterestVisualConfig> = {
  Trophy: {
    dotColor: 'bg-primary',
    badgeClass: 'text-primary border-primary/30 bg-primary/10',
    bgGradient: 'from-primary/8 via-surface to-surface',
    file: 'athlete.log',
    footer: 'COMPETITIVE_RECORD: VERIFIED',
    stats: [
      { label: 'NUGA MEDALS', value: '3× Medalist — 2025 Games', badge: 'GOLD' },
      { label: 'TITLES', value: 'Open Weight + Inter-Faculty', badge: 'CHAMPION' },
      { label: 'ROLE', value: 'Team Captain — UI Judo', badge: 'ACTIVE' }
    ]
  },
  Music: {
    dotColor: 'bg-accent',
    badgeClass: 'text-accent border-accent/30 bg-accent/10',
    bgGradient: 'from-accent/8 via-surface to-surface',
    file: 'interests.json',
    footer: 'PASSIONS: LOADED',
    stats: [
      { label: 'INSTRUMENT', value: 'Guitar — Classical & Fingerstyle', badge: 'PLAYING' },
      { label: 'GENRE', value: 'Thriller Cinema & Literature', badge: 'READING' },
      { label: 'APPRECIATION', value: 'Fine Art & Visual Culture', badge: 'EXPLORING' }
    ]
  },
  Compass: {
    dotColor: 'bg-success',
    badgeClass: 'text-success border-success/30 bg-success/10',
    bgGradient: 'from-success/8 via-surface to-surface',
    file: 'travel.map',
    footer: 'HORIZONS: EXPANDING',
    stats: [
      { label: 'MISSION', value: 'New Environments & Cultures', badge: 'ONGOING' },
      { label: 'MOTIVATION', value: 'Broaden Perspectives', badge: 'CORE' },
      { label: 'MODE', value: 'Spontaneous & Intentional', badge: 'BOTH' }
    ]
  }
};

export const LABEL_COLORS = ['text-primary', 'text-accent', 'text-success'] as const;
export const STAGGER_DELAYS = ['delay-150', 'delay-400', 'delay-600'] as const;
