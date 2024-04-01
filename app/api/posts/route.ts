import { NextResponse } from 'next/server'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'

import prisma from '@/lib/prisma'
import { Post } from '@/lib/definitions'
// import { pusherServer } from '@/lib/pusher'

const { getUser } = getKindeServerSession()

export async function GET() {
  try {
    const posts = await prisma.post.findMany()

    return NextResponse.json(posts, { status: 200 })
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return NextResponse.json(
      { error: 'Internal server error, failed to fetch posts' },
      { status: 500 }
    )
  }
}

export async function POST(req: Request) {
  try {
    const kindeUser = await getUser()
    const { title, content } = (await req.json()) as Post

    const userExists = await prisma.user.findUnique({
      where: { id: kindeUser?.id },
    })

    if (!userExists) {
      return NextResponse.json(
        { error: 'User not found. Internal Server Error' },
        { status: 500 }
      )
    }

    await prisma.post.create({
      data: {
        title,
        content,
        authorId: kindeUser?.id || '',
      },
    })

    // await pusherServer.trigger('posts-channel', 'post-created', {
    //   content,
    //   authorId: kindeUser?.id,
    // })

    return NextResponse.json(
      { message: `Post is created: ${content}` },
      { status: 200 }
    )
  } catch (error) {
    console.error('Failed to create post:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
