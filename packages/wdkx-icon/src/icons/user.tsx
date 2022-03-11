import {SvgProps} from '../types'
export function User({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="3.5" r="3" stroke={color} strokeLinejoin="round"/>
<path d="M0.5 14.5C0.5 11.1863 3.18629 8.5 6.5 8.5H9.5C12.8137 8.5 15.5 11.1863 15.5 14.5V15.5H0.5V14.5Z" stroke={color} strokeLinejoin="round"/>

</svg>)}