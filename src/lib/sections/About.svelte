<script>
  import MessageCircleHeart from '@lucide/svelte/icons/message-circle-heart';
  import InfinityIcon from '@lucide/svelte/icons/infinity';
  import HouseHeart from '@lucide/svelte/icons/house-heart';
  import HandHeart from '@lucide/svelte/icons/hand-heart';
  import IconTile from '#lib/brand/IconTile.svelte';
  import * as Card from '#lib/components/ui/card/index.js';
  import { event, outcomes } from '#lib/content.js';

  // Communication, Connection, Finances & Family, Intimacy
  const icons = [MessageCircleHeart, InfinityIcon, HouseHeart, HandHeart];
</script>

<section id="about" class="scroll-mt-20 py-20 sm:py-28" aria-labelledby="about-title">
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-3xl text-center">
      <p class="section-eyebrow">About the conference</p>
      <h2 id="about-title" class="section-title mt-3">Two days to grow stronger, together</h2>
      <p class="mt-6 text-lg">{event.description}</p>
      <p class="mt-4 text-lg text-muted-foreground">{event.about}</p>
    </div>

    <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each outcomes as outcome, i (outcome.title)}
        {@const Icon = icons[i % icons.length]}
        <Card.Root class="relative">
          <!-- Jersey-style number, a nod to the conference's basketball theme. -->
          <span
            aria-hidden="true"
            class="pointer-events-none absolute -top-2 right-3 font-display text-7xl leading-none text-foreground/[0.06] select-none [-webkit-text-stroke:1.5px_color-mix(in_oklab,var(--brand-pink)_55%,transparent)]"
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <Card.Header class="justify-items-center text-center">
            <IconTile icon={Icon} class="mb-3" />
            <Card.Title class="font-display text-2xl tracking-wide uppercase">
              {outcome.title}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="text-center text-muted-foreground">{outcome.body}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>

    <p class="mt-14 text-center font-script text-3xl text-primary">{event.motto}</p>
  </div>
</section>
