<script lang="ts">
  import { ArrowLeft } from "lucide-svelte";
  import ProjectCodeBlock from "$lib/components/projects/ProjectCodeBlock.svelte";
  import ProjectSidebar from "$lib/components/projects/ProjectSidebar.svelte";
  import type { PageData } from "./$types";
  import { profileData } from "$lib/data/profile";
  import { typewriter } from "$lib/utils/typewriter";
  import { reveal } from "$lib/actions/reveal";
  import { TRANSITION } from "$lib/constants/motion";

  let { data }: { data: PageData } = $props();
  let project = $derived(data.project);
</script>

<svelte:head>
  <title>{project.title} | {profileData.name}</title>
  <meta name="description" content={project.tagline} />
</svelte:head>

<div class="flex flex-col gap-8">
  <!-- Back Link -->
  <div use:reveal={TRANSITION.badge}>
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
    <div
      use:reveal={TRANSITION.item(0)}
      class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono"
    >
      <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span class="text-primary font-bold">{project.status}</span>
    </div>

    <h1
      use:typewriter={{ text: project.title, speed: 30, delay: 150 }}
      class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight min-h-[1.2em]"
    >
      {project.title}
    </h1>

    <div use:reveal={TRANSITION.item(2)} class="font-mono text-xs sm:text-sm text-text-subtle">
      Timeline: {project.timeline}
    </div>
  </div>

  <!-- Main Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
    <!-- Left Column: Articles & Code -->
    <div class="lg:col-span-2 space-y-10">
      <!-- Overview Section -->
      <section use:reveal={TRANSITION.block} class="space-y-4">
        <h2 class="text-xl sm:text-2xl font-bold text-text">Overview</h2>
        <div class="space-y-4 text-base text-text-muted leading-relaxed">
          {#each project.overview as paragraph}
            <p>{paragraph}</p>
          {/each}
        </div>
      </section>

      <!-- Inspiration & Origin -->
      {#if project.inspiration}
        <section use:reveal={TRANSITION.block} class="space-y-4 border-t border-border pt-8">
          <h2 class="text-xl sm:text-2xl font-bold text-text">
            Inspiration & Origin
          </h2>
          <p class="text-base text-text-muted leading-relaxed">
            {project.inspiration}
          </p>
        </section>
      {/if}

      <!-- How to Run -->
      {#if project.runCommands && project.runCommands.length > 0}
        <section use:reveal={TRANSITION.block} class="space-y-4 border-t border-border pt-8">
          <h2 class="text-xl sm:text-2xl font-bold text-text">How to Run</h2>
          <ProjectCodeBlock commands={project.runCommands} />
        </section>
      {/if}
    </div>

    <!-- Right Column: Sidebar Specs -->
    <div
      use:reveal={TRANSITION.zigzagCard(1, false)}
      class="lg:col-span-1 border-t lg:border-t-0 lg:border-l border-border pt-8 lg:pt-0 lg:pl-10"
    >
      <ProjectSidebar {project} />
    </div>
  </div>
</div>
