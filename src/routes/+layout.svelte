<script>
  import '../app.css';
  import { Toaster } from '#lib/components/ui/sonner/index.js';
  import SiteHeader from '#lib/sections/SiteHeader.svelte';
  import SiteFooter from '#lib/sections/SiteFooter.svelte';

  /** @type {{ children: import('svelte').Snippet }} */
  let { children } = $props();
</script>

<a
  href="#main"
  class="sr-only z-50 rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
>
  Skip to content
</a>

<div class="flex min-h-svh flex-col">
  <SiteHeader />
  <main id="main" class="flex-1">
    {@render children()}
  </main>
  <SiteFooter />
</div>

<Toaster richColors position="top-center" />
