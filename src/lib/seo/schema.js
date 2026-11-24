// Structured data (schema.org JSON-LD) builders for search engines.
import { event, faqs, hosts, org, site, tickets, venue } from '#lib/content.js';

/** @param {string} path */
export const absolute = (path) => new URL(path, site.url).href;

const ORG_ID = absolute('/#organization');
const SITE_ID = absolute('/#website');
const EVENT_ID = absolute('/#event');

export function organization() {
  return {
    '@type': ['Organization', 'Church'],
    '@id': ORG_ID,
    name: org.name,
    url: org.website,
    logo: absolute(org.logo),
    email: org.email,
    telephone: '+1-813-671-2009',
    sameAs: org.sameAs,
    address: postalAddress()
  };
}

export function website() {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    name: event.name,
    url: site.url,
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID }
  };
}

function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: org.address.street,
    addressLocality: org.address.city,
    addressRegion: org.address.region,
    postalCode: org.address.postalCode,
    addressCountry: org.address.country
  };
}

export function conferenceEvent() {
  return {
    '@type': 'Event',
    '@id': EVENT_ID,
    name: event.name,
    description: `${event.description} ${event.about}`,
    url: site.url,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    inLanguage: 'en-US',
    image: [absolute(site.ogImage), absolute(event.flyer)],
    location: { '@type': 'Place', name: venue.name, address: postalAddress() },
    organizer: { '@id': ORG_ID },
    performer: [
      { '@type': 'Person', name: 'Jomo Cousins', jobTitle: 'Senior Pastor' },
      { '@type': 'Person', name: 'Charmaine Cousins', jobTitle: 'Senior Pastor' }
    ],
    offers: tickets.options.map((t) => ({
      '@type': 'Offer',
      name: t.name,
      price: t.price,
      priceCurrency: 'USD',
      url: event.registerUrl,
      availability: t.featured
        ? 'https://schema.org/LimitedAvailability'
        : 'https://schema.org/InStock',
      ...(t.earlyBird ? { validThrough: tickets.earlyBirdDeadline } : {}),
      ...(t.id === 'general' ? { validFrom: tickets.earlyBirdDeadline } : {})
    })),
    about: hosts.map((h) => h.bio).join(' ')
  };
}

/** @param {{ q: string; a: string }[]} items */
export function faqPage(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a }
    }))
  };
}

/**
 * @param {{ path: string; name: string; description: string; type?: string }} page
 */
export function webPage({ path, name, description, type = 'WebPage' }) {
  return {
    '@type': type,
    '@id': absolute(path) + '#webpage',
    url: absolute(path),
    name,
    description,
    isPartOf: { '@id': SITE_ID },
    publisher: { '@id': ORG_ID },
    inLanguage: 'en-US'
  };
}

/** @param {Record<string, unknown>[]} nodes */
export const graph = (...nodes) => ({ '@context': 'https://schema.org', '@graph': nodes });

export { faqs };
