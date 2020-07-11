import Head from 'next/head';

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { config } from '../globals';

const Home = (props: { readme: string; posts: PostData[] }) => {
  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>Introducing Devii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px 0px' }}>
        <h3>Welcome to Devii</h3>
        <p style={{ padding: '10px 0px', color: '#666666' }}>
          This site is entirely built with Devii! In fact, the{' '}
          <a href="https://github.com/vriad/devii">Devii repo</a> contains the
          code for the site your looking at now.
        </p>
        <p style={{ padding: '10px 0px', color: '#666666' }}>
          After you clone/fork it, you can use this code to learn how Devii
          works. Then you can rip out everything you don't like, customize
          everything else, and build your own tools and components on top of the
          foundation Devii provides.
        </p>
        <p style={{ padding: '10px 0px', color: '#666666' }}>
          Your personal website is the online manifestation of you. Devii
          doesn't really provide much out of the box. It provides some nice
          Medium-style default styles for your blog posts and some tools for
          loading/rendering Markdown. But you'll have to implement your own
          homepage more or less from scratch. And that's the point! Don't settle
          for some theme. Build something that represents you.
        </p>
      </div>
      <div style={{ width: '100%', padding: '100px 10vw' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <h2 style={{ margin: '4px 0px', fontSize: '34pt' }}>My blog posts</h2>
          <p>
            Any new markdown file under <code>/md/blog</code> will automatically
            appear here.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
              gridRowGap: '8px',
              gridColumnGap: '8px',
              width: '100%',
            }}
          >
            {props.posts.map((post, j) => {
              return <PostCard post={post} key={j} />;
            })}
          </div>
        </div>
      </div>

      <div
        style={{
          width: '100%',
          padding: '100px 0px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h2 style={{ textAlign: 'center', fontSize: '34pt' }}>Testimonials</h2>
        <blockquote
          style={{
            borderLeft: `3px solid ${config.accentColor}`,
            paddingLeft: '20px',
          }}
        >
          <p style={{ fontSize: '20pt' }}>
            <em>Seems like it might be useful!</em>
          </p>

          <p style={{ textAlign: 'right' }}>
            — Dan Abramov, taken{' '}
            <a href="https://github.com/vriad/devii" target="_blank">
              utterly out of context
            </a>
          </p>
        </blockquote>
      </div>

      <div style={{ width: '100%', margin: '100px 0px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '34pt' }}>README.md</h2>
        <p style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. 🎉
        </p>
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: '#eeeeee',
          paddingBottom: '50px',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            margin: 'auto',
          }}
        >
          <Markdown source={props.readme} />
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const readmeFile = await import(`../${'README.md'}`);
  const readme = readmeFile.default;

  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = { readme, posts };
  return { props };
};
