<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import { CheckCircle2, Info, AlertCircle, X } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
</script>

<div
  class="fixed top-6 right-6 z-50 flex flex-col gap-2.5 max-w-sm w-full pointer-events-none no-print"
  aria-live="polite"
>
  {#each $toast as item (item.id)}
    <div
      animate:flip={{ duration: 250 }}
      in:fly={{ y: -24, x: 20, duration: 300 }}
      out:fly={{ x: 60, opacity: 0, duration: 200 }}
      class="pointer-events-auto relative overflow-hidden flex items-center justify-between gap-3 p-3.5 rounded-lg bg-surface/95 border border-border shadow-2xl backdrop-blur-md hover:border-primary/60 transition-all duration-200"
      class:border-primary={item.type === 'success'}
      class:border-accent={item.type === 'info'}
      class:border-error={item.type === 'error'}
    >
      <div class="flex items-center gap-2.5 min-w-0">
        {#if item.type === 'success'}
          <CheckCircle2 class="w-4 h-4 text-primary shrink-0 animate-in zoom-in duration-200" />
        {:else if item.type === 'info'}
          <Info class="w-4 h-4 text-accent shrink-0 animate-in zoom-in duration-200" />
        {:else}
          <AlertCircle class="w-4 h-4 text-error shrink-0 animate-in zoom-in duration-200" />
        {/if}
        <span class="text-xs font-mono text-text font-medium truncate">
          {item.message}
        </span>
      </div>

      <button
        type="button"
        onclick={() => toast.dismiss(item.id)}
        class="text-text-subtle hover:text-text transition-colors p-1 rounded hover:bg-surface-elevated shrink-0"
        aria-label="Dismiss notification"
      >
        <X class="w-3.5 h-3.5" />
      </button>

      <!-- Auto-dismiss countdown bar -->
      {#if item.duration && item.duration > 0}
        <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-border/40 overflow-hidden">
          <div
            class="h-full origin-left toast-progress"
            class:bg-primary={item.type === 'success'}
            class:bg-accent={item.type === 'info'}
            class:bg-error={item.type === 'error'}
            style="animation-duration: {item.duration}ms;"
          ></div>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  @keyframes toastProgress {
    from {
      transform: scaleX(1);
    }
    to {
      transform: scaleX(0);
    }
  }

  .toast-progress {
    animation: toastProgress linear forwards;
  }
</style>
