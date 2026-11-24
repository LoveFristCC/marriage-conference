<script>
  import Clock from '@lucide/svelte/icons/clock';
  import MapPin from '@lucide/svelte/icons/map-pin';
  import Baby from '@lucide/svelte/icons/baby';
  import Utensils from '@lucide/svelte/icons/utensils';
  import * as Card from '#lib/components/ui/card/index.js';
  import { Button } from '#lib/components/ui/button/index.js';
  import { schedule, venue } from '#lib/content.js';
</script>

<section id="details" class="scroll-mt-20 py-20 sm:py-28" aria-labelledby="details-title">
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center">
      <p class="section-eyebrow">Event details</p>
      <h2 id="details-title" class="section-title mt-3">When &amp; where</h2>
    </div>

    <div class="mt-14 grid gap-8 lg:grid-cols-2">
      <div class="grid content-start gap-6">
        {#each schedule as day (day.day)}
          <Card.Root>
            <Card.Content class="flex flex-row items-center gap-5">
              <div
                class="flex size-16 shrink-0 flex-col items-center justify-center rounded-xl bg-primary font-display text-sm leading-tight text-primary-foreground uppercase"
              >
                {day.day.slice(0, 3)}
                <span class="text-2xl">{day.date.match(/\d+/)?.[0]}</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold">{day.day}, {day.date}</h3>
                <p class="mt-1 flex items-center gap-2 text-muted-foreground">
                  <Clock class="size-4" aria-hidden="true" />{day.time}
                </p>
              </div>
            </Card.Content>
          </Card.Root>
        {/each}

        <Card.Root>
          <Card.Content class="grid gap-4">
            <div class="flex gap-3">
              <MapPin class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <address class="not-italic">
                <strong>{venue.name}</strong><br />
                {venue.address.street}<br />
                {venue.address.city}, {venue.address.region}
                {venue.address.postalCode}
              </address>
            </div>
            <div class="flex gap-3">
              <Baby class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p>{venue.childcare}</p>
                <p class="mt-1 text-sm text-muted-foreground">{venue.childcareNote}</p>
              </div>
            </div>
            <div>
              <Button href={venue.mapsUrl} target="_blank" rel="noopener" variant="outline">
                Get directions
              </Button>
            </div>
          </Card.Content>
        </Card.Root>
      </div>

      <div class="overflow-hidden rounded-2xl border shadow-card">
        <iframe
          title="Map to {venue.name}"
          src={venue.mapsEmbedUrl}
          class="h-80 w-full lg:h-full lg:min-h-[28rem]"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div class="mt-16">
      <h3
        class="flex items-center justify-center gap-3 text-center font-display text-3xl tracking-wide uppercase"
      >
        <Utensils class="size-6 text-primary" aria-hidden="true" />Make it a date night
      </h3>
      <p class="mt-3 text-center text-muted-foreground">A few favorite spots near the church.</p>
      <ul class="mt-8 grid gap-4 md:grid-cols-3">
        {#each venue.dateNight as spot (spot.name)}
          <li
            class="rounded-xl border bg-card p-5 shadow-card transition-shadow duration-200 hover:shadow-card-hover"
          >
            <a
              href="https://www.google.com/maps/search/?api=1&query={encodeURIComponent(
                `${spot.name}, ${spot.address}`
              )}"
              target="_blank"
              rel="noopener"
              class="font-semibold hover:text-primary"
            >
              {spot.name}
            </a>
            <p class="mt-1 text-sm text-muted-foreground">{spot.address}</p>
            <p class="mt-2 text-sm">{spot.note}</p>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</section>
