import {SvgProps} from '../types'
export function Trousers({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M11 0.5H5L2.5 15.5H4.5L8 5L11.5 15.5H13.5L11 0.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}