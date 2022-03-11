import {SvgProps} from '../types'
export function Desk({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 5H2M16 5H14M2 5V11.5M2 5H14M14 5V11.5" stroke={color} strokeLinejoin="round"/>

</svg>)}