import {SvgProps} from '../types'
export function Shemale({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="6.5" cy="9.5" r="6" stroke={color} strokeLinejoin="round"/>
<path d="M15.5 0.5L11 5M15.5 0.5V4M15.5 0.5H12M11 2L14 5" stroke={color} strokeLinejoin="round"/>

</svg>)}