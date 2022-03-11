import {SvgProps} from '../types'
export function Sidebar({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="0.5" width="6" height="15" fill={color}/>
<rect x="0.5" y="0.5" width="15" height="15" rx="1" stroke={color} strokeLinejoin="round"/>

</svg>)}