<script>
  import Mail from '@lucide/svelte/icons/mail';
  import Phone from '@lucide/svelte/icons/phone';
  import ContactForm from '#lib/components/ContactForm.svelte';
  import { org } from '#lib/content.js';

  /** @type {{ form?: import('#lib/components/contact-form-types.js').ContactFormResult }} */
  let { form } = $props();
</script>

<section id="contact" class="scroll-mt-20 py-20 sm:py-28" aria-labelledby="contact-title">
  <div class="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.4fr]">
    <div>
      <p class="section-eyebrow">Contact</p>
      <h2 id="contact-title" class="section-title mt-3">Questions? We’re here.</h2>
      <p class="mt-6 text-lg text-muted-foreground">
        Send us a message and our team will get back to you, or reach out directly.
      </p>
      <ul class="mt-8 grid gap-4">
        <li>
          <a
            href="mailto:{org.email}"
            class="flex items-center gap-3 font-medium break-all hover:text-primary"
          >
            <Mail class="size-5 shrink-0 text-primary" aria-hidden="true" />{org.email}
          </a>
        </li>
        <li>
          <a href={org.phoneHref} class="flex items-center gap-3 font-medium hover:text-primary">
            <Phone class="size-5 shrink-0 text-primary" aria-hidden="true" />{org.phone}
          </a>
        </li>
      </ul>
    </div>

    <div class="rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <ContactForm {form} />
    </div>
  </div>
</section>
