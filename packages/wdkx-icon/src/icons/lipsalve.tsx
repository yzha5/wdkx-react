import {SvgProps} from '../types'
export function Lipsalve({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="5" y="11.5" width="6" height="4" stroke={color} strokeLinejoin="round"/>
<rect x="6" y="6.5" width="4" height="5" stroke={color} strokeLinejoin="round"/>
<path d="M7 0.5L9 2.5V6.5H7V0.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}