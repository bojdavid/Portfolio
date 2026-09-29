<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { Trophy, Music, Compass, Sparkles } from 'lucide-svelte';
  import { reveal } from '$lib/actions/reveal';
  import { TRANSITION } from '$lib/constants/motion';
  import { interestConfigs, LABEL_COLORS } from '$lib/data/interestConfigs';
  import InterestVisualCard from './InterestVisualCard.svelte';

  const iconMap = { Trophy, Music, Compass };
  const total = profileData.offlineInterests.length;
</script>

<section class="space-y-10 pt-10 border-t border-border">
  <!-- Section header -->
  <div use:reveal={TRANSITION.header} class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // OFFLINE INTERESTS
    </span>
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-text tracking-tight">
      Beyond the computer terminal
    </h2>
  </div>

  <!-- Zigzag rows -->
  <div class="flex flex-col gap-14 lg:gap-20">
    {#each profileData.offlineInterests as item, i}
      {@const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Sparkles}
      {@const cfg = interestConfigs[item.iconName] ?? interestConfigs.Trophy}
      {@const isTextLeft = i % 2 === 0}
      {@const labelColor = LABEL_COLORS[i] ?? 'text-primary'}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
        <!-- Text block -->
        <div
          use:reveal={TRANSITION.zigzagCard(i * 2, isTextLeft)}
          class="space-y-5 text-left {isTextLeft ? 'order-1' : 'order-1 md:order-2'}"
        >
          <div class="flex items-center gap-2.5 font-mono text-xs {labelColor} font-semibold">
            <div class="p-2 rounded-md bg-surface-subtle border border-border {labelColor} shadow-sm">
              <IconComponent class="w-4 h-4" />
            </div>
            <span>0{i + 1} // INTEREST</span>
          </div>
          <h3 class="text-xl sm:text-2xl lg:text-3xl font-extrabold text-text tracking-tight">
            {item.title}
          </h3>
          <p class="text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed">
            {item.description}
          </p>
        </div>

        <!-- Visual card -->
        <div
          use:reveal={TRANSITION.zigzagCard(i * 2 + 1, !isTextLeft)}
          class={isTextLeft ? 'order-2' : 'order-2 md:order-1'}
        >
          <InterestVisualCard {cfg} {labelColor} index={i} {total} />
        </div>
      </div>
    {/each}
  </div>
</section>

