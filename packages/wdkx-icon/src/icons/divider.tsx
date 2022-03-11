import {SvgProps} from '../types'
export function Divider({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 8H16" stroke={color} strokeLinejoin="round"/>
<path d="M9 5.5L13 1.5M13 5.5L15.5 3M5 5.5L9 1.5M1 5.5L5 1.5M7 10.5L3 14.5M11 10.5L7 14.5M15 10.5L11 14.5M3 10.5L0.5 13" stroke={color} strokeLinejoin="round"/>

</svg>)}