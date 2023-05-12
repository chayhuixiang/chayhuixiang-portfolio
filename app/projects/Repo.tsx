'use client'
import React, { useState } from 'react'
// import { Project } from '../../data/schema'
import { Project } from '@prisma/client'
import Button from '../../components/Button'
import RepoCard from '../../components/RepoCard'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Menu from './Menu'

type Props = {
  projects: (Project & {
    pushedAt: string
    stacks: {
      stack: {
        logo_path_light: string;
        logo_path_dark: string;
      }
    }[]
  })[]
}

type Options = 'All' | 'DSAI' | 'Web/App Dev.' | 'Cybersecurity' | 'Misc.'

const Repo = ({projects}: Props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const [selectedOption, setSelectedOption] = useState<Options>('All');
  const displayedProjects = projects.filter((project) => {
    if (selectedOption === 'DSAI') {
      return project.type === 'dsai';
    } else if (selectedOption === 'Web/App Dev.') {
      return project.type === 'webdev' || project.type === 'appdev' ;
    } else if (selectedOption === 'Cybersecurity') {
      return project.type === 'cybersecurity'
    } else if (selectedOption === 'Misc.') {
      return project.type === 'misc'
    } else return project;
  }).slice(0, 5);

  const buttons = [
    {
      name: 'All',
      onClick: () => setSelectedOption('All')
    },
    {
      name: 'DSAI',
      onClick: () => setSelectedOption('DSAI')
    },
    {
      name: 'Web/App Dev.',
      onClick: () => setSelectedOption('Web/App Dev.')
    },
    {
      name: 'Cybersecurity',
      onClick: () => setSelectedOption('Cybersecurity')
    },
    {
      name: 'Misc.',
      onClick: () => setSelectedOption('Misc.')
    },
  ]

  return (
    <div className='w-full max-w-7xl px-4 sm:px-[3rem] lg:px-[7.5rem] py-6 sm:py-20 m-auto flex flex-col items-center'>
      <div className='w-full justify-between flex flex-col sm:flex-row items-center sm:items-start flex-wrap gap-3 sm:gap-4'>
        <h1 className='text-[1.75rem] sm:text-[2.5rem]'>Other Repositories</h1>
        <div className='flex gap-4 w-full md:w-auto'>
          {buttons.map((buttonObj, i) => 
            <Button key={i} onClick={buttonObj.onClick} colour='blue-dark' type={buttonObj.name === selectedOption ? 'solid' : 'outline'} className='hidden md:flex'>
              <h4 className='font-semibold'>{buttonObj.name}</h4>
            </Button>
          )}
          <Button onClick={() => setShowMenu(true)} colour='blue-dark' type='outline' className='mx-auto sm:mx-0 md:hidden w-[min(100%,400px)] justify-between'>
            <h4 className='font-semibold'>{selectedOption}</h4>
            <ChevronDownIcon className='w-6 h-6' />
          </Button>
        </div>
      </div>
      <div className='mt-4 sm:mt-8 md:mt-20 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 mb-3 sm:mb-10 w-[min(100%,400px)] sm:w-full'>
        {displayedProjects.map(({name, colour, cover_path, deployed_link, repo, owner, stacks }, i) => 
          <RepoCard key={i} variant={i === 0 && displayedProjects.length % 2 === 1 ? 'large' : 'small'} name={name} colour={colour} cover_path={cover_path} deployed_link={deployed_link} github_link={`https://github.com/${owner}/${repo}`} stacks={stacks} />)
        }
      </div>
      <a href='https://github.com/chayhuixiang' target='_blank' rel='noopener noreferrer'>
        <Button onClick={() => {}} colour='purple' type='solid' className='shadow-lg mx-auto'>
          <p>Find Out More!</p>
        </Button>
      </a>
      <Menu showMenu={showMenu} buttons={buttons} selectedOption={selectedOption} closeMenu={() => setShowMenu(false)} />
    </div>
  )
}

export default Repo
