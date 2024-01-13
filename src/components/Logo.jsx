import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
 <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 20C1 26.6274 6.37258 32 13 32H29V4H1V20Z" fill="#0A0A0A" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M11.5 10.5V21.5L22.5 21.5V25.5H11.5C9.29086 25.5 7.5 23.7091 7.5 21.5V10.5H11.5ZM22.5 10.5H18.5V15.5C18.5 16.6046 19.3954 17.5 20.5 17.5C21.6046 17.5 22.5 16.6046 22.5 15.5V10.5Z"
    fill="white" />
</svg>
// <?xml version="1.0" encoding="utf-8"?>
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 116.54" style="enable-background:new 0 0 122.88 116.54" xml:space="preserve"><style type="text/css">.st0{fillRule:evenodd;clipRule:evenodd;}</style><g><path class="st0" d="M94.11,14.45c-6.08-0.68-4.2,10.42-4.28,33.38c21.12,5.6,24.11,33.16,13.18,51.38 c-9.24,15.42-26.66,17.29-43.14,17.33c-18.56,0.05-32.65-1-44.83-16.72C7.04,89.47,1.33,74.75,0.25,58.63 c-1.03-10.45,1.19-15.76,5.86-17.67c13.2-5.43,8.72,5.8,13.25,12.23c2.64,3.77,6.97,6.85,12.82,9.31 c5.93,0.6,11.08-1.18,16.19-1.48c22.73-1.34,23.33,15.24,18.97-4.65C48.6,52.91,41.73,33.19,46.6,18.21 C53.34-2.49,85.75-7.92,94.11,14.45L94.11,14.45z M95.25,43.2V18.56c7.64,3.09,13.91,5.1,22.31,5.88c7.93,0.73,6.66,0.46-1.49,6.9 C108.89,37.01,103.36,39.69,95.25,43.2L95.25,43.2z M77.08,16.31c1.95,0,3.53,1.58,3.53,3.53c0,1.95-1.58,3.53-3.53,3.53 s-3.53-1.58-3.53-3.53C73.55,17.88,75.13,16.31,77.08,16.31L77.08,16.31z"/></g></svg>

  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    // <svg
    //   viewBox="0 0 130 32"
    //   aria-hidden="true"
    //   className={clsx(fillOnHover && 'group/logo', className)}
    //   {...props}
    // >
    //   <Logomark
    //     preserveAspectRatio="xMinYMid meet"
    //     invert={invert}
    //     filled={filled}
    //   />
    //   <path
    //     className={invert ? 'fill-white' : 'fill-neutral-950'}
    //     d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
    //   />
    // </svg>
<svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 20C1 26.6274 6.37258 32 13 32H29V4H1V20Z" fill="#0A0A0A" />
  <path fillRule="evenodd" clipRule="evenodd"
    d="M11.5 10.5V21.5L22.5 21.5V25.5H11.5C9.29086 25.5 7.5 23.7091 7.5 21.5V10.5H11.5ZM22.5 10.5H18.5V15.5C18.5 16.6046 19.3954 17.5 20.5 17.5C21.6046 17.5 22.5 16.6046 22.5 15.5V10.5Z"
    fill="white" />
</svg>

  )
}
