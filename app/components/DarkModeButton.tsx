'use client'

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import Button from './Button';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

type Props = {
  className?: string
}

const DarkModeButton = ({className}: Props) => {
  // dark mode button
  const [mounted, setMounted] = useState<boolean>(false);
  const { systemTheme, theme, setTheme } = useTheme();

  // update dark mode
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  },[]);

  if (!mounted) return null;

  const currentTheme = theme === 'system' ? systemTheme : theme;
  if (currentTheme === 'dark') {
    return (
      <Button onClick={() => {setTheme('light')}} type='outline' colour='blue-dark' className={className}>
        <SunIcon className='w-6 h-6' />
      </Button>
    )
  } else {
    return (
      <Button onClick={() => {setTheme('dark')}} type='outline' colour='blue-dark' className={className}>
        <MoonIcon className='w-6 h-6' />
      </Button>
    )
  }

}

export default DarkModeButton
