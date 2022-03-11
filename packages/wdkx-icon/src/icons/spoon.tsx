import {SvgProps} from '../types'
export function Spoon({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M10 3L11 2C11.8284 1.17157 13.1716 1.17157 14 2C14.8284 2.82843 14.8284 4.17157 14 5L13 6C12.1716 6.82843 10.8284 6.82843 10 6C9.17157 5.17157 9.17157 3.82843 10 3Z" fill={color} stroke={color} strokeLinejoin="round"/>
<path d="M1.02696 14.0285L10 6L1.9715 14.973C1.71544 15.2592 1.27154 15.2715 1 15C0.728462 14.7285 0.740782 14.2846 1.02696 14.0285Z" stroke={color} strokeLinejoin="round"/>

</svg>)}