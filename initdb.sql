CREATE DATABASE IF NOT EXISTS portfolio;
USE portfolio;

CREATE SEQUENCE skill_seq;

CREATE TABLE IF NOT EXISTS skill (
  name STRING PRIMARY KEY,
  logo_path STRING NOT NULL,
  display_order INT DEFAULT nextval('skill_seq')
);

INSERT INTO skill (name, logo_path) VALUES
  ('Frontend Development', '/images/skill/frontend.svg'),
  ('Backend Development', '/images/skill/backend.svg'),
  ('Machine Learning and Data Analytics', '/images/skill/mlda.svg'),
  ('Blockchain & Web3', '/images/skill/blockchain.svg'),
  ('Firmware Development', '/images/skill/firmware.svg'),
  ('DevOps', '/images/skill/devops.svg');

CREATE TABLE IF NOT EXISTS stack (
  name STRING PRIMARY KEY,
  logo_path STRING NOT NULL,
  colour STRING NOT NULL CHECK (character_length(colour) = 6),
  skill_work_order INT DEFAULT 0,
  skill_name STRING REFERENCES skill (name),
  skill_name_order INT
);

INSERT INTO stack (name, logo_path, colour, skill_name, skill_name_order) VALUES
  ('Python', '/images/stack/python.svg', 'FFC107', NULL, NULL),
  ('Java', '/images/stack/java.svg', 'F44336', NULL, NULL),
  ('Mcfunction', '/images/stack/mcfunction.svg', 'B7835A', NULL, NULL),
  ('IPFS', '/images/stack/ipfs.svg', '449294', NULL, NULL),
  ('Svelte', '/images/stack/svelte.svg', 'FF3E00', NULL, NULL)

INSERT INTO stack (name, logo_path, colour, skill_work_order, skill_name, skill_name_order) VALUES
  ('Arduino', '/images/stack/arduino.svg', '01A3A9', 1, 'Firmware Development', 1),
  ('Firebase', '/images/stack/firebase.svg', 'FFA000', 2, 'Backend Development', 6),
  ('React', '/images/stack/react.svg', '80DEEA', 3, 'Frontend Development', 5),
  ('Typescript', '/images/stack/typescript.svg', '1976D2', 4, 'Frontend Development', 4),
  ('Redux', '/images/stack/redux.svg', '7E57C2', 5, 'Frontend Development', 9),
  ('Git', '/images/stack/git.svg', 'F4511E', 6, 'DevOps', 1),
  ('Blockchain', '/images/stack/ethereum.svg', '1A237E', 7, NULL, NULL),
  ('TensorFlow', '/images/stack/tensorflow.svg', 'FFA000', 8, 'Machine Learning and Data Analytics', 1),
  ('Pandas', '/images/stack/pandas.svg', '1A237E', 9, 'Machine Learning and Data Analytics', 4);

INSERT INTO stack (name, logo_path, colour, skill_name, skill_name_order) VALUES
  ('HTML', '/images/stack/html.svg', 'E65101', 'Frontend Development', 1),
  ('CSS', '/images/stack/css.svg', '2277BD', 'Frontend Development', 2),
  ('Javascript', '/images/stack/javascript.svg', 'F7D302', 'Frontend Development', 3),
  ('Next', '/images/stack/next.svg', '212121', 'Frontend Development', 6),
  ('Figma', '/images/stack/figma.svg', 'FFC400', 'Frontend Development', 7),
  ('Tailwind', '/images/stack/tailwind.svg', '00ACC1', 'Frontend Development', 8),
  ('NodeJS', '/images/stack/nodejs.svg', '27A366', 'Backend Development', 1),
  ('Express', '/images/stack/express.svg', '000000', 'Backend Development', 2),
  ('Flask', '/images/stack/flask.svg', '000000','Backend Development', 3),
  ('SQLite', '/images/stack/sqlite.png', '0B3B57','Backend Development', 4),
  ('MongoDB', '/images/stack/mongodb.png', '499D49','Backend Development', 5),
  ('PyTorch', '/images/stack/pytorch.png', 'EE4C2C', 'Machine Learning and Data Analytics', 2),
  ('OpenCV', '/images/stack/opencv.png', 'FFA000', 'Machine Learning and Data Analytics', 3),
  ('Seaborn', '/images/stack/seaborn.png', '5C7DA2', 'Machine Learning and Data Analytics', 5),
  ('Matplotlib', '/images/stack/matplotlib.png', 'E4C95C', 'Machine Learning and Data Analytics', 6),
  ('Kepler.gl', '/images/stack/kepler.svg', '34BAD6', 'Machine Learning and Data Analytics', 7),
  ('Jupyter', '/images/stack/jupyter.svg', 'E06400', 'Machine Learning and Data Analytics', 8),
  ('Solidity', '/images/stack/solidity.svg', '1A1A1A', 'Blockchain & Web3', 1),
  ('Ethers.js', '/images/stack/ethersjs.png', '2535A0', 'Blockchain & Web3', 2),
  ('Web3.js', '/images/stack/web3js.svg', 'EF6830', 'Blockchain & Web3', 3),
  ('SmartPy', '/images/stack/smartpy.svg', '216DCC', 'Blockchain & Web3', 4),
  ('Linux', '/images/stack/linux.png', 'F7BE09', 'Firmware Development', 2),
  ('Raspberry Pi', '/images/stack/raspberry-pi.svg', 'FF4081', 'Firmware Development', 3),
  ('Github', '/images/stack/github.svg', '000000', 'DevOps', 2),
  ('Docker', '/images/stack/docker.svg', '2395EC', 'DevOps', 3),
  ('Vercel', '/images/stack/vercel.svg', '000000', 'DevOps', 4),
  ('Replit', '/images/stack/replit.svg', '56676E', 'DevOps', 5),
  ('Netlify', '/images/stack/netlify.svg', '4D9ABF', 'DevOps', 6),
  ('Google Cloud Platform', '/images/stack/google-cloud.svg', 'FFFFFF', 'DevOps', 7);

