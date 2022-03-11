import {SvgProps} from '../types'
export function Bell({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M10 13C10 14.1046 9.10457 15 8 15C6.89543 15 6 14.1046 6 13" stroke={color} strokeLinejoin="round"/>
<path d="M4 5.5C4 3.29086 5.79086 1.5 8 1.5V1.5C10.2091 1.5 12 3.29086 12 5.5V11.5H4V5.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M2 11.5H14" stroke={color} strokeLinejoin="round"/>
<path d="M8 1.5V0" stroke={color} strokeLinejoin="round"/>

</svg>)}