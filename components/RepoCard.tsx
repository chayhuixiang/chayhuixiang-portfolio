'use client'

import { useTheme } from 'next-themes'
import React, { useState } from 'react'
import RepoDeployed from './images/projects/RepoDeployed'
import RepoGithub from './images/projects/RepoGithub'
import useMounted from '../hooks/useMounted'

type Props = {
  variant: 'large' | 'small',
  name: string,
  github_link: string,
  deployed_link: string | null,
  colour: string,
  cover_path: string,
  stacks:{
    logo_path_light: string;
    logo_path_dark: string;
  }[]
}

const RepoCard = ({variant, name, github_link, deployed_link, stacks, colour, cover_path}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);
  const mounted = useMounted();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return ( 
    <article className={`p-4 bg-white dark:bg-indigo rounded-xl ${variant === 'large' ? 'sm:row-span-2' : 'sm:row-span-1'}`} style={{}} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{backgroundColor: `${hovered ? colour + '4D' : colour + '33'}`, backgroundImage: `url(${cover_path})`}} className={`aspect-[64/79] ${variant === 'large' ? 'sm:aspect-auto sm:h-full' : 'sm:aspect-[117/92]' } max-w-[29.25rem] w-full bg-cover rounded-xl p-6 transition-all duration-200 flex flex-col items-start`}>
        <div className='flex justify-between w-full whitespace-nowrap gap-4'>
          <h2 className='font-bold text-ellipsis overflow-hidden text-2xl md:text-[2rem] dark:text-zinc-300'>{name}</h2>
          <div className='hidden sm:flex sm:gap-2 md:gap-4 min-w-max'>
            <a href={github_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
              {/* <img src='/images/projects/repo-github.svg' alt='github_link' className='w-6 md:w-8' /> */}
              <RepoGithub className='w-6 md:w-8' />
            </a>
            {
              deployed_link && 
              <a href={deployed_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
                {/* <img src='/images/projects/repo-deployed.svg' alt='deployment_link' className='w-6 md:w-8' /> */}
                <RepoDeployed className='w-6 md:w-8' />
              </a>
            }
          </div>
        </div>
        <div className='flex justify-between w-full mt-2 md:mt-4'>
          <div className='flex bg-white dark:bg-indigo gap-2 md:gap-4 p-1 md:py-2 rounded-lg md:px-3'>
            {stacks.map(({logo_path_light, logo_path_dark}, i) => <img key={i} src={mounted && currentTheme === 'dark' ? logo_path_dark : logo_path_light} alt='stack_logo' className='w-6 md:w-8' />)}
          </div>
          <div className='flex sm:hidden gap-2 min-w-max items-center'>
            <a href={github_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
              <img src='/images/projects/repo-github.svg' alt='github_link' className='w-6 md:w-8' />
            </a>
            {
              deployed_link && 
              <a href={deployed_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
                <img src='/images/projects/repo-deployed.svg' alt='deployment_link' className='w-6 md:w-8' />
              </a>
            }
          </div>
        </div>
      </div>
    </article>
  )
}

export default RepoCard
