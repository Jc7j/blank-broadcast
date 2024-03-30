export type Post = {
  id: string
  title: string
  content: string
  createdAt: string
}

export type Posts = {
  posts: Post[]
  setPosts: (posts: Post[]) => void
  fetchPosts: () => Promise<void>
}

export type User = {
  id: string
  email: string
  name: string
  posts?: Post[]
}

export type userPersonalInfo = {
  name: string
  email: string
  setUserPersonalInfo: (name: string, email: string) => void
  fetchUserPersonalInfo: () => Promise<void>
}

export type DialogOpen = {
  open: boolean
  setOpen: (open: boolean) => void
}
