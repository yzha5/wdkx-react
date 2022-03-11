import {SvgProps} from '../types'
export function Badge({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="1.5" width="14" height="14" rx="1" stroke={color} strokeLinejoin="round"/>
<circle cx="14" cy="2" r="2" fill={color}/>

</svg>)}