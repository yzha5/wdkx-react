import {SvgProps} from '../types'
export function ArrowUp({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line x1="8" y1="1" x2="8" y2="16" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 3.5L8 1L10.5 3.5" stroke={color} strokeLinejoin="round"/>

</svg>)}