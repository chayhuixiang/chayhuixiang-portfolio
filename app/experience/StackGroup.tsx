import React from 'react'
import { Stack } from '../../data/schema';
import { fetchedWorkStack } from '../../data/stack'
import StackCard from '../components/StackCard'

const StackGroup = () => {
  const sortedWorkStack: Stack[] = fetchedWorkStack.sort((a, b) => a.skill_work_order - b.skill_work_order);
  return (
    <div className='grid xl:grid-cols-9 sm:grid-cols-5 grid-cols-3 gap-7'>
      {sortedWorkStack.map(({name, logo_path, colour, skill_work_order}: Stack) => 
        <StackCard name={name} logo_path={logo_path} colour={colour} key={skill_work_order} />)}
    </div>
  )
}

export default StackGroup
