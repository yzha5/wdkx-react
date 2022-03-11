import {SvgProps} from '../types'
export function Warn({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M11 0.5H5L0.5 5V11L5 15.5H11L15.5 11V5L11 0.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M8 9.5V4.5" stroke={color} strokeLinejoin="round"/>
<path d="M7.5 11H8.5" stroke={color} strokeLinejoin="round"/>

</svg>)}