import PostCard from '@/components/post-card/post-card.component'
import { Container } from '@mantine/core'
import axios from 'axios'
import React from 'react'

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await (
    await axios.get(`http://localhost:3000/api/posts/${params.id}`)
  ).data.post

  return (
    <Container className="flex justify-center">
      <PostCard isUnique post={post} />
    </Container>
  )
}

export default PostPage
