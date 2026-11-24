<script>
  import { cn } from '#lib/utils.js';
  import HeartBall from './HeartBall.svelte';

  /**
   * @type {{
   *   variant?: 'light' | 'dark';
   *   subtitle?: boolean;
   *   class?: string;
   * }}
   * `light` = light text, for dark backgrounds. `dark` = dark text, for light backgrounds.
   */
  let { variant = 'light', subtitle = true, class: className = '' } = $props();
</script>

<span
  class={cn('inline-flex flex-col items-center leading-none select-none', className)}
  role="img"
  aria-label="Love First Marriage Conference"
>
  <span
    aria-hidden="true"
    class={cn(
      'flex items-center font-display text-[1em] tracking-wide uppercase',
      variant === 'light' ? 'text-brand-cream' : 'text-foreground'
    )}
  >
    L<HeartBall
      class="mx-[0.02em] -mt-[0.08em] h-[0.98em] w-[0.98em] drop-shadow-sm"
    />VE&nbsp;FIRST
  </span>
  {#if subtitle}
    <span
      aria-hidden="true"
      class={cn(
        'mt-[0.18em] text-[0.215em] font-medium tracking-[0.32em] uppercase',
        variant === 'light' ? 'text-white' : 'text-muted-foreground'
      )}
    >
      Marriage Conference
    </span>
  {/if}
</span>
