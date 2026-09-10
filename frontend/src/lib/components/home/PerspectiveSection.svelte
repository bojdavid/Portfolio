<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { Quote } from 'lucide-svelte';
  import { fly } from 'svelte/transition';
</script>

<section class="py-8 border-t border-border/80">
  <div
    in:fly={{ y: 16, duration: 350, delay: 200 }}
    class="p-6 sm:p-8 rounded-lg bg-surface-subtle border border-border relative overflow-hidden group hover:border-accent/50 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
  >
    <div class="absolute -right-6 -bottom-6 text-border/20 group-hover:text-accent/15 transition-all duration-500 pointer-events-none select-none group-hover:scale-110 group-hover:rotate-6">
      <Quote class="w-32 h-32" />
    </div>
    
    <div class="relative z-10 space-y-4 max-w-3xl">
      <span class="font-mono text-xs text-accent font-semibold tracking-wide">
        // PERSPECTIVE
      </span>
      <blockquote class="text-xl sm:text-2xl md:text-3xl font-bold text-text leading-snug tracking-tight">
        "{profileData.mantra.quote}"
      </blockquote>
      <div class="font-mono text-xs sm:text-sm text-text-subtle">
        — {profileData.mantra.author}
      </div>
    </div>
  </div>
</section>
