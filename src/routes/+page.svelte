<script>
  import Seo from '#lib/components/Seo.svelte';
  import Hero from '#lib/sections/Hero.svelte';
  import About from '#lib/sections/About.svelte';
  import Hosts from '#lib/sections/Hosts.svelte';
  import Tickets from '#lib/sections/Tickets.svelte';
  import Details from '#lib/sections/Details.svelte';
  import Faq from '#lib/sections/Faq.svelte';
  import Contact from '#lib/sections/Contact.svelte';
  import Classes from '#lib/sections/Classes.svelte';
  import Playbook from '#lib/sections/Playbook.svelte';
  import { faqs, site } from '#lib/content.js';
  import {
    conferenceEvent,
    faqPage,
    graph,
    organization,
    webPage,
    website
  } from '#lib/seo/schema.js';

  /** @type {import('./$types').PageProps} */
  let { form } = $props();

  const jsonLd = graph(
    organization(),
    website(),
    webPage({ path: '/', name: site.title, description: site.description }),
    conferenceEvent(),
    faqPage(faqs)
  );
</script>

<Seo path="/" {jsonLd} />

<Hero />
<About />
<Hosts />
<Tickets />
<Details />
<Classes />
<Faq items={faqs} />
<Playbook />
<Contact {form} />
