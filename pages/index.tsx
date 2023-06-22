import Head from 'next/head';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import PostCards from '../components/PostCards';

const Home = (props: {
  introduction: string;
  features: string;
  readme: string;
  posts: PostData[];
}) => {

  console.log(props.posts);
  
  return (
    <div className="content">
      <Head>
        <title>SabioLog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="introduction">
        <h1>This is SabioLog.</h1>
        <Markdown source={props.introduction} />
      </div>

      <div className="section">
        <h2>My blog posts</h2>
        <p>
          This section demonstrates the power of dynamic imports. Every Markdown
          file under <code>/md/blog</code> is automatically parsed into a
          structured TypeScript object and available in the{' '}
          <code>props.posts</code> array. These blog post "cards" are
          implemented in the
          <code>/components/PostCard.tsx</code> component.
        </p>
        <PostCards posts={props.posts} />
      </div>

      <div className="section">
        <h2>Testimonials</h2>
        <blockquote>
          <p>
            <em>Seems like it might be useful!</em>
          </p>
          <p>
            — Dan Abramov, taken{' '}
            <a
              href="https://github.com/colinhacks/devii/issues/2"
              target="_blank"
            >
              {' '}
              utterly out of context
            </a>
          </p>
        </blockquote>
      </div>

      {/* <div className="section">
        <h2>README.md</h2>
        <p>
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. You can also read the README on
          GitHub at{' '}
          <a href="https://github.com/colinhacks/devii">
            https://github.com/colinhacks/devii
          </a>
          .
        </p>
      </div> */}

      {/* <div className="section alternate">
        <div className="narrow">
          <Markdown source={props.readme} />
        </div>
      </div> */}

      <div className="section alternate">
        <h2 className="centered">Get started</h2>
        <a href="https://github.com/colinhacks/devii">
          <button className="fork-button">Go to README</button>
        </a>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const introduction = await loadMarkdownFile('introduction.md');
  const features = await loadMarkdownFile('features.md');
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    introduction: introduction.contents,
    features: features.contents,
    readme: readme,
    posts,
  };

  return { props };
};
