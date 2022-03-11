import {SvgProps} from '../types'
export function Fan({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<path d="M14 8C14 6.34315 12.6569 5 11 5C9.34315 5 8 6.34315 8 8" stroke={color} strokeLinejoin="round"/>
<path d="M5.00001 13.1962C6.43489 14.0246 8.26966 13.533 9.09808 12.0981C9.92651 10.6632 9.43489 8.82843 8.00001 8" stroke={color} strokeLinejoin="round"/>
<path d="M4.99999 2.80385C3.56511 3.63227 3.07349 5.46705 3.90192 6.90192C4.73034 8.3368 6.56511 8.82843 7.99999 8" stroke={color} strokeLinejoin="round"/>

</svg>)}