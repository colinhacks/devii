# Devii 😎

A dev blog starter for 2020. Check out the blog post describing the motivation + design of this project at [https://vriad.com/blog/devii](https://vriad.com/blog/devii)

Next.js + React + TypeScript + Markdown + syntax highlighting = 🔥🔥🔥

### Powered by Next.js

Devii is powered by Next.js. We chose Next.js because it's the simplest, most elegant way to generate a static version of a React-based website.

Check out the Next.js documentation [here](https://nextjs.org/docs) to make sure it's the right choice for your project.

## Get started

To get started, clone the repo and install the dependencies.

```
git clone git@github.com:vriad/devii.git my-blog
cd my-blog
yarn
```

Then start the development server with `yarn dev`. This should start a server on `http://localhost:3000`.

## Project structure

The default repo only contains two pages: a home page (`/pages/index.tsx`) and one sample blog post (`/md/blog/test.md`).

## The home page

The home page is intentionally minimal. You can put whatever you want in `index.tsx`; one of our goals in designing Devii was to place no restrictions on the developer. Use your imagination! Your website is the online manifestion of you. You can use whatever npm packages or styling libraries you like.

## Adding a new blog post

Create a new Markdown file called `foo.md` within the `/md/blog` directory. Add in some basic Markdown content. Then go to `http://localhost:3000/blog/foo`. You should see the new post.

## Frontmatter support

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

## Medium-inspired design

The Markdown renderer (`Markdown.tsx`) provides a default style inspired by Medium. Just modify the CSS in `Markdown.tsx` to customize the design to your liking.

## GitHub-style code blocks

You can easily drop code blocks into your blog posts using triple-backtick syntax ([just like GitHub](https://help.github.com/en/github/writing-on-github/creating-and-highlighting-code-blocks)). No more embedding CodePen iframes! 🚀

Works out-of-the-box for all programming languages. Specify your language with a "language tag". So this:

  <pre>
  ```ts
  // pretty neat huh?
  const test = (arg: string) => {
    return arg.length > 5;
  };
  ```</pre>

turns into

```ts
// pretty neat huh?
const test = (arg: string) => {
  return arg.length > 5;
};
```

## Static generation

You can generate a fully static version of your site using `yarn build && yarn export`. This step is entirely powered by Next.js. The static site is exported to the `out` directory.

After its generated, use your static file hosting service of choice (Firebase Hosting, Amazon S3, Vercel) to deploy your site.

## Insanely customizable

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
