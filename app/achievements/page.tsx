import React from "react";
import AchievementsBackground from "../../components/images/achievements/AchievementsBackground";
import { GET_ACHIEVEMENTS } from "../../graphql/queries";
import { AchievementResponse } from "../../graphql/schema";
import { graphqlClient } from "../../lib/graphqlClient";
import AchievementsDisplay from "./AchievementsDisplay";
// import { fetchedAchievements } from '../../data/achievement'

const Achievements = async () => {
  const fetchedAchievements = await fetchAchievements();
  return (
    <main className="min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden">
      <div className="w-full max-w-7xl py-[3.875rem] px-4 sm:px-[3rem] lg:px-[7.5rem] md:pt-16 m-auto relative">
        <AchievementsDisplay fetchedAchievements={fetchedAchievements} />
        <AchievementsBackground className="hidden md:block absolute top-96 pointer-events-none" />
      </div>
    </main>
  );
};

const fetchAchievements = async () => {
  const fetchedAchievements: { achievements: AchievementResponse } =
    await graphqlClient.request(GET_ACHIEVEMENTS);
  return fetchedAchievements.achievements;
};

export default Achievements;
