import React, {useState, useEffect, FC} from 'react'
import {TailSpin} from 'svg-loaders-react'

export const DelayedFallbackLoader: FC = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    show
      ? <div className={'loader'}><TailSpin viewBox="0 0 50 40"/></div>
      : <></>
  )
}
