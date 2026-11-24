<script>
  import Logo from '#lib/brand/Logo.svelte';
  import { event, org } from '#lib/content.js';

  const year = new Date().getFullYear();
</script>

<footer class="dark arena border-t border-white/10">
  <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
    <div>
      <Logo class="text-4xl" />
      <p class="mt-4 font-script text-xl text-white/70">{event.motto}</p>
    </div>

    <div class="text-sm text-white/80">
      <p class="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">Hosted by</p>
      <p class="mt-3 font-semibold text-white">{org.name}</p>
      <address class="mt-1 not-italic">
        {org.address.street}<br />{org.address.city}, {org.address.region}
        {org.address.postalCode}
      </address>
      <p class="mt-3">
        <a href="mailto:{org.email}" class="break-all hover:text-brand-pink">{org.email}</a><br />
        <a href={org.phoneHref} class="hover:text-brand-pink">{org.phone}</a>
      </p>
    </div>

    <nav class="text-sm" aria-label="Footer">
      <p class="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">Links</p>
      <ul class="mt-3 grid gap-2 text-white/80">
        <li>
          <a href={event.registerUrl} target="_blank" rel="noopener" class="hover:text-brand-pink">
            Register
          </a>
        </li>
        <li><a href="/support" class="hover:text-brand-pink">App support</a></li>
        <li><a href="/privacy" class="hover:text-brand-pink">Privacy policy</a></li>
        <li>
          <a href={org.website} target="_blank" rel="noopener" class="hover:text-brand-pink">
            {org.name}
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="border-t border-white/10 py-6 text-center text-xs text-white/50">
    © {year}
    {org.name}. All rights reserved.
  </div>
</footer>
