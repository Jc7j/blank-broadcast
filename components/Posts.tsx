'use client'

import { useEffect } from "react"

import { usePostsStore } from "@/lib/store/usePostsStore"

export default function Posts() {
  const {posts, fetchPosts} = usePostsStore()
  useEffect(() => {
    fetchPosts()
    console.log(posts)
  })
  
  return (
    <section className={`section`}>
      <div>
        Home PAge
      </div>
      </section>
  )
}
