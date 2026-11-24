<script>
  import { hosts } from '#lib/content.js';
  import HeartBall from '#lib/brand/HeartBall.svelte';
</script>

<section
  id="hosts"
  class="scroll-mt-20 overflow-hidden bg-brand-pink-soft/60 pt-20 sm:pt-28"
  aria-labelledby="hosts-title"
>
  {#each hosts as host (host.name)}
    <div class="mx-auto grid max-w-6xl items-end gap-10 px-4 lg:grid-cols-2">
      <div class="self-center pb-4 text-center lg:pb-28 lg:text-left">
        <p class="section-eyebrow">Meet your hosts</p>
        <h2 id="hosts-title" class="section-title mt-3">{host.name}</h2>
        <p class="mt-2 font-semibold text-primary">{host.role}</p>
        <p class="mt-6 text-lg text-muted-foreground">{host.bio}</p>
      </div>
      {#if host.photo}
        <img
          src={host.photo}
          alt={host.name}
          width="787"
          height="560"
          loading="lazy"
          class="mx-auto w-full max-w-xl drop-shadow-xl"
        />
      {:else}
        <div
          class="arena mx-auto mb-20 flex size-56 items-center justify-center rounded-full"
          aria-hidden="true"
        >
          <HeartBall class="size-28" />
        </div>
      {/if}
    </div>
  {/each}
</section>
