import Head from 'next/head';

import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
import { Markdown } from '../components/Markdown';
import { config } from '../globals';

const sectionStyle = {
  width: '100%',
  padding: '100px 3vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
} as const;

const pStyle = { lineHeight: 1.7 };

const Home = (props: {
  // features: string;
  readme: string;
  posts: PostData[];
}) => {
  return (
    <div style={{ width: '100%' }}>
      <Head>
        <title>Testy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div style={sectionStyle}>
        <h2 style={{ margin: '4px 0px', fontSize: '34pt' }}>James Calingo</h2>
        <p style={{ maxWidth: '550px', paddingBottom: '30px', ...pStyle }}>
          The thoughts of a fullstack developer, musician, video and board game enthusiast, and not a GPT bot.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr))`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
            width: '100%',
            padding: '0px 7vw',
          }}
        >
          {props.posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>

      <div style={{ ...sectionStyle }}>
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
            <a href="https://github.com/vriad/devii/issues/2" target="_blank">
              utterly out of context
            </a>
          </p>
        </blockquote>
      </div>

      <div style={{ ...sectionStyle }}>
        <h2 style={{ textAlign: 'center', fontSize: '34pt' }}>README.md</h2>
        <p
          style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: 'auto',
            ...pStyle,
          }}
        >
          Below is the README.md for devii. It was imported and rendered using
          Next.js dynamic imports. The rest of this page (including this
          paragraph) are rendered with React. You can also read the README on
          GitHub at{' '}
          <a href="https://github.com/vriad/devii">
            https://github.com/vriad/devii
          </a>
          .
        </p>
      </div>
      <div
        style={{
          width: '100%',
          backgroundColor: '#eeeeee',
          padding: '0px 3vw 50px 3vw',
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
      <div style={sectionStyle}>
        <h2
          style={{ margin: '4px 0px', fontSize: '22pt', paddingBottom: '30px' }}
        >
          Get started
        </h2>
        <button
          style={{
            padding: '10px 30px',
            backgroundColor: config.accentColor,
            color: 'white',
            fontSize: '14pt',
            border: 'none',
            borderRadius: '10px',
          }}
        >
          Fork Devii on GitHub
        </button>
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

  // comment out to turn off RSS generation
  // during build step.
  await generateRSS(posts);

  const props = { introduction, features, readme, posts };
  return { props };
};
