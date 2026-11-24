/**
 * Result returned by the shared contact form action (`#lib/server/contact.js`).
 * @typedef {{
 *   success?: boolean;
 *   message?: string;
 *   errors?: Partial<Record<'name' | 'email' | 'message', string>>;
 *   values?: { name: string; email: string; message: string; device?: string };
 * } | null | undefined} ContactFormResult
 */

export {};
