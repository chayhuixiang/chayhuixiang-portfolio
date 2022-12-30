'use client'

import React from 'react'
import Button from './Button'
import { useTheme } from 'next-themes'
import useMounted from '../../hooks/useMounted'

type Props = {
  name: string,
  logo_path: string,
  stack: string[],
}

const SkillCard = ({name, logo_path, stack}: Props) => {
  const mounted = useMounted();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const logo_path_dark = logo_path.split('.')[0] + '-dark.svg';
  return (
    <article className='w-full bg-white dark:bg-indigo p-6 rounded-xl'>
      <div className='flex gap-3 text-purple dark:text-purple-light'>
        <img src={mounted && currentTheme === 'dark' ? logo_path_dark : logo_path} alt='skill_logo' />
        <h3 className='font-bold text-xl sm:text-2xl'>{name}</h3>
      </div>
      <div className='flex gap-4 mt-3 flex-wrap'>
        {stack.map((stackItem, i) => 
          <Button onClick={() => {}} key={i} type='solid' colour='purple' className='text-xs px-2 py-1 h-auto cursor-auto' >{stackItem}</Button>
        )}
      </div>
    </article>
  )
}

export default SkillCard
