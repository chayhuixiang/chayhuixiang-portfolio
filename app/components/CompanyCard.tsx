'use client'

import React, { useRef } from 'react'
import useMounted from '../../hooks/useMounted'
import { useTheme } from 'next-themes'

type Props = {
  name: string,
  position: string,
  logo_path_light: string,
  logo_path_dark: string,
  start_date: string,
  end_date: string | null,
  description: string[],
  logo_path_stack: string[],
  link: string,
  focus: boolean
}

const CompanyCard = ({name, position, logo_path_light, logo_path_dark, start_date, end_date, description, logo_path_stack, link, focus}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const mounted = useMounted();
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <article className={`${focus ? '' : 'opacity-30'} transition-opacity duration-200 flex flex-col items-center md:items-start md:flex-row min-w-full sm:min-w-[calc(50%-0.5rem)] md:min-w-full relative gap-4 md:gap-[16%] snap-center`}>
      <div className='w-full md:h-[17.5rem] md:w-auto md:flex-1 md:pl-4 lg:pl-7 bg-zinc-100 dark:bg-purple-dark flex flex-col items-center md:items-start py-4 md:justify-center md:pr-[6.5rem] xl:pr-[11.0rem] gap-3 rounded-xl'>
        <h3 className='font-bold text-center mx-4 md:mx-0 md:text-left h-[4.125rem] md:h-auto'>{position}</h3>
        <a href={link} rel='noreferrer noopener' target='_blank' className='hover:underline'><h4>{name}</h4></a>
      </div>
      <div className='md:absolute bg-white dark:bg-black flex items-center justify-center w-56 md:w-[10.625rem] lg:w-[12.5rem] xl:w-[19.35rem] h-[3.75rem] md:h-40 top-[3.75rem] left-[38.76%] xl:left-[15.325rem] md:-translate-x-1/2 xl:-translate-x-0 rounded-xl'>
        <img src={mounted && currentTheme === 'dark' ? logo_path_dark : logo_path_light} alt='company_logo' className='lg:w-44 md:w-40 max-h-[3.5rem] md:max-h-0' />
      </div>
      <div className='md:w-[45.16%] flex flex-col gap-4 md:pt-7'>
        <h4 className='font-secondary self-center'>
          {new Date(start_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})} – {end_date === null ? 'Present' : new Date(end_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})}
        </h4>
        <div className='flex gap-3 self-center'>
          {logo_path_stack.map((stack, i) => <img src={stack} key={i} alt='stack' width={40} />)}
        </div>
        <ul className='text-xs'>
          {description.map((text, i) => <li key={i}>
            <p className='text-xs before:content-["‣"]'> {text}</p>
            <br />
          </li>)}
        </ul>
      </div>
    </article>
  )
}

export default CompanyCard
