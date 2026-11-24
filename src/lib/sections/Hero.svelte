<script>
  import CalendarDays from '@lucide/svelte/icons/calendar-days';
  import MapPin from '@lucide/svelte/icons/map-pin';
  import { Button } from '#lib/components/ui/button/index.js';
  import { event, org } from '#lib/content.js';
</script>

<section class="dark arena relative overflow-hidden" aria-labelledby="hero-title">
  <div
    class="mx-auto flex max-w-6xl flex-col items-center px-4 pt-16 pb-20 text-center sm:pt-24 sm:pb-28"
  >
    <h1 id="hero-title">
      <span class="sr-only">{event.name} 2027 in {org.address.city}, {org.address.region}</span>
      <!-- Vector logo as an image so the heading's only text is the descriptive name above. -->
      <img
        src="/brand/logo.svg"
        alt=""
        width="949"
        height="288"
        fetchpriority="high"
        class="mx-auto h-auto w-[min(90vw,46rem)]"
      />
    </h1>

    <ul
      class="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold tracking-[0.25em] text-brand-gold uppercase sm:text-base"
    >
      {#each event.tagline as line, i (line)}
        {#if i > 0}<li aria-hidden="true" class="hidden text-white/30 sm:block">|</li>{/if}
        <li>{line}</li>
      {/each}
    </ul>

    <div class="gold-rule mt-8 w-full max-w-xl"></div>

    <div class="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
      <p class="flex items-center gap-2 font-display text-3xl tracking-wide uppercase sm:text-4xl">
        <CalendarDays class="size-7 text-primary" aria-hidden="true" />
        {event.datesLabel}
      </p>
      <p class="flex items-center gap-2 text-white/80">
        <MapPin class="size-5 text-brand-pink" aria-hidden="true" />
        {org.name} · {org.address.city}, {org.address.region}
      </p>
    </div>

    <div class="mt-10 flex flex-col gap-3 sm:flex-row">
      <Button
        href={event.registerUrl}
        target="_blank"
        rel="noopener"
        size="lg"
        class="h-12 px-8 text-base font-semibold"
      >
        Register now
      </Button>
      <Button href="#tickets" variant="outline" size="lg" class="h-12 px-8 text-base">
        See ticket options
      </Button>
    </div>

    <p class="mt-12 font-script text-2xl text-white/70 sm:text-3xl">
      {event.pillars.join(' · ')}
    </p>
  </div>
</section>
