import {SvgProps} from '../types'
export function Innisfree({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M15.5 0.5L0.5 15.5" stroke={color} strokeLinejoin="round"/>
<path d="M11 5H14.5M9 7H14M7 9H13" stroke={color} strokeLinejoin="round"/>
<path d="M5.5 4.5C3.80781 6.96136 4 12 4 12C4 12 9.03864 12.1922 11.5 10.5C14.966 8.11714 15.5 0.5 15.5 0.5C15.5 0.5 7.88286 1.03402 5.5 4.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}