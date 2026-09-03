<script lang="ts">
  import type { Project } from '$lib/types';
  import { ExternalLink } from 'lucide-svelte';
  import SocialIcons from '$lib/components/icons/SocialIcons.svelte';

  let { project }: { project: Project } = $props();
</script>

<aside class="space-y-8">
  <!-- Resource Links -->
  {#if project.resourceLinks && project.resourceLinks.length > 0}
    <div class="space-y-3">
      <h3 class="text-lg font-bold text-text">Resource Links</h3>
      <div class="flex flex-col gap-2.5">
        {#each project.resourceLinks as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between px-4 py-2.5 rounded-md bg-surface border border-border hover:border-primary hover:text-primary font-mono text-xs font-bold text-text transition-all duration-200 group"
          >
            <div class="flex items-center gap-2">
              {#if link.type === 'repo'}
                <SocialIcons name="github" class="w-4 h-4 text-primary" />
              {:else}
                <ExternalLink class="w-4 h-4 text-accent" />
              {/if}
              <span>{link.label}</span>
            </div>
            <ExternalLink class="w-3.5 h-3.5 text-text-subtle group-hover:text-primary transition-colors" />
          </a>
          {#if link.note}
            <span class="text-[11px] font-mono text-text-subtle px-1">
              {link.note}
            </span>
          {/if}
        {/each}
      </div>
    </div>
  {/if}

  <!-- Infrastructure Stack -->
  {#if project.techStack && project.techStack.length > 0}
    <div class="space-y-3">
      <h3 class="text-lg font-bold text-text">Infrastructure Built With</h3>
      <div class="space-y-3">
        {#each project.techStack as item}
          <div class="p-3.5 rounded-md bg-surface border border-border space-y-1">
            <div class="text-sm font-semibold text-text flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>{item.name}</span>
            </div>
            <p class="text-xs font-mono text-text-subtle pl-3.5">
              {item.role}
            </p>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</aside>
