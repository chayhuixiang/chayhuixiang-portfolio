import { Company } from "./schema";

export const fetchedCompanies: Company[] = [
  {
    'name': 'Trilogy Technologies', 
    'position': 'Software Intern', 
    'logo_path_light': '/images/company/trilogy-light.png', 
    'logo_path_dark': '/images/company/trilogy-dark.png', 
    'start_date': '2020-12-04', 
    'end_date': '2021-05-28', 
    'description': [
      'Wrote Firmware for a working IV Drip Monitor, using a ATMega328 MCU and Arduino',
      'Tinkered with ESP32 & raspberry pi in developing an elderly-friendly pill dispenser',
      'Utilised NodeJS, Express, Python, HTML, CSS, Bootstrap, Firebase as part of other miscellaneous completed projects'
    ],
    'logo_path_stack_light': [
      '/images/stack/arduino.svg',
      '/images/stack/firebase.svg',
      '/images/stack/raspberry-pi.svg'
    ],
    'logo_path_stack_dark': [
      '/images/stack/arduino-dark.svg',
      '/images/stack/firebase-dark.svg',
      '/images/stack/raspberry-pi-dark.svg'
    ],
    'link': 'https://www.3logytech.com/'
  },
  {
    'name': 'Switcheo Labs', 
    'position': 'Software Developer Intern', 
    'logo_path_light': '/images/company/switcheo-light.png', 
    'logo_path_dark': '/images/company/switcheo-dark.png', 
    'start_date': '2022-05-16', 
    'end_date': '2022-07-27', 
    'description': [
      'Heavily contributed to Switcheo’s products written in React, Typescript, Redux and Redux Saga',
      'Incorporated chain-bridging transactions via various frontend and backend libraries (ethers.js, solidity etc.) as well as various wallet providers (Metamask, WalletConnect etc.)',
      'Wrote smart contracts in solidity (for EVM chains) and C# (for Neo2 and Neo3 chains)'
    ],
    'logo_path_stack_light': [
      '/images/stack/react.svg',
      '/images/stack/typescript.svg',
      '/images/stack/redux.svg',
      '/images/stack/ethereum.svg',
      '/images/stack/git.svg'
    ],
    'logo_path_stack_dark': [
      '/images/stack/react-dark.svg',
      '/images/stack/typescript-dark.svg',
      '/images/stack/redux-dark.svg',
      '/images/stack/ethereum-dark.svg',
      '/images/stack/git-dark.svg'
    ],
    'link': 'https://www.switcheo.com/'
  },
  {
    'name': 'Fisher8 Capital', 
    'position': 'Junior Data Analyst', 
    'logo_path_light': '/images/company/fisher8.png',
    'logo_path_dark': '/images/company/fisher8.png', 
    'start_date': '2022-07-04', 
    'end_date': null,
    'description': [
      'Performing a data analyst role in analysing football player performances and predicting match results',
      'Created match outcome and score prediction models from scratch via various architectures like Random Decision Forests, Artificial Neural Networks & Support Vector Machines, achieving RMSE comparable to conventional models',
      'Utilised various machine learning frameworks, like Tensorflow, Keras and Pandas'
    ],
    'logo_path_stack_light': [
      '/images/stack/tensorflow.svg',
      '/images/stack/pandas.svg',
      '/images/stack/matplotlib.png'
    ],
    'logo_path_stack_dark': [
      '/images/stack/tensorflow-dark.svg',
      '/images/stack/pandas-dark.svg',
      '/images/stack/matplotlib-dark.png'
    ],
    'link': 'https://www.fisher8.capital/'
  },
  {
    'name': 'Tezos (TZ APAC)', 
    'position': 'Student Ambassador', 
    'logo_path_light': '/images/company/tezos-light.svg',
    'logo_path_dark': '/images/company/tezos-dark.svg', 
    'start_date': '2022-08-25', 
    'end_date': null,
    'description': [
      'Contributing to the official OpenTezos documentation',
      'Represented Tezos at Singapore Fintech Festival 2022'
    ],
    'logo_path_stack_light': [
      '/images/stack/ethereum.svg'
    ],
    'logo_path_stack_dark': [
      '/images/stack/ethereum-dark.svg'
    ],
    'link': 'https://tezos.com/'
  }
]
