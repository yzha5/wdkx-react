import {SvgProps} from '../types'
export function TextIndent({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M8 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M8 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M3 14H16" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 4L4.5 8L0.5 12" stroke={color} strokeLinejoin="round"/>

</svg>)}