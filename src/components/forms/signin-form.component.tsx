'use client'

import { useApi } from '@/hooks/useAPi'
import { useUser } from '@/hooks/useUsers'
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Group,
  rem,
  Notification
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { IconExclamationMark } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignInForm = () => {
  const router = useRouter()
  const [error, setError] = useState(false)
  const { setUser } = useUser()
  const { login } = useApi()

  const xIcon = (
    <IconExclamationMark style={{ width: rem(20), height: rem(20) }} />
  )
  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
      password: (value) =>
        value.length < 6 ? 'A senha precisa ter pelo menos 6 caracteres' : null
    }
  })

  const handleSubmit = async (values: typeof form.values) => {
    const response = await login(values)
    if (response.success) {
      setUser(response.data)
      router.push('/')
    }
    if (!response.success) {
      setUser(response.data)
      setError(true)
    }
  }

  return (
    <Container size={420} my={40}>
      {error && (
        <Notification
          icon={xIcon}
          color="red"
          title="Email ou senha inválidos!"
          onClose={() => setError(false)}
          pos={'fixed'}
        />
      )}
      <Title className="text-center">Bem vindo de volta!</Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
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
            <Button fullWidth type="submit">
              Entrar
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  )
}

export default SignInForm
