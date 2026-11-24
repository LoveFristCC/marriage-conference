/*
  In-memory todo storage, keyed by user id. This replaces the old
  api.svelte.dev backend, which is no longer available.

  Data lives only as long as the server process (and isn't shared
  between serverless instances), so this is for demo purposes only.
*/

/**
 * @typedef {{
 *   uid: string;
 *   created_at: Date;
 *   text: string;
 *   done: boolean;
 * }} Todo
 */

/** @type {Map<string, Todo[]>} */
const db = new Map();

/** @param {string} userid */
export function getTodos(userid) {
  return db.get(userid) ?? [];
}

/**
 * @param {string} userid
 * @param {string} text
 */
export function createTodo(userid, text) {
  const todos = getTodos(userid);
  todos.push({ uid: crypto.randomUUID(), created_at: new Date(), text, done: false });
  db.set(userid, todos);
}

/**
 * @param {string} userid
 * @param {string} uid
 * @param {{ text?: string; done?: boolean }} changes
 */
export function updateTodo(userid, uid, changes) {
  const todo = getTodos(userid).find((t) => t.uid === uid);
  if (!todo) return;
  if (changes.text !== undefined) todo.text = changes.text;
  if (changes.done !== undefined) todo.done = changes.done;
}

/**
 * @param {string} userid
 * @param {string} uid
 */
export function deleteTodo(userid, uid) {
  db.set(
    userid,
    getTodos(userid).filter((t) => t.uid !== uid)
  );
}
