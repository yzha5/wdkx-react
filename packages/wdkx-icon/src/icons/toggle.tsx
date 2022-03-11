import {SvgProps} from '../types'
export function Toggle({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M11.5 4H4.5C2.29086 4 0.5 5.79086 0.5 8C0.5 10.2091 2.29086 12 4.5 12H11.5C13.7091 12 15.5 10.2091 15.5 8C15.5 5.79086 13.7091 4 11.5 4Z" stroke={color} strokeLinejoin="round"/>
<path d="M11.5 10C12.6046 10 13.5 9.10457 13.5 8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8C9.5 9.10457 10.3954 10 11.5 10Z" stroke={color} strokeLinejoin="round"/>

</svg>)}