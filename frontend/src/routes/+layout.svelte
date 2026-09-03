<script lang="ts">
  import './layout.css';
  import { profileData } from '$lib/data/profile';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ToastContainer from '$lib/components/ToastContainer.svelte';

  let { children } = $props();
</script>

<svelte:head>
  <title>{profileData.name} | {profileData.role}</title>
  <meta
    name="description"
    content="{profileData.shortBio}"
  />
</svelte:head>

<div class="min-h-screen flex flex-col bg-background text-text selection:bg-primary/20 selection:text-primary">
  <Navbar />
  <main class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
    {@render children()}
  </main>
  <Footer />
  <ToastContainer />
</div>
