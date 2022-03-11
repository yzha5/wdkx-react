import {SvgProps} from '../types'
export function Smog({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 3H3.5" stroke={color} strokeLinejoin="round"/>
<path d="M6.5 3H9.5" stroke={color} strokeLinejoin="round"/>
<path d="M12.5 3H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 13H3.5" stroke={color} strokeLinejoin="round"/>
<path d="M6.5 13H9.5" stroke={color} strokeLinejoin="round"/>
<path d="M12.5 13H15.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 8C8 8 5.65685 11 4 11C2.34315 11 1 9.65685 1 8C1 6.34315 2.34315 5 4 5C5.65685 5 8 8 8 8Z" stroke={color} strokeLinejoin="round"/>
<path d="M15 8C15 9.65685 13.6569 11 12 11C10.3431 11 8 8 8 8C8 8 10.3431 5 12 5C13.6569 5 15 6.34315 15 8Z" stroke={color} strokeLinejoin="round"/>

</svg>)}