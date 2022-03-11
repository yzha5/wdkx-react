import {SvgProps} from '../types'
export function Celsius({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M15.5 3.52779C14.4385 2.57771 13.0367 2 11.5 2C8.18629 2 5.5 4.68629 5.5 8C5.5 11.3137 8.18629 14 11.5 14C13.0367 14 14.4385 13.4223 15.5 12.4722" stroke={color} strokeLinejoin="round"/>
<circle cx="2.5" cy="4" r="2" stroke={color} strokeLinejoin="round"/>

</svg>)}