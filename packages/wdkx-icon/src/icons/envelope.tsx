import {SvgProps} from '../types'
export function Envelope({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M0.5 5.5V11C0.5 12.1046 1.39543 13 2.5 13H13.5C14.6046 13 15.5 12.1046 15.5 11V5.5M0.5 5.5V5C0.5 3.89543 1.39543 3 2.5 3H13.5C14.6046 3 15.5 3.89543 15.5 5V5.5M0.5 5.5L7.60777 6.92155C7.86669 6.97334 8.13331 6.97334 8.39223 6.92155L15.5 5.5" stroke={color} strokeLinejoin="round"/>

</svg>)}