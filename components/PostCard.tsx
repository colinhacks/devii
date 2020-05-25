import React from 'react';
import { PostData } from '../loader';
import { Tag } from './Tag';

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <a
      href={`/${post.path}`}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
        margin: '10px',
        maxWidth: '450px',
      }}
    >
      <div
        style={{
          // flexBasis: '300px',
          // flex: 1,
          // minWidth: '200px',
          // maxWidth: '450px',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0px 2px 10px #00000020',
          // margin: '10px 0px',
        }}
      >
        {post.thumbnailPhoto && (
          <div
            style={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center;`,
              // backgroundImage: post.thumbnailPhoto,
              // backgroundPosition: 'cover',
              width: '100%',
              height: '200px',
            }}
          ></div>
        )}
        <div style={{ padding: '15px 10px' }}>
          {post.title && (
            <h2 style={{ margin: '0px', padding: '2px 0px 2px 0px' }}>
              {post.title}
            </h2>
          )}
          {post.subtitle && (
            <p
              style={{
                margin: '0px',
                padding: '0px',
                color: '#333333',
              }}
            >
              {post.subtitle}
            </p>
          )}
          <div style={{ marginTop: '7px' }}>
            {post.tags && post.tags.map((tag) => <Tag tag={tag} />)}
          </div>
        </div>
      </div>
    </a>
  );
};
