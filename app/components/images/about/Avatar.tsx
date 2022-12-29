'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes';
import Image from 'next/image';

type Props = {
  className?: string,
  height: number,
  width: number
}

const Avatar = ({ className, height, width }: Props) => {
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
    <Image src={currentTheme === 'dark' ? '/images/about/avatar-dark.svg' : '/images/about/avatar.svg'} alt='avatar' className={className} height={height} width={width} />
  )
}

export default Avatar
