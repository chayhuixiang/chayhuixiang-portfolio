import React from 'react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'

type Props = {
  message: string
}

const Error = ({message}: Props) => {
  return (
    <>
      <ExclamationTriangleIcon className='w-5 h-5 stroke-2' />
      <p className='font-bold m-auto text-sm sm:text-base'>{message}</p>
    </>
  )
}

export default Error
