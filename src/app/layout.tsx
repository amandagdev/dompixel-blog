import '@mantine/core/styles.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import type { ReactNode } from 'react'
import './globals.css'
import Header from '@/components/header/header.component'
import { UserContextProvider } from '@/context/user.context'

export const metadata = {
  title: 'Dom Pixel Blog',
  description: 'Welcome to our blog'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <UserContextProvider>
            <Header />
            {children}
          </UserContextProvider>
        </MantineProvider>
      </body>
    </html>
  )
}
