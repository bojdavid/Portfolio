<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { ShieldAlert, MapPin } from 'lucide-svelte';
</script>

<section class="space-y-6">
  <div class="flex items-center gap-2">
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-xs font-mono font-bold text-accent">
      <span class="w-2 h-2 rounded-full bg-accent"></span>
      <span>{profileData.statusBadge}</span>
    </span>
  </div>

  <div class="space-y-2">
    <h1 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text tracking-tight">
      {profileData.name}
    </h1>
    <div class="flex items-center gap-2 text-text-muted font-mono text-xs sm:text-sm">
      <MapPin class="w-4 h-4 text-primary" />
      <span>{profileData.location}</span>
    </div>
  </div>

  <div class="space-y-4 text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl">
    {#each profileData.bioParagraphs as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
