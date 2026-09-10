<script lang="ts">
  import CvSheet from "$lib/components/cv/CvSheet.svelte";
  import { toast } from "$lib/stores/toast";
  import { Download, Printer } from "lucide-svelte";

  function handlePrint() {
    toast.info("Preparing document for print / PDF export...");
    setTimeout(() => {
      window.print();
    }, 400);
  }
</script>

<svelte:head>
  <title>Curriculum Vitae | Alex Rivers</title>
  <meta
    name="description"
    content="Official Curriculum Vitae of Alex Rivers, Senior Full-Stack Systems Engineer."
  />
</svelte:head>

<div class="flex flex-col gap-6 animate-in fade-in duration-300">
  <!-- Toolbar -->
  <div
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg bg-surface-subtle border border-border no-print"
  >
    <div class="font-mono text-xs text-text-muted flex items-center gap-2">
      <span class="text-primary font-bold">//</span>
      <span>FORMAT: DOCUMENT_PRINT_PDF</span>
    </div>

    <button
      type="button"
      onclick={handlePrint}
      class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-background font-mono font-bold text-xs hover:brightness-110 shadow-md shadow-primary/20 transition-all"
    >
      <Download class="w-3.5 h-3.5" />
      <span>Download Printed Copy (PDF)</span>
    </button>
  </div>

  <!-- CV Sheet Preview -->
  <CvSheet />
</div>
