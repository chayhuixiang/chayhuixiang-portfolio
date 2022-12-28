import { Skill } from "./schema";

export const fetchedSkills: Skill[] = [
  {
    'name': 'Frontend Development',
    'logo_path': '/images/skill/frontend.svg',
    'display_order': 1,
    'stack': [
      'HTML', 'CSS', 'Javascript', 'Typescript', 'React', 'Next', 'Figma', 'Tailwind', 'Redux'
    ]
  },
  {
    'name': 'Backend Development',
    'logo_path': '/images/skill/backend.svg',
    'display_order': 2,
    'stack': [
      'NodeJS', 'Express', 'Flask', 'SQLite', 'MongoDB', 'Firebase'
    ]
  },
  {
    'name': 'Machine Learning and Data Analytics',
    'logo_path': '/images/skill/mlda.svg',
    'display_order': 3,
    'stack': [
      'Tensorflow', 'PyTorch', 'OpenCV', 'Pandas', 'Seaborn', 'Matplotlib', 'Kepler.gl', 'Jupyter'
    ]
  },
  {
    'name': 'Blockchain & Web3',
    'logo_path': '/images/skill/blockchain.svg',
    'display_order': 4,
    'stack': [
      'Solidity', 'Ethers.js', 'Web3.js', 'SmartPy'
    ]
  },
  {
    'name': 'Firmware Development',
    'logo_path': '/images/skill/firmware.svg',
    'display_order': 5,
    'stack': [
      'Arduino', 'Linux', 'Raspberry Pi'
    ]
  },
  {
    'name': 'DevOps',
    'logo_path': '/images/skill/devops.svg',
    'display_order': 6,
    'stack': [
      'Git', 'Github', 'Docker', 'Vercel', 'Netlify', 'Replit', 'Google Cloud Platform'
    ]
  }
]
