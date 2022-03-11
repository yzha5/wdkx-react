import {SvgProps} from '../types'
export function Bike({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="2.5" cy="9.5" r="2" stroke={color} strokeLinejoin="round"/>
<circle cx="13.5" cy="9.5" r="2" stroke={color} strokeLinejoin="round"/>
<path d="M2.5 9.5L4.40909 6M3.5 5.5H3.25C2.83579 5.5 2.5 5.16421 2.5 4.75V4.75C2.5 4.33579 2.83579 4 3.25 4H5.5L4.40909 6M10 6L13.5 9.5H8M10 6H4.40909M10 6L8 9.5M10 6L11 4M4.40909 6L8 9.5M12.5 4H9.5" stroke={color} strokeLinejoin="round"/>

</svg>)}