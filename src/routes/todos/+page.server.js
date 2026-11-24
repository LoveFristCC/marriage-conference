import { fail } from '@sveltejs/kit';
import * as db from './db.server.js';

/** @type {import('./$types').PageServerLoad} */
export const load = ({ locals }) => {
  // locals.userid comes from src/hooks.server.js
  return { todos: db.getTodos(locals.userid) };
};

/** @type {import('./$types').Actions} */
export const actions = {
  create: async ({ request, locals }) => {
    const form = await request.formData();
    const text = String(form.get('text') ?? '').trim();
    if (!text) return fail(400, { error: 'Todo text is required' });

    db.createTodo(locals.userid, text);
  },

  update: async ({ request, locals }) => {
    const form = await request.formData();

    db.updateTodo(locals.userid, String(form.get('uid')), {
      text: form.has('text') ? String(form.get('text')) : undefined,
      done: form.has('done') ? !!form.get('done') : undefined
    });
  },

  delete: async ({ request, locals }) => {
    const form = await request.formData();

    db.deleteTodo(locals.userid, String(form.get('uid')));
  }
};
