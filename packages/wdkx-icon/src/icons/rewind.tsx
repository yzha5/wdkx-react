import {SvgProps} from '../types'
export function Rewind({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fillRule="evenodd" clipRule="evenodd" d="M15 13V3L8 8L15 13Z" stroke={color} strokeLinejoin="round"/>
<path fillRule="evenodd" clipRule="evenodd" d="M8 13V3L1 8L8 13Z" stroke={color} strokeLinejoin="round"/>

</svg>)}