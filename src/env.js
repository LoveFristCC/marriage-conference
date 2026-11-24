import { defineEnvVars } from '@sveltejs/kit/env';

/** @param {string | undefined} value */
const optional = (value) => value || undefined;

// Server-only (private) variables, read at runtime. See .env.example.
export const variables = defineEnvVars({
  GOOGLE_EMAIL: {
    description: 'Gmail / Google Workspace address used to send contact-form emails.',
    schema: optional
  },
  GOOGLE_EMAIL_PASSWORD: {
    description: 'Google app password for GOOGLE_EMAIL (not the normal account password).',
    schema: optional
  },
  MAIL_HOST: {
    description: 'SMTP host. Defaults to smtp.gmail.com.',
    schema: (value) => value || 'smtp.gmail.com'
  },
  MAIL_PORT: {
    description: 'SMTP port: 465 (SSL) or 587 (STARTTLS). Defaults to 465.',
    schema: (value) => {
      if (!value) return 465;
      const port = Number(value);
      if (!Number.isInteger(port)) throw new Error('MAIL_PORT must be a number, e.g. 465 or 587');
      return port;
    }
  },
  CONTACT_TO: {
    description: 'Where contact-form messages are delivered. Defaults to the church info address.',
    schema: optional
  }
});
