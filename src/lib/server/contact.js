import { fail } from '@sveltejs/kit';
import { sendContactEmail } from './mailer.js';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Shared form action for the contact forms on `/` and `/support`.
 * @param {Request} request
 * @param {string} source label included in the email subject, e.g. "Contact" or "App support"
 */
export async function handleContact(request, source) {
  const data = await request.formData();
  const values = {
    name: String(data.get('name') ?? '').trim(),
    email: String(data.get('email') ?? '').trim(),
    message: String(data.get('message') ?? '').trim(),
    // Optional; only the support form asks for it.
    device: String(data.get('device') ?? '')
      .trim()
      .slice(0, 40)
  };

  // Honeypot: real people never see or fill this field.
  if (String(data.get('company') ?? '')) {
    return { success: true };
  }

  /** @type {Partial<Record<keyof typeof values, string>>} */
  const errors = {};
  if (!values.name) errors.name = 'Please enter your name.';
  else if (values.name.length > 100) errors.name = 'Name is too long.';
  if (!EMAIL_RE.test(values.email)) errors.email = 'Please enter a valid email address.';
  if (!values.message) errors.message = 'Please enter a message.';
  else if (values.message.length > 5000)
    errors.message = 'Message is too long (5000 characters max).';

  if (Object.keys(errors).length > 0) {
    return fail(400, { errors, values });
  }

  try {
    const { device, ...rest } = values;
    await sendContactEmail({
      ...rest,
      message: device ? `Device: ${device}\n\n${rest.message}` : rest.message,
      source
    });
  } catch (err) {
    console.error('[contact] failed to send email', err);
    return fail(500, {
      values,
      message: 'Sorry, your message could not be sent. Please email or call us instead.'
    });
  }

  return { success: true };
}
