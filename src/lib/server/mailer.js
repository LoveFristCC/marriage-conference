import nodemailer from 'nodemailer';
import {
  GOOGLE_EMAIL,
  GOOGLE_EMAIL_PASSWORD,
  MAIL_HOST,
  MAIL_PORT,
  CONTACT_TO
} from '$app/env/private';
import { event, org } from '#lib/content.js';

/** @type {import('nodemailer').Transporter | undefined} */
let transporter;

function getTransporter() {
  transporter ??= nodemailer.createTransport({
    host: MAIL_HOST,
    port: MAIL_PORT,
    secure: MAIL_PORT === 465, // 465 = SSL; 587 upgrades with STARTTLS
    auth: { user: GOOGLE_EMAIL, pass: GOOGLE_EMAIL_PASSWORD }
  });
  return transporter;
}

/**
 * Sends an email to the church inbox (CONTACT_TO, default info@…).
 * If SMTP isn't configured, the email is logged instead (handy in development).
 * @param {{ subject: string; text: string; replyTo?: { name: string; address: string } }} mail
 */
export async function sendToChurch({ subject, text, replyTo }) {
  const to = CONTACT_TO || org.email;
  const fullSubject = `[${event.shortName}] ${subject}`;

  if (!GOOGLE_EMAIL || !GOOGLE_EMAIL_PASSWORD) {
    console.info('[mailer] SMTP not configured; logging message instead of sending.', {
      to,
      subject: fullSubject,
      text
    });
    return;
  }

  await getTransporter().sendMail({
    from: { name: event.name, address: GOOGLE_EMAIL },
    to,
    replyTo,
    subject: fullSubject,
    text
  });
}

/**
 * @param {{ name: string; email: string; message: string; source: string }} input
 */
export function sendContactEmail({ name, email, message, source }) {
  return sendToChurch({
    subject: `${source} message from ${name}`,
    text: `${message}\n\n— ${name} <${email}>\nSent from the ${source} form on the ${event.name} website.`,
    replyTo: { name, address: email }
  });
}
