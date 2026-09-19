<script lang="ts">
  import { techStackBadges } from '$lib/data/skills';
  import { fly } from 'svelte/transition';
  import { TRANSITION } from '$lib/constants/motion';
</script>

<section class="flex flex-col gap-6 py-8 border-t border-border/80">
  <div in:fly={TRANSITION.header} class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // INSTRUMENTATION
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The technology stack
    </h2>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
    {#each techStackBadges as badge, i}
      <div
        in:fly={TRANSITION.item(i)}
        class="flex items-center gap-2.5 p-3 rounded-md bg-surface border border-border hover:border-primary/70 hover:bg-surface-elevated hover:-translate-y-1 hover:shadow-md hover:shadow-primary/10 transition-all duration-200 group cursor-default"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 group-hover:shadow-[0_0_8px_rgba(57,255,20,0.8)] transition-all duration-200"></span>
        <span class="font-mono text-sm font-semibold text-text group-hover:text-primary transition-colors duration-200">
          {badge.name}
        </span>
      </div>
    {/each}
  </div>
</section>
