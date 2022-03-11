import {SvgProps} from '../types'
export function Slider({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 3.5H16" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 1.5V5.5" stroke={color} strokeLinejoin="round"/>
<path d="M8 6V10" stroke={color} strokeLinejoin="round"/>
<path d="M0 12.5H16" stroke={color} strokeLinejoin="round"/>
<path d="M0 8H16" stroke={color} strokeLinejoin="round"/>
<path d="M12.5 10.5V14.5" stroke={color} strokeLinejoin="round"/>

</svg>)}