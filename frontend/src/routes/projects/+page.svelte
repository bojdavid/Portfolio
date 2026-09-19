<script lang="ts">
  import { projectsData } from "$lib/data/projects";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import { profileData } from "$lib/data/profile";
</script>

<svelte:head>
  <title>Projects | {profileData.name}</title>
  <meta name="description" content={profileData.pages.projects.description} />
</svelte:head>

<div class="flex flex-col gap-8 animate-in fade-in duration-300">
  <!-- Header Section -->
  <div class="space-y-2">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // THE REPOSITORY
    </span>
    <h1
      class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight"
    >
      Selected Work
    </h1>
    <p class="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
      A curated list of applications, distributed platforms, and developer
      tooling I have engineered, tested, and shipped. Click into detail views to
      inspect the architectures.
    </p>
  </div>

  <!-- Projects Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {#each projectsData as project}
      <ProjectCard {project} />
    {/each}
  </div>
</div>
