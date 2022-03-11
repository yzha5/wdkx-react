import {SvgProps} from '../types'
export function MoreHorizontal({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="0.5" stroke={color} strokeLinejoin="round"/>
<circle cx="1" cy="8" r="0.5" stroke={color} strokeLinejoin="round"/>
<circle cx="15" cy="8" r="0.5" stroke={color} strokeLinejoin="round"/>

</svg>)}