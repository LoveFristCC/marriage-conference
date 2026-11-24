<script>
  import MenuIcon from '@lucide/svelte/icons/menu';
  import Logo from '#lib/brand/Logo.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
  import * as Sheet from '#lib/components/ui/sheet/index.js';
  import { event, nav } from '#lib/content.js';

  let menuOpen = $state(false);
</script>

<header
  class="dark arena sticky top-0 z-40 border-b border-white/10 !bg-brand-ink/90 backdrop-blur"
>
  <div class="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
    <a href="/" class="shrink-0 text-2xl" aria-label="{event.name} home">
      <Logo subtitle={false} />
    </a>

    <nav class="hidden items-center gap-1 lg:flex" aria-label="Main">
      {#each nav as item (item.href)}
        <a
          href={item.href}
          class="rounded-md px-3 py-2 text-sm font-medium tracking-wide text-white/80 uppercase transition-colors hover:text-brand-pink"
        >
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="flex items-center gap-2">
      <Button href={event.registerUrl} target="_blank" rel="noopener" class="font-semibold">
        Register
      </Button>

      <Sheet.Root bind:open={menuOpen}>
        <Sheet.Trigger>
          {#snippet child({ props })}
            <Button
              {...props}
              variant="ghost"
              size="icon"
              class="text-white lg:hidden"
              aria-label="Open menu"
            >
              <MenuIcon class="size-5" />
            </Button>
          {/snippet}
        </Sheet.Trigger>
        <Sheet.Content side="right" class="w-72">
          <Sheet.Header>
            <Sheet.Title class="font-display text-2xl tracking-wide uppercase">Menu</Sheet.Title>
          </Sheet.Header>
          <nav class="grid gap-1 px-4" aria-label="Mobile">
            {#each nav as item (item.href)}
              <a
                href={item.href}
                onclick={() => (menuOpen = false)}
                class="rounded-md px-3 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {item.label}
              </a>
            {/each}
          </nav>
          <Sheet.Footer>
            <Button href={event.registerUrl} target="_blank" rel="noopener" size="lg">
              Register now
            </Button>
          </Sheet.Footer>
        </Sheet.Content>
      </Sheet.Root>
    </div>
  </div>
</header>
