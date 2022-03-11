import {SvgProps} from '../types'
export function ListOrder({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M7 2H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 6H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 10H16" stroke={color} strokeLinejoin="round"/>
<path d="M7 14H16" stroke={color} strokeLinejoin="round"/>
<path d="M1.5 2H2.5V7M2.5 7H4M2.5 7H1" stroke={color} strokeLinejoin="round"/>
<path d="M1 11V10.6006C1 9.71659 1.71659 9 2.60055 9V9C3.40195 9 4.1082 9.59475 4.08437 10.3958C4.07734 10.6321 4.05317 10.8493 4 11C3.67506 11.9207 2.651 11.7724 2 12.5C1.53056 13.0247 1 14 1 14H4.5" stroke={color} strokeLinejoin="round"/>

</svg>)}