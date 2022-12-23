import React from 'react'
import ButtonGroup from './ButtonGroup'

const About = () => {
  return (
    <main className='relative'>
      {/* abstract background */}
      <section className='w-full h-full absolute bg-[url("/images/about/about-background.png")] bg-no-repeat bg-[right_top] overflow-visible pointer-events-none' />
      {/* top half */}
      <section className='bg-white w-full'>
        <div className='w-full max-w-7xl pt-9 pl-[7.5rem] pr-20 pb-16 m-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-9'>
              <div className='flex flex-col gap-6'>
                <h4 className='font-secondary'>Hi everyone,</h4>
                <div>
                  <h1>I’m Hui Xiang.</h1>
                  <h1>I code & I build!</h1>
                </div>
                <ButtonGroup />
              </div>
              <p>
                I’m a Year 2 Renaissance Engineering Programme Scholar specialising in the field of Computer Science. Currently, I am focused on data analytics in sports with machine learning at <strong>Fisher8 Capital</strong>, and building full-stack projects on the side.
              </p>
            </div>
            <img src='/images/about/avatar.svg' alt='avatar' width='421' height='421' className='relative' />
          </div>
          <div className='mt-32 w-full bg-red h-96 relative'>
            <img src='/images/about/about-cover-1.svg' alt='cover-1' width='372' className='absolute border-4 border-gunmetal rounded-3xl -rotate-2' />
            <img src='/images/about/about-cover-3.svg' alt='cover-3' width='420' className='absolute border-4 border-gunmetal rounded-3xl -rotate-3 right-0 top-10' />
            <img src='/images/about/about-cover-2.svg' alt='cover-2' width='388' className='absolute border-4 border-gunmetal rounded-3xl rotate-6 left-80 top-10' />

          </div>
        </div>
      </section>
      {/* bottom half */}
      <section className='bg-zinc-100 w-full'>
        <div className='w-full max-w-7xl pt-16 m-auto'>
          <h1 className='text-center'>How I can contribute</h1>
        </div>
      </section>
    </main>
  )
}

export default About
