import type { Post, User } from '@/interfaces'
import { checkPassword } from '@/utils/check-password'
import { hashPassword } from '@/utils/hash-password'
import axios from 'axios'

export const useApi = () => {
  const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get(
      'https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/posts'
    )

    return await response.data
  }

  const getPostById = async (id: string): Promise<Post> => {
    const response = await axios.get(
      `https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/posts/${id}`
    )

    return await response.data
  }

  const getUsers = async (): Promise<User[]> => {
    const responseUsers = await axios.get(
      `https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/users`
    )

    return await responseUsers.data
  }

  const createUser = async ({ email, name, password }: User) => {
    const cryptedPassword = await hashPassword(password)
    const response = await axios.post(
      `https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/users`,
      {
        email,
        name,
        password: cryptedPassword
      }
    )

    return await response.data
  }

  const createPost = async ({ content, title, date }: Post) => {
    const copyDate = new Date(date as string)
    const formatedData = copyDate.toLocaleString()
    const response = await axios.post(
      `https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/posts`,
      {
        content,
        title,
        date: formatedData
      }
    )

    return await response.data
  }

  const login = async ({ email, password }: Omit<User, 'name'>) => {
    const responseUsers = await axios.get(
      `https://6702f13dbd7c8c1ccd403be9.mockapi.io/api/users`
    )
    const usersData = (await responseUsers.data) as User[]

    const findUser = usersData.find((user) => user.email === email)

    const userPassword = findUser?.password as string

    const isValidPassword = await checkPassword(password, userPassword)

    if (!findUser || !isValidPassword) {
      return { success: false, data: null, message: 'Senha ou email inválidos' }
    }

    return { success: true, data: findUser, message: 'Sucesso!' }
  }

  return {
    getPosts,
    getPostById,
    getUsers,
    createUser,
    login,
    createPost
  }
}
