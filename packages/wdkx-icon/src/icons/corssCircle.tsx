import {SvgProps} from '../types'
export function CorssCircle({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<path d="M5 5L11 11M11 5L5 11" stroke={color} strokeLinejoin="round"/>

</svg>)}