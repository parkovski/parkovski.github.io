import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';
//import { highlight } from 'svelte-highlight';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md', '.mdx'],
      /*highlight: {
        highlighter: (code, lang) => {
          try {
            return highlight(code, lang);
          } catch (e) {
            console.err("Highlight error for ${lang}", e);
            return code;
          }
        },
      },*/
    }),
  ],
  extensions: ['.svelte', '.md', '.mdx'],
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false,
      strict: true,
    })
  }
};

export default config;
