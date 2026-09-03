<script lang="ts">
  import type { Project } from '$lib/types';
  import { ArrowRight } from 'lucide-svelte';

  let { project }: { project: Project } = $props();
</script>

<a
  href={`/projects/${project.slug}`}
  class="flex flex-col justify-between p-6 rounded-lg bg-surface border border-border hover:border-primary/60 hover:bg-surface-elevated transition-all duration-200 group h-full"
>
  <div class="space-y-3">
    <!-- Card Header -->
    <div class="flex items-start justify-between gap-2">
      <h3 class="text-xl font-bold text-text group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle border border-border text-text-muted shrink-0">
        {project.timeline}
      </span>
    </div>

    <!-- Tagline -->
    <p class="text-sm text-text-muted leading-relaxed line-clamp-3">
      {project.tagline}
    </p>
  </div>

  <!-- Footer with Tags & CTA -->
  <div class="pt-6 space-y-4">
    <div class="flex items-center flex-wrap gap-1.5">
      {#each project.tags as tag}
        <span class="px-2 py-0.5 rounded text-[11px] font-mono bg-surface-subtle text-text-muted border border-border/60">
          {tag}
        </span>
      {/each}
    </div>

    <div class="flex items-center gap-1.5 font-mono text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
      <span>Inspect details</span>
      <ArrowRight class="w-3.5 h-3.5" />
    </div>
  </div>
</a>
