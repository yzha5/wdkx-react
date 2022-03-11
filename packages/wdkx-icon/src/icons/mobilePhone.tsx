import {SvgProps} from '../types'
export function MobilePhone({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<rect x="4" y="0.5" width="8" height="15" rx="1" stroke={color} strokeLinejoin="round"/>
<path d="M7 2H9M7.5 14H8.5" stroke={color} strokeLinejoin="round"/>

</svg>)}