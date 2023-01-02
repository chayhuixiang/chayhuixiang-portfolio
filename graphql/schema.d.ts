import { Skill } from "@prisma/client";

export type SkillResponse = (Skill & {
  stacks: {
      name: string;
  }[];
})

export type CompanyResponse = ({
  name: string;
  position: string;
  logo_path_light: string;
  logo_path_dark: string;
  start_date: string;
  end_date: string | null;
  description: string[];
  link: string;
} & {
  stacks: {
      logo_path_light: string;
      logo_path_dark: string;
  }[];
})

export type ProjectResponse = (Project & {
  stacks: {
      logo_path_light: string;
      logo_path_dark: string;
  }[];
})

export type AchievementResponse = {
  end_date: string | null;
  start_date: string;
  id: string;
  cover_path_desktop: string;
  cover_path_mobile: string;
  logo_path: string;
  year: number;
  position: string;
  name: string;
  description: string;
  link: string;
}