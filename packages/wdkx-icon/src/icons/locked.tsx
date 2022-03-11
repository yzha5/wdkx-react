import {SvgProps} from '../types'
export function Locked({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M13 9.5V7.5C13 6.94772 12.5523 6.5 12 6.5H2C1.44772 6.5 1 6.94772 1 7.5V14.5C1 15.0523 1.44772 15.5 2 15.5H12C12.5523 15.5 13 15.0523 13 14.5V12.5M4 6.5V3.5C4 1.84315 5.34315 0.5 7 0.5C8.65685 0.5 10 1.84315 10 3.5V6.5M13.5 11H12.5M11.5 11H10.5M9.5 11H8.5M8.5 12.5H13.5C14.3284 12.5 15 11.8284 15 11V11C15 10.1716 14.3284 9.5 13.5 9.5H8.5C7.67157 9.5 7 10.1716 7 11V11C7 11.8284 7.67157 12.5 8.5 12.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}