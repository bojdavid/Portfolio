<script lang="ts">
  import { experienceData } from '$lib/data/experience';
  import { Briefcase } from 'lucide-svelte';
</script>

<section class="space-y-6 pt-10 border-t border-border">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // CAREER LOG
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The journey so far
    </h2>
  </div>

  <div class="space-y-6">
    {#each experienceData as exp}
      <div class="p-6 rounded-lg bg-surface border border-border hover:border-primary/40 transition-colors space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
          <h3 class="text-lg font-bold text-text">
            {exp.role} <span class="text-text-muted font-normal">at</span> <span class="text-primary">{exp.company}</span>
          </h3>
          <span class="font-mono text-xs text-text-subtle">
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
