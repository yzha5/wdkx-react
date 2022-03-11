import {SvgProps} from '../types'
export function MoreVertical({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="0.5" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="1" r="0.5" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="15" r="0.5" stroke={color} strokeLinejoin="round"/>

</svg>)}