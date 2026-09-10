<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import { CornerDownLeft } from "lucide-svelte";
  import {
    automatedSequence,
    executeCommand,
    getRandomTypingSpeed,
    type HistoryEntry,
  } from "$lib/utils/terminal";
  import TerminalHeader from "./TerminalHeader.svelte";
  import TerminalHistoryItem from "./TerminalHistoryItem.svelte";

  let history = $state<HistoryEntry[]>([]);
  let currentTypingCmd = $state("");
  let isPaused = $state(false);
  let commandInput = $state("");
  let terminalBox = $state<HTMLDivElement | null>(null);
  let innerContentHeight = $state(140);

  let calculatedHeight = $derived(
    innerContentHeight
      ? Math.min(Math.max(innerContentHeight + 40, 130), 380)
      : 180,
  );

  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  let seqIndex = 0;
  let charIndex = 0;
  let isDestroyed = false;

  function scrollToBottom() {
    if (terminalBox) terminalBox.scrollTop = terminalBox.scrollHeight;
  }

  function scheduleNext(delay: number, fn: () => void) {
    if (isDestroyed) return;
    timeoutId = setTimeout(() => {
      if (!isPaused && !isDestroyed) fn();
    }, delay);
  }

  function stepTyping() {
    if (isPaused || isDestroyed) return;

    if (seqIndex >= automatedSequence.length) {
      scheduleNext(3200, typeClearAndRestart);
      return;
    }

    const target = automatedSequence[seqIndex];

    if (charIndex < target.cmd.length) {
      currentTypingCmd = target.cmd.slice(0, charIndex + 1);
      charIndex++;
      scrollToBottom();
      scheduleNext(getRandomTypingSpeed(), stepTyping);
    } else {
      scheduleNext(300, () => {
        history = [...history, { cmd: target.cmd, output: target.output }];
        currentTypingCmd = "";
        charIndex = 0;
        seqIndex++;
        scrollToBottom();
        scheduleNext(1300, stepTyping);
      });
    }
  }

  function typeClearAndRestart() {
    if (isPaused || isDestroyed) return;
    const clearCmd = "clear";
    let cIdx = 0;

    function typeClearChar() {
      if (isPaused || isDestroyed) return;
      if (cIdx < clearCmd.length) {
        currentTypingCmd = clearCmd.slice(0, cIdx + 1);
        cIdx++;
        scrollToBottom();
        scheduleNext(65, typeClearChar);
      } else {
        scheduleNext(400, () => {
          history = [];
          currentTypingCmd = "";
          seqIndex = 0;
          charIndex = 0;
          scheduleNext(850, stepTyping);
        });
      }
    }
    typeClearChar();
  }

  function togglePause() {
    isPaused = !isPaused;
    if (!isPaused) stepTyping();
    else if (timeoutId) clearTimeout(timeoutId);
  }

  onMount(() => {
    scheduleNext(400, stepTyping);
  });

  onDestroy(() => {
    isDestroyed = true;
    if (timeoutId) clearTimeout(timeoutId);
  });

  function handleCommandSubmit(e: SubmitEvent) {
    e.preventDefault();
    const raw = commandInput.trim();
    if (!raw) return;

    const result = executeCommand(raw);
    if (result.isClear) {
      history = [];
    } else {
      history = [...history, { cmd: raw, output: result.output }];
    }

    commandInput = "";
    setTimeout(scrollToBottom, 50);
  }
</script>

<section class="flex flex-col gap-6 py-8 border-t border-border/80">
  <div class="space-y-1">
    <span class="font-mono text-xs text-primary font-semibold tracking-wide">
      // PLAYGROUND
    </span>
    <h2 class="text-2xl sm:text-3xl font-extrabold text-text tracking-tight">
      The interactive sandbox
    </h2>
  </div>

  <div
    class="rounded-lg bg-surface border border-border shadow-2xl overflow-hidden group hover:border-primary/40 transition-colors duration-300"
  >
    <!-- Window Bar -->
    <TerminalHeader {isPaused} onTogglePause={togglePause} />

    <!-- Terminal Outer Animated Wrapper with smooth height transition -->
    <div
      class="overflow-hidden transition-[height] duration-700 ease-in-out bg-background/90"
      style="height: {calculatedHeight}px;"
    >
      <!-- Scrollable Inner Terminal Content -->
      <div
        bind:this={terminalBox}
        class="h-full overflow-y-auto scroll-smooth p-4 sm:p-6"
      >
        <div
          bind:clientHeight={innerContentHeight}
          class="space-y-4 font-mono text-xs sm:text-sm"
        >
          {#each history as item, i (item.cmd + i)}
            <TerminalHistoryItem {item} />
          {/each}

          <!-- Animated Typing Command Line -->
          {#if currentTypingCmd}
            <div
              in:fade={{ duration: 100 }}
              class="flex items-center gap-2 text-text"
            >
              <span class="text-primary font-bold select-none">$</span>
              <span>{currentTypingCmd}</span>
              <span
                class="w-2 h-4 bg-primary inline-block animate-pulse align-middle"
              ></span>
            </div>
          {/if}

          <!-- Interactive User Input -->
          <form
            onsubmit={handleCommandSubmit}
            class="flex items-center gap-2 pt-1 border-t border-border/40"
          >
            <span class="text-primary font-bold select-none">$</span>
            <input
              type="text"
              bind:value={commandInput}
              placeholder="type 'help' or any command..."
              class="flex-1 bg-transparent text-text outline-none font-mono text-xs sm:text-sm placeholder:text-text-subtle/50"
              aria-label="Terminal command input"
            />
            <button
              type="submit"
              class="p-1 text-text-subtle hover:text-primary transition-colors cursor-pointer"
              aria-label="Run command"
            >
              <CornerDownLeft class="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
