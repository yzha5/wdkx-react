import {SvgProps} from '../types'
export function Scan({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V5.5M0.5 10.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H5.5M15.5 10.5V13.5C15.5 14.6046 14.6046 15.5 13.5 15.5H10.5M10.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V5.5" stroke={color} strokeLinejoin="round"/>
<path d="M4 8H12" stroke={color} strokeLinejoin="round"/>

</svg>)}