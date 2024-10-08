export interface Post {
  id?: number
  title: string
  content: string
  imageUrl?: string
  date?: string
}

export interface User {
  id?: number
  name: string
  email: string
  password: string
}
