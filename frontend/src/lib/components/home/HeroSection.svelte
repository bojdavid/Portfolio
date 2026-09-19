<script lang="ts">
  import { profileData } from "$lib/data/profile";
  import { ArrowRight, Mail, Sparkles } from "lucide-svelte";
  import bojImg from "$lib/assets/boj.png";
</script>

<section
  class="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 md:gap-12 py-6 md:py-10"
>
  <!-- Left Content Column -->
  <div class="flex-1 space-y-6 text-left w-full">
    <!-- System Status Badge -->
    <div class="flex items-center flex-wrap gap-3">
      <div
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono"
      >
        <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span class="text-text-muted">SYSTEM STATUS:</span>
        <span class="text-primary font-semibold">ONLINE</span>
      </div>
      <div
        class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-subtle border border-border text-xs font-mono text-text-subtle"
      >
        <Sparkles class="w-3 h-3 text-accent" />
        <span>{profileData.location}</span>
      </div>
    </div>

    <!-- Hero Titles -->
    <div class="space-y-2">
      <h1
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text"
      >
        {profileData.name}
      </h1>
      <h2
        class="text-lg sm:text-xl md:text-2xl font-mono text-primary font-semibold"
      >
        {profileData.role}
      </h2>
    </div>

    <!-- Short Bio Paragraph -->
    <p class="text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
      {profileData.shortBio}
    </p>

    <!-- CTA Buttons -->
    <div class="flex items-center flex-wrap gap-4 pt-2">
      <a
        href="/projects"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-background font-mono font-bold text-sm hover:brightness-110 shadow-lg shadow-primary/20 transition-all duration-200"
      >
        <span>Inspect Projects</span>
        <ArrowRight class="w-4 h-4" />
      </a>
      <a
        href="/contact"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface border border-border font-mono font-semibold text-sm text-text hover:border-primary hover:text-primary hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
      >
        <Mail class="w-4 h-4 text-primary" />
        <span>Get in Touch</span>
      </a>
    </div>
  </div>

  <!-- Right Image Column -->
  <div class="relative shrink-0 group mt-2 md:mt-0">
    <div
      class="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl group-hover:border-primary/60 transition-colors duration-300"
    >
      <img
        src={bojImg}
        alt={profileData.name}
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
      />
      <div
        class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"
      ></div>
    </div>
    <!-- Soft background glow effect -->
    <div
      class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 -z-10 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500"
    ></div>
  </div>
</section>
