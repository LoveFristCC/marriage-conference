<script>
  import HeartBall from '#lib/brand/HeartBall.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
  import { event } from '#lib/content.js';
</script>

<section class="dark arena overflow-hidden py-20 sm:py-24" aria-labelledby="playbook-title">
  <div class="mx-auto flex max-w-4xl flex-col items-center px-4 text-center">
    <HeartBall class="size-16" />
    <p class="mt-6 font-script text-3xl text-brand-gold">
      Marriage is a journey, and every successful journey needs a plan.
    </p>
    <h2 id="playbook-title" class="section-title mt-4">
      Stop guessing. Start building with the playbook.
    </h2>
    <Button
      href={event.registerUrl}
      target="_blank"
      rel="noopener"
      size="lg"
      class="mt-10 h-12 px-10 text-base font-semibold"
    >
      Secure your seats today
    </Button>
  </div>
</section>
