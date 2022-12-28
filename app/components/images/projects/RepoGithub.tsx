import React from 'react'

type Props = {
  className?: string
}

const RepoGithub = ({className}: Props) => {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='dark:fill-zinc-300' fillRule="evenodd" clipRule="evenodd" d="M16.0001 1C7.52841 1 0.666748 7.86167 0.666748 16.3333C0.666748 23.1183 5.05591 28.8492 11.1509 30.8808C11.9176 31.015 12.2051 30.555 12.2051 30.1525C12.2051 29.7883 12.1859 28.5808 12.1859 27.2967C8.33342 28.0058 7.33675 26.3575 7.03008 25.495C6.85758 25.0542 6.11008 23.6933 5.45841 23.3292C4.92175 23.0417 4.15508 22.3325 5.43925 22.3133C6.64675 22.2942 7.50925 23.425 7.79675 23.885C9.17675 26.2042 11.3809 25.5525 12.2626 25.15C12.3967 24.1533 12.7992 23.4825 13.2401 23.0992C9.82842 22.7158 6.26342 21.3933 6.26342 15.5283C6.26342 13.8608 6.85758 12.4808 7.83508 11.4075C7.68175 11.0242 7.14508 9.4525 7.98841 7.34417C7.98841 7.34417 9.27258 6.94167 12.2051 8.91583C13.4317 8.57083 14.7351 8.39833 16.0384 8.39833C17.3417 8.39833 18.6451 8.57083 19.8717 8.91583C22.8042 6.9225 24.0884 7.34417 24.0884 7.34417C24.9317 9.4525 24.3951 11.0242 24.2417 11.4075C25.2192 12.4808 25.8134 13.8417 25.8134 15.5283C25.8134 21.4125 22.2292 22.7158 18.8176 23.0992C19.3734 23.5783 19.8526 24.4983 19.8526 25.9358C19.8526 27.9867 19.8334 29.635 19.8334 30.1525C19.8334 30.555 20.1209 31.0342 20.8876 30.8808C26.9442 28.8492 31.3334 23.0992 31.3334 16.3333C31.3334 7.86167 24.4717 1 16.0001 1V1Z" fill="#3A506F"/>
    </svg>
  )
}

export default RepoGithub