import React, { useState, useEffect } from 'react'

const useMounted = () => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    () => setMounted(false);
  },[]);
  
  return mounted;
}

export default useMounted
