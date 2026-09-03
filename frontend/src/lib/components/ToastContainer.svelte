<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import { CheckCircle2, Info, AlertCircle, X } from 'lucide-svelte';
</script>

<div
  class="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none no-print"
  aria-live="polite"
>
  {#each $toast as item (item.id)}
    <div
      class="pointer-events-auto flex items-center justify-between gap-3 p-3.5 rounded-lg bg-surface border border-border shadow-2xl backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-bottom-3"
      class:border-primary={item.type === 'success'}
      class:border-accent={item.type === 'info'}
      class:border-error={item.type === 'error'}
    >
      <div class="flex items-center gap-2.5 min-w-0">
        {#if item.type === 'success'}
          <CheckCircle2 class="w-4 h-4 text-primary shrink-0" />
        {:else if item.type === 'info'}
          <Info class="w-4 h-4 text-accent shrink-0" />
        {:else}
          <AlertCircle class="w-4 h-4 text-error shrink-0" />
        {/if}
        <span class="text-xs font-mono text-text font-medium truncate">{item.message}</span>
      </div>
      <button
        type="button"
        onclick={() => toast.dismiss(item.id)}
        class="text-text-subtle hover:text-text transition-colors p-1"
        aria-label="Dismiss notification"
      >
        <X class="w-3.5 h-3.5" />
      </button>
    </div>
  {/each}
</div>
