import React from 'react';
import glob from 'glob';
import { BlogPost } from '../../components/BlogPost';
import { loadPost } from '../../loader';

function Post(props: any) {
  const { post } = props;
  return <BlogPost post={post} />;
}

export const getStaticPaths = () => {
  const blogs = glob.sync('./md/blog/*.md');
  const slugs = blogs.map((file: string) => {
    const popped = file.split('/').pop();
    if (!popped) throw new Error(`Invalid blog path: ${file}`);
    return popped.slice(0, -3).trim();
  });

  const paths = slugs.map((slug) => `/blog/${slug}`);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: any) => {
  const post = await loadPost(`blog/${params.blog}.md`);
  return { props: { post } };
};

export default Post;
