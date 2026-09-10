<script lang="ts">
  import { expertiseAreas } from '$lib/data/skills';
  import { Layout, Server, Cloud, Smartphone } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  const iconMap = {
    Layout,
    Server,
    Cloud,
    Smartphone
  };
</script>

<section class="flex flex-col gap-6 py-8 border-t border-border/80">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // EXPERTISE
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      Delivering full-cycle engineering
    </h2>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    {#each expertiseAreas as item, i}
      {@const IconComponent = iconMap[item.iconName as keyof typeof iconMap] || Server}
      <div
        in:fly={{ y: 16, duration: 350, delay: 100 + i * 80 }}
        class="flex flex-col gap-3 p-5 sm:p-6 rounded-lg bg-surface border border-border hover:border-primary/60 hover:bg-surface-elevated hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group cursor-default"
      >
        <div class="flex items-center gap-3">
          <div class="p-2 rounded-md bg-surface-subtle border border-border text-primary group-hover:border-primary/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
            <IconComponent class="w-5 h-5" />
          </div>
          <h3 class="font-bold text-lg text-text group-hover:text-primary transition-colors duration-200">
            {item.title}
          </h3>
        </div>
        <p class="text-sm text-text-muted leading-relaxed">
          {item.description}
        </p>
      </div>
    {/each}
  </div>
</section>
