import {SvgProps} from '../types'
export function Breadcrumb({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M9.5 2.5L15 8L9.5 13.5" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 4C0.5 3.44772 0.947715 3 1.5 3H6.5L11.5 8L6.5 13H1.5C0.947715 13 0.5 12.5523 0.5 12V4Z" stroke={color} strokeLinejoin="round"/>

</svg>)}