import React from 'react';
import { Author } from './Author';
import { Markdown } from './Markdown';
import { PostData } from '../loader';
import { PostMeta } from './PostMeta';
import { styled } from 'styled-components';
import BlogSignOff from './BlogSignOff';

const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 50px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding-left: 36px;
    padding-right: 36px;
    max-width: 550px;
  }
`

const BlogPostTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  width: 100%;
  margin-bottom: auto;

  @media screen and (max-width: 700px) {
    font-size: 2rem;
  }
`
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  margin: 0;

  @media screen and (max-width: 700px) {
    font-size: 1.25rem;
  }
`

const BlogPostImage = styled.img`
  // width: 100%;
  max-height: 250px;
`

const BlogPostContentWIP = styled.div` // TODO make table more responsive by implementing this and Table.tsx
  width: 100%;
  table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid #dee2e6;
    border-radius: 0.25rem;
    overflow-x: auto;

    thead {
      font-weight: 700;
      background-color: #f5f5f5;
    }
    tr {
      padding: 5px;
      border: 1px solid #dee2e6;
      td:first-child {
        font-weight: 700;
        background-color: #f5f5f5;
      }
    }
    td {
      padding: 5px;
    }
  }

  @media screen and (max-width: 600px) {

    table {
      border: 0;
    }

    // table thead {
    //   display: none;
    // }

    table tr {
      margin-bottom: 10px;
      display: block;
      border-bottom: 2px solid #ddd;
    }

    table td {
      display: block;
      text-align: right;
      font-size: 13px;
      border-bottom: 1px dotted #ccc;
    }

    table td:last-child {
      border-bottom: 0;
    }

    table td:before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
    }
  }
`

const BlogPostContent = styled.div`
  width: 100%;

  ol, ul {
    padding-left: 25px;
  }

  table {
      border-collapse: collapse;
      border-spacing: 0;
      width: 100%;
      margin-bottom: 1rem;
      border: 1px solid #dee2e6;
      border-radius: 0.25rem;
      overflow-x: auto;

      thead {
        font-weight: 700;
        background-color: #f5f5f5;
      }
      tr {
        padding: 5px;
        border: 1px solid #dee2e6;
        th {
          padding: 5px;
          font-size: 14px;
        }
        td:first-child {
          font-weight: 700;
          background-color: #f5f5f5;
        }
      }
      td {
        padding: 12px 8px;
        font-size: 12.5px;
        height: 20px;
      }
  }

  @media screen and (max-width: 768px) {
    h2:first-child {
      margin-top: 0;
    }

    ol, ul {
      padding: 0 20px;
      margin: 0;
    }

    p {
      padding-top: 0;
      font-size: 14px;
    }
  }

  @media screen and (max-width: 425px) {
    h2 {
      font-size: 24px;
      margin-top: 15px;
    }
  }
`


export const BlogPost: React.FunctionComponent<{ post: PostData }> = ({
  post,
}) => {
  const { title, subtitle } = post;
  return (
    <BlogContainer>
      <PostMeta post={post} />
      <BlogPostTitleContainer>
        {post.bannerPhoto && (
        <BlogPostImage src={post.bannerPhoto} />
      )}
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <br />
        <Author post={post} />
      </BlogPostTitleContainer>

      <BlogPostContent>
        <Markdown source={post.content} />
      </BlogPostContent>
      <BlogSignOff />
    </BlogContainer>
  );
};
