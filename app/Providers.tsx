'use client'

import React from 'react'
import { ThemeProvider } from 'next-themes'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { ReCaptchaContext, ReCaptchaProvider } from 'next-recaptcha-v3'

type Props = {
  children: React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <ReCaptchaProvider>
        <ThemeProvider enableSystem={true} attribute='class'>{children}</ThemeProvider>
      </ReCaptchaProvider>
    </>
  )
}

export default Providers
