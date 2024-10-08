import { useApi } from '@/hooks/useAPi'
import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const { getPosts } = useApi()
  try {
    const posts = await getPosts()
    if (!posts) {
      return NextResponse.json(
        { success: false, data: null, message: 'Failed to fetch data' },
        { status: 404 }
      )
    }
    return NextResponse.json(
      { success: true, data: posts, message: 'Fetch successfully' },
      { status: 201 }
    )
  } catch (error: any) {
    return NextResponse.json(
      { success: false, data: null, message: error.message },
      { status: 500 }
    )
  }
}

export async function POST(req: NextRequest) {
  revalidatePath('/')
  const body = await req.json()
  const { createPost } = useApi()
  const post = await createPost(body)

  return NextResponse.json(
    { success: true, data: post, message: 'Post criado com sucesso!' },
    { status: 201 }
  )
}
