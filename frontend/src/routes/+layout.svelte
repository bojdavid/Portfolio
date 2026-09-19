<script lang="ts">
  import "./layout.css";
  import { profileData } from "$lib/data/profile";
  import Navbar from "$lib/components/Navbar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ToastContainer from "$lib/components/ToastContainer.svelte";
  import { page, navigating } from "$app/state";
  import { fly } from "svelte/transition";
  import { TRANSITION } from "$lib/constants/motion";

  let { children } = $props();
</script>

<svelte:head>
  <title>{profileData.pages.home.title}</title>
  <meta name="description" content={profileData.pages.home.description} />
</svelte:head>

<!-- Route transition indicator -->
{#if navigating?.to}
  <div
    class="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-accent to-primary z-50 animate-pulse shadow-[0_0_8px_rgba(57,255,20,0.8)]"
  ></div>
{/if}

<div
  class="min-h-screen flex flex-col text-text selection:bg-primary/20 selection:text-primary relative isolate"
>
  <!-- Fixed Ambient Radial Gradients & Tech Grid Background -->
  <div
    class="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-background no-print"
    aria-hidden="true"
  >
    <!-- Top-centered primary neon green radial spotlight -->
    <div
      class="absolute -top-[12%] left-1/2 -translate-x-1/2 w-[85vw] h-[600px] max-w-[1200px] rounded-full blur-[110px] opacity-75"
      style="background: radial-gradient(circle at center, rgba(57, 255, 20, 0.16) 0%, rgba(57, 255, 20, 0.04) 50%, transparent 72%);"
    ></div>

    <!-- Mid-right cyan accent radial spotlight -->
    <div
      class="absolute top-[26%] -right-[12%] w-[65vw] h-[550px] max-w-[800px] rounded-full blur-[120px] opacity-65"
      style="background: radial-gradient(circle at center, rgba(0, 240, 255, 0.13) 0%, rgba(0, 240, 255, 0.03) 50%, transparent 70%);"
    ></div>

    <!-- Bottom-left primary / accent blend ambient spotlight -->
    <div
      class="absolute bottom-[10%] -left-[12%] w-[70vw] h-[600px] max-w-[900px] rounded-full blur-[130px] opacity-60"
      style="background: radial-gradient(circle at center, rgba(57, 255, 20, 0.12) 0%, rgba(0, 240, 255, 0.04) 50%, transparent 70%);"
    ></div>

    <!-- Ambient vignette gradient -->
    <div
      class="absolute inset-0"
      style="background: radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, var(--color-background) 100%);"
    ></div>

    <!-- Tech Grid Matrix overlay -->
    <div
      class="absolute inset-0 opacity-[0.035]"
      style="background-image: linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px); background-size: 3.5rem 3.5rem; mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%); -webkit-mask-image: radial-gradient(ellipse 80% 70% at 50% 50%, #000 40%, transparent 100%);"
    ></div>
  </div>

  <Navbar />
  {#key page.url.pathname}
    <main
      in:fly={TRANSITION.page}
      class="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12"
    >
      {@render children()}
    </main>
  {/key}
  <Footer />
  <ToastContainer />
</div>
