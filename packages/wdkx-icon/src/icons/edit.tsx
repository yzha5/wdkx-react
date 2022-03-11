import {SvgProps} from '../types'
export function Edit({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M9 3L11.5 0.5L15.5 4.5L13 7M9 3L0.5 11.5V15.5H4.5L13 7M9 3L13 7" stroke={color} strokeLinejoin="round"/>
<path d="M10 15.5H16" stroke={color} strokeLinejoin="round"/>

</svg>)}