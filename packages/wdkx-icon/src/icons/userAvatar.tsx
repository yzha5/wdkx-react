import {SvgProps} from '../types'
export function UserAvatar({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<circle cx="8" cy="8" r="7.5" stroke={color} strokeLinejoin="round"/>
<circle cx="8" cy="5" r="2" stroke={color} strokeLinejoin="round"/>
<path d="M14.0635 12.5C12.8532 10.4077 10.591 9 8 9C5.40901 9 3.14681 10.4077 1.93647 12.5" stroke={color} strokeLinejoin="round"/>

</svg>)}