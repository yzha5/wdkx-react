import {SvgProps} from '../types'
export function Grid({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 4.5H16M0 11.5H16M4.5 0V16M11.5 0V16" stroke={color} strokeLinejoin="round"/>

</svg>)}