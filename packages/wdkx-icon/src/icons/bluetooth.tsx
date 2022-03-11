import {SvgProps} from '../types'
export function Bluetooth({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4 4L11.5 11.5L8 15V1L11.5 4.5L4 12" stroke={color} strokeLinejoin="round"/>

</svg>)}