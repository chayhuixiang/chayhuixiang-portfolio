'use client'

import React from 'react'
import Button from './components/Button'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const ButtonGroup = () => {
  return (
    <div className='flex sm:gap-5 gap-0'>
      <Link href='/contact'>
        <Button onClick={() => console.log("Let's talk!")} type='solid' colour='purple' className='gap-4 shadow-lg'>
          <CodeBracketIcon className='w-6 h-6' />
          <p>Let's Talk!</p>
        </Button>
      </Link>
      <Link href='/experience'>
        <Button onClick={() => console.log('find out more')} type='no' colour='blue-dark'>
          Find out more!
        </Button>
      </Link>
    </div>
  )
}

export default ButtonGroup
