import { Skill } from '../data/schema'
import { fetchedSkills } from '../data/skill'
import ButtonGroup from './ButtonGroup'
import Avatar from './components/images/about/Avatar'
import SkillCard from './components/SkillCard'
import ImageGroup from './ImageGroup'

const About = () => {
  const sortedSkills = fetchedSkills.sort((a, b) => a.display_order - b.display_order);
  return (
    <main className='relative'>
      {/* abstract background */}
      <section className='w-full h-full absolute bg-[url("/images/about/about-background.svg")] dark:bg-[url("/images/about/about-background-dark.svg")] bg-no-repeat bg-[right_top] overflow-visible pointer-events-none lg:block hidden' />
      {/* top half */}
      <section className='bg-white dark:bg-indigo w-full'>
        <div className='w-full max-w-7xl pt-9 px-4 sm:px-[3rem] lg:pl-[7.5rem] lg:pr-20 pb-10 sm:pb-16 m-auto'>
          <div className='flex justify-between items-center'>
            <div className='flex flex-col gap-7 sm:gap-9 relative'>
              <div className='flex md:gap-10 sm:justify-between md:justify-start'>
                <div className='flex flex-col sm:gap-6 gap-5 items-center sm:items-start m-auto sm:m-0'>
                  <h4 className='font-secondary text-base leading-tight sm:leading-normal sm:text-xl'>Hi everyone,</h4>
                  <div>
                    <h1 className='text-3xl sm:text-4xl'>I’m Hui Xiang.</h1>
                    <h1 className='text-3xl sm:text-4xl mt-2 sm:mt-0'>I code & I build!</h1>
                  </div>
                  <ButtonGroup />
                </div>
                <Avatar className='relative hidden sm:block lg:hidden flex-shrink w-48 h-48' />
                {/* <Avatar className='relative hidden sm:block lg:hidden flex-shrink' width={192} height={192} /> */}
              </div>
              <p className='text-center sm:text-left'>
                I’m a Year 2 Renaissance Engineering Programme Scholar specialising in the field of Computer Science. Currently, I am focused on data analytics in sports with machine learning at <a href='https://www.fisher8.capital/' rel='noopener noreferrer' target='_blank' className='font-bold hover:underline'>Fisher8 Capital</a>, and building full-stack projects on the side.
              </p>
            </div>
            {/* <Avatar className='relative hidden lg:block' width={421} height={421} /> */}
            <Avatar className='relative hidden lg:block w-[26.313rem] h-[26.313rem]' />
          </div>
          <div className='lg:mt-32 mt-12 w-full bg-red h-60 sm:h-96 relative'>
            <ImageGroup />
          </div>
        </div>
      </section>
      {/* bottom half */}
      <section className='bg-zinc-100 w-full dark:bg-purple-dark'>
        <div className='w-full max-w-7xl py-5 sm:pt-16 m-auto sm:pb-20 flex flex-col items-center px-4 sm:px-[3rem]'>
          <h1 className='text-center text-[1.75rem] sm:text-[2.5rem] leading-tight sm:leading-normal'>How I can contribute</h1>
          <p className='mt-4 sm:mt-9 text-center w-full max-w-[39.1rem]'><span className='hidden sm:inline-block'>My years of tinkering in science, research and programming have deeply fuelled my passion for software development and computer science (CS).</span> Here is my software skillset, and some of the technologies that I have worked with.</p>
          <div className='mt-4 sm:mt-14 max-w-[49.5rem] flex flex-col gap-4 sm:gap-12 w-full'>
            {sortedSkills.map(({name, logo_path, display_order, stack}: Skill) => 
              <SkillCard key={display_order} name={name} logo_path={logo_path} stack={stack} />
            )}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
