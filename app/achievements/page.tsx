import React from "react";
import AchievementsBackground from "../../components/images/achievements/AchievementsBackground";
import AchievementsDisplay from "./AchievementsDisplay";
import jsonAchievements from "../../data/achievement.json";
import { fetchAchievements } from "../../lib/data";

const Achievements = async () => {
  const fetchedAchievements =
    process.env.NEXT_PUBLIC_DATASOURCE === "json"
      ? jsonAchievements
      : await fetchAchievements();
  return (
    <main className="min-h-screen md:min-h-0 md:h-screen bg-white dark:bg-indigo overflow-hidden">
      <div className="w-full max-w-7xl py-[3.875rem] px-4 sm:px-[3rem] lg:px-[7.5rem] md:pt-16 m-auto relative">
        <AchievementsDisplay fetchedAchievements={fetchedAchievements} />
        <AchievementsBackground className="hidden md:block absolute top-96 pointer-events-none" />
      </div>
    </main>
  );
};

export default Achievements;
