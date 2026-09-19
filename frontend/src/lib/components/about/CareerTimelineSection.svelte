<script lang="ts">
  import { experienceData } from '$lib/data/experience';
  import { fly } from 'svelte/transition';
  import { TRANSITION } from '$lib/constants/motion';
</script>

<section class="space-y-6 pt-10 border-t border-border">
  <div in:fly={TRANSITION.header} class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // CAREER LOG
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The journey so far
    </h2>
  </div>

  <div class="relative pl-6 sm:pl-8 before:absolute before:left-2 sm:before:left-3 before:top-3 before:bottom-3 before:w-[2px] before:bg-border space-y-6">
    {#each experienceData as exp, i}
      <div
        in:fly={TRANSITION.card(i)}
        class="relative p-6 rounded-lg bg-surface border border-border hover:border-primary/60 hover:bg-surface-elevated hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 space-y-3 group cursor-default"
      >
        <!-- Connector Dot on the vertical line -->
        <span class="absolute -left-6 sm:-left-8 top-7 -translate-x-1/2 w-3 h-3 rounded-full bg-surface border-2 border-border group-hover:border-primary group-hover:bg-primary group-hover:scale-125 transition-all duration-300"></span>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 class="text-lg font-bold text-text group-hover:text-primary transition-colors duration-200">
            {exp.role} <span class="text-text-muted font-normal">at</span> <span class="text-primary">{exp.company}</span>
          </h3>
          <span class="font-mono text-xs text-text-subtle group-hover:text-text-muted transition-colors">
            {exp.period}
          </span>
        </div>

        <p class="text-sm text-text-muted leading-relaxed">
          {exp.summary}
        </p>
      </div>
    {/each}
  </div>
</section>
