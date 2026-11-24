<script>
  import { HEART_PATH, SEAM_PATHS, COLORS } from './heart-ball.js';

  /** @type {{ class?: string; title?: string }} */
  let { class: className = '', title } = $props();

  const id = $props.id();
</script>

<svg
  viewBox="0 0 100 100"
  class={className}
  role={title ? 'img' : undefined}
  aria-hidden={title ? undefined : 'true'}
  xmlns="http://www.w3.org/2000/svg"
>
  {#if title}<title>{title}</title>{/if}
  <defs>
    <radialGradient id="{id}-ball" cx="38%" cy="30%" r="75%">
      <stop offset="0%" stop-color={COLORS.ballLight} />
      <stop offset="55%" stop-color={COLORS.ballMid} />
      <stop offset="100%" stop-color={COLORS.ballDark} />
    </radialGradient>
    <clipPath id="{id}-clip">
      <path d={HEART_PATH} />
    </clipPath>
  </defs>
  <path d={HEART_PATH} fill="url(#{id}-ball)" />
  <g
    clip-path="url(#{id}-clip)"
    fill="none"
    stroke={COLORS.seam}
    stroke-width="3"
    stroke-linecap="round"
  >
    {#each SEAM_PATHS as d (d)}
      <path {d} />
    {/each}
  </g>
  <path
    d={HEART_PATH}
    fill="none"
    stroke={COLORS.seam}
    stroke-width="2.5"
    stroke-linejoin="round"
  />
</svg>
