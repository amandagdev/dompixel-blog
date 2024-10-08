'use client'

import { IconExclamationMark } from '@tabler/icons-react'
import {
  TextInput,
  Button,
  Paper,
  Title,
  Container,
  Group,
  Notification,
  rem,
  Textarea,
  FileInput
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import axios from 'axios'

const PostForm = () => {
  const router = useRouter()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const xIcon = (
    <IconExclamationMark style={{ width: rem(20), height: rem(20) }} />
  )

  const form = useForm({
    initialValues: {
      title: '',
      content: ''
    },

    validate: {
      title: (value) =>
        value.length < 2
          ? 'O titulo precisa ter pelo menos 2 caracteres'
          : null,
      content: (value) =>
        value.length < 2
          ? 'O conteúdo precisa ter pelo menos 2 caracteres'
          : null
    }
  })

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true)
    const data = { ...values, date: new Date().toISOString() }
    await axios.post(`http://localhost:3000/api/posts`, data)
    setLoading(false)
    router.push('/')
  }

  return (
    <Container size={420} my={40}>
      {error && (
        <Notification
          icon={xIcon}
          color="red"
          title="Email já Cadastrado!"
          onClose={() => setError(false)}
          pos={'fixed'}
        />
      )}
      <Title className="text-center">Crie um novo Post!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Título"
            placeholder="Seu título"
            {...form.getInputProps('title')}
            mb="sm"
          />
          <Textarea
            label="Conteúdo"
            placeholder="Conteúdo"
            {...form.getInputProps('content')}
            mb="sm"
          />
          <FileInput label="Imagem" placeholder="Sua imagem" mb="sm" />

          <Group mt="lg">
            <Button fullWidth type="submit" loading={loading}>
              Criar Post
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default PostForm
