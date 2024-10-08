'use client'

import type { Post } from '@/interfaces'
import { Center, TextInput } from '@mantine/core'
import PostCard from '../post-card/post-card.component'
import { useEffect, useState } from 'react'

const PostList = ({ posts }: { posts: Post[] }) => {
  const [dataPosts, setDataPosts] = useState<Post[]>([])
  const [inputSearch, setInputSearch] = useState('')

  useEffect(() => {
    const filteredPosts = posts
      .filter((post) =>
        post.title.toLowerCase().includes(inputSearch.toLowerCase())
      )
      // filtrar os posts mais recentes
      .sort((a, b) => {
        const dateA = new Date(a.date || 0)
        const dateB = new Date(b.date || 0)

        return dateB.getTime() - dateA.getTime()
      })
    setDataPosts(filteredPosts)
  }, [inputSearch])

  return (
    <Center className="flex flex-col">
      <TextInput
        radius="md"
        placeholder="Procucar post"
        className="max-w-[400px] w-full"
        onChange={(e) => setInputSearch(e.target.value)}
        value={inputSearch}
        mb={20}
      />

      <div className="max-w-[800px] w-full flex flex-col items-center">
        {dataPosts.map((post) => (
          <PostCard post={post} key={post.title} isUnique={false} />
        ))}
      </div>
    </Center>
  )
}

export default PostList
