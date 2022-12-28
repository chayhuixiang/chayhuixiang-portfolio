'use client';

import React, { useRef, useState } from 'react'
import Button from '../components/Button'
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import Linkedin from '../components/images/footer/Linkedin';
import Github from '../components/images/footer/Github';

const Contact = () => {
  const [githubHovered, setGithubHovered] = useState<boolean>(false);
  const [linkedinHovered, setLinkedinHovered] = useState<boolean>(false);

  const ref = useRef<HTMLFormElement>(null);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitted');
  }
  return (
    <main className='min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden md:bg-[url("/images/contact/contact-cover.svg")] bg-no-repeat bg-[left_-15rem_top_-7rem] flex flex-col justify-center items-center py-6 px-4 sm:px-[3rem] lg:px-[7.5rem]'>
      <h1 className='text-4xl sm:text-[2.5rem]'>Contact</h1>
      <p className='md:mt-3 mb-6 md:mb-[1.875rem] text-sm sm:text-base'><span className='hidden sm:inline-block'>I’m happy</span><span className='sm:hidden'>Happy</span> to hear from you! Let’s get in touch!</p>
      <form className='grid grid-cols-2 gap-3 max-w-[20.75rem] w-full text-purple font-bold dark:text-purple-light' ref={ref} onSubmit={submitHandler}>
        <input type='text' className='bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='name' placeholder='Name' />
        <input type='email' className='bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='email' placeholder='Email' />
        <input type='text' className='col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='subject' placeholder='Subject' />
        <textarea rows={5} className='col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none resize-none dark:placeholder-purple-light' name='message' placeholder='Message' />
        <Button className='shadow-lg h-[2.625rem] col-span-2' type='solid' colour='purple' onClick={() => ref.current?.dispatchEvent(new Event('submit'))}>
          <p className='font-bold m-auto text-sm sm:text-base'>Submit</p>
        </Button>
      </form>
      <div className='mt-4 md:mt-6 flex gap-8'>
        <a href='https://www.linkedin.com/in/hui-xiang/' rel='noopener noreferrer' target='_blank' onMouseEnter={() => setLinkedinHovered(true)} onMouseLeave={() => setLinkedinHovered(false)}>
          {/* <img src={`/images/footer/linkedin${ linkedinHovered ? '-hover' : '' }.svg`} alt='linkedin' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Linkedin />
        </a>
        <a href='https://github.com/chayhuixiang/' rel='noopener noreferrer' target='_blank' onMouseEnter={() => setGithubHovered(true)} onMouseLeave={() => setGithubHovered(false)}>
          {/* <img src={`/images/footer/github${ githubHovered ? '-hover' : '' }.svg`} alt='github' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Github />
        </a>
        <a href='mailto:chayhuixiang@gmail.com' rel='noopener noreferrer' target='_blank' className='rounded-full h-6 w-6 md:h-8 md:w-8 flex items-center justify-center bg-zinc hover:bg-zinc/90 dark:bg-zinc-200 dark:hover:bg-zinc-200/90'>
          <EnvelopeOpenIcon className='md:w-5 md:h-5 w-4 h-4 text-white stroke-2 dark:text-indigo'/>
        </a>
      </div>
    </main>
  )
}

export default Contact
