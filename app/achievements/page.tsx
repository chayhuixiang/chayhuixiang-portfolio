import React from 'react'
import AchievementsBackground from '../../components/images/achievements/AchievementsBackground'
import { prisma } from '../../prisma/prisma'
import AchievementsDisplay from './AchievementsDisplay'

const Achievements = async () => {
  const fetchedAchievements = await fetchAchievements();
  return (
    <main className='min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden'>
      <div className='w-full max-w-7xl py-[3.875rem] px-4 sm:px-[3rem] lg:px-[7.5rem] md:pt-16 m-auto relative'>
        <AchievementsDisplay fetchedAchievements={fetchedAchievements} />
        <AchievementsBackground className='hidden md:block absolute top-96 pointer-events-none' />
        {/* <img src='/images/achievements/achievements-cover.svg' alt='cover' /> */}
      </div>
    </main>
  )
}

const fetchAchievements = async () => {
  const fetchedAchievements = await prisma.achievement.findMany({
    orderBy: {
      start_date: 'asc'
    }
  });

  return fetchedAchievements.map(e => ({...e, end_date: e.end_date === null ? null : e.end_date.toISOString(), start_date: e.start_date.toISOString() }));
}

export default Achievements
