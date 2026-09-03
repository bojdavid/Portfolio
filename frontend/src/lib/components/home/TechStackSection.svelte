<script lang="ts">
  import { techStackBadges } from '$lib/data/skills';
  import { Cpu } from 'lucide-svelte';
</script>

<section class="flex flex-col gap-6 py-8 border-t border-border/80">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // INSTRUMENTATION
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The technology stack
    </h2>
  </div>

  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
    {#each techStackBadges as badge}
      <div
        class="flex items-center gap-2.5 p-3 rounded-md bg-surface border border-border hover:border-primary/50 hover:bg-surface-elevated transition-all duration-200 group"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-primary/60 group-hover:bg-primary transition-colors"></span>
        <span class="font-mono text-sm font-semibold text-text group-hover:text-primary transition-colors">
          {badge.name}
        </span>
      </div>
    {/each}
  </div>
</section>
