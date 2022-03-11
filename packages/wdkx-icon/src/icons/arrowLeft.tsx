import {SvgProps} from '../types'
export function ArrowLeft({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M1 8H16" stroke={color} strokeLinejoin="round"/>
<path d="M4 5L1 8L4 11" stroke={color} strokeLinejoin="round"/>

</svg>)}