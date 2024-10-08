import PostList from '@/components/post-list/post-list.component'
import { useApi } from '@/hooks/useAPi'
import { Container } from '@mantine/core'
import React from 'react'

const Home = async () => {
  const { getPosts } = useApi()
  const posts = await getPosts()

  return (
    <Container role="main">
      <PostList posts={posts} />
    </Container>
  )
}

export default Home
