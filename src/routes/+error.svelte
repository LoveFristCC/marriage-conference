<script>
  import { page } from '$app/state';
  import Seo from '#lib/components/Seo.svelte';
  import HeartBall from '#lib/brand/HeartBall.svelte';
  import { Button } from '#lib/components/ui/button/index.js';

  const notFound = $derived(page.status === 404);
</script>

<Seo title={notFound ? 'Page not found' : 'Something went wrong'} noindex />

<section class="dark arena">
  <div
    class="mx-auto flex min-h-[60svh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center"
  >
    <HeartBall class="size-20" />
    <p class="section-eyebrow mt-8">Error {page.status}</p>
    <h1 class="section-title mt-3">
      {notFound ? 'Air ball! Page not found' : 'Something went wrong'}
    </h1>
    <p class="mt-4 text-muted-foreground">
      {notFound
        ? 'The page you’re looking for doesn’t exist or has moved.'
        : 'Please try again in a moment.'}
    </p>
    <div class="mt-8 flex flex-wrap justify-center gap-3">
      <Button href="/" size="lg">Back to home</Button>
      <Button href="/#tickets" variant="outline" size="lg">See tickets</Button>
    </div>
  </div>
</section>
