import { CompanyResponse } from "../graphql/schema";

export const sortedCompanies: CompanyResponse = [
  {
    name: "Trilogy Technologies",
    position: "Software Intern",
    description: [
      "Wrote Firmware for a working IV Drip Monitor, using a ATMega328 MCU and Arduino",
      "Tinkered with ESP32 & raspberry pi in developing an elderly-friendly pill dispenser",
      "Utilised NodeJS, Express, Python, HTML, CSS, Bootstrap, Firebase as part of other miscellaneous completed projects",
    ],
    link: "https://www.3logytech.com/",
    end_date: "2021-05-28T00:00:00.000Z",
    start_date: "2020-12-04T00:00:00.000Z",
    logo_path_dark: "/images/company/trilogy-dark.png",
    logo_path_light: "/images/company/trilogy-light.png",
    stacks: [
      {
        stack: {
          logo_path_dark: "/images/stack/arduino-dark.svg",
          logo_path_light: "/images/stack/arduino.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/firebase-dark.svg",
          logo_path_light: "/images/stack/firebase.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/raspberry-pi-dark.svg",
          logo_path_light: "/images/stack/raspberry-pi.svg",
        },
      },
    ],
  },
  {
    name: "Switcheo Labs",
    position: "Software Developer Intern",
    description: [
      "Heavily contributed to Switcheo’s products written in React, Typescript, Redux and Redux Saga",
      "Incorporated chain-bridging transactions via various frontend and backend libraries (ethers.js, solidity etc.) as well as various wallet providers (Metamask, WalletConnect etc.)",
      "Wrote smart contracts in solidity (for EVM chains) and C# (for Neo2 and Neo3 chains)",
    ],
    link: "https://www.switcheo.com/",
    end_date: "2022-07-27T00:00:00.000Z",
    start_date: "2022-05-16T00:00:00.000Z",
    logo_path_dark: "/images/company/switcheo-dark.png",
    logo_path_light: "/images/company/switcheo-light.png",
    stacks: [
      {
        stack: {
          logo_path_dark: "/images/stack/ethereum-dark.svg",
          logo_path_light: "/images/stack/ethereum.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/react-dark.svg",
          logo_path_light: "/images/stack/react.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/typescript-dark.svg",
          logo_path_light: "/images/stack/typescript.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/redux-dark.svg",
          logo_path_light: "/images/stack/redux.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/git-dark.svg",
          logo_path_light: "/images/stack/git.svg",
        },
      },
    ],
  },
  {
    name: "Fisher8 Capital",
    position: "Junior Data Analyst",
    description: [
      "Performing a data analyst role in analysing football player performances and predicting match results",
      "Created match outcome and score prediction models from scratch via various architectures like Random Decision Forests, Artificial Neural Networks & Support Vector Machines, achieving RMSE comparable to conventional models",
      "Utilised various machine learning frameworks, like Tensorflow, Keras and Pandas",
    ],
    link: "https://www.fisher8.capital/",
    end_date: null,
    start_date: "2022-07-04T00:00:00.000Z",
    logo_path_dark: "/images/company/fisher8.png",
    logo_path_light: "/images/company/fisher8.png",
    stacks: [
      {
        stack: {
          logo_path_dark: "/images/stack/tensorflow-dark.svg",
          logo_path_light: "/images/stack/tensorflow.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/pandas-dark.svg",
          logo_path_light: "/images/stack/pandas.svg",
        },
      },
      {
        stack: {
          logo_path_dark: "/images/stack/matplotlib-dark.png",
          logo_path_light: "/images/stack/matplotlib.png",
        },
      },
    ],
  },
  {
    name: "Tezos (TZ APAC)",
    position: "Student Ambassador",
    description: [
      "Contributing to the official OpenTezos documentation",
      "Represented Tezos at Singapore Fintech Festival 2022",
    ],
    link: "https://tezos.com/",
    end_date: null,
    start_date: "2022-08-25T00:00:00.000Z",
    logo_path_dark: "/images/company/tezos-dark.svg",
    logo_path_light: "/images/company/tezos-light.svg",
    stacks: [
      {
        stack: {
          logo_path_dark: "/images/stack/ethereum-dark.svg",
          logo_path_light: "/images/stack/ethereum.svg",
        },
      },
    ],
  },
];
