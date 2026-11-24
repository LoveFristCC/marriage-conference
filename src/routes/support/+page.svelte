<script>
  import Mail from '@lucide/svelte/icons/mail';
  import Smartphone from '@lucide/svelte/icons/smartphone';
  import Seo from '#lib/components/Seo.svelte';
  import ContactForm from '#lib/components/ContactForm.svelte';
  import { Button } from '#lib/components/ui/button/index.js';
  import { app, org } from '#lib/content.js';
  import { graph, organization, webPage } from '#lib/seo/schema.js';

  /** @type {import('./$types').PageProps} */
  let { form } = $props();

  const description = `Help and contact information for the ${app.fullName}.`;
  const jsonLd = graph(
    organization(),
    webPage({ path: '/support', name: 'Support', description, type: 'ContactPage' })
  );
</script>

<Seo title="Support" path="/support" {description} {jsonLd} />

<div class="dark arena">
  <div class="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
    <p class="section-eyebrow">{app.fullName}</p>
    <h1 class="section-title mt-3">Support</h1>
    <p class="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
      Need help with the app? We’re happy to help.
    </p>
    {#if app.appStoreUrl || app.playStoreUrl}
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        {#if app.appStoreUrl}
          <Button href={app.appStoreUrl} target="_blank" rel="noopener" variant="outline">
            App Store
          </Button>
        {/if}
        {#if app.playStoreUrl}
          <Button href={app.playStoreUrl} target="_blank" rel="noopener" variant="outline">
            Google Play
          </Button>
        {/if}
      </div>
    {/if}
  </div>
</div>

<section id="contact" class="scroll-mt-20 py-16 sm:py-24" aria-labelledby="support-contact-title">
  <div class="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.4fr]">
    <div>
      <p class="section-eyebrow">Get in touch</p>
      <h2 id="support-contact-title" class="section-title mt-3">Contact us</h2>
      <p class="mt-6 text-lg text-muted-foreground">
        Send us a message with the form, or email us and we’ll get back to you as soon as we can.
      </p>

      <a
        href="mailto:{org.email}"
        class="group mt-8 flex items-center gap-4 rounded-2xl border bg-card p-5 shadow-card transition-shadow hover:shadow-card-hover"
      >
        <span
          class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground"
        >
          <Mail class="size-5" aria-hidden="true" />
        </span>
        <span class="min-w-0">
          <span class="block text-sm text-muted-foreground">Email</span>
          <span class="block font-semibold break-all group-hover:text-primary">{org.email}</span>
        </span>
      </a>

      <div class="mt-4 flex gap-4 rounded-2xl bg-brand-pink-soft/60 p-5">
        <Smartphone class="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
        <p class="text-sm">
          Please include your <strong>device type</strong> (iPhone or Android) and a
          <strong>short description of the problem</strong> so we can help faster.
        </p>
      </div>
    </div>

    <div class="rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <ContactForm
        {form}
        askDevice
        submitLabel="Send to support"
        messagePlaceholder="What happened? Include any error message and what you were trying to do."
      />
    </div>
  </div>

  <p class="mx-auto mt-16 max-w-6xl border-t px-4 pt-6 text-center text-sm text-muted-foreground">
    The {app.name} app is operated by {org.name}. See our
    <a href="/privacy" class="text-primary underline underline-offset-2">privacy policy</a>.
  </p>
</section>
