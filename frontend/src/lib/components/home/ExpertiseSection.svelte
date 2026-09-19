<script lang="ts">
  import { expertiseAreas } from "$lib/data/skills";
  import { Layout, Server, Cloud, Smartphone } from "lucide-svelte";
  import { TRANSITION } from "$lib/constants/motion";
  import ExpertiseVisualCard from "./ExpertiseVisualCard.svelte";
  import { typewriter } from "$lib/utils/typewriter";
  import { reveal } from "$lib/actions/reveal";

  const iconMap = {
    Layout,
    Server,
    Cloud,
    Smartphone,
  };

  const tagMap: Record<string, string[]> = {
    frontend: ["Svelte 5", "React 19", "Tailwind CSS", "TypeScript"],
    backend: ["FastAPI", "NestJs", "PostgreSQL", "MongoDB"],
    devops: ["Docker", "Docker Compose", "Nginx", "Vercel / Render"],
    "ai-workflow": ["Agentic Workflows", "Claude Code", "Cursor", "Antigravity"],
  };
</script>

<section class="flex flex-col gap-10 py-10 border-t border-border/80">
  <div use:reveal={TRANSITION.header} class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // EXPERTISE & CAPABILITIES
    </span>
    <h2
      use:typewriter={{ text: "Delivering full-cycle engineering", speed: 25, delay: 150 }}
      class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight min-h-[1.2em]"
    >
      Delivering full-cycle engineering
    </h2>
  </div>

  <!-- Zigzag Alternating Rows Pattern (Referenced from Image Pattern) -->
  <div class="flex flex-col gap-12 sm:gap-16 lg:gap-20">
    {#each expertiseAreas as item, i}
      {@const isTextLeft = i % 2 === 0}
      {@const IconComponent =
        iconMap[item.iconName as keyof typeof iconMap] || Server}
      {@const tags = tagMap[item.id] || []}

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-center">
        {#if isTextLeft}
          <!-- Text Content on Left (Slides from Left) -->
          <div
            use:reveal={TRANSITION.zigzagCard(i * 2, true)}
            class="space-y-4 text-left order-1"
          >
            <div class="flex items-center gap-2 font-mono text-xs text-primary font-semibold">
              <div class="p-2 rounded-md bg-surface-subtle border border-border text-primary shadow-sm">
                <IconComponent class="w-4 h-4" />
              </div>
              <span>0{i + 1} // AREA OF FOCUS</span>
            </div>

            <h3 class="text-xl sm:text-2xl font-extrabold text-text tracking-tight">
              {item.title}
            </h3>

            <p class="text-sm sm:text-base text-text-muted leading-relaxed">
              {item.description}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              {#each tags as tag}
                <span class="px-2.5 py-1 rounded-md bg-surface border border-border font-mono text-xs text-text-subtle">
                  {tag}
                </span>
              {/each}
            </div>
          </div>

          <!-- Visual Showcase on Right (Slides from Right) -->
          <div
            use:reveal={TRANSITION.zigzagCard(i * 2 + 1, false)}
            class="order-2"
          >
            <ExpertiseVisualCard id={item.id} isLeft={false} />
          </div>
        {:else}
          <!-- Visual Showcase on Left (Slides from Left) -->
          <div
            use:reveal={TRANSITION.zigzagCard(i * 2, true)}
            class="order-2 md:order-1"
          >
            <ExpertiseVisualCard id={item.id} isLeft={true} />
          </div>

          <!-- Text Content on Right (Slides from Right) -->
          <div
            use:reveal={TRANSITION.zigzagCard(i * 2 + 1, false)}
            class="space-y-4 text-left order-1 md:order-2"
          >
            <div class="flex items-center gap-2 font-mono text-xs text-accent font-semibold">
              <div class="p-2 rounded-md bg-surface-subtle border border-border text-accent shadow-sm">
                <IconComponent class="w-4 h-4" />
              </div>
              <span>0{i + 1} // AREA OF FOCUS</span>
            </div>

            <h3 class="text-xl sm:text-2xl font-extrabold text-text tracking-tight">
              {item.title}
            </h3>

            <p class="text-sm sm:text-base text-text-muted leading-relaxed">
              {item.description}
            </p>

            <div class="flex flex-wrap gap-2 pt-1">
              {#each tags as tag}
                <span class="px-2.5 py-1 rounded-md bg-surface border border-border font-mono text-xs text-text-subtle">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        {/if}
      </div>
    {/each}
  </div>
</section>
