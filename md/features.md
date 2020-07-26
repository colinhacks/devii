It may not look like much, but Devii does a lot out of the box.

**Markdown loading and rendering**: Using Next.js dynamic imports, you can load Markdown files and pass them into your Next.js pages as props. Easy peasy.

**TypeScript + React**: Markdown is great for text-heavy, non-interactive content. For everything else, you'll want something a little more expressive. Devii makes it easy to mix Markdown and React on the same page. Just load your Markdown files with dynamic imports, pass it into your component as a prop, and render it with the `Markdown.tsx` component.

**Built-in support for blogs**: Devii provides a utility for parsing Markdown blog posts with frontmatter metadata into a structured TypeScript object. Supported tags include: `title`, `subtitle`, `datePublished`, `tags`, `description`, `canonicalUrl`, `author`, `authorPhoto`, `authorTwitter`, `bannerPhoto`, and `thumbnailPhoto`

**Medium-inspired styles**: The Markdown components (`Markdown.tsx`) contains default styles inspired by Medium.

**Google Analytics**: Just add your Google Analytics ID (e.g. 'UA-999999999-1') to `globals.ts` and the appropriate snippet will be automatically added to every page.

**RSS feed generation**: An RSS feed is auto-generated from your blog post feed.

**SEO best practices**: Every blog post page automatically populated meta tags based on the post metadata. This includes a `title` tag, `meta` tags, `og:` tags, Twitter metadata, and a `link` tag containing the canonical URL.

**GitHub-style code blocks**: with syntax highlighting powered by [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter). Works out-of-the-box for all programming languages. Just use Markdown's triple backtick syntax with a "language identifier", [just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks).

**Static generation**: you can generate a fully static version of your site using `yarn build && yarn export`. Powered by Next.js.

**Zero magic**: You can view and modify every aspect of the site. If you're looking for a starting point, start modifying `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown component). And of course you can add entirely new pages/components as well!
