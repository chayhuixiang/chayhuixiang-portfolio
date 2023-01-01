'use client'

import React, { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import useMounted from '../hooks/useMounted'

type Props = {
  children: ReactNode
}

const Portal = ({ children }: Props) => {
  const mounted = useMounted();

  return mounted ? createPortal(children, document.querySelector('#portal') as Element) : null;
}

export default Portal
