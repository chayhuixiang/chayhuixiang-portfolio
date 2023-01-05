import { gql } from "graphql-request"

export const GET_SKILLS = gql`
  query GetSkills {
    skills {
      display_order
      logo_path
      name
      stacks {
        name
      }
    }
  }
`

export const GET_WORK_STACKS = gql`
  query GetWorkStacks {
    stacks(work: true) {
      colour
      logo_path_dark
      logo_path_light
      name,
      stack_work_order
    }
  }
`

export const GET_COMPANIES = gql`
  query GetCompanies {
    companies {
      name
      position
      description
      link
      end_date
      start_date
      logo_path_dark
      logo_path_light
      stacks {
        stack {
          logo_path_dark
          logo_path_light
        }
      }
    }
  }
`

export const GET_PROJECTS = gql`
  query GetProjects {
    projects {
      type
      repo
      owner
      name
      logo_path
      featured
      description
      deployed_link
      cover_path
      colour
      stacks {
        stack {
          logo_path_dark
          logo_path_light
        }
      }
    }
  }
`

export const GET_ACHIEVEMENTS = gql`
  query GetAchievements {
    achievements {
      cover_path_desktop
      cover_path_mobile
      description
      end_date
      id
      link
      logo_path
      name
      position
      start_date
      year
    }
  }
`
