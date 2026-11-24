<script>
  import * as Accordion from '#lib/components/ui/accordion/index.js';

  /** @type {{ items: { q: string; a: string }[]; id?: string; title?: string; eyebrow?: string }} */
  let { items, id = 'faq', title = 'Frequently asked questions', eyebrow = 'FAQ' } = $props();
</script>

<section {id} class="scroll-mt-20 bg-muted/60 py-20 sm:py-28" aria-labelledby="{id}-title">
  <div class="mx-auto max-w-3xl px-4">
    <div class="text-center">
      <p class="section-eyebrow">{eyebrow}</p>
      <h2 id="{id}-title" class="section-title mt-3">{title}</h2>
    </div>

    <Accordion.Root type="single" class="mt-12 rounded-2xl border bg-card px-6 shadow-card">
      {#each items as item, i (item.q)}
        <Accordion.Item value="item-{i}">
          <Accordion.Trigger class="text-left text-base">{item.q}</Accordion.Trigger>
          <Accordion.Content class="text-base text-muted-foreground">{item.a}</Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
  </div>
</section>
