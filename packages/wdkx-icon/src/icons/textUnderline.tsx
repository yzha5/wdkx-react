import {SvgProps} from '../types'
export function TextUnderline({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3 15.5H13" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 0V9C3.5 11.4853 5.51472 13.5 8 13.5V13.5C10.4853 13.5 12.5 11.4853 12.5 9V0" stroke={color} strokeLinejoin="round"/>

</svg>)}