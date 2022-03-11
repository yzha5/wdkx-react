import {SvgProps} from '../types'
export function Loading({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0 8H4" stroke={color} strokeLinejoin="round"/>
<path d="M12 8H16" stroke={color} strokeLinejoin="round"/>
<path d="M8 0V4" stroke={color} strokeLinejoin="round"/>
<path d="M8 12V16" stroke={color} strokeLinejoin="round"/>
<path d="M2.34315 13.6567L5.17157 10.8283" stroke={color} strokeLinejoin="round"/>
<path d="M10.8284 5.17163L13.6569 2.3432" stroke={color} strokeLinejoin="round"/>
<path d="M2.34315 2.34326L5.17157 5.17169" stroke={color} strokeLinejoin="round"/>
<path d="M10.8284 10.8284L13.6569 13.6568" stroke={color} strokeLinejoin="round"/>

</svg>)}