/**
 * Centralized Motion & Transition Tokens
 * Single source of truth for animation timings, delays, and Svelte transition configurations.
 */

export const TIMING = {
  instant: 100,
  fast: 200,
  page: 980,
  normal: 300,
  card: 650,
  relaxed: 900,
  slow: 1100,
  height: 700,
  toastNotice: 2000,
  toastTimeout: 3000
} as const;

export const DELAY = {
  none: 0,
  quick: 40,
  short: 50,
  medium: 100,
  staggerFast: 30,
  staggerNormal: 60,
  staggerRelaxed: 80,
  content: 180,
  footer: 240
} as const;

/**
 * Reusable Svelte transition configurations
 */
export const TRANSITION = {
  // Page entry transition
  page: {
    y: 10,
    duration: TIMING.page,
    delay: DELAY.short
  },

  // Status & badge entrance
  badge: {
    y: -8,
    duration: TIMING.normal,
    delay: DELAY.quick
  },

  // Header and title entrances
  header: {
    y: 12,
    duration: TIMING.card,
    delay: DELAY.medium
  },

  // Section card entrances with configurable stagger
  card: (index = 0) => ({
    y: 16,
    duration: TIMING.card,
    delay: DELAY.medium + index * DELAY.staggerRelaxed
  }),

  // Zigzag directional card entrance (alternating left/right slide)
  zigzagCard: (index = 0, isLeft = true) => ({
    x: isLeft ? -40 : 40,
    y: 8,
    duration: TIMING.card,
    delay: DELAY.medium + index * DELAY.staggerRelaxed
  }),

  // Subtle item entrances (e.g. badges, list items)
  item: (index = 0) => ({
    y: 12,
    duration: TIMING.normal,
    delay: DELAY.content + index * DELAY.staggerFast
  }),

  // Container or quote blocks
  block: {
    y: 16,
    duration: TIMING.card,
    delay: DELAY.content
  },

  // Call-to-action blocks
  cta: {
    y: 16,
    duration: TIMING.card,
    delay: DELAY.footer
  },

  // Terminal line entrance & exit
  terminalEntry: {
    y: 8,
    duration: TIMING.fast
  },
  terminalExit: {
    duration: TIMING.fast + 50
  },

  // Mobile menu drawer slide
  slideMenu: {
    duration: TIMING.fast + 50
  },

  // Toast notifications
  toastIn: {
    y: -24,
    x: 20,
    duration: TIMING.normal
  },
  toastOut: {
    x: 60,
    opacity: 0,
    duration: TIMING.fast
  },
  toastFlip: {
    duration: TIMING.fast + 50
  }
} as const;
