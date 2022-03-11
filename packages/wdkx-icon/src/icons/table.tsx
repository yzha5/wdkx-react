import {SvgProps} from '../types'
export function Table({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 4.25H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 8H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 11.75H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M4.25 4.5V15.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 4.5V15.5" stroke={color} strokeLinejoin="round"/>
<path d="M11.75 4.5V15.5" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="0.5" width="15" height="15" rx="1" stroke={color} strokeLinejoin="round"/>

</svg>)}