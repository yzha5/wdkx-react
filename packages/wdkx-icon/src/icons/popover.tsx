import {SvgProps} from '../types'
export function Popover({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 3.5L11.4641 9.5H4.5359L8 3.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M4 12H12" stroke={color} strokeLinejoin="round"/>

</svg>)}