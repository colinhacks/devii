# Devii

A blog starter for the modern developer 😎

Next.js + React + TypeScript + Markdown + syntax highlighting = 🔥🔥🔥

## Usage

- **Powered by Next.js**: Next.js is by far the simplest way to generate a statically version of a React-based blog.

  This repo conforms to Next's recommended project structure. Check out [their documentation](https://nextjs.org/docs) first.

* **Markdown-based**: Just add a Markdown file to `/md/blog` to add a new post to your blog!

* **TypeScript + React**: build your personal website with the powerful tools you love. Aside from the parts that are Markdown-based, everything else is fully built with TypeScript and functional React components. Implementing any sort of interactive widget is often hard using existing Markdown-centric static-site generators, but Devii makes it easy to mix Markdown and React on the same page. Just drop a string of Mardown content into the `<Markdown />` component Devii provides, or load the content from the file system using `loadMarkdownFile`.

* **Frontmatter support**: Every post can include a frontmatter block containing metadata: `title`, `subtitle`, `tags`, `date` (timestamp), `author`, `authorPhoto`, `bannerPhoto`, and `thumbnailPhoto`.

* **Medium-inspired design**: The Markdown renderer (`Markdown.tsx`) provides a default style inspired by Medium. Just modify the CSS in `Markdown.tsx` to customize the design to your liking.

* **Static generation**: you can generate a fully static version of your site using `yarn build && yarn export`. Powered by Next.js.

* **GitHub-style code blocks**: Works out-of-the-box for all programming languages. Just use Markdown's triple backtick syntax with a "language tag" [just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks). So this:
  <pre>
  ```ts
  // pretty neat huh?
  const test: (arg: string) => boolean = (arg) => {
    return arg.length > 5;
  };
  ```</pre>

  turns into

  ```ts
  // pretty neat huh?
  const test: (arg: string) => boolean = (arg) => {
    return arg.length > 5;
  };
  ```

* **Insanely customizable**: There's nothing "under the hood" here. You can view and modify all the files that provide the functionality listed above. Devii just provides a project scaffold, some Markdown-loading loading utilities (in `loader.ts`), and some sensible styling defaults (especially in `Markdown.tsx`).

  To get started customizing, check out the source code of `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer).

Head to the GitHub repo to get started: [https://github.com/vriad/devii](https://github.com/vriad/devii). If you like this project, leave a ⭐️star⭐️ to help more people find Devii 😎

## CLI

### `yarn dev`

Starts the development server. Equivalent to `next dev`.

### `yarn build`

Creates an optimized build of your site. Equivalent to `next build`.

### `yarn export`

Exports your site to static files. All files are written to `/out`. Use your static file hosting service of choice (Firebase Hosting, Amazon S3, Vercel) to deploy your site. Equivalent to `next export`.
