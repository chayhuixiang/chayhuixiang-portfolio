import React, { useEffect, useRef } from 'react'
import Portal from '../../components/Portal'
import { motion, useAnimationControls, useMotionValue } from 'framer-motion'
import { CheckIcon } from '@heroicons/react/24/outline'

type Props = {
  showMenu: boolean,
  closeMenu: () => void,
  buttons: {
    name: string;
    onClick: () => void;
  }[],
  selectedOption: string
}

const Menu = ({showMenu, buttons, selectedOption, closeMenu}: Props) => {
  const y = useMotionValue(0);
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        closeMenu();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[ref]);

  useEffect(() => {
    if (showMenu) {
      controls.start({ y: 0, transition: { duration: 0.3, ease: 'easeInOut' } });
    } else {
      controls.start({ y: '100%', transition: { duration: 0.3, ease: 'easeInOut' } });
    }
  },[showMenu]);

  const dragEndHandler = () => {
    const yVal = y.get();
    if (yVal <= 100) {
      controls.start({ y: 0 });
    } else {
      closeMenu();
    }
  }

  return (
    <Portal>
      <motion.div
        drag='y'
        dragConstraints={{
          top: 0,
          bottom: 208
        }} 
        dragElastic={0}
        onDragEnd={dragEndHandler}
        initial={{ y: '100%' }} 
        animate={controls} 
        style={{ y }} 
        className={`w-[min(100vw,400px)] bg-white dark:bg-indigo fixed left-0 right-0 mx-auto bottom-0 h-52 z-50 shadow-top-lg rounded-t-xl flex flex-col py-2 px-4 items-center ${showMenu ? 'pointer-events-auto' : 'pointer-events-none'}`}
        ref={ref}
      >
        <div className='bg-zinc dark:bg-zinc-200 w-[40px] h-[4px] mb-2 rounded-full' />
        <div className='flex flex-col justify-evenly w-full h-full'>
          {buttons.map((buttonObj, i) => <button key={i} className='flex items-center justify-between w-full' onClick={() => {closeMenu(); buttonObj.onClick()}}>
            <p className='font-semibold'>{buttonObj.name}</p>
            {selectedOption === buttonObj.name && <CheckIcon className='w-5 h-5 stroke-2' />}
          </button>)}
        </div>
      </motion.div>
      <div className={`w-screen h-[100%] bg-white dark:bg-indigo fixed left-0 top-0 z-40 transition-opacity ${showMenu ? 'visible opacity-80' : 'invisible opacity-0'}`} />
    </Portal>
  )
}

export default Menu
