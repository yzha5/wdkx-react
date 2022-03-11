import {SvgProps} from '../types'
export function Pause({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5 2V14" stroke={color} strokeLinejoin="round"/>
<path d="M11 2V14" stroke={color} strokeLinejoin="round"/>

</svg>)}