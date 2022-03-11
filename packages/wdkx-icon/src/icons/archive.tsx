import {SvgProps} from '../types'
export function Archive({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="1.5" width="15" height="4.5" stroke={color} strokeLinejoin="round"/>
<path d="M2 6V12.5C2 13.6046 2.89543 14.5 4 14.5H12C13.1046 14.5 14 13.6046 14 12.5V6" stroke={color} strokeLinejoin="round"/>
<path d="M6.5 8.5H9.5" stroke={color} strokeLinejoin="round"/>

</svg>)}