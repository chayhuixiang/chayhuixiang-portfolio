'use client';

import React, { useRef, useState } from 'react'
import Button from '../../components/Button'
import { EnvelopeOpenIcon } from '@heroicons/react/24/outline';
import Linkedin from '../../components/images/footer/Linkedin';
import Github from '../../components/images/footer/Github';
import emailjs from '@emailjs/browser';
import Spinner from '../../components/images/contact/Spinner';
import Done from '../../components/images/contact/Done';

type status = 'sending' | 'error' | 'sent' | 'idle'

const Contact = () => {
  const [name, setName] = useState<string>('');
  const [theme, setTheme] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [status, setStatus] = useState<status>('idle');

  const ref = useRef<HTMLFormElement>(null);
  
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setTheme("");
    setMessage("");
    
    setStatus('sending');

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    try {
      if (serviceId && templateId && publicKey && ref.current) {
        await emailjs.sendForm(serviceId, templateId, ref.current, publicKey);
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }
  return (
    <main className='min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden md:bg-[url("/images/contact/contact-cover.svg")] bg-no-repeat bg-[left_-15rem_top_-7rem] flex flex-col justify-center items-center py-6 px-4 sm:px-[3rem] lg:px-[7.5rem]'>
      <h1 className='text-4xl sm:text-[2.5rem]'>Contact</h1>
      <p className='md:mt-3 mb-6 md:mb-[1.875rem] text-sm sm:text-base'><span className='hidden sm:inline-block'>I’m happy</span><span className='sm:hidden'>Happy</span> to hear from you! Let’s get in touch!</p>
      <form className='grid grid-cols-2 gap-3 max-w-[20.75rem] w-full text-purple font-bold dark:text-purple-light' ref={ref} onSubmit={submitHandler}>
        <input type='text' className='bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='text_Name' placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
        <input type='email' className='bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='text_Email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type='text' className='col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none dark:placeholder-purple-light' name='text_Theme' placeholder='Subject' value={theme} onChange={e => setTheme(e.target.value)} />
        <textarea rows={5} className='col-span-2 bg-zinc-100 dark:bg-purple-dark rounded-lg md:p-[0.625rem] p-2 text-sm md:text-base outline-none resize-none dark:placeholder-purple-light' name='text_Message' placeholder='Message' value={message} onChange={e => setMessage(e.target.value)} />
        <Button className='shadow-lg h-[2.625rem] col-span-2 justify-center' type='solid' colour='purple' onClick={() => ref.current?.dispatchEvent(new Event('submit'))}>
          {
            status === 'idle' ? <p className='font-bold m-auto text-sm sm:text-base'>Submit</p> :
            status === 'sending' ? <Spinner /> :
            <Done />
          }
        </Button>
      </form>
      <div className='mt-4 md:mt-6 flex gap-8'>
        <a href='https://www.linkedin.com/in/hui-xiang/' rel='noopener noreferrer' target='_blank'>
          {/* <img src={`/images/footer/linkedin${ linkedinHovered ? '-hover' : '' }.svg`} alt='linkedin' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Linkedin />
        </a>
        <a href='https://github.com/chayhuixiang/' rel='noopener noreferrer' target='_blank'>
          {/* <img src={`/images/footer/github${ githubHovered ? '-hover' : '' }.svg`} alt='github' className='h-6 w-6 md:h-8 md:w-8' /> */}
          <Github />
        </a>
        <a href='mailto:chayhuixiang@gmail.com' rel='noopener noreferrer' target='_blank' className='rounded-full h-8 w-8 flex items-center justify-center bg-zinc hover:bg-zinc/90 dark:bg-zinc-200 dark:hover:bg-zinc-200/90'>
          <EnvelopeOpenIcon className='w-5 h-5 text-white stroke-2 dark:text-indigo'/>
        </a>
      </div>
    </main>
  )
}

export default Contact
