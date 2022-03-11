import {SvgProps} from '../types'
export function Plus({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 8H16M8 0V16" stroke={color} strokeLinejoin="round"/>

</svg>)}