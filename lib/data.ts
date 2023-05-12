import {
  GET_ACHIEVEMENTS,
  GET_COMPANIES,
  GET_WORK_STACKS,
  GET_SKILLS,
  GET_PROJECTS,
} from "../graphql/queries";
import {
  AchievementResponse,
  CompanyResponse,
  SkillResponse,
  ProjectResponse,
} from "../graphql/schema";
import { graphqlClient } from "./graphqlClient";
import { Stack } from "@prisma/client";

export const fetchAchievements = async () => {
  const fetchedAchievements: { achievements: AchievementResponse } =
    await graphqlClient.request(GET_ACHIEVEMENTS);
  return fetchedAchievements.achievements;
};

export const fetchCompanies = async () => {
  const fetchedCompanies: { companies: CompanyResponse } =
    await graphqlClient.request(GET_COMPANIES);
  return fetchedCompanies.companies;
};

export const fetchWorkStacks = async () => {
  const fetchedStacks: { stacks: Stack[] } = await graphqlClient.request(
    GET_WORK_STACKS
  );
  return fetchedStacks.stacks;
};

export const fetchSkills = async () => {
  const fetchedSkills: { skills: SkillResponse } = await graphqlClient.request(
    GET_SKILLS
  );
  return fetchedSkills.skills;
};

export const fetchProjects = async () => {
  const fetchedProjects: { projects: ProjectResponse[] } =
    await graphqlClient.request(GET_PROJECTS);
  return fetchedProjects.projects;
};
