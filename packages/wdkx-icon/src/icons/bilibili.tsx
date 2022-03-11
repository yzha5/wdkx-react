import {SvgProps} from '../types'
export function Bilibili({color = 'currentColor', size = '100%'}:SvgProps) {
return (<svg width={size} height={size} viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d="M13.5 4H2.5C1.39543 4 0.5 4.89543 0.5 6V12C0.5 13.1046 1.39543 14 2.5 14H13.5C14.6046 14 15.5 13.1046 15.5 12V6C15.5 4.89543 14.6046 4 13.5 4Z" stroke={color} strokeLinejoin="round"/>
<path d="M6 8C6 7.72386 5.77614 7.5 5.5 7.5C5.22386 7.5 5 7.72386 5 8V9C5 9.27614 5.22386 9.5 5.5 9.5C5.77614 9.5 6 9.27614 6 9V8Z" stroke={color} strokeLinejoin="round"/>
<path d="M11 8C11 7.72386 10.7761 7.5 10.5 7.5C10.2239 7.5 10 7.72386 10 8V9C10 9.27614 10.2239 9.5 10.5 9.5C10.7761 9.5 11 9.27614 11 9V8Z" stroke={color} strokeLinejoin="round"/>
<path d="M3.5 1.5L6 4" stroke={color} strokeLinejoin="round"/>
<path d="M10 4L12.5 1.5" stroke={color} strokeLinejoin="round"/>

</svg>)}