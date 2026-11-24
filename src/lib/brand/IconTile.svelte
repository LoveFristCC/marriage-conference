<script>
  /**
   * Black tile with a thin gold trim, echoing the ticket panels on the flyer.
   * @type {{ icon: import('svelte').Component<any>; class?: string }}
   */
  let { icon: Icon, class: className = '' } = $props();
</script>

<span
  class="inline-flex size-14 items-center justify-center rounded-2xl bg-brand-ink shadow-[0_6px_16px_-6px] ring-1 shadow-black/40 ring-brand-gold/70 {className}"
  aria-hidden="true"
>
  <Icon class="size-7 text-brand-pink" strokeWidth={1.75} />
</span>
