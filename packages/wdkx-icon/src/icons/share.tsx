import {SvgProps} from '../types'
export function Share({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="14" cy="2" r="1.5" stroke={color} strokeLinejoin="round"/>
<circle cx="14" cy="14" r="1.5" stroke={color} strokeLinejoin="round"/>
<circle cx="2" cy="8" r="1.5" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 7.5L12.5 2.5M3.5 8.5L12.5 13.5" stroke={color} strokeLinejoin="round"/>

</svg>)}