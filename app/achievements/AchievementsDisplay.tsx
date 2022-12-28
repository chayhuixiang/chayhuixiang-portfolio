'use client'

import React, { useState, useRef, useEffect } from 'react'
import { fetchedAchievements } from '../../data/achievement'
import { Achievement } from '../../data/schema'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import Portal from '../components/Portal'
import { XMarkIcon } from '@heroicons/react/24/outline'
import External from '../components/images/achievements/External'

type Props = {}

const Achievements = (props: Props) => {
  const [selectedAchievement, setSelectedAchievement] = useState<string>('')
  const filteredAchievement = fetchedAchievements.find((achievement) => achievement.id === selectedAchievement);

  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && ref.current.contains(e.target as Node) && !modalRef.current?.contains(e.target as Node)) {
        setSelectedAchievement('');
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },[ref]);

  return (
    <div className='flex flex-col md:flex-row justify-between'>
      <div className='relative'>
        <h1 className='text-center md:text-left'>Achievements</h1>
        <div className='hidden md:block w-[6.25rem] h-5 opacity-20 absolute bg-purple dark:bg-purple-light top-[1.75rem] left-[12rem]'/>
        <p className='mt-2 mb-7 hidden md:block'>Here is a list of my notable achievements.</p>
        <div className='flex flex-col flex-1 gap-3 md:gap-7 items-center md:items-start mt-3 md:mt-0'>
        {fetchedAchievements.map(({ name, id, position, year, logo_path }: Achievement) => 
          <div key={id} className='w-full'>
            <h3 className={`hidden md:block font-bold cursor-pointer hover:text-gunmetal dark:hover:text-white ${id === selectedAchievement ? 'text-gunmetal dark:text-white' : 'text-blue-dark dark:text-zinc-300'}`} onClick={() => setSelectedAchievement(id)}>
              {position}, {name} {year}
            </h3>
            <div className='bg-zinc-100 dark:bg-purple-dark p-3 md:hidden w-full rounded-xl flex gap-3 items-center whitespace-nowrap' onClick={() => setSelectedAchievement(id)}>
              <div className='rounded-full bg-white dark:bg-indigo shadow-around-lg flex items-center justify-center aspect-square w-8 overflow-hidden'>
                <img src={logo_path} alt='achievement_logo' />
              </div>
              <p className='font-bold overflow-hidden text-ellipsis'>{position}, {name} {year}</p>
            </div>
          </div>
        )}
        </div>
        <Portal>
          <div className={`flex items-center justify-center px-4 w-screen h-[100%] bg-white dark:bg-indigo fixed left-0 top-0 z-40 transition-all ${selectedAchievement ? 'visible bg-opacity-80 opacity-100' : 'invisible bg-opacity-0 opacity-0'} md:invisible md:opacity-0`} ref={ref}>
            {filteredAchievement && <div className='bg-white dark:bg-purple-dark shadow-around-lg w-[min(25rem,100%)] px-4 py-3 rounded-xl flex flex-col items-center gap-4' ref={modalRef}>
              <div className='flex justify-between h-8 w-full items-center'>
                <XMarkIcon className='text-gunmetal dark:text-white w-6 h-6 stroke-2' onClick={() => setSelectedAchievement('')}/>
                <p className='font-bold'>{filteredAchievement.name} {filteredAchievement.year}</p>
                <a href={filteredAchievement.link} rel='noopener noreferrer' target='_blank'>
                  {/* <img src='/images/achievements/external.svg' className='p-1' /> */}
                  <External />
                </a>
              </div>
              <div className='flex items-center gap-[0.375rem]'>
                <div className='rounded-full bg-white shadow-around-lg flex items-center justify-center aspect-square w-9'>
                  <img src={filteredAchievement.logo_path} alt='achievement_logo' />
                </div>
                <div className='flex flex-col'>
                  <p className='font-bold'>{filteredAchievement.position}</p>
                  <p className='text-xs font-secondary'>{new Date(filteredAchievement.start_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})} – {new Date(filteredAchievement.end_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})}</p>
                </div>
              </div>
              <p className='text-xs text-left mx-3'>{filteredAchievement.description.split('*').map((descriptionChunk, i) => ( i % 2 ? <strong key={i}>{descriptionChunk}</strong> : <span key={i}>{descriptionChunk}</span>))}</p>
              <img src={filteredAchievement.cover_path_mobile} alt='achievement_cover' className='shadow-lg rounded-xl' />
            </div>}
          </div>
        </Portal>
      </div>
      <div className='hidden md:block w-[33.313rem]'>
        {filteredAchievement && <motion.div className='flex flex-col px-7 gap-8 transition-all duration-200' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <img src={filteredAchievement.cover_path_desktop} alt='achievement_cover' className='shadow-lg rounded-xl' />
            <div className='flex flex-col px-8 gap-8 items-start'>
              <div className='flex items-center gap-5'>
                <div className='rounded-full bg-white dark:bg-purple-dark shadow-around-lg flex items-center justify-center aspect-square w-12'>
                  <img src={filteredAchievement.logo_path} alt='achievement_logo' />
                </div>
                <div>
                  <h3 className='font-bold'>{filteredAchievement.position}</h3>
                  <p className='text-sm font-secondary'>{filteredAchievement.name} | {new Date(filteredAchievement.start_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})} – {new Date(filteredAchievement.end_date).toLocaleDateString('en-GB', { month: 'short', year: 'numeric'})}</p>
                </div>
              </div>
              <p className='text-xs'>{filteredAchievement.description.split('*').map((descriptionChunk, i) => ( i % 2 ? <strong key={i}>{descriptionChunk}</strong> : <span key={i}>{descriptionChunk}</span>))}</p>
              <a href={filteredAchievement.link} target='_blank' rel='noopener noreferrer' className='self-end'>
                <Button onClick={() => {}} type='solid' colour='purple' className='h-[2.625rem]'>
                  <p>Find Out More!</p>
                </Button>
              </a>
            </div>
          </motion.div>
        }
      </div>
    </div>
  )
}

export default Achievements
