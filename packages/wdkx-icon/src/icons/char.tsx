import {SvgProps} from '../types'
export function Char({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M7.5 15C11.0899 15 14 12.0899 14 8.5H7.5V2C3.91015 2 1 4.91015 1 8.5C1 12.0899 3.91015 15 7.5 15Z" stroke={color} strokeLinejoin="round"/>
<path d="M15 7C15 3.68629 12.3137 1 9 1V7H15Z" stroke={color} strokeLinejoin="round"/>

</svg>)}