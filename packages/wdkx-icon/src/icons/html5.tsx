import {SvgProps} from '../types'
export function Html5({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule="evenodd" clipRule="evenodd" d="M8 15.5L14.5 13.5L15.5 0.5H0.5L1.5 13.5L8 15.5Z" stroke={color} strokeLinejoin="round"/>
<path d="M11.75 3.5H4.75V7H11.25V10L8.25 11L4.75 10V8.5" stroke={color} strokeLinejoin="round"/>

</svg>)}