<script lang="ts">
  import type { ContactChannel } from '$lib/types';
  import { toast } from '$lib/stores/toast';
  import { TIMING } from '$lib/constants/motion';
  import { ExternalLink, Copy, Check } from 'lucide-svelte';
  import SocialIcons from '$lib/components/icons/SocialIcons.svelte';

  let { channel }: { channel: ContactChannel } = $props();

  let copied = $state(false);

  function copyContact(e: MouseEvent) {
    e.stopPropagation();
    navigator.clipboard.writeText(channel.copyValue);
    copied = true;
    toast.success(`Copied ${channel.name} (${channel.handle}) to clipboard!`);
    setTimeout(() => {
      copied = false;
    }, TIMING.toastNotice);
  }
</script>

<div
  class="flex flex-col justify-between p-5 sm:p-6 rounded-lg bg-surface border border-border hover:border-primary/60 hover:bg-surface-elevated transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary/5 space-y-5"
>
  <!-- Top: Icon, Titles, and Copy Button -->
  <div class="space-y-4">
    <div class="flex items-start justify-between gap-3">
      <div class="flex items-center gap-3">
        <div
          class="p-2.5 rounded-md bg-surface-subtle border border-border text-primary group-hover:border-primary/40 group-hover:scale-110 transition-all duration-300"
        >
          <SocialIcons name={channel.icon} class="w-5 h-5" />
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="font-bold text-base sm:text-lg text-text group-hover:text-primary transition-colors">
              {channel.name}
            </h3>
            {#if channel.badge}
              <span
                class="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-surface-subtle border border-border text-primary/90"
              >
                {channel.badge}
              </span>
            {/if}
          </div>
          <p class="font-mono text-xs text-text-muted select-all break-all">
            {channel.handle}
          </p>
        </div>
      </div>

      <!-- Quick Copy Button -->
      <button
        type="button"
        onclick={copyContact}
        class="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-surface-subtle border border-border/80 text-xs font-mono text-text-muted hover:text-primary hover:border-primary/50 transition-all cursor-pointer shrink-0"
        title={`Copy ${channel.name}`}
        aria-label={`Copy ${channel.name}`}
      >
        {#if copied}
          <Check class="w-3.5 h-3.5 text-primary animate-bounce" />
          <span class="text-primary font-semibold text-[11px]">Copied</span>
        {:else}
          <Copy class="w-3.5 h-3.5 text-text-subtle group-hover:text-text-muted" />
          <span class="hidden sm:inline text-[11px]">Copy</span>
        {/if}
      </button>
    </div>

    <!-- Description -->
    <p class="text-sm text-text-muted leading-relaxed">
      {channel.description}
    </p>
  </div>

  <!-- Bottom: Direct Platform Redirection Link -->
  <div class="pt-3 border-t border-border/60">
    <a
      href={channel.actionUrl}
      target={channel.actionUrl.startsWith('http') ? '_blank' : undefined}
      rel={channel.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
      class="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-md bg-surface-subtle border border-border hover:border-primary/60 hover:bg-primary hover:text-background text-xs font-mono font-bold text-text transition-all duration-200 group/btn"
    >
      <span>{channel.actionLabel}</span>
      <ExternalLink class="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
    </a>
  </div>
</div>
