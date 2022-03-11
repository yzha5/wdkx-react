import {SvgProps} from '../types'
export function AlignLeft({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<line x1="0.5" x2="0.5" y2="16" stroke={color} strokeLinejoin="round"/>
<rect x="2.5" y="3.5" width="6" height="3" stroke={color} strokeLinejoin="round"/>
<rect x="2.5" y="9.5" width="13" height="3" stroke={color} strokeLinejoin="round"/>

</svg>)}