import {SvgProps} from '../types'
export function Tick({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 8L5.5 13L15.5 3" stroke={color} strokeLinejoin="round"/>

</svg>)}