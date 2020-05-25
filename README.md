# Devii 😎

A blog starter for the modern developer

Next.js + React + TypeScript + Markdown + syntax highlighting = 🔥🔥🔥

Devii is powered by Next.js. We chose Next.js because it's the simplest, most elegant way to generate a static version of a React-based website.

Check out [the Next.js documentation](https://nextjs.org/docs) to make sure it's right for your project.

## Get started

To get started, clone the repo and start the development server:

```
git clone git@github.com:vriad/devii.git
cd devii
yarn dev
```

The default project only contains two pages: a home page (`http://localhost:3000`) and a sample blog post (`http://localhost:3000/blog/test`).

To add a new blog post, just add a new Markdown file under `/md/blog`.

### Frontmatter support

Every Markdown file can include a "frontmatter block" containing metadata: `title`, `subtitle`, `tags`, `date` (timestamp), `author`, `authorPhoto`, `bannerPhoto`, and `thumbnailPhoto`.

You can dynamically load and parse a Markdown file using `loadMarkdownFile`, a utility function implemented in `loader.ts`. It is an async function that returns a `PostData` TypeScript object containing all the metadata keys listed above:

```ts
type PostData = {
  path: string;
  title?: string;
  subtitle?: string;
  content: string;
  date?: number;
  author?: string;
  authorPhoto?: string;
  tags?: string[];
  bannerPhoto?: string;
  thumbnailPhoto?: string;
};
```

### TypeScript + React

Devii is entirely built with TypeScript and functional React components. Implementing any sort of interactive widget is often hard with Markdown-centric static-site generators, but Devii makes it easy to mix Markdown and React on the same page.

You can either:

- Drop a string of Markdown content into the `<Markdown source={'# Markdown!'}/>` component
- Load the content from the file system by passing a file path into `loadMarkdownFile`. `loadMarkdownFile` looks for a file at the provided path \_within the `/md` directory. So `loadMarkdownFile('about.md')` will look for a Markdown file at `/md/about.md`.

### Medium-inspired design

The Markdown renderer (`Markdown.tsx`) provides a default style inspired by Medium. Just modify the CSS in `Markdown.tsx` to customize the design to your liking.

### Static generation

You can generate a fully static version of your site using `yarn build && yarn export`. This step is entirely powered by Next.js. The static site is exported to the `out` directory.

### GitHub-style code blocks

You can easily drop code blocks into your blog posts using triple-backtick syntax ([just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks)). No more embedding CodePen iframes! 🚀

Works out-of-the-box for all programming languages. Specify your language with a "language tag". So this:

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

### Insanely customizable

There's nothing "under the hood" here. You can view and modify all the files that provide the functionality listed above. Devii just provides a project scaffold, some Markdown-loading loading utilities (in `loader.ts`), and some sensible styling defaults (especially in `Markdown.tsx`).

To get started customizing, check out the source code of `index.tsx` (the home page), `BlogPost.tsx` (the blog post template), and `Markdown.tsx` (the Markdown renderer).

Head to the GitHub repo to get started: [https://github.com/vriad/devii](https://github.com/vriad/devii). If you like this project, leave a ⭐️star⭐️ to help more people find Devii 😎

## CLI

### `yarn dev`

Starts the development server. Equivalent to `next dev`.

### `yarn build`

Creates an optimized build of your site. Equivalent to `next build`.

### `yarn export`

Exports your site to static files. All files are written to `/out`. Use your static file hosting service of choice (Firebase Hosting, Amazon S3, Vercel) to deploy your site. Equivalent to `next export`.
