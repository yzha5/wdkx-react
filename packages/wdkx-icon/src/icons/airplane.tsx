import {SvgProps} from '../types'
export function Airplane({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M1.5 7.5L0.5 8L1.5 8.5L0.5 11H1.5L3.5 9H7L5 15.5H7L11 9H14.5C15.0523 9 15.5 8.55229 15.5 8C15.5 7.44772 15.0523 7 14.5 7H11L7 0.5H5L7 7H3.5L1.5 5H0.5L1.5 7.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}