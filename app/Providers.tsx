'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'

type Props = {
  children: React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>{children}</ThemeProvider>
  )
}

export default Providers
