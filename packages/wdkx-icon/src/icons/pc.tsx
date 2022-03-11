import {SvgProps} from '../types'
export function Pc({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 5.25C0.5 4.69772 0.947715 4.25 1.5 4.25H9.5V12.25H1.5C0.947715 12.25 0.5 11.8023 0.5 11.25V5.25Z" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 12.25V13.75" stroke={color} strokeLinejoin="round"/>
<path d="M4 13.75H9.5" stroke={color} strokeLinejoin="round"/>
<rect x="9.5" y="0.5" width="6" height="15" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M9.5 5.5H15.5M11.5 12.5H13.5" stroke={color} strokeLinejoin="round"/>

</svg>)}