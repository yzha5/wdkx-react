import {SvgProps} from '../types'
export function Sun({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M13 8H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 8H3" stroke={color} strokeLinejoin="round"/>
<path d="M8 0V3" stroke={color} strokeLinejoin="round"/>
<path d="M8 13V16" stroke={color} strokeLinejoin="round"/>
<path d="M11.5355 11.5355L13.6569 13.6568" stroke={color} strokeLinejoin="round"/>
<path d="M2.34314 2.34314L4.46446 4.46446" stroke={color} strokeLinejoin="round"/>
<path d="M13.6569 2.34314L11.5355 4.46446" stroke={color} strokeLinejoin="round"/>
<path d="M4.46446 11.5355L2.34314 13.6568" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="8" r="3.5" stroke={color} strokeLinejoin="round"/>

</svg>)}