<script>
  import { page } from '$app/state';
  import { event, site } from '#lib/content.js';
  import { absolute } from '#lib/seo/schema.js';

  /**
   * @type {{
   *   title?: string;
   *   description?: string;
   *   path?: string;
   *   image?: string;
   *   imageAlt?: string;
   *   noindex?: boolean;
   *   jsonLd?: Record<string, unknown>;
   * }}
   */
  let {
    title,
    description = site.description,
    path,
    image = site.ogImage,
    imageAlt = site.ogImageAlt,
    noindex = false,
    jsonLd
  } = $props();

  // Page titles: "Privacy Policy | Love First Marriage Conference"; home uses the full SEO title.
  const fullTitle = $derived(title ? `${title} | ${event.name}` : site.title);
  // Canonical URLs always use the production domain, never the request host.
  const canonical = $derived(absolute(path ?? page.url.pathname));
  const imageUrl = $derived(absolute(image));
  const isDefaultImage = $derived(image === site.ogImage);
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={canonical} />
  <meta
    name="robots"
    content={noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}
  />

  <meta property="og:type" content="website" />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:site_name" content={event.name} />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonical} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:image:alt" content={imageAlt} />
  {#if isDefaultImage}
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/jpeg" />
  {/if}

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageUrl} />
  <meta name="twitter:image:alt" content={imageAlt} />

  {#if jsonLd}
    {@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</` +
      `script>`}
  {/if}
</svelte:head>
