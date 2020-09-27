import React from 'react';
// import { gwen } from 'gwen';
import { format } from 'fecha';

import { PostData } from '../loader';
import { globals } from '../globals';

export const FollowButton = () => {
  return (
    <a href="/newsletter">
      <div
        style={{
          display: 'inline-block',
          border: `1px solid ${globals.accentColor}`,
          borderRadius: '4px',
          padding: '2px 10px',
          color: globals.accentColor,
          fontSize: '10pt',
          marginBottom: '2px',
          marginLeft: '4px',
        }}
      >
        Follow
      </div>
    </a>
  );
};

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div
      style={{
        margin: '0px',
        padding: '0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {props.post.authorPhoto && (
          <img
            src={props.post.authorPhoto}
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '35px',
              margin: '0px 10px 0px 0px',
            }}
          />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  const lineStyle = {
    margin: '2px',
    padding: 0,
    lineHeight: 1.2,
    fontSize: '11pt',
  };
  return (
    <div>
      <p style={{ ...lineStyle }}>
        {props.post.author ? props.post.author : ''}
      </p>

      <p style={{ opacity: 0.6, ...lineStyle }}>
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
          : ''}
      </p>

      <p style={{ ...lineStyle }}>
        {props.post.authorTwitter && (
          <a
            style={{
              textDecoration: 'none',
              color: '#3b9488',
              // fontSize: '110%',
            }}
            href={`https://twitter.com/${props.post.authorTwitter}`}
          >{`@${props.post.authorTwitter}`}</a>
        )}
      </p>
    </div>
  );
};
