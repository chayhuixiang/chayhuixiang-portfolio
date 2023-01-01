'use client'

import React from 'react'

type Props = {
  onClick: () => void,
  children: React.ReactNode,
  className?: string,
  type: "solid" | "outline" | "no",
  colour: "purple" | "blue-dark"
}

const Button = ({ onClick, children, className, type, colour }: Props) => {
  let colourStyle = '';
  if (type === 'solid') {
    if (colour === 'purple') {
      colourStyle += 'bg-purple dark:bg-purple-light text-white hover:bg-purple/90 dark:hover:bg-purple-light/90 dark:text-indigo';
    } else {
      colourStyle += 'bg-blue-dark text-white dark:bg-zinc-300 dark:text-indigo';
    }
  } else if (type === 'outline') {
    colourStyle = 'border-2 '
    if (colour === 'purple') {
      colourStyle += 'border-purple text-purple hover:bg-purple/5';
    } else {
      colourStyle += 'border-blue-dark text-blue-dark hover:bg-blue-dark/10 dark:border-zinc-300 dark:text-zinc-300 hover:bg-zinc-300/10';
    }
  } else {    
    colourStyle = 'bg-transparent text-blue-dark hover:underline dark:text-zinc-300';
  }

  return (
    <button className={`h-12 flex px-4 items-center rounded-lg transition-all duration-200 ${className} ${colourStyle}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
