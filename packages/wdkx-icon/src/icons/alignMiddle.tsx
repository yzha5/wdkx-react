import {SvgProps} from '../types'
export function AlignMiddle({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="9.5" y="1.5" width="3" height="13" stroke={color} strokeLinejoin="round"/>
<rect x="3.5" y="5" width="3" height="6" stroke={color} strokeLinejoin="round"/>
<path d="M0 8H3.5M6.5 8H9.5M12.5 8H16" stroke={color} strokeLinejoin="round"/>

</svg>)}