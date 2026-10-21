import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  // Vite bug workaround, see https://github.com/vitejs/vite/issues/11824
  const posts = import.meta.glob(`../*.mdx`);
  const post: any = await posts[`../${params.slug}.mdx`]();
  const { title } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
  };
}) satisfies PageLoad;
