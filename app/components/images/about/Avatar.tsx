'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';

type Props = {
  className?: string
}

const Avatar = ({ className }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);
  // dark mode
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  },[])

  if (!mounted) {
    return null
  }

  return (
    <img src={currentTheme === 'dark' ? '/images/about/avatar-dark.svg' : '/images/about/avatar.svg'} alt='avatar' className={className} />
  )
}

export default Avatar
