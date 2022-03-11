import {SvgProps} from '../types'
export function Play({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4.5 13V3L11.5 8L4.5 13Z" stroke={color} strokeLinejoin="round"/>

</svg>)}