<script>
  import Check from '@lucide/svelte/icons/check';
  import { Badge } from '#lib/components/ui/badge/index.js';
  import { Button } from '#lib/components/ui/button/index.js';
  import { cn } from '#lib/utils.js';
  import { event, tickets } from '#lib/content.js';

  // Evaluated when the page renders (server and client), so the label stays current.
  const earlyBirdEnded = Date.now() > new Date(tickets.earlyBirdDeadline).getTime();
</script>

<section
  id="tickets"
  class="dark arena scroll-mt-20 py-20 sm:py-28"
  aria-labelledby="tickets-title"
>
  <div class="mx-auto max-w-6xl px-4">
    <div class="text-center">
      <p class="section-eyebrow">Tickets</p>
      <h2 id="tickets-title" class="section-title mt-3">Reserve your seats</h2>
      <p class="mt-4 text-muted-foreground">Pricing is per person.</p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-3">
      {#each tickets.options as option (option.id)}
        {@const ended = option.earlyBird && earlyBirdEnded}
        <article
          class={cn(
            'relative flex flex-col rounded-2xl border p-8 text-center transition-shadow duration-200',
            option.featured
              ? 'border-brand-gold bg-gradient-to-b from-brand-gold/15 to-transparent shadow-[0_0_40px_-10px] shadow-brand-gold/40'
              : 'border-white/15 bg-card shadow-card hover:shadow-card-hover',
            ended && 'opacity-60'
          )}
        >
          <p
            class={cn(
              'text-xs font-semibold tracking-[0.25em] uppercase',
              option.featured ? 'text-brand-gold' : 'text-brand-pink'
            )}
          >
            {option.group}
          </p>
          <h3 class="mt-3 font-display text-3xl tracking-wide uppercase">{option.name}</h3>
          <p
            class={cn(
              'mt-4 font-display text-6xl',
              option.featured ? 'text-brand-gold' : 'text-white'
            )}
          >
            ${option.price}
          </p>
          <div class="mt-4 flex justify-center">
            {#if ended}
              <Badge variant="secondary">Ended January 3rd</Badge>
            {:else}
              <Badge variant={option.featured ? 'default' : 'secondary'}>{option.detail}</Badge>
            {/if}
          </div>
          {#if option.perks}
            <ul class="mt-6 grid gap-2 text-left text-sm text-white/85">
              {#each option.perks as perk (perk)}
                <li class="flex items-center gap-2">
                  <Check class="size-4 shrink-0 text-brand-gold" aria-hidden="true" />{perk}
                </li>
              {/each}
            </ul>
          {/if}
        </article>
      {/each}
    </div>

    <div class="mt-12 flex flex-col items-center gap-4 text-center">
      <Button
        href={event.registerUrl}
        target="_blank"
        rel="noopener"
        size="lg"
        class="h-12 px-10 text-base font-semibold"
      >
        Register on Church Center
      </Button>
      <p class="text-sm tracking-wide text-muted-foreground uppercase">{tickets.note}</p>
    </div>
  </div>
</section>
