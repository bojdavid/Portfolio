<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { Trophy, Music, Compass, Sparkles } from 'lucide-svelte';

  const iconMap = {
    Trophy,
    Music,
    Compass
  };
</script>

<section class="space-y-6 pt-10 border-t border-border">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // OFFLINE INTERESTS
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      Beyond the computer terminal
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
    {#each profileData.offlineInterests as item}
      {@const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles}
      <div class="p-5 rounded-lg bg-surface border border-border hover:border-accent/50 transition-all space-y-3 group">
        <div class="p-2.5 rounded-md bg-surface-subtle border border-border w-fit text-accent group-hover:border-accent/40 transition-colors">
          <IconComponent class="w-5 h-5" />
        </div>
        <h3 class="font-bold text-base text-text group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p class="text-xs sm:text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    {/each}
  </div>
</section>
