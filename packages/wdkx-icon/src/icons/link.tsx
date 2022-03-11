import {SvgProps} from '../types'
export function Link({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M6 10.5H3C1.61929 10.5 0.5 9.38071 0.5 8V8C0.5 6.61929 1.61929 5.5 3 5.5H6M10 10.5H13C14.3807 10.5 15.5 9.38071 15.5 8V8C15.5 6.61929 14.3807 5.5 13 5.5H10" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 8H12.5" stroke={color} strokeLinejoin="round"/>

</svg>)}