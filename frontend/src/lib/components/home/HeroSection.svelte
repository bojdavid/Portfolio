<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { toast } from '$lib/stores/toast';
  import { ArrowRight, Terminal, Mail, Sparkles } from 'lucide-svelte';

  function copyEmail() {
    navigator.clipboard.writeText(profileData.email);
    toast.success('Email copied to clipboard: ' + profileData.email);
  }
</script>

<section class="flex flex-col gap-6 py-6 md:py-10">
  <!-- System Status Badge -->
  <div class="flex items-center flex-wrap gap-3">
    <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface border border-border text-xs font-mono">
      <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span class="text-text-muted">SYSTEM STATUS:</span>
      <span class="text-primary font-semibold">ONLINE</span>
    </div>
    <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-subtle border border-border text-xs font-mono text-text-subtle">
      <Sparkles class="w-3 h-3 text-accent" />
      <span>{profileData.location}</span>
    </div>
  </div>

  <!-- Hero Titles -->
  <div class="space-y-2">
    <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text">
      {profileData.name}
    </h1>
    <h2 class="text-lg sm:text-xl md:text-2xl font-mono text-primary font-semibold">
      {profileData.role}
    </h2>
  </div>

  <!-- Bio Paragraph -->
  <p class="text-base sm:text-lg text-text-muted max-w-3xl leading-relaxed">
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
    <button
      type="button"
      onclick={copyEmail}
      class="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-surface border border-border font-mono font-semibold text-sm text-text hover:border-primary hover:text-primary transition-all duration-200"
    >
      <Mail class="w-4 h-4 text-primary" />
      <span>Get in Touch</span>
    </button>
  </div>
</section>
