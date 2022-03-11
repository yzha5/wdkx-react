import {SvgProps} from '../types'
export function Tab({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 1.5C0.5 0.947715 0.947715 0.5 1.5 0.5H3C3.55228 0.5 4 0.947715 4 1.5V2C4 2.55228 4.44772 3 5 3H14.5C15.0523 3 15.5 3.44772 15.5 4V14.5C15.5 15.0523 15.0523 15.5 14.5 15.5H1.5C0.947715 15.5 0.5 15.0523 0.5 14.5V1.5Z" stroke={color} strokeLinejoin="round"/>
<rect x="6" y="0.5" width="3" height="1" rx="0.5" stroke={color} strokeLinejoin="round"/>
<rect x="11.5" y="0.5" width="3" height="1" rx="0.5" stroke={color} strokeLinejoin="round"/>

</svg>)}