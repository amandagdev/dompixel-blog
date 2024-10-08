'use client'

import { useUser } from '@/hooks/useUsers'
import { Button, Container, Flex, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  const { user, setUser } = useUser()

  return (
    <div className="bg-gray-600">
      <Container p="lg" mb="lg">
        <Flex justify="space-between">
          <Title order={1} className="text-white text-2xl">
            <Link href="/">Dom-Pixel Blog</Link>
          </Title>

          {!user ? (
            <Flex gap={15}>
              <Link href="/sign-in">
                <Button>Entrar</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="white">Cadastrar-se</Button>
              </Link>
            </Flex>
          ) : (
            <Flex align={'center'} gap={5}>
              <Link href="/create-post">
                <Button>Criar novo Post</Button>
              </Link>
              <Link href="/">
                <Button
                  onClick={() => {
                    setUser(null)
                    localStorage.removeItem('user')
                  }}
                  variant="outline"
                >
                  Sair
                </Button>
              </Link>
            </Flex>
          )}
        </Flex>
      </Container>
    </div>
  )
}

export default Header
