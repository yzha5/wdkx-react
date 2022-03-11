import {SvgProps} from '../types'
export function Backplate({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="0.5" width="15" height="15" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M15 1L1 15M8 0.5L0.5 8M15.5 8L8 15.5" stroke={color} strokeLinejoin="round"/>

</svg>)}