<script lang="ts">
  import './layout.css';
  import { profileData } from '$lib/data/profile';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ToastContainer from '$lib/components/ToastContainer.svelte';
  import { page, navigating } from '$app/state';
  import { fly } from 'svelte/transition';

  let { children } = $props();
</script>

<svelte:head>
  <title>{profileData.name} | {profileData.role}</title>
  <meta
    name="description"
    content="{profileData.shortBio}"
  />
</svelte:head>

<!-- Route transition indicator -->
{#if navigating?.to}
  <div class="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-50 animate-pulse shadow-[0_0_8px_rgba(57,255,20,0.8)]"></div>
{/if}

<div class="min-h-screen flex flex-col bg-background text-text selection:bg-primary/20 selection:text-primary">
  <Navbar />
  {#key page.url.pathname}
    <main
      in:fly={{ y: 10, duration: 280, delay: 50 }}
      class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {@render children()}
    </main>
  {/key}
  <Footer />
  <ToastContainer />
</div>
