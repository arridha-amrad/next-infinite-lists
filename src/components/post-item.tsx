"use client"

import { Ref, forwardRef } from "react"

function PostItem({post}: {post: Post}, ref: Ref<HTMLDivElement>){
  return (
    <div ref={ref} className="rounded-lg p-2">
      <p>id: {post.id}</p>
      <p>title: {post.title}</p>
      <p>{post.body}</p>
      <p>reactions: {post.reactions}</p>
      <p>tags: {post.tags}</p>
    </div>
  )
}

export default forwardRef(PostItem)