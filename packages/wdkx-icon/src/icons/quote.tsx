import {SvgProps} from '../types'
export function Quote({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M2 8.5H6C6.55228 8.5 7 8.94772 7 9.5V12.5C7 13.0523 6.55228 13.5 6 13.5H3C2.44772 13.5 2 13.0523 2 12.5V8.5ZM2 8.5V8.5C2 6.63881 2.97652 4.91409 4.57248 3.95651L7 2.5" stroke={color} strokeLinejoin="round"/>
<path d="M9 8.5H13C13.5523 8.5 14 8.94772 14 9.5V12.5C14 13.0523 13.5523 13.5 13 13.5H10C9.44772 13.5 9 13.0523 9 12.5V8.5ZM9 8.5V8.5C9 6.63881 9.97652 4.91409 11.5725 3.95651L14 2.5" stroke={color} strokeLinejoin="round"/>

</svg>)}