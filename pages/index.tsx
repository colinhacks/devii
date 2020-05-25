import Head from 'next/head';

import { PostData, loadPosts } from '../loader';
import { PostCard } from '../components/PostCard';

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
        <h2>My posts</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(300px,1fr));`,
            gridRowGap: '8px',
            gridColumnGap: '8px',
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
  const posts = await loadPosts();
  const props = { posts };
  return { props };
};
