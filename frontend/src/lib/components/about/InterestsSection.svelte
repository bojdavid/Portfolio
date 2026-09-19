<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { Trophy, Music, Compass, Sparkles } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
  import { TRANSITION } from '$lib/constants/motion';

  const iconMap = {
    Trophy,
    Music,
    Compass
  };
</script>

<section class="space-y-6 pt-10 border-t border-border">
  <div in:fly={TRANSITION.header} class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // OFFLINE INTERESTS
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      Beyond the computer terminal
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    {#each profileData.offlineInterests as item, i}
      {@const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles}
      <div
        in:fly={TRANSITION.card(i)}
        class="p-5 rounded-lg bg-surface border border-border hover:border-accent/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300 space-y-3 group cursor-default"
      >
        <div class="p-2.5 rounded-md bg-surface-subtle border border-border w-fit text-accent group-hover:border-accent/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <IconComponent class="w-5 h-5" />
        </div>
        <h3 class="font-bold text-base text-text group-hover:text-accent transition-colors duration-200">
          {item.title}
        </h3>
        <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    {/each}
  </div>
</section>
