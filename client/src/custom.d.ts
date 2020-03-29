declare module 'svg-loaders-react'
declare module '@sweetalert/with-react'

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.mp4' {
  const src: string
  export default src
}
