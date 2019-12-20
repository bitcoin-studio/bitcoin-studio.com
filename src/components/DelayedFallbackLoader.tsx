import * as React from 'react'
import {TailSpin} from 'svg-loaders-react'

const DelayedFallbackLoader = () => {
  const [show, setShow] = React.useState(false)
  React.useEffect(() => {
    let timeout = setTimeout(() => setShow(true), 500)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      {show && <div className={'loader'}><TailSpin viewBox="0 0 50 40"/></div>}
    </>
  )
}
export default DelayedFallbackLoader