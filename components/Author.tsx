import React from 'react';
import { format } from 'fecha';
import { PostData } from '../loader';

export const FollowButton = () => {
  return (
    <a href="/newsletter">
      <div className="follow-button">Follow</div>
    </a>
  );
};

export const Author: React.FC<{ post: PostData }> = (props) => {
  return (
    <div className="author-container">
      <div className="author">
        {props.post.authorPhoto && (
          <img src={props.post.authorPhoto} className="author-image" />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
};

export const AuthorLines: React.FC<{ post: PostData }> = (props) => {
  return (
    <div>
      <p className="author-line">
        {props.post.author && <span>{props.post.author}</span>}

        {props.post.authorTwitter && (
          <span>
            {' '}
            <a
              href={`https://twitter.com/${props.post.authorTwitter}`}
            >{`@${props.post.authorTwitter}`}</a>{' '}
          </span>
        )}
      </p>
      <p className="author-line subtle">
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), 'MMMM Do, YYYY')
          : ''}
      </p>
    </div>
  );
};
