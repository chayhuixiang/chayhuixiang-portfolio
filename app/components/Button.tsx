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
      colourStyle += 'bg-purple text-white hover:bg-[#8873EFe0]';
    } else {
      colourStyle += 'bg-blue-dark text-white';
    }
  } else if (type === 'outline') {
    colourStyle = 'border border-2 '
    if (colour === 'purple') {
      colourStyle += 'border-purple text-purple hover:bg-[#8873EF10]';
    } else {
      colourStyle += 'border-blue-dark text-blue-dark hover:bg-[#3A506F10]';
    }
  } else {    
    colourStyle = 'bg-transparent text-blue-dark hover:underline';
  }

  return (
    <button className={`h-12 flex px-4 items-center rounded-lg transition-all duration-200 ${className} ${colourStyle}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
