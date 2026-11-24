// All site copy lives here. Edit this file to update the website.
// Source: https://lovefirst.churchcenter.com/registrations/events/3496934 and the event flyer.

/** Public website address and search/share defaults. */
export const site = {
  // Production domain. Used for canonical URLs, the sitemap and share links.
  url: 'https://lovefirstconference.com',
  locale: 'en_US',
  title: 'Love First Marriage Conference 2027 | Riverview, FL (Tampa Bay)',
  description:
    'Christian marriage conference Feb 26–27, 2027 at Love First Christian Center in Riverview, FL. Hosted by Pastors Jomo & Charmaine Cousins. Early bird $95.',
  // Share image for Facebook, iMessage, X, etc. (1200×630).
  ogImage: '/brand/og-image.jpg',
  ogImageAlt:
    'Love First Marriage Conference, February 26–27, 2027, Love First Christian Center, Riverview, Florida'
};

export const org = {
  name: 'Love First Christian Center',
  shortName: 'LFCC',
  website: 'https://lfcc.tv',
  logo: '/brand/icon-512.png',
  // Other official profiles, used in search structured data.
  sameAs: ['https://lfcc.tv', 'https://lovefirst.churchcenter.com'],
  email: 'info@lovefirstchristiancenter.com',
  phone: '(813) 671-2009',
  phoneHref: 'tel:+18136712009',
  address: {
    street: '12847 Balm Riverview Rd',
    city: 'Riverview',
    region: 'FL',
    postalCode: '33579',
    country: 'US'
  }
};

export const event = {
  name: 'Love First Marriage Conference',
  shortName: 'Love First',
  tagline: ['Same Team', 'Higher Purpose', 'A Stronger Us'],
  description:
    'Join us for an inspiring two-day conference designed to strengthen and enrich your marriage!',
  // From the previous conference website (lopconference.com).
  about:
    'Our annual marriage conference at Love First Christian Center in Riverview, Florida is designed to strengthen and encourage Christ-centered marriages, bringing couples together for powerful teaching, practical tools, and meaningful connection.',
  datesLabel: 'February 26–27, 2027',
  startDate: '2027-02-26T19:00:00-05:00',
  endDate: '2027-02-27T15:00:00-05:00',
  registerUrl: 'https://lovefirst.churchcenter.com/registrations/events/3496934',
  // Used for share previews (og:image) and the tickets section.
  flyer: '/brand/flyer.jpg',
  pillars: ['Faith', 'Teamwork', 'Communication', 'Commitment', 'Love Wins'],
  motto: 'Better People. Better Partners. A Brighter Tomorrow.'
};

/** What couples take away. Shown in the About section (from the previous conference site). */
export const outcomes = [
  { title: 'Communication', body: 'Communicate with clarity and purpose.' },
  { title: 'Connection', body: 'Strengthen your emotional and spiritual connection.' },
  { title: 'Finances & Family', body: 'Navigate finances and family dynamics together.' },
  { title: 'Intimacy', body: 'Build intimacy rooted in trust and understanding.' }
];

export const schedule = [
  { day: 'Friday', date: 'February 26, 2027', time: '7:00 pm – 9:30 pm' },
  { day: 'Saturday', date: 'February 27, 2027', time: '9:00 am – 3:00 pm' }
];

export const hosts = [
  {
    name: 'Drs. Jomo & Charmaine Cousins',
    role: 'Founders & Senior Pastors, Love First Christian Center',
    bio: 'Pastors Jomo and Charmaine Cousins have hosted marriage conferences at Love First Christian Center for more than 10 years. Through their ministry, they are passionate about helping couples build strong, Christ-centered marriages and creating spaces where families can grow together in faith, love, and purpose.',
    // Transparent cut-out photo (from the previous conference website).
    photo: '/hosts/cousins.webp'
  }
];

export const tickets = {
  earlyBirdDeadline: '2027-01-03T23:59:59-05:00',
  note: 'All purchases are final — tickets are non-refundable and non-transferable.',
  options: [
    {
      id: 'early-bird',
      name: 'Early Bird',
      group: 'General Admission',
      price: 95,
      detail: 'Until January 3rd',
      earlyBird: true
    },
    {
      id: 'general',
      name: 'General Admission',
      group: 'General Admission',
      price: 110,
      detail: 'After January 3rd'
    },
    {
      id: 'vip',
      name: 'VIP Admission',
      group: 'VIP',
      price: 169,
      detail: 'Limited seats',
      featured: true,
      perks: ['Swag bag', 'Premium seating', 'Premium breakfast', 'Special gift']
    }
  ]
};

