import {SvgProps} from '../types'
export function Monitor({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5 14.5H11" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="1.5" width="15" height="10" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M8 11.5V13M8 13L7 14.5M8 13L9 14.5" stroke={color} strokeLinejoin="round"/>

</svg>)}