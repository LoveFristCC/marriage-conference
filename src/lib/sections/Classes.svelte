<script>
  import ArrowUpRight from '@lucide/svelte/icons/arrow-up-right';
  import CalendarHeart from '@lucide/svelte/icons/calendar-heart';
  import BookHeart from '@lucide/svelte/icons/book-heart';
  import UsersRound from '@lucide/svelte/icons/users-round';
  import IconTile from '#lib/brand/IconTile.svelte';
  import * as Card from '#lib/components/ui/card/index.js';
  import { Button } from '#lib/components/ui/button/index.js';
  import { classes } from '#lib/content.js';

  /** @type {Record<string, import('svelte').Component<any>>} */
  const icons = {
    'calendar-heart': CalendarHeart,
    'book-heart': BookHeart,
    'users-round': UsersRound
  };
</script>

<section
  id="classes"
  class="scroll-mt-20 bg-muted/60 py-20 sm:py-28"
  aria-labelledby="classes-title"
>
  <div class="mx-auto max-w-6xl px-4">
    <div class="mx-auto max-w-2xl text-center">
      <p class="section-eyebrow">Beyond the conference</p>
      <h2 id="classes-title" class="section-title mt-3">Marriage classes year-round</h2>
      <p class="mt-6 text-lg text-muted-foreground">
        The conference happens once a year, but our marriage ministry continues all year long with
        classes and events to help couples keep growing together.
      </p>
    </div>

    <div class="mt-14 grid gap-6 md:grid-cols-3">
      {#each classes.items as item (item.name)}
        <Card.Root class="h-full">
          <Card.Header class="justify-items-center text-center">
            {#if item.icon && icons[item.icon]}<IconTile
                icon={icons[item.icon]}
                class="mb-3"
              />{/if}
            <Card.Title class="text-lg font-semibold">
              {#if item.url}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-start gap-1 hover:text-primary"
                >
                  {item.name}<ArrowUpRight class="mt-1 size-4 shrink-0" aria-hidden="true" />
                </a>
              {:else}
                {item.name}
              {/if}
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p class="text-center text-sm leading-relaxed text-muted-foreground">{item.body}</p>
          </Card.Content>
        </Card.Root>
      {/each}
    </div>

    <div class="mt-12 text-center">
      <Button href={classes.calendarUrl} target="_blank" rel="noopener" size="lg">
        View marriage classes
      </Button>
    </div>
  </div>
</section>
