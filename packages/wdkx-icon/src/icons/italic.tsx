import {SvgProps} from '../types'
export function Italic({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5 0.5H13" stroke={color} strokeLinejoin="round"/>
<path d="M3 15.4984H11" stroke={color} strokeLinejoin="round"/>
<path d="M9 0.5L7 15.5" stroke={color} strokeLinejoin="round"/>

</svg>)}