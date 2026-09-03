<script lang="ts">
  import { toast } from '$lib/stores/toast';
  import { Terminal, Copy, Check } from 'lucide-svelte';

  let { commands }: { commands: { comment: string; cmd: string }[] } = $props();
  let copied = $state(false);

  function copyAll() {
    const fullText = commands.map((c) => `${c.comment}\n${c.cmd}`).join('\n\n');
    navigator.clipboard.writeText(fullText);
    copied = true;
    toast.success('Run commands copied to clipboard!');
    setTimeout(() => {
      copied = false;
    }, 2000);
  }
</script>

<div class="rounded-lg bg-surface border border-border shadow-xl overflow-hidden">
  <div class="flex items-center justify-between px-4 py-2.5 bg-surface-subtle border-b border-border text-xs font-mono text-text-muted">
    <div class="flex items-center gap-2">
      <Terminal class="w-3.5 h-3.5 text-primary" />
      <span>terminal execution</span>
    </div>
    <button
      type="button"
      onclick={copyAll}
      class="flex items-center gap-1.5 text-xs text-text-subtle hover:text-primary transition-colors"
      aria-label="Copy commands"
    >
      {#if copied}
        <Check class="w-3.5 h-3.5 text-primary" />
        <span class="text-primary font-medium">Copied</span>
      {:else}
        <Copy class="w-3.5 h-3.5" />
        <span>Copy script</span>
      {/if}
    </button>
  </div>

  <div class="p-4 sm:p-5 font-mono text-xs sm:text-sm space-y-3 bg-background/90 overflow-x-auto">
    {#each commands as cmd}
      <div class="space-y-1">
        <span class="text-text-subtle select-none block">{cmd.comment}</span>
        <div class="flex items-center gap-2 text-text">
          <span class="text-primary select-none font-bold">$</span>
          <span class="text-primary/90 font-medium">{cmd.cmd}</span>
        </div>
      </div>
    {/each}
  </div>
</div>
