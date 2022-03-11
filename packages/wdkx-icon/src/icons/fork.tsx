import {SvgProps} from '../types'
export function Fork({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M12.5 0.5L10 3C9.17157 3.82843 9.17157 5.17157 10 6V6C10.8284 6.82843 12.1716 6.82843 13 6L15.5 3.5" stroke={color} strokeLinejoin="round"/>
<path d="M14 2L10 6" stroke={color} strokeLinejoin="round"/>
<path d="M1.02696 14.0285L10 6L1.9715 14.973C1.71544 15.2592 1.27154 15.2715 1 15C0.728462 14.7285 0.740782 14.2846 1.02696 14.0285Z" stroke={color} strokeLinejoin="round"/>

</svg>)}