import { Loader, Center } from '@mantine/core'
import React from 'react'

const Loading: React.FC = () => {
  return (
    <Center style={{ height: '100vh' }}>
      <Loader size="xl" variant="bars" />
    </Center>
  )
}

export default Loading
