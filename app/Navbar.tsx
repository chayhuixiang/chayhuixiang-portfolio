'use client'

import React from 'react'
import Button from './components/Button'
import { ArrowDownTrayIcon, SunIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

const Navbar: React.FC = () => {
  return (
    <nav className='shadow-lg'>
      <div className='w-full m-full flex justify-between max-w-7xl py-8 px-[7.5rem] m-auto'>
        <Link href='/' className='flex gap-5'>
          <Image src='/images/about/avatar.png' alt='avatar' height='48' width='48' />
          <div className="flex flex-col">
            <h3 className="font-bold">Hui Xiang</h3>
            <p className="text-xs text-zinc font-secondary leading-[0.813rem]">Student</p>
          </div>
        </Link>
        <div className='absolute flex gap-10 m-auto w-max left-0 right-0 h-12 items-center justify-center text-zinc font-semibold'>
          <Link href='/experience' className='hover:text-gunmetal'>Experience</Link>
          <Link href='/projects' className='hover:text-gunmetal'>Projects</Link>
          <Link href='/achievements' className='hover:text-gunmetal'>Achievements</Link>
          <Link href='/contact' className='hover:text-gunmetal'>Contact</Link>
        </div>
        <div className='flex gap-3'>
          <Button onClick={() => console.log('clicked')} type='outline' colour='blue-dark'>
            <SunIcon className='w-6 h-6' />
          </Button>
          <a href='https://drive.google.com/file/d/13K2IqjNpLheZ_HtbqIzcKw-FoA7mqYkN/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
            <Button onClick={() => console.log('clicked')} type='outline' colour='blue-dark' className='gap-3'>
              <ArrowDownTrayIcon className='w-6 h-6' />
              <p className='font-semibold'>Resume</p>
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
