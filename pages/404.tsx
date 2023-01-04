import React, { useEffect } from 'react'

type Props = {}

const Custom404 = (props: Props) => {

  useEffect(() => {
    window.location.replace("/");
  },[])

  return null;
}

export default Custom404
