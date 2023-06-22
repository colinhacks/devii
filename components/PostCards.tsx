import React from 'react'
import { styled } from 'styled-components'
import { BlogPostList } from '../types/BlogPost';
import { PostCard } from './PostCard';

const PostCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 8px;
    grid-column-gap: 8px;
    width: 100%;
    padding: 15px 30px;
`;

const PostCards:React.FC<BlogPostList> = ({ posts }) => {
  return (
    <PostCardsContainer>
       {posts.map((post, j) => {
            return <PostCard post={post} key={j} />;
        })}

    </PostCardsContainer>
  )
}

export default PostCards