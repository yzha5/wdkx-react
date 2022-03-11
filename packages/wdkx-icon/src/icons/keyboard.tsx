import {SvgProps} from '../types'
export function Keyboard({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="5.5" width="15" height="8" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M12 5.5C12 5.5 12.2308 4.53842 12 4C11.7824 3.49237 11.3144 3.45408 11 3C10.7515 2.64101 10.5 2 10.5 2" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 12H8M3 7H4M10.5 8.5V10H9M9 7H11M8 7H7M6 7H5M2 10H4M12 7H14M12 9H14M12 11H14M5 9H7.5M6 10.5H8M9 12H10.5" stroke={color} strokeLinejoin="round"/>

</svg>)}