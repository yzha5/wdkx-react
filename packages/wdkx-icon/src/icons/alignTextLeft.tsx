import {SvgProps} from '../types'
export function AlignTextLeft({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line y1="2" x2="16" y2="2" stroke={color} strokeLinejoin="round"/>
<line y1="6" x2="8" y2="6" stroke={color} strokeLinejoin="round"/>
<line y1="10" x2="16" y2="10" stroke={color} strokeLinejoin="round"/>
<line y1="14" x2="8" y2="14" stroke={color} strokeLinejoin="round"/>

</svg>)}