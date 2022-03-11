import {SvgProps} from '../types'
export function Stool({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M4 0.5H6M12 0.5H10M6 0.5H10M6 0.5L5 8M4 15.5L5 8M10 0.5L11 8M12 15.5L11 8M5 8H11" stroke={color} strokeLinejoin="round"/>

</svg>)}