CREATE TABLE IF NOT EXISTS company (
  name STRING PRIMARY KEY,
  position STRING NOT NULL,
  logo_path_light STRING NOT NULL,
  logo_path_dark STRING NOT NULL,
  start_date DATE NOT NULL,
  end_date DATE,
  description STRING[] NOT NULL
);

INSERT INTO company (name, position, logo_path_light, logo_path_dark, start_date, end_date, description) VALUES
  ('Trilogy Technologies', 'Software Intern', '/images/company/trilogy-light.png', 
    '/images/company/trilogy-dark.png', DATE '2020-12-04', DATE '2021-05-28', 
    Array[
      'Wrote Firmware for a working IV Drip Monitor, using a ATMega328 MCU and Arduino',
      'Tinkered with ESP32 & raspberry pi in developing an elderly-friendly pill dispenser',
      'Utilised NodeJS, Express, Python, HTML, CSS, Bootstrap, Firebase as part of other miscellaneous completed projects'
    ]
  ),
  ('Switcheo Labs', 'Software Developer Intern', '/images/company/switcheo-light.png', 
    '/images/company/switcheo-dark.png', DATE '2022-05-16', DATE '2022-07-27', 
    Array[
      'Heavily contributed to Switcheo’s products written in React, Typescript, Redux and Redux Saga',
      'Incorporated chain-bridging transactions via various frontend and backend libraries (ethers.js, solidity etc.) as well as various wallet providers (Metamask, WalletConnect etc.)',
      'Wrote smart contracts in solidity (for EVM chains) and C# (for Neo2 and Neo3 chains)'
    ]
  ),
  ('Fisher8 Capital', 'Junior Data Analyst', '/images/company/fisher8.png',
    '/images/company/fisher8.png', DATE '2022-07-04', NULL,
    Array[
      'Performing a data analyst role in analysing football player performances and predicting match results',
      'Created match outcome and score prediction models from scratch via various architectures like Random Decision Forests, Artificial Neural Networks & Support Vector Machines, achieving RMSE comparable to conventional models',
      'Utilised various machine learning frameworks, like Tensorflow, Keras and Pandas'
    ]
  ),
  ('Tezos (TZ APAC)', 'Student Ambassador', '/images/company/tezos-light.svg',
    '/images/company/tezos-dark.svg', DATE '2022-08-25', NULL,
    Array[
      'Contributing to the official OpenTezos documentation',
      'Represented Tezos at Singapore Fintech Festival 2022'
    ]
  );

CREATE TABLE IF NOT EXISTS company_stack (
  company_name STRING NOT NULL REFERENCES company (name),
  stack_name STRING NOT NULL REFERENCES stack (name),
  display_order INT NOT NULL
)

INSERT INTO company_stack (company_name, stack_name) VALUES
  ('Trilogy Technologies', 'Arduino', 1)
  ('Trilogy Technologies', 'Firebase', 2)
  ('Trilogy Technologies', 'Raspberry Pi', 3)
  ('Switcheo Labs', 'React', 1)
  ('Switcheo Labs', 'Typescript', 2)
  ('Switcheo Labs', 'Redux', 3)
  ('Switcheo Labs', 'Blockchain', 4)
  ('Switcheo Labs', 'Git', 5)
  ('Fisher8 Capital', 'TensorFlow', 1)
  ('Fisher8 Capital', 'Pandas', 2)
  ('Fisher8 Capital', 'Matplotlib', 3)
  ('Tezos (TZ APAC)', 'Blockchain', 1)

CREATE TYPE project_type AS ENUM ('webdev', 'dsai', 'cybersecurity', 'misc')

CREATE TABLE IF NOT EXISTS project (
  name STRING PRIMARY KEY,
  featured BOOL NOT NULL,
  type project_type NOT NULL,
  logo_path STRING NOT NULL,
  cover_path STRING NOT NULL,
  colour STRING NOT NULL CHECK (character_length(colour) = 6),
  github_link STRING NOT NULL,
  deployed_link STRING,
  description STRING NOT NULL
)

INSERT INTO project (name, featured, type, logo_path, cover_path, colour, github_link, deployed_link, description) VALUES
  ('TwoTyred', true, 'webdev', '/images/project/twotyred.svg', )
