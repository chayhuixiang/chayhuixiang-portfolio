'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

type Props = {
  'name': string,
  'logo_path': string,
  'colour': string,
}

const StackCard = ({name, logo_path, colour}: Props) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div 
      className='m-auto h-[5.5rem] w-[5.5rem] flex justify-center items-center flex-col gap-2 rounded-xl transition-all duration-200 cursor-default' 
      style={{backgroundColor: `${colour}${hovered ? '44' : '33'}`}} 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      <img src={logo_path} alt='stack_logo' />
      <p className='font-secondary text-xs'>{name}</p>
    </motion.div>
  )
}

export default StackCard
