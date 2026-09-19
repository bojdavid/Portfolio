<script lang="ts">
  import { projectsData } from "$lib/data/projects";
  import ProjectCard from "$lib/components/projects/ProjectCard.svelte";
  import { profileData } from "$lib/data/profile";
  import { typewriter } from "$lib/utils/typewriter";
  import { reveal } from "$lib/actions/reveal";
  import { TRANSITION } from "$lib/constants/motion";
</script>

<svelte:head>
  <title>Projects | {profileData.name}</title>
  <meta name="description" content={profileData.pages.projects.description} />
</svelte:head>

<div class="flex flex-col gap-8">
  <!-- Header Section -->
  <div use:reveal={TRANSITION.header} class="space-y-2">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // THE REPOSITORY
    </span>
    <h1
      use:typewriter={{ text: "Selected Work", speed: 25, delay: 150 }}
      class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight min-h-[1.2em]"
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
    {#each projectsData as project, i}
      <div use:reveal={TRANSITION.card(i)}>
        <ProjectCard {project} />
      </div>
    {/each}
  </div>
</div>
