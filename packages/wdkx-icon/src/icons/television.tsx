import {SvgProps} from '../types'
export function Television({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="2.25" width="15" height="10" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M4.5 12.25V13.75" stroke={color} strokeLinejoin="round"/>
<path d="M11.5 12.25V13.75" stroke={color} strokeLinejoin="round"/>
<path d="M3 13.75H13" stroke={color} strokeLinejoin="round"/>

</svg>)}