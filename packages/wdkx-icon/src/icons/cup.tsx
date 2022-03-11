import {SvgProps} from '../types'
export function Cup({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M11.5 7.23077V5.5H0.5V12.5C0.5 13.6046 1.39543 14.5 2.5 14.5H9.5C10.6046 14.5 11.5 13.6046 11.5 12.5V12.0769M11.5 7.23077H13.7374C14.7109 7.23077 15.5 8.0199 15.5 8.99334V8.99334C15.5 10.1976 14.6861 11.2497 13.5205 11.5524L11.5 12.0769M11.5 7.23077V12.0769M6 4V1M3 4V1M9 4V1" stroke={color} strokeLinejoin="round"/>

</svg>)}