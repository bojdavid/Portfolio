<script lang="ts">
  import { profileData } from '$lib/data/profile';
  import { experienceData } from '$lib/data/experience';
  import { cvCompetencies } from '$lib/data/skills';
</script>

<div class="print-page w-full p-6 sm:p-10 md:p-12 rounded-xl bg-surface border border-border shadow-2xl space-y-10 text-text">
  <!-- Sheet Header -->
  <div class="flex flex-col sm:flex-row justify-between gap-6 border-b border-border pb-8">
    <div class="space-y-1">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-text tracking-tight">
        {profileData.name}
      </h1>
      <p class="text-sm sm:text-base font-mono font-semibold text-primary">
        {profileData.role}
      </p>
    </div>
    <div class="font-mono text-xs text-text-muted space-y-1 sm:text-right">
      <div>{profileData.email}</div>
      <div>{profileData.phone}</div>
      <div>{profileData.githubUrl.replace('http://', '').replace('https://', '')}</div>
      <div>{profileData.location}</div>
    </div>
  </div>

  <!-- 01 / Summary -->
  <section class="space-y-3">
    <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
      01 / Professional Summary
    </h2>
    <p class="text-sm leading-relaxed text-text-muted">
      {profileData.shortBio}
    </p>
  </section>

  <!-- 02 / Timeline -->
  <section class="space-y-4">
    <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
      02 / Professional Timeline
    </h2>
    <div class="space-y-6">
      {#each experienceData as job}
        <div class="space-y-2">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h3 class="font-bold text-base text-text">{job.company} — <span class="text-primary font-medium">{job.role}</span></h3>
            <span class="font-mono text-xs text-text-subtle">{job.period}</span>
          </div>
          <div class="space-y-1.5 pl-1">
            {#each job.bullets as bullet}
              <div class="flex items-start gap-2.5 text-xs sm:text-sm text-text-muted leading-relaxed">
                <span class="text-primary font-mono select-none">&gt;</span>
                <span>{bullet}</span>
              </div>
            {/each}
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Split Grid: Competencies & Credentials -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-8">
    <!-- 03 / Competencies -->
    <section class="space-y-4">
      <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
        03 / Tech Competencies
      </h2>
      <div class="space-y-3">
        {#each cvCompetencies as group}
          <div class="space-y-1">
            <div class="font-bold text-xs text-text">{group.category}</div>
            <div class="font-mono text-xs text-text-muted">{group.skills.join(', ')}</div>
          </div>
        {/each}
      </div>
    </section>

    <!-- 04, 05, 06 Credentials -->
    <div class="space-y-6">
      <section class="space-y-2">
        <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
          04 / Education
        </h2>
        <div>
          <div class="font-bold text-xs text-text">{profileData.education[0].degree}</div>
          <div class="font-mono text-xs text-text-subtle">{profileData.education[0].institution}</div>
        </div>
      </section>

      <section class="space-y-2">
        <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
          05 / Honors & Athletics
        </h2>
        <div class="space-y-1 text-xs text-text-muted">
          {#each profileData.certifications as cert}
            <div>• {cert}</div>
          {/each}
        </div>
      </section>

      <section class="space-y-2">
        <h2 class="font-mono text-xs font-bold text-accent tracking-wider uppercase">
          06 / Languages Spoken
        </h2>
        <div class="text-xs text-text-muted">
          {profileData.languagesSpoken.join(', ')}
        </div>
      </section>
    </div>
  </div>
</div>
