---
title: Devii's killer features
subtitle: Bringing the power of React, TypeScript, and static generation to dev blogs everywhere
published: true
datePublished: 1589064522569
author: Ben Bitdiddle
tags:
  - Devii
  - Blogs
authorPhoto: /img/profile.jpg
bannerPhoto: /img/brook.jpg
thumbnailPhoto: /img/brook.jpg
canonicalUrl: https://devii.dev/blog/devii
---

This page is built with Devii! Check out the source code for this under `/md/blog/test.md`.

Devii is a starter kit for building a personal website with the best tools 2020 has to offer.

- **Markdown-based**: Just add a Markdown file to `/md/blog` to add a new post to your blog!
- **TypeScript + React**: aside from the parts that are rendered Markdown, everything else is fully built with TypeScript and functional React components. Implementing any sort of interactive widget is often hard using existing Markdown-centric static-site generators, but Devii makes it easy to mix Markdown and React on the same page.
- **Frontmatter support**: Every post can include a frontmatter block containing metadata: `title`, `subtitle`, `datePublished` (timestamp), `author`, `authorPhoto`, and `bannerPhoto`.
- **Medium-inspired styles**: The Markdown renderer (`Markdown.tsx`) contains default styles inspired by Medium.
- **Static generation**: you can generate a fully static version of your site using `yarn build && yarn export`. Powered by Next.js.
- **GitHub-style code blocks**: with syntax highlighting powered by [react-syntax-highlighter](https://github.com/conorhastings/react-syntax-highlighter). Works out-of-the-box for all programming languages. Just use Markdown's triple backtick syntax with a "language identifier", [just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks).

  ```ts
  // pretty neat huh?
  const test: (arg: string) => boolean = (arg) => {
    return arg.length > 5;
  };
  ```

- **Utterly customizable**: We provide a minimal interface to get you started, but you can customize every aspect of the rendering and styling by just modifying `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer). And of course you can add entirely new pages as well!

Head to the GitHub repo to get started: [https://github.com/colinhacks/devii](https://github.com/colinhacks/devii). If you like this project, leave a ⭐️star⭐️ to help more people find Devii 😎
