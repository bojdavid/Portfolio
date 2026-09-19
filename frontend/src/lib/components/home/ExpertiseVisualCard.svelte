<script lang="ts">
  import { onMount } from "svelte";

  let { id, isLeft = false }: { id: string; isLeft?: boolean } = $props();

  let cardEl: HTMLElement | null = $state(null);
  let isVisible = $state(false);
  let progress = $state(0);

  interface FieldItem {
    label: string;
    value: string;
    badge: string;
    color: "primary" | "accent" | "success";
  }

  const cardData: Record<
    string,
    { file: string; footer: string; fields: FieldItem[] }
  > = {
    frontend: {
      file: "design_system.svelte",
      footer: "REACTIVE RUNES READY",
      fields: [
        { label: "COMPONENT FIELD", value: "<GlassmorphicCard />", badge: "READY", color: "primary" },
        { label: "DESIGN TOKENS", value: "var(--primary) • 60 FPS", badge: "APPLIED", color: "accent" }
      ]
    },
    backend: {
      file: "api_gateway.py",
      footer: "ASYNC EVENT LOOP READY",
      fields: [
        { label: "REST ENDPOINT", value: "GET /api/v1/telemetry", badge: "200 OK", color: "success" },
        { label: "DATABASE POOL", value: "postgresql://pool • 14ms", badge: "CONNECTED", color: "primary" },
        { label: "THROUGHPUT", value: "4.2k req/s • OAuth 2.0", badge: "OPTIMAL", color: "accent" }
      ]
    },
    devops: {
      file: "docker-compose.yml",
      footer: "HEALTHY CONTAINER MESH",
      fields: [
        { label: "SERVICE [01]", value: "web-client • port 5173", badge: "UP", color: "success" },
        { label: "SERVICE [02]", value: "api-server • port 3000", badge: "UP", color: "primary" },
        { label: "SERVICE [03]", value: "reverse-proxy • 443 SSL", badge: "SECURE", color: "accent" }
      ]
    },
    "ai-workflow": {
      file: "agent_orchestrator.ts",
      footer: "TEST SUITE: 34/34 PASSED",
      fields: [
        { label: "TASK VALIDATION", value: "Autonomous Test Suite", badge: "PASSED", color: "primary" },
        { label: "CODE INTEGRITY", value: "Zero-regression Refactor", badge: "VERIFIED", color: "accent" },
        { label: "AGENT LOOP", value: "Context-grounded Orchestration", badge: "ACTIVE", color: "primary" }
      ]
    }
  };

  const config = $derived(cardData[id] || cardData.frontend);

  onMount(() => {
    if (!cardEl) return;
    let timer: ReturnType<typeof setInterval> | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            isVisible = true;
            let cur = 0;
            timeout = setTimeout(() => {
              timer = setInterval(() => {
                cur += 2;
                if (cur >= 86) {
                  progress = 86;
                  if (timer) clearInterval(timer);
                } else {
                  progress = cur;
                }
              }, 20);
            }, 600);
          } else {
            isVisible = false;
            progress = 0;
            if (timer) clearInterval(timer);
            if (timeout) clearTimeout(timeout);
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(cardEl);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
      if (timeout) clearTimeout(timeout);
    };
  });
</script>

<div
  bind:this={cardEl}
  class="w-full max-w-[420px] aspect-square mx-auto rounded-2xl bg-surface/95 border border-border shadow-2xl overflow-hidden backdrop-blur-md flex flex-col justify-between transition-all duration-300 group hover:border-primary/50 hover:shadow-primary/5"
>
  <!-- Card Titlebar -->
  <div class="flex items-center justify-between px-5 py-3 bg-surface-subtle/80 border-b border-border shrink-0">
    <div class="flex items-center gap-2">
      <span class="w-2.5 h-2.5 rounded-full bg-error/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-warning/70"></span>
      <span class="w-2.5 h-2.5 rounded-full bg-success/70"></span>
    </div>
    <span class="font-mono text-[11px] text-text-subtle tracking-tight font-medium">
      {config.file}
    </span>
    <span class="w-2 h-2 rounded-full {isLeft ? 'bg-primary' : 'bg-accent'} animate-pulse"></span>
  </div>

  <!-- Visual Body with Outlined Text Fields that Animate Sequential Fill -->
  <div class="flex-1 p-5 sm:p-6 font-mono text-xs flex flex-col justify-center gap-3">
    {#each config.fields as field, idx}
      {@const delays = ['delay-150', 'delay-500', 'delay-700']}
      {@const delayClass = delays[idx] || 'delay-700'}
      {@const colorBorder = field.color === 'primary' ? 'border-primary/50' : field.color === 'accent' ? 'border-accent/50' : 'border-success/50'}
      {@const colorText = field.color === 'primary' ? 'text-primary' : field.color === 'accent' ? 'text-accent' : 'text-success'}
      {@const colorBadgeBg = field.color === 'primary' ? 'bg-primary/10 text-primary border-primary/30' : field.color === 'accent' ? 'bg-accent/10 text-accent border-accent/30' : 'bg-success/10 text-success border-success/30'}

      <div class="space-y-1">
        <div class="flex items-center justify-between text-[10px] text-text-subtle">
          <span>// {field.label}</span>
          <span class="px-1.5 py-0.5 rounded text-[9px] border font-bold transition-opacity duration-500 {delayClass} {colorBadgeBg} {isVisible ? 'opacity-100' : 'opacity-0'}">
            {field.badge}
          </span>
        </div>
        <!-- Outlined field: empty by default, fills up sequentially -->
        <div
          class="h-9 px-3 rounded-lg border flex items-center justify-between transition-all duration-500 {delayClass} {isVisible ? `${colorBorder} bg-surface-elevated/75 shadow-sm` : 'border-border/60 bg-transparent'}"
        >
          <span class="font-mono text-xs text-text transition-all duration-500 {delayClass} {isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}">
            {field.value}
          </span>
          <span class="w-1.5 h-1.5 rounded-full {colorText} transition-opacity duration-500 {delayClass} {isVisible ? 'opacity-100' : 'opacity-0'}"></span>
        </div>
      </div>
    {/each}

    <!-- Glassmorphism Animated Progress Bar (for Frontend Card) -->
    {#if id === 'frontend'}
      <div class="space-y-1.5 pt-1">
        <div class="flex items-center justify-between text-[11px] font-mono">
          <span class="text-text-subtle">// GLASS PROGRESSBAR</span>
          <span class="text-primary font-bold">{progress}%</span>
        </div>
        <!-- Glassmorphism Track -->
        <div class="h-3 w-full rounded-full bg-surface-subtle/80 border border-white/10 backdrop-blur-md p-0.5 shadow-inner overflow-hidden">
          <div
            class="h-full rounded-full bg-gradient-to-r from-primary via-accent to-primary shadow-[0_0_12px_rgba(57,255,20,0.6)] transition-all duration-1000 ease-out"
            style="width: {isVisible ? '86%' : '0%'}; transition-delay: 600ms;"
          ></div>
        </div>
      </div>
    {/if}
  </div>

  <!-- Telemetry Footer Strip -->
  <div class="px-5 py-2.5 bg-surface-subtle/70 border-t border-border flex items-center justify-between font-mono text-[10px] text-text-subtle shrink-0">
    <div class="flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full {isLeft ? 'bg-primary' : 'bg-accent'}"></span>
      <span>{config.footer}</span>
    </div>
    <span class="text-primary font-semibold">// 1:1 FRAME</span>
  </div>
</div>
