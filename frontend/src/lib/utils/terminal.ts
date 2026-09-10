import { terminalDefaultOutputs } from '$lib/data/skills';
import { profileData } from '$lib/data/profile';

export interface HistoryEntry {
  cmd: string;
  output: string;
}

export const automatedSequence = [
  {
    cmd: 'curl -s https://api.bojdavid.dev/skills/highlights',
    output: terminalDefaultOutputs['curl -s https://api.bojdavid.dev/skills/highlights']
  },
  {
    cmd: 'node --version',
    output: 'v22.14.0'
  },
  {
    cmd: 'whoami',
    output: `${profileData.handle.split('.')[0]} (${profileData.name} - ${profileData.role} @ ${profileData.location})`
  },
  {
    cmd: 'projects',
    output: 'AetherDb Engine, SpectraFlow, CargoSync API, NetGage CLI, Helix Auth, Pillar UI Kit'
  }
];

export function executeCommand(raw: string): { output: string; isClear: boolean } {
  const trimmed = raw.trim();
  const lower = trimmed.toLowerCase();

  if (lower === 'clear') {
    return { output: '', isClear: true };
  }

  if (lower === 'help') {
    return {
      output: 'Available commands: help, highlights, node --version, whoami, projects, clear',
      isClear: false
    };
  }

  if (lower === 'highlights' || lower.includes('highlights')) {
    return {
      output: terminalDefaultOutputs['curl -s https://api.bojdavid.dev/skills/highlights'],
      isClear: false
    };
  }

  if (lower.includes('node')) {
    return { output: 'v22.14.0', isClear: false };
  }

  if (lower === 'whoami') {
    return {
      output: `${profileData.handle.split('.')[0]} (${profileData.name} - ${profileData.role} @ ${profileData.location})`,
      isClear: false
    };
  }

  if (lower === 'projects') {
    return {
      output: 'AetherDb Engine, SpectraFlow, CargoSync API, NetGage CLI, Helix Auth, Pillar UI Kit',
      isClear: false
    };
  }

  return {
    output: `command not found: ${trimmed}. Type 'help' for available commands.`,
    isClear: false
  };
}

export function getRandomTypingSpeed(min = 35, jitter = 20): number {
  return Math.floor(Math.random() * jitter) + min;
}
