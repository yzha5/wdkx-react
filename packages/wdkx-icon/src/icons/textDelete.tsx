import {SvgProps} from '../types'
export function TextDelete({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M7.5 6L11.5 10M11.5 6L7.5 10M4.5 4.5L1 8L4.5 11.5H15.5V4.5H4.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}