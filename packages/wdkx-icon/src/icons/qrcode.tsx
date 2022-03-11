import {SvgProps} from '../types'
export function Qrcode({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="0.5" y="0.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M3 3.5H4" stroke={color} strokeLinejoin="round"/>
<rect x="0.5" y="9.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M3 12.5H4" stroke={color} strokeLinejoin="round"/>
<rect x="9.5" y="0.5" width="6" height="6" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M12 3.5H13" stroke={color} strokeLinejoin="round"/>
<path d="M9 9.5H10" stroke={color} strokeLinejoin="round"/>
<path d="M12 9.5H15.5V13" stroke={color} strokeLinejoin="round"/>
<path d="M16 15.5H12" stroke={color} strokeLinejoin="round"/>
<path d="M9.5 16V12.5H13" stroke={color} strokeLinejoin="round"/>

</svg>)}