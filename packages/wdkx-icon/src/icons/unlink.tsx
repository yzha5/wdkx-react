import {SvgProps} from '../types'
export function Unlink({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M10 5.5H13C14.3807 5.5 15.5 6.61929 15.5 8C15.5 9.38071 14.3807 10.5 13 10.5H10" stroke={color} strokeLinejoin="round"/>
<path d="M6 5.5H3C1.61929 5.5 0.5 6.61929 0.5 8C0.5 9.38071 1.61929 10.5 3 10.5H6" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 8H12.5" stroke={color} strokeLinejoin="round"/>
<path d="M7 4L5 2" stroke={color} strokeLinejoin="round"/>
<path d="M9 4L11 2" stroke={color} strokeLinejoin="round"/>
<path d="M7 12L5 14" stroke={color} strokeLinejoin="round"/>
<path d="M9 12L11 14" stroke={color} strokeLinejoin="round"/>

</svg>)}