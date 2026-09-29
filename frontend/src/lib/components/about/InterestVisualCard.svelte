<script lang="ts">
  import { onMount } from 'svelte';
  import type { InterestVisualConfig } from '$lib/data/interestConfigs';
  import { STAGGER_DELAYS } from '$lib/data/interestConfigs';

  let {
    cfg,
    labelColor,
    index,
    total
  }: {
    cfg: InterestVisualConfig;
    labelColor: string;
    index: number;
    total: number;
  } = $props();

  let cardEl: HTMLElement | null = $state(null);
  let isVisible = $state(false);

  onMount(() => {
    if (!cardEl) return;
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { isVisible = e.isIntersecting; }); },
      { threshold: 0.2 }
    );
    observer.observe(cardEl);
    return () => observer.disconnect();
  });
</script>

<div
  bind:this={cardEl}
  class="w-full max-w-[420px] mx-auto rounded-2xl bg-surface/95 border border-border shadow-2xl overflow-hidden backdrop-blur-md flex flex-col transition-all duration-300 hover:border-primary/40 hover:shadow-primary/5"
>
  <!-- Titlebar -->
  <div class="flex items-center justify-between px-5 py-3 bg-surface-subtle/80 border-b border-border shrink-0">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-error/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-warning/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-success/70"></span>
    </div>
    <span class="font-mono text-[11px] text-text-subtle tracking-tight font-medium">{cfg.file}</span>
    <span class="w-2 h-2 rounded-full {cfg.dotColor} animate-pulse"></span>
  </div>

  <!-- Stats body -->
  <div class="flex-1 p-5 sm:p-6 font-mono text-xs flex flex-col justify-center gap-3 bg-gradient-to-br {cfg.bgGradient}">
    {#each cfg.stats as stat, idx}
      {@const delay = STAGGER_DELAYS[idx] ?? 'delay-600'}
      <div class="space-y-1">
        <div class="flex items-center justify-between text-[10px] text-text-subtle">
          <span>// {stat.label}</span>
          <span class="px-1.5 py-0.5 rounded text-[9px] border font-bold transition-opacity duration-500 {delay} {cfg.badgeClass} {isVisible ? 'opacity-100' : 'opacity-0'}">{stat.badge}</span>
        </div>
        <div class="h-9 px-3 rounded-lg border flex items-center justify-between transition-all duration-500 {delay} {isVisible ? 'border-border/60 bg-surface-elevated/75 shadow-sm' : 'border-border/30 bg-transparent'}">
          <span class="font-mono text-xs text-text transition-all duration-500 {delay} {isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}">{stat.value}</span>
          <span class="w-1.5 h-1.5 rounded-full {cfg.dotColor} transition-opacity duration-500 {delay} {isVisible ? 'opacity-100' : 'opacity-0'}"></span>
        </div>
      </div>
    {/each}
  </div>

  <!-- Footer strip -->
  <div class="px-5 py-2.5 bg-surface-subtle/70 border-t border-border flex items-center justify-between font-mono text-[10px] text-text-subtle shrink-0">
    <div class="flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full {cfg.dotColor}"></span>
      <span>{cfg.footer}</span>
    </div>
    <span class="{labelColor} font-semibold">// {index + 1}/{total}</span>
  </div>
</div>
