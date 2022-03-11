import {SvgProps} from '../types'
export function ListTag({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M7 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 14H16" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="2" width="4" height="4" rx="1" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="10" width="4" height="4" rx="1" stroke={color} strokeLinejoin="round"/>

</svg>)}