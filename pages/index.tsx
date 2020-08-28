import Head from 'next/head';

import { PostData, loadBlogPosts, loadMarkdownFile } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';
// import { Markdown } from '../components/Markdown';
// import { config } from '../globals';

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
  // readme: string;
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
