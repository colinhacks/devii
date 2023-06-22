import React from 'react'
import { styled } from 'styled-components'

const SignOffContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 25px 25px;
    margin: 25px 0;
    box-sizing: border-box;
    border: 1px solid #eaeaea;
    background-color: #f8f8f8;
    text-decoration: italic;
`;

const Text = styled.p`
    font-size: 14px;
    // font-weight: 600;
    width: 100%;
    padding: 0;
`;

const BlogSignOff = () => {
  return (
    <SignOffContainer><Text><em>I hope you have found this article informative and engaging. If you're interested in more web development insights and updates, follow me on <a href='https://twitter.com/mikey_sage'>Twitter</a> and <a href='https://linkedin.com/in/michael-sage-2274bb140'>LinkedIn</a>. Let's stay connected!</em></Text></SignOffContainer>
  )
}

export default BlogSignOff