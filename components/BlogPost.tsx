import React from 'react';
import { Author } from './Author';
import { Markdown } from './Markdown';
import { PostData } from '../loader';
import { PostMeta } from './PostMeta';

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <div className="blog-post">
      <PostMeta post={post} />
      {post.bannerPhoto && (
        <img className="blog-post-image" src={post.bannerPhoto} />
      )}

      <div className="blog-post-title">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br />
        <Author post={post} />
      </div>

      <div className="blog-post-content">
        <Markdown source={post.content} />
      </div>
    </div>
  );
};
