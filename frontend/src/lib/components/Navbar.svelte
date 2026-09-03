<script lang="ts">
  import { page } from '$app/state';
  import { profileData } from '$lib/data/profile';
  import { Menu, X, FileDown } from 'lucide-svelte';

  let mobileMenuOpen = $state(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' }
  ];

  function isActive(href: string) {
    if (href === '/') return page.url.pathname === '/';
    return page.url.pathname.startsWith(href);
  }
</script>

<header class="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-md">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <!-- Brand Logo -->
    <a href="/" class="flex items-center gap-1 group">
      <span class="font-mono text-primary font-bold text-base">&lt;</span>
      <span class="font-sans font-extrabold text-lg text-text group-hover:text-primary transition-colors tracking-tight">{profileData.handle}</span>
      <span class="font-mono text-primary font-bold text-base">/&gt;</span>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium transition-colors {isActive(link.href) ? 'text-primary font-semibold' : 'text-text-muted hover:text-text'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <!-- Desktop Action Button -->
    <div class="hidden md:flex items-center gap-4">
      <a
        href="/cv"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface border border-border text-xs font-mono font-semibold text-text hover:border-primary hover:text-primary hover:bg-surface-elevated transition-all duration-200"
      >
        <FileDown class="w-3.5 h-3.5 text-primary" />
        <span>Download CV</span>
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <div class="flex md:hidden items-center">
      <button
        type="button"
        onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
        class="p-2 rounded-md text-text-muted hover:text-text hover:bg-surface border border-border/60"
        aria-label="Toggle navigation menu"
      >
        {#if mobileMenuOpen}
          <X class="w-5 h-5 text-primary" />
        {:else}
          <Menu class="w-5 h-5" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Dropdown -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-b border-border bg-surface-subtle px-4 pt-3 pb-5 space-y-3 animate-in fade-in slide-in-from-top-2">
      <nav class="flex flex-col space-y-2">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={() => (mobileMenuOpen = false)}
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors {isActive(link.href) ? 'bg-surface text-primary border border-border' : 'text-text-muted hover:text-text'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>
      <div class="pt-2">
        <a
          href="/cv"
          onclick={() => (mobileMenuOpen = false)}
          class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-surface border border-border text-xs font-mono font-semibold text-text hover:border-primary hover:text-primary transition-colors"
        >
          <FileDown class="w-4 h-4 text-primary" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  {/if}
</header>
