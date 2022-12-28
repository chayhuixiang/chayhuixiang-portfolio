'use client'

import React from 'react'
import ProjectsDeployed from './images/projects/ProjectsDeployed'
import ProjectsGithub from './images/projects/ProjectsGithub'

type Props = {
  left: boolean,
  name: string,
  logo_path: string,
  github_link: string,
  deployed_link: string,
  description: string,
  logo_path_stack: string[]
}

const ProjectCard = ({left, name, logo_path, github_link, deployed_link, description, logo_path_stack}: Props) => {
  const parsedDescription = description.split('*');
  return (
    <article className={`w-full flex items-center flex-col rounded-xl p-4 sm:p-0 bg-zinc-100 sm:bg-transparent ${left ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
      <div className='w-full sm:w-[27.75rem] h-36 sm:h-[15.625rem] rounded-xl p-4 bg-white dark:bg-indigo flex items-center justify-center shadow-lg relative'>
        <img src={logo_path} alt='project_logo' className='h-20 sm:w-auto'/>
      </div>
      <div className={`w-full sm:w-[40.375rem] flex flex-col items-center ${!left ? 'sm:items-end sm:pr-8 sm:pl-[5.125rem]' : 'sm:items-start sm:pl-8 sm:pr-[5.125rem]'} pt-4 sm:py-7 gap-3 sm:gap-4 transition-all duration-200 bg-zinc-100 dark:bg-purple-dark sm:hover:shadow-around-lg ${!left ? 'sm:ml-[-3.125rem]' : 'sm:mr-[-3.125rem]'}`}>
        <h2 className='font-bold'>{name}</h2>
        <div className='flex gap-4'>
          {logo_path_stack.map((logo, i) => <img src={logo} alt='stack_logo' key={i} className='w-7 sm:w-8' />)}
        </div>
        <p className={`text-center ${!left ? 'sm:text-right' : 'sm:text-left'} text-xs md:text-base`}>{parsedDescription.map((descriptionChunk, i) => ( i % 2 ? <strong key={i}>{descriptionChunk}</strong> : <span key={i}>{descriptionChunk}</span>))}</p>
        <div className='rounded-lg bg-white dark:bg-indigo p-2 flex gap-4'>
          <a href={github_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
            {/* <img src='/images/projects/projects-github.svg' alt='github_repository_link' /> */}
            <ProjectsGithub />
          </a>
          <a href={deployed_link} rel='noopener noreferrer' target='_blank' className='hover:opacity-90'>
            {/* <img src='/images/projects/projects-deployed.svg' alt='deployment_link' /> */}
            <ProjectsDeployed />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard