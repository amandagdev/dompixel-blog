'use client'

import { Post } from '@/interfaces'
import { Button, Card, Image, Text, Title } from '@mantine/core'
import Link from 'next/link'

const PostCard = ({ post, isUnique }: { post: Post; isUnique: boolean }) => {
  return (
    <Card
      shadow="sm"
      radius="md"
      withBorder
      mb="lg"
      maw={isUnique ? 800 : 600}
      miw={200}
    >
      <Card.Section>
        <Image src={post.imageUrl} height={160} alt={post.title} />
      </Card.Section>

      <Card.Section p="lg">
        <Title order={3} mt="md">
          {post.title}
        </Title>
        {isUnique && (
          <Text size="sm" mt="md">
            {post.content}
          </Text>
        )}
        <Text size="sm" mt="md">
          {post.date}
        </Text>
        {!isUnique && (
          <Link href={`/post/${post.id}`} passHref>
            <Button fullWidth mt="md">
              Ver Publicação
            </Button>
          </Link>
        )}
      </Card.Section>
    </Card>
  )
}

export default PostCard
