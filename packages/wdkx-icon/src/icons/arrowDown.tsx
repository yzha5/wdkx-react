import {SvgProps} from '../types'
export function ArrowDown({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line x1="8" x2="8" y2="15" stroke={color} strokeLinejoin="round"/>
<path d="M5 12L8 15L11 12" stroke={color} strokeLinejoin="round"/>

</svg>)}