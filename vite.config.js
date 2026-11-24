import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes('node_modules') ? undefined : true
      },

      // Deployed on Vercel. See https://svelte.dev/docs/kit/adapter-vercel
      adapter: adapter()
    })
  ],
  ssr: {
    // Always bundle SvelteKit's runtime dependencies into the server output.
    // Vite externalizes a package if it can resolve it from the project root, and on Vercel's
    // build machine an unrelated CommonJS `cookie` (v0/v1) above the project was found instead of
    // Kit's own ESM cookie@2, which broke the build ("Named export 'parseCookie' not found").
    // Bundling makes the deployed build behave exactly like the local one.
    noExternal: ['cookie', 'devalue', 'esm-env', 'mrmime']
  }
});
