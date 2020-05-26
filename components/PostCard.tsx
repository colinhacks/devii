import React from 'react';
import { PostData } from '../loader';

export const PostCard: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <a
      className={'postcard'}
      href={`/${post.path}`}
      style={{
        textDecoration: 'inherit',
        color: 'inherit',
        margin: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '300px',
      }}
    >
      <div
        style={{
          maxWidth: '450px',
          overflow: 'hidden',
          borderRadius: '8px',
          boxShadow: '0px 2px 10px #00000020',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {post.thumbnailPhoto && (
          <div
            style={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center;`,
              backgroundSize: 'cover',
              width: '100%',
              flex: 1,
            }}
          />
        )}
        <div
          style={{
            padding: '15px 10px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {post.title && (
            <h2
              style={{
                margin: '0px 0px 7px 0px',
                padding: '2px 0px 2px 0px',
                fontSize: '14pt',
                fontWeight: 600,
              }}
            >
              {post.title}
            </h2>
          )}
          {post.subtitle && (
            <p
              style={{
                margin: '0px',
                padding: '0px',
                fontSize: '12pt',
                color: '#333333',
              }}
            >
              {post.subtitle}
            </p>
          )}
          <div style={{ flex: 1 }}> </div>
        </div>
      </div>
    </a>
  );
};
