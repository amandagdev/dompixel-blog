import PostCard from '@/components/post-card/post-card.component'
import { Container } from '@mantine/core'
import axios from 'axios'
import React from 'react'

const apiUrl = process.env.NEXT_PUBLIC_API_URL

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await (await axios.get(`${apiUrl}/posts/${params.id}`)).data.post

  return (
    <Container className="flex justify-center">
      <PostCard isUnique post={post} />
    </Container>
  )
}

export default PostPage
