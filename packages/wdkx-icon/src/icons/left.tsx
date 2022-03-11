import {SvgProps} from '../types'
export function Left({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M11.75 0.5L4.25 8L11.75 15.5" stroke={color} strokeLinejoin="round"/>

</svg>)}