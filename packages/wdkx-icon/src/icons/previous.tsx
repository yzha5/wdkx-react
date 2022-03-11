import {SvgProps} from '../types'
export function Previous({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3.5 2.5V13.5M7.5 8L12.5 3V13L7.5 8Z" stroke={color} strokeLinejoin="round"/>

</svg>)}