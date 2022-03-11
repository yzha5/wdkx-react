import {SvgProps} from '../types'
export function Container({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M8 9V15M8 9L15 5M8 9L1 5M8 15L15 11V5M8 15L1 11V5M15 5L8 1L1 5" stroke={color} strokeLinejoin="round"/>

</svg>)}