export const venue = {
  name: org.name,
  address: org.address,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=12847+Balm+Riverview+Rd,+Riverview,+FL+33579',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=12847+Balm+Riverview+Rd,+Riverview,+FL+33579&output=embed',
  childcare: 'Complimentary childcare is available for all participants.',
  // TODO: confirm for 2027 (this was the policy at the previous conference).
  childcareNote:
    'Pre-registration is required and space is limited. Details are shared after ticket purchase.',
  // Nearby date-night spots (from the previous conference's attendee portal).
  dateNight: [
    {
      name: 'Tiki Docks River Bar & Grill',
      address: '10708 Palmetto St, Riverview, FL 33569',
      note: 'Waterfront dining on the Alafia River.'
    },
    {
      name: 'LongHorn Steakhouse',
      address: '12974 US-301, Riverview, FL 33578',
      note: 'Classic steakhouse a few minutes from the church.'
    },
    {
      name: "Mandola's Italian Kitchen",
      address: '12926 US-301, Riverview, FL 33579',
      note: 'Relaxed Italian dinner close by.'
    }
  ]
};

/** Year-round marriage ministry at LFCC (from the previous conference website). */
export const classes = {
  calendarUrl: 'https://www.lfcc.tv/events',
  items: [
    {
      name: 'One Flesh (Couples)',
      icon: 'calendar-heart',
      body: 'A monthly marriage enrichment group that helps couples grow deeper through faith, fellowship, and intentional connection. Meets every third Friday of the month.',
      url: 'https://www.lfcc.tv/connect/love-groups/158610'
    },
    {
      name: 'The Art of Marriage',
      icon: 'book-heart',
      body: 'Practical teaching and real-life insights on God’s design for marriage, with guided sessions, discussion, and companion resources.'
    },
    {
      name: 'Blended Families',
      icon: 'users-round',
      body: 'Support for couples and families navigating stepfamily life, with faith-centered teaching on communication, boundaries, and unity.'
    }
  ]
};

export const faqs = [
  {
    q: 'When and where is the conference?',
    a: 'Friday, February 26, 2027 from 7:00–9:30 pm and Saturday, February 27, 2027 from 9:00 am–3:00 pm at Love First Christian Center, 12847 Balm Riverview Rd, Riverview, FL 33579.'
  },
  {
    q: 'How much are tickets?',
    a: 'General Admission is $95 per person through January 3rd (early bird) and $110 per person after that. VIP Admission is $169 per person.'
  },
  {
    q: 'What does VIP include?',
    a: 'VIP includes a swag bag, premium seating, a premium breakfast, and a special gift. VIP seating is limited.'
  },
  {
    q: 'Is childcare available?',
    a: 'Yes. Complimentary childcare is available for all participants. Pre-registration is required and space is limited; details are shared after ticket purchase.'
  },
  {
    q: 'Can I get a refund or transfer my ticket?',
    a: 'All purchases are final. Tickets are non-refundable and non-transferable.'
  },
  {
    q: 'Do we both need a ticket?',
    a: 'Yes. Pricing is per person, so each spouse needs their own registration.'
  },
  {
    q: 'Who should attend?',
    a: 'Married, engaged, and dating couples, blended families, and anyone seeking faith-centered relationship growth.'
  },
  {
    q: 'What should we wear?',
    a: 'Casual to business-casual attire.'
  },
  {
    q: 'Is there a virtual option?',
    a: 'No. This is an in-person experience only.'
  }
];

/** The conference mobile app. Used on the /support and /privacy pages. */
export const app = {
  name: 'Love First Marriage Conference',
  fullName: 'Love First Marriage Conference App',
  appStoreUrl: null, // TODO: add App Store link
  playStoreUrl: null, // TODO: add Google Play link
  privacyLastUpdated: 'November 21, 2026',
  // Third-party services the app uses (shown in the privacy policy).
  providers: [
    { name: 'Sanity', purpose: 'Hosts the conference schedule, speakers, and resources' },
    { name: 'Mux', purpose: 'Streams session recordings' },
    { name: 'Vercel', purpose: 'Hosts the server that checks recording access codes' },
    { name: 'Expo (EAS)', purpose: 'Delivers app updates' }
  ]
};

export const nav = [
  { href: '/#about', label: 'About' },
  { href: '/#hosts', label: 'Hosts' },
  { href: '/#tickets', label: 'Tickets' },
  { href: '/#details', label: 'Details' },
  { href: '/#classes', label: 'Classes' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/#contact', label: 'Contact' }
];
