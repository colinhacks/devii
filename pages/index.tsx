import Head from 'next/head';

import { PostData, loadBlogPosts } from '../loader';
import { PostCard } from '../components/PostCard';
import { generateRSS } from '../rssUtil';

const Home = (props: { post: string; posts: PostData[] }) => {
  return (
    <div style={{ width: '100%', padding: '0px 10vw' }}>
      <Head>
        <title>Introducing Devii</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          padding: '50px 0px',
        }}
      >
        <h1 style={{ textAlign: 'center' }}>Welcome to my blog!</h1>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {props.posts.map((post, j) => {
            return (
              <a href={`/${post.path}`} target="_blank" key={j}>
                {post.title}
              </a>
            );
            return <PostCard post={post} key={j} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogPosts();
  const props = { posts };

  // comment out to 
  await generateRSS(posts);

  return { props };
};
