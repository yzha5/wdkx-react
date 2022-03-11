import {SvgProps} from '../types'
export function AlignRight({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line x1="15.5" x2="15.5" y2="16" stroke={color} strokeLinejoin="round"/>
<rect x="7.5" y="3.5" width="6" height="3" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="9.5" width="13" height="3" stroke={color} strokeLinejoin="round"/>

</svg>)}