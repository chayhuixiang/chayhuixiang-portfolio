'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactNode
}

const Portal = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  },[]);

  return mounted ? createPortal(children, document.querySelector('#portal') as Element) : null;
}

export default Portal
