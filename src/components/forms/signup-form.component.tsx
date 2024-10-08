'use client'

import { IconExclamationMark } from '@tabler/icons-react'
import { useUser } from '@/hooks/useUsers'
import type { User } from '@/interfaces'
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Group,
  Notification,
  rem
} from '@mantine/core'
import { useForm } from '@mantine/form'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignUpForm = () => {
  const router = useRouter()
  const { setUser } = useUser()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const xIcon = (
    <IconExclamationMark style={{ width: rem(20), height: rem(20) }} />
  )

  const createUser = async ({ email, name, password }: User) => {
    try {
      const response = await axios.post('http://localhost:3000/api/users', {
        email,
        name,
        password
      })
      const user = await response.data

      setUser(user)

      return { success: true }
    } catch (error: any) {
      setError(true)
      return { success: false, message: error.response.data.message }
    }
  }

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },

    validate: {
      name: (value) =>
        value.length < 2 ? 'O nome precisa ter pelo menos 2 caracteres' : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      password: (value) =>
        value.length < 6 ? 'A senha precisa ter pelo menos 6 caracteres' : null
    }
  })

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true)
    const response = await createUser(values)
    if (response.success) {
      router.push('/')
    }
    setLoading(false)
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
      <Title className="text-center">Crie sua Conta!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Nome"
            placeholder="Seu nome"
            {...form.getInputProps('name')}
            mb="sm"
          />
          <TextInput
            label="Email"
            placeholder="seuemail@exemplo.com"
            {...form.getInputProps('email')}
            mb="sm"
          />
          <PasswordInput
            label="Senha"
            placeholder="Sua senha"
            {...form.getInputProps('password')}
            mb="sm"
          />

          <Group mt="lg">
            <Button fullWidth type="submit" loading={loading}>
              Criar
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default SignUpForm
