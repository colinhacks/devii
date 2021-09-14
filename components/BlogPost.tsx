import React from "react"
import { PostData } from "../loader"
import { Author } from "./Author"
import { Markdown } from "./Markdown"
import { PostMeta } from "./PostMeta"

export function BlogPost({ post }: { post: PostData }) {
  const { title, subtitle } = post
  return (
    <div className="blog-post">
      <PostMeta post={post}/>
      {post.bannerPhoto && (
        <img className="blog-post-image" src={post.bannerPhoto} alt="blog post cover"/>
      )}

      <div className="blog-post-title">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br/>
        <Author post={post}/>
      </div>

      <div className="blog-post-content">
        <Markdown source={post.content}/>
      </div>
    </div>
  )
}
