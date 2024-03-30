import { create } from 'zustand'

import {Post, Posts} from '../definitions'

export const usePostsStore = create<Posts>((set) => ({
  posts: [],
  setPosts: (posts: Post[]) => set({posts}),
  fetchPosts: async () => {
      try {
        const res = await fetch('/api/posts', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
  
        if (!res.ok) {
          console.error('Network response not ok. Unable to fetch all the Posts')
        }

        const data: Posts[] = await res.json()
        console.log("data", data)
      } catch (err) {
        console.error('Network response not ok. Unable to fetch all the Posts', err)
      }
  },
}))
