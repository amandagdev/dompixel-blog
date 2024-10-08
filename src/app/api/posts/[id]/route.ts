import { useApi } from '@/hooks/useAPi'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { getPostById } = useApi()
  try {
    const { id } = params
    const post = await getPostById(id)

    return NextResponse.json({ post })
  } catch (error: any) {
    throw new Error(error.message)
  }
}
