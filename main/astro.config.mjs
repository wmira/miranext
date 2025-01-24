import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readingTime';
import rehypePrettyCode from 'rehype-pretty-code';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';
const options = {

  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{
        type: 'text',
        value: ' '
      }];
    }
  },
  onVisitHighlightedLine(node) {
    // Adding a class to the highlighted line
    node.properties.className = ['highlighted'];
  }
};

export default defineConfig({
    site: 'https://miranext.net',
    markdown: {
        syntaxHighlight: false,
        // Disable syntax built-in syntax hightlighting from astro
        rehypePlugins: [[rehypePrettyCode, options]],
        remarkPlugins: [remarkReadingTime]
    },
    integrations: [tailwind(), react(), sitemap(), mdx()],
    output: 'static',
    adapter: vercel({})
});