<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import ContactCard from '$lib/components/contact/ContactCard.svelte';
  import { Sparkles } from 'lucide-svelte';
</script>

<svelte:head>
  <title>{profileData.pages.contact.title}</title>
  <meta name="description" content={profileData.pages.contact.description} />
</svelte:head>

<div class="flex flex-col gap-8 animate-in fade-in duration-300">
  <!-- Header Section -->
  <div class="space-y-3">
    <div class="flex items-center flex-wrap gap-3">
      <span class="font-mono text-xs text-primary font-semibold tracking-wide">
        {profileData.pages.contact.badge}
      </span>
      <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-surface border border-border text-[11px] font-mono">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span class="text-primary font-semibold">AVAILABLE FOR CONTRACTS & ROLES</span>
      </div>
    </div>

    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight">
      {profileData.pages.contact.heading}
    </h1>
    <p class="text-base sm:text-lg text-text-muted max-w-2xl leading-relaxed">
      {profileData.pages.contact.subheading}
    </p>
  </div>

  <!-- Contact Channels Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    {#each profileData.contacts as channel}
      <ContactCard {channel} />
    {/each}
  </div>
</div>
