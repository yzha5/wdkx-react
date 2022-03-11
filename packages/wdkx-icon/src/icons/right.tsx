import {SvgProps} from '../types'
export function Right({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4.25 0.5L11.75 8L4.25 15.5" stroke={color} strokeLinejoin="round"/>

</svg>)}