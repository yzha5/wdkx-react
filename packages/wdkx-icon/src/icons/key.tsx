import {SvgProps} from '../types'
export function Key({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="11.75" cy="4.25" r="3.75" stroke={color} strokeLinejoin="round"/>
<path d="M9 7L0.5 15.5" stroke={color} strokeLinejoin="round"/>
<path d="M5 11L7 13M3 13L5 15" stroke={color} strokeLinejoin="round"/>

</svg>)}