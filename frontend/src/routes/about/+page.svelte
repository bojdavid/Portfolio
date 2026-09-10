<script lang="ts">
  import AboutBioSection from "$lib/components/about/AboutBioSection.svelte";
  import CareerTimelineSection from "$lib/components/about/CareerTimelineSection.svelte";
  import InterestsSection from "$lib/components/about/InterestsSection.svelte";
  import ContactCtaSection from "$lib/components/about/ContactCtaSection.svelte";
</script>

<svelte:head>
  <title>About | Alex Rivers</title>
  <meta
    name="description"
    content="Background, career timeline, and interests of Alex Rivers, Senior Full-Stack Systems Engineer."
  />
</svelte:head>

<div class="flex flex-col gap-2 animate-in fade-in duration-300">
  <AboutBioSection />
  <CareerTimelineSection />
  <InterestsSection />
  <ContactCtaSection />
</div>
