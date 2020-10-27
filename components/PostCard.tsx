import React from 'react';
import { format } from 'fecha';
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
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '300px',
      }}
    >
      <div
        style={{
          opacity: 0.92,
          boxShadow: '0px 2px 10px #00000040',
          width: '100%',
          maxWidth: '500px',
          overflow: 'hidden',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        {post.thumbnailPhoto && (
          <div
            style={{
              background: `url(${post.thumbnailPhoto}) no-repeat center center`,
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
            borderTop: '1px solid #00000020',
          }}
        >
          {post.title && (
            <h2
              style={{
                margin: '0px 0px 7px 0px',
                fontSize: '14pt',
                fontWeight: 600,
                padding: '2px 10%',
                textAlign: 'center',
              }}
            >
              {post.title}
            </h2>
          )}
          {false && post.subtitle && (
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
          <p style={{ opacity: 0.6, textAlign: 'center', margin: '0px' }}>
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
              : ''}
          </p>
          <div style={{ flex: 1 }}> </div>
          {false && (
            <div style={{ marginTop: '7px' }}>
              {post.tags && (post.tags || []).map((tag) => <Tag tag={tag} />)}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};
