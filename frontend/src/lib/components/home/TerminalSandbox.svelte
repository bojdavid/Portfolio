<script lang="ts">
  import { terminalDefaultOutputs } from '$lib/data/skills';
  import { profileData } from '$lib/data/profile';
  import { Terminal, CornerDownLeft } from 'lucide-svelte';

  interface HistoryEntry {
    cmd: string;
    output: string;
  }

  let commandInput = $state('');
  let history = $state<HistoryEntry[]>([
    {
      cmd: 'curl -s https://api.bojdavid.dev/skills/highlights',
      output: terminalDefaultOutputs['curl -s https://api.bojdavid.dev/skills/highlights']
    },
    {
      cmd: 'node --version',
      output: 'v22.14.0'
    }
  ]);

  function handleCommandSubmit(e: SubmitEvent) {
    e.preventDefault();
    const raw = commandInput.trim();
    if (!raw) return;

    if (raw.toLowerCase() === 'clear') {
      history = [];
      commandInput = '';
      return;
    }

    let output = '';
    const lower = raw.toLowerCase();

    if (lower === 'help') {
      output = 'Available commands: help, highlights, node --version, whoami, projects, clear';
    } else if (lower === 'highlights' || lower.includes('highlights')) {
      output = terminalDefaultOutputs['curl -s https://api.bojdavid.dev/skills/highlights'];
    } else if (lower.includes('node')) {
      output = 'v22.14.0';
    } else if (lower === 'whoami') {
      output = `${profileData.handle.split('.')[0]} (${profileData.name} - ${profileData.role} @ ${profileData.location})`;
    } else if (lower === 'projects') {
      output = 'AetherDb Engine, SpectraFlow, CargoSync API, NetGage CLI, Helix Auth, Pillar UI Kit';
    } else {
      output = `command not found: ${raw}. Type 'help' for available commands.`;
    }

    history = [...history, { cmd: raw, output }];
    commandInput = '';
  }
</script>

<section class="flex flex-col gap-6 py-8 border-t border-border/80">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // PLAYGROUND
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The interactive sandbox
    </h2>
  </div>

  <div class="rounded-lg bg-surface border border-border shadow-2xl overflow-hidden">
    <!-- Window Bar -->
    <div class="flex items-center justify-between px-4 py-2.5 bg-surface-subtle border-b border-border text-xs font-mono text-text-subtle">
      <div class="flex items-center gap-2">
        <span class="w-3 h-3 rounded-full bg-error/70 inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-warning/70 inline-block"></span>
        <span class="w-3 h-3 rounded-full bg-success/70 inline-block"></span>
      </div>
      <div class="flex items-center gap-1.5 font-medium text-text-muted">
        <Terminal class="w-3.5 h-3.5 text-primary" />
        <span>bash — boj@lagos: ~/sandbox</span>
      </div>
      <div class="w-8"></div>
    </div>

    <!-- Terminal Content -->
    <div class="p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 max-h-[380px] overflow-y-auto bg-background/90">
      {#each history as item}
        <div class="space-y-1.5">
          <div class="flex items-center gap-2 text-text">
            <span class="text-primary font-bold">$</span>
            <span>{item.cmd}</span>
          </div>
          <pre class="text-text-muted whitespace-pre-wrap pl-4 font-mono leading-relaxed border-l border-border/60">{item.output}</pre>
        </div>
      {/each}

      <!-- Interactive Input -->
      <form onsubmit={handleCommandSubmit} class="flex items-center gap-2 pt-1">
        <span class="text-primary font-bold">$</span>
        <input
          type="text"
          bind:value={commandInput}
          placeholder="type 'help' or any command..."
          class="flex-1 bg-transparent text-text outline-none font-mono text-xs sm:text-sm placeholder:text-text-subtle/50"
          aria-label="Terminal command input"
        />
        <button
          type="submit"
          class="p-1 text-text-subtle hover:text-primary transition-colors"
          aria-label="Run command"
        >
          <CornerDownLeft class="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  </div>
</section>
