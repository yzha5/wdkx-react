import {SvgProps} from '../types'
export function Tshirt({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M3 15.5H13V5.5L15.5 6.5V1.5L13 0.5H10C10 0.5 8.87324 1.5 8 1.5C7.12676 1.5 6 0.5 6 0.5H3L0.5 1.5V6.5L3 5.5V15.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}