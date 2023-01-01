import React from 'react'
import StackGroup from './StackGroup'
import CompanyGroup from './CompanyGroup'
import { prisma } from '../../prisma/prisma'

const Experience = async () => {
  const sortedCompanies = await fetchCompanies();
  const sortedWorkStack = await fetchWorkStacks();
  return (
    <main className='w-full bg-white dark:bg-indigo md:bg-[url("/images/experience/experience-background-md.svg")] dark:md:bg-[url("/images/experience/experience-background-dark-md.svg")] lg:bg-[url("/images/experience/experience-background-lg.svg")] dark:lg:bg-[url("/images/experience/experience-background-dark-lg.svg")] bg-no-repeat md:bg-[right_top_30rem] lg:bg-[right_center]'>
      <div className='w-full max-w-7xl px-4 sm:px-[3rem] lg:pl-[7.5rem] lg:pr-32 py-[3.875rem] md:py-28 m-auto'>
        <div className='flex flex-col items-center sm:items-start sm:flex-row gap-6 sm:gap-8 justify-between relative'>
          <h1 className='text-center text-4xl sm:text-[2.5rem] sm:leading-snug sm:text-left z-10'>Work <br className='hidden sm:block' />Experience</h1>
          <div className='w-[6.25rem] h-5 opacity-20 absolute bg-purple dark:bg-purple-light top-[5.25rem] left-32 hidden sm:block'/>
          <p className='w-full text-sm sm:text-base max-w-[36.875rem]'>I’ve had the privilege of experiencing the workplace culture in <a href='https://www.switcheo.com/' rel='noopener noreferrer' target='_blank' className='font-bold hover:underline'>startups</a>, a <a href='https://www.3logytech.com/' rel='noopener noreferrer' target='_blank' className='font-bold hover:underline'>small & medium enterprise</a>, and a <a href='https://tezos.com/' rel='noopener noreferrer' target='_blank' className='font-bold hover:underline'>mature corporation</a>. These experiences have had a massive impact on my soft skills, in assimilating into different cultures, and my hard skills, in picking up various technologies and tools along the way. </p>
        </div>
        <div className='my-11 sm:mt-24 sm:mb-40 md:mb-96 lg:mb-[36rem]'>
          <StackGroup sortedWorkStack={sortedWorkStack} />
        </div>
        <CompanyGroup sortedCompanies={sortedCompanies} />
      </div>
    </main>
  )
}

const fetchCompanies = async () => {
  const fetchedCompanies = await prisma.company.findMany({
    orderBy: {
      start_date: 'asc'
    },
    include: {
      stacks: {
        select: {
          logo_path_dark: true,
          logo_path_light: true
        }
      }
    }
  });

  return fetchedCompanies.map(e => ({ ...e, start_date: e.start_date.toISOString(), end_date: e.end_date === null ? null : e.end_date.toISOString() }));
}

const fetchWorkStacks = async () => {
  const fetchedStacks = await prisma.stack.findMany({
    where: {
      skill_work_order: {
        gt: 0
      }
    },
    orderBy: {
      skill_work_order: 'asc'
    }
  });
  return fetchedStacks
}

export default Experience
