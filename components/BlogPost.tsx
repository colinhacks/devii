import Head from 'next/head';
import React from 'react';
import { format } from 'fecha';

import { Markdown } from './Markdown';
import { PostData } from '../loader';

export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle, datePublished, author, authorPhoto } = post;

  const authorData = (
    <div>
      <span>{author ? author : ''} </span>
      <br />
      <span style={{ opacity: 0.6 }}>
        {datePublished ? format(new Date(datePublished), 'MMMM Do, YYYY') : ''}
      </span>
    </div>
  );

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          padding: '0px 4vw',
        }}
      >
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <div style={{ margin: '100px 0px 50px 0px' }}>
            {title && (
              <h1
                style={{
                  margin: '10px 0px 10px 0px',
                  padding: 0,
                  border: 'none',
                }}
              >
                {title}
              </h1>
            )}
            {subtitle && (
              <h2
                style={{
                  margin: '10px 0px',
                  padding: 0,
                  border: 'none',
                  opacity: '0.6',
                }}
              >
                {subtitle}
              </h2>
            )}
            <hr
              style={{
                height: '1px',
                color: '#eee',
                opacity: 0.2,
                margin: '25px 0px',
              }}
            />

            <div
              style={{
                margin: '0px',
                padding: '0px',
              }}
            >
              <div
                style={{
                  margin: '0px',
                  padding: '0px',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                <img
                  src={authorPhoto}
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '25px',
                    margin: '0px 10px 0px 0px',
                  }}
                />
                {authorData}
              </div>
            </div>
          </div>

          <Markdown source={post.content} />
        </div>
      </div>
    </div>
  );
};
