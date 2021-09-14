import React from "react"
import { PostData } from "../loader"
import { Meta } from "./Meta"

export function PostMeta({ post }: { post: PostData }) {
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: post.bannerPhoto,
      }}
    />
  )
}
