<script lang="ts">
  import { Terminal, Pause, Play } from 'lucide-svelte';

  let {
    isPaused,
    onTogglePause
  }: {
    isPaused: boolean;
    onTogglePause: () => void;
  } = $props();
</script>

<div class="flex items-center justify-between px-4 py-2.5 bg-surface-subtle border-b border-border text-xs font-mono text-text-subtle select-none">
  <!-- Window Controls -->
  <div class="flex items-center gap-2">
    <span class="w-3 h-3 rounded-full bg-error/70 inline-block"></span>
    <span class="w-3 h-3 rounded-full bg-warning/70 inline-block"></span>
    <span class="w-3 h-3 rounded-full bg-success/70 inline-block"></span>
  </div>

  <!-- Terminal Title -->
  <div class="flex items-center gap-1.5 font-medium text-text-muted">
    <Terminal class="w-3.5 h-3.5 text-primary" />
    <span>bash — boj@lagos: ~/sandbox</span>
  </div>

  <!-- Pause / Resume Control -->
  <button
    type="button"
    onclick={onTogglePause}
    class="flex items-center gap-1.5 px-2 py-1 rounded bg-surface/80 border border-border/80 hover:border-primary/60 text-text-subtle hover:text-primary transition-all duration-200 cursor-pointer"
    title={isPaused ? 'Resume continuous animation' : 'Pause continuous animation'}
    aria-label={isPaused ? 'Resume continuous animation' : 'Pause continuous animation'}
  >
    {#if isPaused}
      <Play class="w-3 h-3 text-primary animate-pulse" />
      <span class="text-[10px] font-mono font-medium hidden sm:inline text-text-muted">Resume</span>
    {:else}
      <Pause class="w-3 h-3 text-accent" />
      <span class="text-[10px] font-mono font-medium hidden sm:inline text-text-muted">Pause</span>
    {/if}
  </button>
</div>
