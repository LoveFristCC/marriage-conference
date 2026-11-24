<script>
  import Seo from '#lib/components/Seo.svelte';
  import { app, org } from '#lib/content.js';
  import { graph, organization, webPage } from '#lib/seo/schema.js';

  const description = `Privacy policy for the ${app.fullName}, operated by ${org.name}.`;
  const jsonLd = graph(
    organization(),
    webPage({ path: '/privacy', name: 'Privacy Policy', description })
  );
</script>

<Seo title="Privacy Policy" path="/privacy" {description} {jsonLd} />

<div class="dark arena">
  <div class="mx-auto max-w-3xl px-4 py-16 text-center sm:py-20">
    <p class="section-eyebrow">{app.fullName}</p>
    <h1 class="section-title mt-3">Privacy Policy</h1>
    <p class="mt-4 text-muted-foreground">Last updated: {app.privacyLastUpdated}</p>
  </div>
</div>

<article
  class="mx-auto max-w-3xl px-4 py-14 sm:py-20 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2 [&_h2]:mt-14 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:tracking-wide [&_h2]:uppercase [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_li]:mt-2 [&_p]:mt-4 [&_p]:leading-relaxed [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:marker:text-primary"
>
  <p class="!mt-0 text-lg">
    This policy explains what information the {app.name} app (“the app”) collects, how it is used, and
    the choices you have. The app is operated by {org.name} (“we”, “us”).
  </p>

  <h2>Information we collect</h2>

  <h3>Information you give us</h3>
  <ul>
    <li>
      <strong>Registration details.</strong> If you reserve a pass, we ask for your full name, email address,
      organization (optional), and the pass type you choose. We use this to confirm your registration
      and to contact you about the conference.
    </li>
    <li>
      <strong>Recordings access code.</strong> If you unlock session recordings, you enter the access
      code given to attendees. The code is stored securely on your device (in the iOS Keychain or Android
      Keystore) so you don’t need to re-enter it. It is sent to our server only to check that it is valid
      and to allow video playback.
    </li>
  </ul>

  <h3>Information collected automatically</h3>
  <ul>
    <li>
      <strong>Basic technical information.</strong> When the app loads content, streams video, or checks
      for updates, our service providers receive standard technical data such as your IP address, device
      type, operating system, and app version. This is needed to deliver the service and is not used to
      identify you personally.
    </li>
  </ul>

  <h3>What we don’t collect</h3>
  <p>
    The app does not use advertising, analytics, or tracking tools. It does not access your
    location, contacts, photos, camera, or microphone, and we do not sell or share your personal
    information for advertising.
  </p>

  <h2>How we use information</h2>
  <p>We use your information to:</p>
  <ul>
    <li>confirm and manage your conference registration</li>
    <li>send you event confirmations and important updates</li>
    <li>provide access to session recordings for attendees</li>
    <li>keep the app working, secure, and up to date</li>
  </ul>

  <h2>Service providers</h2>
  <p>We use these providers to run the app. They process data only on our behalf:</p>
  <div class="mt-6 overflow-hidden rounded-2xl border shadow-card">
    <table class="w-full text-left text-sm sm:text-base">
      <thead class="bg-brand-ink text-white">
        <tr>
          <th scope="col" class="px-4 py-3 font-semibold">Provider</th>
          <th scope="col" class="px-4 py-3 font-semibold">Purpose</th>
        </tr>
      </thead>
      <tbody>
        {#each app.providers as provider (provider.name)}
          <tr class="border-t even:bg-muted/50">
            <td class="px-4 py-3 font-medium whitespace-nowrap">{provider.name}</td>
            <td class="px-4 py-3 text-muted-foreground">{provider.purpose}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <p>Each provider has its own privacy policy that covers how it handles technical data.</p>

  <h2>Data retention</h2>
  <p>
    We keep registration details for as long as needed to run the conference and related follow-up,
    and then delete them. The recordings access code stays on your device until you lock recordings
    or delete the app.
  </p>

  <h2>Your choices and rights</h2>
  <ul>
    <li>
      You can lock recordings in the app at any time, which removes the stored access code from your
      device.
    </li>
    <li>Deleting the app removes all data it stored on your device.</li>
    <li>
      You can ask us to access, correct, or delete your registration details by emailing us at the
      address below.
    </li>
  </ul>
  <p>
    Depending on where you live (for example, under the GDPR or the California Consumer Privacy
    Act), you may have additional rights, and we will honor them.
  </p>

  <h2>Children</h2>
  <p>
    The app is not directed at children under 13, and we do not knowingly collect personal
    information from them. If you believe a child has given us information, contact us and we will
    delete it.
  </p>

  <h2>Security</h2>
  <p>
    We use reasonable measures to protect your information, including encrypted connections (HTTPS)
    and secure on-device storage. No method of transmission or storage is completely secure.
  </p>

  <h2>This website</h2>
  <p>
    If you use the contact or support form on this website, we receive the name, email address,
    device type (optional), and message you enter. The form is delivered to our team by email and is
    used only to respond to you. Ticket registration on this website is handled by Church Center
    (Planning Center) under
    <a href="https://www.planningcenter.com/privacy" target="_blank" rel="noopener">
      its own privacy policy
    </a>.
  </p>

  <h2>Changes to this policy</h2>
  <p>
    We may update this policy from time to time. When we do, we will change the “Last updated” date
    above. Significant changes will be announced in the app or by email.
  </p>

  <h2>Contact us</h2>
  <p>If you have questions about this policy or your information, contact:</p>
  <div class="mt-6 rounded-2xl border bg-card p-6 shadow-card">
    <p class="!mt-0 font-semibold">{org.name}</p>
    <p class="!mt-1">
      <a href="mailto:{org.email}" class="break-all">{org.email}</a>
    </p>
  </div>
</article>
