export type Skill = {
  'name': string,
  'logo_path': string,
  'display_order': number,
  'stack': string[]
}

export type Stack = {
  'name': string,
  'logo_path': string,
  'colour': string,
  'skill_work_order': number
}

export type Company = {
  'name': string,
  'position': string,
  'logo_path_light': string,
  'logo_path_dark': string,
  'start_date': string,
  'end_date': string | null,
  'description': string[],
  'logo_path_stack': string[],
  'link': string
}

declare type Project_Type = 'webdev' | 'dsai' | 'cybersecurity' | 'misc'

export type Project = {
  'name': string,
  'featured': boolean, 
  'type': Project_Type,
  'logo_path': string,
  'cover_path': string,
  'colour': string,
  'deployed_link': string | null,
  'description': string,
  'logo_path_stack': string[],
  'repo': string,
  'owner': string,
  'pushedAt'?: string
}

export type Achievement = {
  'id': string,
  'cover_path_desktop': string,
  'cover_path_mobile': string
  'logo_path': string,
  'start_date': string,
  'end_date': string,
  'year': number,
  'position': string,
  'name': string,
  'description': string,
  'link': string
}
