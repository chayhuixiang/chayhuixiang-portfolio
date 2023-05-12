import {
  fetchAchievements,
  fetchCompanies,
  fetchWorkStacks,
  fetchSkills,
  fetchProjects,
} from "./data";
import fs from "fs";

const main = async () => {
  const fetchedAchievements = await fetchAchievements();
  const fetchedCompanies = await fetchCompanies();
  const fetchedWorkStacks = await fetchWorkStacks();
  const fetchedSkills = await fetchSkills();
  const fetchedProjects = await fetchProjects();

  fs.writeFile(
    "data/achievement.json",
    JSON.stringify(fetchedAchievements),
    (err) => console.log(err)
  );
  fs.writeFile("data/company.json", JSON.stringify(fetchedCompanies), (err) => {
    if (err) console.log(err);
  });
  fs.writeFile("data/stack.json", JSON.stringify(fetchedWorkStacks), (err) => {
    if (err) console.log(err);
  });
  fs.writeFile("data/skill.json", JSON.stringify(fetchedSkills), (err) => {
    if (err) console.log(err);
  });
  fs.writeFile("data/project.json", JSON.stringify(fetchedProjects), (err) => {
    if (err) console.log(err);
  });

  console.log("Successfully wrote data.");
};

main();
