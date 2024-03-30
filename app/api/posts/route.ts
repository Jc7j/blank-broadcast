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
