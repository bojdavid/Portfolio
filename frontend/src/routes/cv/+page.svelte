<script lang="ts">
  import { profileData } from "$lib/data/profile";
  import { toast } from "$lib/stores/toast";
  import { Download, ExternalLink, FileText } from "lucide-svelte";

  function handleDownloadNotify() {
    toast.success("Downloading " + profileData.cvFileName);
  }
</script>

<svelte:head>
  <title>{profileData.pages.cv.title}</title>
  <meta name="description" content={profileData.pages.cv.description} />
</svelte:head>

<div class="flex flex-col gap-6 animate-in fade-in duration-300">
  <!-- Toolbar / Header Card -->
  <div
    class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 rounded-xl bg-surface border border-border shadow-lg"
  >
    <div class="flex items-center gap-3">
      <div class="p-2.5 rounded-lg bg-surface-subtle border border-border text-primary">
        <FileText class="w-5 h-5" />
      </div>
      <div>
        <div class="font-mono text-xs text-text-muted flex items-center gap-2">
          <span class="text-primary font-bold">//</span>
          <span>CV / RESUME</span>
          <span class="hidden sm:inline text-border">•</span>
          <span class="hidden sm:inline text-text-subtle font-mono text-[11px]">{profileData.cvFileName}</span>
        </div>
        <h1 class="text-lg sm:text-xl font-bold text-text">
          {profileData.name} — Curriculum Vitae
        </h1>
      </div>
    </div>

    <div class="flex items-center flex-wrap gap-2.5">
      <!-- Open in New Tab -->
      <a
        href={profileData.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-md bg-surface-subtle border border-border text-text hover:text-primary hover:border-primary font-mono text-xs font-medium transition-all"
        title="Open PDF in new tab"
      >
        <ExternalLink class="w-3.5 h-3.5" />
        <span>Open Tab</span>
      </a>

      <!-- Download CV Button -->
      <a
        href={profileData.cvUrl}
        download={profileData.cvFileName}
        onclick={handleDownloadNotify}
        class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-primary text-background font-mono font-bold text-xs hover:brightness-110 shadow-md shadow-primary/20 transition-all"
      >
        <Download class="w-3.5 h-3.5" />
        <span>Download CV</span>
      </a>
    </div>
  </div>

  <!-- PDF Document Embed Viewer -->
  <div class="w-full rounded-xl bg-surface border border-border shadow-2xl overflow-hidden relative">
    <iframe
      src="{profileData.cvUrl}#view=FitH"
      class="w-full h-[80vh] min-h-[650px] max-h-[1100px] border-0 block bg-surface-subtle"
      title="{profileData.name} Curriculum Vitae"
    ></iframe>
  </div>
</div>
