<script lang="ts">
  import { ArrowLeft } from 'lucide-svelte';
  import ProjectCodeBlock from '$lib/components/projects/ProjectCodeBlock.svelte';
  import ProjectSidebar from '$lib/components/projects/ProjectSidebar.svelte';
  import type { PageData } from './$types';

  let { data }: { data: PageData } = $props();
  let project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.title} | Alex Rivers</title>
  <meta name="description" content={project.tagline} />
</svelte:head>

<div class="flex flex-col gap-8 animate-in fade-in duration-300">
  <!-- Back Link -->
  <div>
    <a
      href="/projects"
      class="inline-flex items-center gap-2 font-mono text-xs text-text-muted hover:text-primary transition-colors"
    >
      <ArrowLeft class="w-3.5 h-3.5" />
      <span>All Projects</span>
    </a>
  </div>

  <!-- Detail Header -->
  <div class="space-y-3 border-b border-border pb-8">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono">
      <span class="w-2 h-2 rounded-full bg-primary"></span>
      <span class="text-primary font-bold">{project.status}</span>
    </div>

    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight">
      {project.title}
    </h1>

    <div class="font-mono text-xs sm:text-sm text-text-subtle">
      Timeline: {project.timeline}
    </div>
  </div>

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <!-- Left Column: Articles & Code -->
    <div class="lg:col-span-2 space-y-10">
      <!-- Overview Section -->
      <section class="space-y-4">
        <h2 class="text-xl sm:text-2xl font-bold text-text">Overview</h2>
        <div class="space-y-4 text-base text-text-muted leading-relaxed">
          {#each project.overview as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </section>

      <!-- Inspiration & Origin -->
      {#if project.inspiration}
        <section class="space-y-4 border-t border-border pt-8">
          <h2 class="text-xl sm:text-2xl font-bold text-text">Inspiration & Origin</h2>
          <p class="text-base text-text-muted leading-relaxed">
            {project.inspiration}
          </p>
        </section>
      {/if}

      <!-- How to Run -->
      {#if project.runCommands && project.runCommands.length > 0}
        <section class="space-y-4 border-t border-border pt-8">
          <h2 class="text-xl sm:text-2xl font-bold text-text">How to Run</h2>
          <ProjectCodeBlock commands={project.runCommands} />
        </section>
      {/if}
    </div>

    <!-- Right Column: Sidebar Specs -->
    <div class="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10">
      <ProjectSidebar {project} />
    </div>
  </div>
</div>
