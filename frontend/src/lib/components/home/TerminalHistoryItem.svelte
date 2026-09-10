<script lang="ts">
  import type { HistoryEntry } from '$lib/utils/terminal';
  import { fly, fade } from 'svelte/transition';

  let { item }: { item: HistoryEntry } = $props();
</script>

<div in:fly={{ y: 8, duration: 200 }} out:fade={{ duration: 250 }} class="space-y-1.5">
  <div class="flex items-center gap-2 text-text">
    <span class="text-primary font-bold select-none">$</span>
    <span>{item.cmd}</span>
  </div>
  <pre class="text-text-muted whitespace-pre-wrap pl-4 font-mono leading-relaxed border-l border-border/60">{item.output}</pre>
</div>
