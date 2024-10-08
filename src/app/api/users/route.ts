import { useApi } from '@/hooks/useAPi'
import { NextResponse, type NextRequest } from 'next/server'

export async function GET() {
  const { getUsers } = useApi()

  const users = await getUsers()

  return NextResponse.json(users, { status: 201 })
}

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { createUser, getUsers } = useApi()
  const users = await getUsers()

  const isValidEmail = users.find((user) => user.email === body.email)

  if (isValidEmail) {
    return NextResponse.json(
      { success: false, message: 'Email já cadastrado', data: null },
      { status: 400 }
    )
  }

  const user = await createUser(body)

  return NextResponse.json(
    { success: true, data: user, message: 'Usuário criado com sucesso!' },
    { status: 201 }
  )
}
