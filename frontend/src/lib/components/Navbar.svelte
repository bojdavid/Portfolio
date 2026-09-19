<script lang="ts">
  import { page } from "$app/state";
  import { profileData } from "$lib/data/profile";
  import { Menu, X, FileDown } from "lucide-svelte";
  import { slide, fade } from "svelte/transition";
  import { TRANSITION, TIMING } from "$lib/constants/motion";

  let mobileMenuOpen = $state(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
    { href: "/cv", label: "CV" },
  ];

  function isActive(href: string) {
    if (href === "/") return page.url.pathname === "/";
    return page.url.pathname.startsWith(href);
  }

  $effect(() => {
    // Automatically close mobile menu on page navigation
    page.url.pathname;
    mobileMenuOpen = false;
  });
</script>

<svelte:window
  onkeydown={(e) => {
    if (e.key === "Escape") mobileMenuOpen = false;
  }}
/>

<header
  class="sticky top-0 z-40 w-full border-b border-border/80 bg-background/80 backdrop-blur-md"
>
  <div
    class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
  >
    <!-- Brand Logo -->
    <a href="/" class="flex items-center gap-1 group">
      <span class="font-mono text-primary font-bold text-base">&lt;</span>
      <span
        class="font-sans font-extrabold text-lg text-text group-hover:text-primary transition-colors tracking-tight"
        >{profileData.handle}</span
      >
      <span class="font-mono text-primary font-bold text-base">/&gt;</span>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-8" aria-label="Main Navigation">
      {#each navLinks as link}
        <a
          href={link.href}
          class="text-sm font-medium transition-colors {isActive(link.href)
            ? 'text-primary font-semibold'
            : 'text-text-muted hover:text-text'}"
        >
          {link.label}
        </a>
      {/each}
    </nav>

    <!-- Desktop Action Button -->
    <div class="hidden md:flex items-center gap-4">
      <a
        href={profileData.cvUrl}
        download={profileData.cvFileName}
        class="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface border border-border text-xs font-mono font-semibold text-text hover:border-primary hover:text-primary hover:bg-surface-elevated transition-all duration-200"
        title="Download {profileData.cvFileName}"
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
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
      >
        {#if mobileMenuOpen}
          <X class="w-5 h-5 text-primary" />
        {:else}
          <Menu class="w-5 h-5" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Overlay & Dropdown -->
  {#if mobileMenuOpen}
    <!-- Dimmed backdrop overlay covering the content beneath the header -->
    <button
      type="button"
      transition:fade={{ duration: TIMING.fast }}
      onclick={() => (mobileMenuOpen = false)}
      class="fixed inset-0 top-16 bg-background/70 backdrop-blur-xs md:hidden z-40 cursor-default"
      aria-label="Close menu backdrop"
      tabindex="-1"
    ></button>

    <!-- Mobile Dropdown Panel floating over the content -->
    <div
      id="mobile-navigation"
      transition:slide={TRANSITION.slideMenu}
      class="md:hidden absolute top-full left-0 right-0 w-full border-b border-border bg-background/98 backdrop-blur-xl px-4 pt-3 pb-5 space-y-3 shadow-2xl z-50"
    >
      <nav class="flex flex-col space-y-2">
        {#each navLinks as link}
          <a
            href={link.href}
            onclick={() => (mobileMenuOpen = false)}
            class="px-3 py-2 rounded-md text-sm font-medium transition-colors {isActive(
              link.href,
            )
              ? 'bg-surface text-primary border border-border'
              : 'text-text-muted hover:text-text'}"
          >
            {link.label}
          </a>
        {/each}
      </nav>
      <div class="pt-2">
        <a
          href={profileData.cvUrl}
          download={profileData.cvFileName}
          onclick={() => (mobileMenuOpen = false)}
          class="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md bg-surface border border-border text-xs font-mono font-semibold text-text hover:border-primary hover:text-primary transition-colors"
          title="Download {profileData.cvFileName}"
        >
          <FileDown class="w-4 h-4 text-primary" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  {/if}
</header>
