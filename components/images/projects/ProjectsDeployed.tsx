import React from 'react'

type Props = {
  className?: string
}

const ProjectsDeployed = ({className}: Props) => {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_29_852)">
      <path className='dark:fill-purple-light' fillRule="evenodd" clipRule="evenodd" d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM23.4142 14.5858L17.4142 8.58579C16.6332 7.80474 15.3668 7.80474 14.5858 8.58579C13.8047 9.36683 13.8047 10.6332 14.5858 11.4142L17.1716 14L10 14C8.89543 14 8 14.8954 8 16C8 17.1046 8.89543 18 10 18H17.1716L14.5858 20.5858C13.8047 21.3668 13.8047 22.6332 14.5858 23.4142C15.3668 24.1953 16.6332 24.1953 17.4142 23.4142L23.4142 17.4142C24.1953 16.6332 24.1953 15.3668 23.4142 14.5858Z" fill="#8873EF"/>
      </g>
      <defs>
      <clipPath id="clip0_29_852">
      <rect width="32" height="32" fill="white"/>
      </clipPath>
      </defs>
    </svg>
  )
}

export default ProjectsDeployed
