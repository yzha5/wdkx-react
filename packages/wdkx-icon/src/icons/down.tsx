import {SvgProps} from '../types'
export function Down({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 4.25L8 11.75L15.5 4.25" stroke={color} strokeLinejoin="round"/>

</svg>)}