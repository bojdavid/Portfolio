<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { toast } from '$lib/stores/toast';
  import SocialIcons from '$lib/components/icons/SocialIcons.svelte';

  function handleSocialClick(e: MouseEvent, platform: string, url: string) {
    if (platform === 'email') {
      e.preventDefault();
      navigator.clipboard.writeText(profileData.email);
      toast.success('Email copied to clipboard: ' + profileData.email);
    }
  }
</script>

<footer class="w-full border-t border-border/80 bg-background/80 backdrop-blur-md py-10 px-4 sm:px-6 lg:px-8 mt-auto">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    <!-- Footer Left -->
    <div class="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
      <span class="font-mono text-xs text-text-subtle tracking-tight">
        // Constructed in 2025. Fully responsive.
      </span>
      <span class="text-sm text-text-muted">
        © {profileData.name}. All rights reserved.
      </span>
    </div>

    <!-- Footer Right: Socials -->
    <div class="flex items-center flex-wrap justify-center gap-6">
      {#each profileData.socials as social}
        <a
          href={social.url}
          target={social.platform !== 'email' ? '_blank' : undefined}
          rel={social.platform !== 'email' ? 'noopener noreferrer' : undefined}
          onclick={(e) => handleSocialClick(e, social.platform, social.url)}
          class="flex items-center gap-1.5 font-mono text-xs text-text-muted hover:text-primary transition-colors group"
        >
          <SocialIcons name={social.platform} class="w-3.5 h-3.5 group-hover:text-primary transition-colors" />
          <span>{social.label}</span>
        </a>
      {/each}
    </div>
  </div>
</footer>
