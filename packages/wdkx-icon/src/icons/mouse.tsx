import {SvgProps} from '../types'
export function Mouse({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="2.5" y="0.5" width="11" height="15" rx="5.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 3V5" stroke={color} strokeLinejoin="round"/>

</svg>)}