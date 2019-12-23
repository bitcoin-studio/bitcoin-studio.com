import {useEffect} from 'react'

/**
 * Handle click outside an element
 * @param ref
 * @param handler
 */
export const useOnClickOutside = (ref: any, handler: Function) => {
  useEffect(() => {
      const listener = (event: { target: any }) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
      }
    },
    [ref, handler],
  )
}