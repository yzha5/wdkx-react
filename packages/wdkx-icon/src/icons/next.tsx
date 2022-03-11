import {SvgProps} from '../types'
export function Next({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line x1="12.5" y1="2.5" x2="12.5" y2="13.5" stroke={color} strokeLinejoin="round"/>
<path d="M8.5 8L3.5 3V13L8.5 8Z" stroke={color} strokeLinejoin="round"/>

</svg>)}