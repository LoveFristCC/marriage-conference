import { handleContact } from '#lib/server/contact.js';

/** @type {import('./$types').Actions} */
export const actions = {
  contact: ({ request }) => handleContact(request, 'App support')
};
