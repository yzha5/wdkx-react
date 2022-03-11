import {SvgProps} from '../types'
export function TextReIndent({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M8 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M8 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M3 14H16" stroke={color} strokeLinejoin="round"/>
<path d="M5 4L1 8L5 12" stroke={color} strokeLinejoin="round"/>

</svg>)}