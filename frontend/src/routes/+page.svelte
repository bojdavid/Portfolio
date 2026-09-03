<script lang="ts">
  import HeroSection from '$lib/components/home/HeroSection.svelte';
  import ExpertiseSection from '$lib/components/home/ExpertiseSection.svelte';
  import PerspectiveSection from '$lib/components/home/PerspectiveSection.svelte';
  import TechStackSection from '$lib/components/home/TechStackSection.svelte';
  import TerminalSandbox from '$lib/components/home/TerminalSandbox.svelte';
</script>

<div class="flex flex-col gap-2 animate-in fade-in duration-300">
  <HeroSection />
  <ExpertiseSection />
  <PerspectiveSection />
  <TechStackSection />
  <TerminalSandbox />
</div>
