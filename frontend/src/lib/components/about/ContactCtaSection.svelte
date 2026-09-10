<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { toast } from '$lib/stores/toast';
  import { Mail, Check } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  let emailCopied = $state(false);

  function copyEmail() {
    navigator.clipboard.writeText(profileData.email);
    emailCopied = true;
    toast.success('Email copied to clipboard: ' + profileData.email);
    setTimeout(() => {
      emailCopied = false;
    }, 2200);
  }
</script>

<section class="pt-10 border-t border-border">
  <div
    in:fly={{ y: 16, duration: 350, delay: 240 }}
    class="p-8 sm:p-10 rounded-lg bg-surface-subtle border border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
  >
    <div class="space-y-2 max-w-xl">
      <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
        Want to build something beautiful together?
      </h2>
      <p class="text-sm sm:text-base text-text-muted leading-relaxed">
        I am always happy to consult on database pipelines, frontend systems, or automated deployment rigs. Let's arrange a time to chat.
      </p>
    </div>

    <button
      type="button"
      onclick={copyEmail}
      class="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary text-background font-mono font-bold text-sm hover:brightness-110 shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0 cursor-pointer"
    >
      {#if emailCopied}
        <Check class="w-4 h-4 text-background animate-bounce" />
        <span>Email Copied!</span>
      {:else}
        <Mail class="w-4 h-4 text-background" />
        <span>Get in Touch</span>
      {/if}
    </button>
  </div>
</section>
