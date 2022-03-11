import {SvgProps} from '../types'
export function Tip({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5 11.5V9.50037C3.78555 8.58816 3 7.13582 3 5.5C3 2.73858 5.23858 0.5 8 0.5C10.7614 0.5 13 2.73858 13 5.5C13 7.13582 12.2144 8.58816 11 9.50037V11.5M5 11.5V13C5 13.5523 5.44772 14 6 14H10C10.5523 14 11 13.5523 11 13V11.5M5 11.5H11" stroke={color} strokeLinejoin="round"/>
<path d="M6.5 14.5H9.5V14.5C9.5 15.0523 9.05228 15.5 8.5 15.5H7.5C6.94772 15.5 6.5 15.0523 6.5 14.5V14.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M8 6V10M8 6L9.5 4.5M8 6L6.5 4.5" stroke={color} strokeLinejoin="round"/>

</svg>)}