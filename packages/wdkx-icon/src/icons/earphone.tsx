import {SvgProps} from '../types'
export function Earphone({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M1 10.5C1 9.39543 1.89543 8.5 3 8.5H5V14.5H3C1.89543 14.5 1 13.6046 1 12.5V10.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M11 8.5H13C14.1046 8.5 15 9.39543 15 10.5V12.5C15 13.6046 14.1046 14.5 13 14.5H11V8.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M1 10.5V8.5C1 4.63401 4.13401 1.5 8 1.5V1.5C11.866 1.5 15 4.63401 15 8.5V10.5" stroke={color} strokeLinejoin="round"/>

</svg>)}